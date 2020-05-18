Vue.component('campaign-settings', {
	template: `
		<div id="campaign-settings">
			<h2 class="d-block d-md-none mb-4">Параметры кампании</h2>

			<div class="accordion" id="settingsAccordion">
				<div class="card" v-for="(questions, sectionName, index) in contents">
					<div class="card-header" :id="'heading-' + index">
						<h3 class="mb-0">
							<button class="btn" type="button" data-toggle="collapse" 
									:data-target="'#collapse-' + index" 
									:aria-expanded="!index?true:false" 
									:aria-controls="'collapse-' + index">
								{{sectionName}}
							</button>
						</h3>
					</div>

					<div :id="'collapse-' + index" 
						 :class="!index ? 'collapse show': 'collapse'" 
						 :aria-labelledby="'heading-' + index" 
						 data-parent="#settingsAccordion">
						<div class="card-body" v-bind:style="{height: accordionSectionHeight + 'px', 
							overflow: 'overlay'}">
							<div v-for="(question, questionId) in questions" class="question">
								<p class="fieldName h5">{{question.name}}</p>
								
								<div class="form-group" v-if="question.options">
									<div v-for="(label, value) in question.options" class="form-check">
										<input :type="question.type" class="form-check-input" 
											:id="value" :value="value"
											:disabled="disabledOptions[sectionName][questionId].includes(value)" 
											v-model="campaign[questionId]">
										<label :for="value" class="form-check-label">{{label}}</label>
									</div>
								</div>
							</div>
						</div>	
					</div>
				</div>
			</div>	
		</div>
	`,
	data: function () {
		return {
			contents: campaignSettings,
			windowHeight: 700
		}
	},
	methods: {
		handleResize: function () {
			this.windowHeight = window.innerHeight
		}
	},
	computed: {
		disabledOptions: function () {
			return mapObjectLevel(campaignSettings, 2, (field) =>
				!field.disable ? [] :
					Object.keys(field.disable).reduce((targetArr, condition) =>
						dotSyntaxConditionIsTrue(condition, this.campaign) ?
							[...targetArr, ...field.disable[condition]] :
							targetArr
						, [])
			)
		},
		accordionSectionHeight: function () {
			return Math.min(this.windowHeight - 48 - 63 * Object.keys(this.contents).length, 600)
		}
	},
	props: ['campaign'],
	mounted: function () {
		this.handleResize()
		window.addEventListener('resize', this.handleResize)
	}
})

Vue.component('results', {
	template: `
		<div id="results">
			<h2 class="d-block d-md-none mt-5 mb-4">Результаты</h2>
			<div class="section mb-5" v-for="(fields, sectionName) in results">
				<h3 class="sectionName mb-3">{{sectionName}}</h3>
				<div class="field card mb-3" v-for="(field, fieldName) in fields">
					<div class="card-header">
						<p class="fieldName card-title h5 mb-0">{{fieldName}}</p>
					</div>
					<ul class="list-group list-group-flush">
						
						<li v-if="typeof field['value'] == 'boolean'" 
							class="list-group-item fieldValue">
							<input type="checkbox" :checked="field['value']" onclick="return false;">
						</li>

						<li v-else
							class="list-group-item fieldValue">
							<div v-if="!field['value']" class="text-muted">Оставляем пустым</div>
							<div v-else v-html="field['value']"></div>
						</li>

						<li v-for="comment in field['comments']"
							class="list-group-item text-muted fieldComment" 
							v-html="comment">
						</li>

					</ul>
				</div>
			</div>
		</div>
	`,
	computed: {
		results: function () {
			return mapObjectLevel(rules, 2, fieldRules => {
				function Answer(value = '', comments = []) {
					this.addComments = (input) => {
						let result = Array.isArray(input) ? input : [input]
						result = result.filter(comment =>
							typeof comment == 'string' && comment.length)
						this.comments && (this.comments = [...this.comments, ...result])
						return result
					}
					this.appendToValue = (input) => {
						typeof this.value == 'string' && typeof input == 'string' ?
							this.value += input :
							this.value = input
					}
					this.beautify = (campaign) => {
						if (typeof answer.value == 'string') {
							if (this.value.includes('</')) {
								this.value = this.value.replace(/&/g, '&amp;')
									.replace(/</g, '&lt;')
									.replace(/ {2,}/g, '')
									.replace(/\t+/g, '\t')
								this.value = `<pre><code>${this.value}</code></pre>`
							} else {
								this.value = this.value.replace(/\n/g, '</br>')
							}
							let rewardUnit
							switch(campaign.rewardUnit) {
								case 'rubles':
									rewardUnit = ' ₽'
									break
								case 'rublesPerItem':
									rewardUnit = ' ₽ за шт.'
									break
								default:
									rewardUnit = '%'
							} 
							this.value = this.value.replace(/{/g, '<mark><span class="copy-only">{=====</span>')
								.replace(/}/g, '<span class="copy-only">=====}</span></mark>')
								.replace(/\[milestone\]/g, campaign.milestoneUnit == 'amount' ? 'X шт.' : 'на X ₽')
								.replace(/\[rewardUnit\]/g, rewardUnit)
						}
						this.comments = this.comments.map(c => c.replace(/\n/g, '</br>'))  
					}
					this.value = value
					this.comments = this.addComments(comments)
				}

				const parseRule = (rule) => {

					const isTrue = (condition) => {
						if (condition == '_else') {
							return true
						} else if (condition.includes('_c')) {
							let checkFn = new Function('_c', `return ${condition}`)
							return checkFn(this.campaign)
						} else if (condition.includes('.')) {
							return dotSyntaxConditionIsTrue(condition, this.campaign)
						} else {
							alert(`Некорректный формат условия: ${condition}`)
						}
					}

					const parseRuleObj = () => {
						rule._comment && answer.addComments(rule._comment)
						rule._value && answer.appendToValue(rule._value)
						let conditions = Object.keys(rule).filter(k => k != '_comment' && k != '_value')
						for (let condition of conditions) {
							if (isTrue(condition)) {
								parseRule(rule[condition])
								break
							}
						}
					}

					return (rule instanceof Object) ?
						parseRuleObj() :
						answer.appendToValue(rule)
				}

				var answer = new Answer()
				!Array.isArray(fieldRules) && (fieldRules = [fieldRules])
				fieldRules.forEach(rule => parseRule(rule))
				answer.beautify(this.campaign)
				return answer
			})
		}
	},
	props: ['campaign']
})

var app = new Vue({
	el: '#app',
	data: {
		campaign: {}
	},
	created: function () {
		const defaultCampaign = mapObjectLevel(campaignSettings, 2, field => {
			const defaults = {
				radio: () => Object.keys(field.options)[0],
				checkbox: () => []
			}
			return defaults[field.type]()
		})
		this.campaign = flattenObject(defaultCampaign)
	}
})

function mapObjectLevel(obj, level, mapFn) {
	return Object.keys(obj).reduce((targetObj, key) => {
		const isTargetLevel = !(level - 1)

		let result = value =>
			isTargetLevel ? mapFn(value) :
				(value instanceof Object) ? mapObjectLevel(obj[key], level - 1, mapFn) :
					value

		return { ...targetObj, [key]: result(obj[key]) }
	}, {})
}

function flattenObject(obj) {
	return Object.keys(obj).reduce((targetObj, key) => {
		let value = obj[key]
		let newObj = (value instanceof Object && !Array.isArray(value)) ?
			flattenObject(value) :
			{ [key]: value }
		return Object.assign({}, targetObj, newObj)
	}, {})
}

function dotSyntaxConditionIsTrue(condition, data) {
	let [conditionField, conditionValue] = condition.split('.')
	let dataValue = data[conditionField]
	return Array.isArray(dataValue) ?
		dataValue.includes(conditionValue) :
		dataValue == conditionValue
}