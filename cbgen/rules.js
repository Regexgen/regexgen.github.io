const rules = {

	'Общие поля': {
		'Название': [
			{
				'cashbackFor.sku': {
					'skuFeatures.bundle': {
						_value: '{Соус Помидорка} + {Любые спагетти}',
						_comment: 'Оба товара в смотке пишем с заглавной буквы'
					},
					_else: '{Соус Помидорка}',
                    _comment: `Вес, вкус, упаковку, объем по возможности указываем прямо в названии.
                                Говорим живым языком, например, «Любое пиво» вместо «Пиво любое».
                                Кавычки в маленькой карточке не ставим, но есть ${wikiLink('исключения', 'texts/#quotemarks')}.
                                ${wikiLink('Правила написания брендов', 'texts/#brandnames')}`
                },
                'skuFeatures.minSum': 'Купите',
				_else: 'Сделайте любую покупку'
			},
			{
				'_c.retailer.includes("chosen")': ' в {Пятёрочке}'
            },
            {
                '_c.skuFeatures.includes("minSum") && _c.cashbackFor == "receipt"':  ' на сумму от {250} ₽'
            }
		],

		'Вознаграждение': {
			'rewardType.coupon': 'Купон на скидку до {200} ₽',
			"_c.accumulationType == 'milestones' || _c.rewardDependsOn != 'nothing'": 'Кэшбэк до {50}[rewardUnit]',
			'accumulationType.paws': {
				_value: '{Пятая} бесплатно',
				_comment: 'Выбираем род в зависимости от вида товара: пятая, пятый, пятое'
			},
			_else: 'Кэшбэк {30}[rewardUnit]'
		},

		'Вознаграждение (без html тегов)': {
			'rewardType.coupon': 'до {200} ₽',
			"_c.accumulationType == 'milestones' || _c.rewardDependsOn != 'nothing'": 'до {50}[rewardUnit]',
			'accumulationType.paws': '{5-я} бесплатно',
			_else: '{30}[rewardUnit]'
		},

		'Цветовой градиент': {
			'campaignPerks.bonus': {
				_value: `Начальный цвет: #{5384E4}
						Конечный цвет: #{4449E8}`,
				_comment: `Градиент подбирается на основании обложки кэшбэка. 
						   Цвета не должны резко различаться. Конечный цвет темнее начального.`
			},
			_else: ''
		},

		'Ограничить показ: включить': {
			'_c.retailer.includes("chosen")': false,
			_else: true
		},

		'Ограничить показ: где действует': 'Купите в любом магазине'
	},

	'Условия': {
		'Условия': [
            '<ul>\n',
                {
                    'skuFeatures.bundle': '\t<li>Оба товара должны быть в одном чеке</li>\n'
                },
                {
                    'skuFeatures.exclusions': {
                        _value: '\t<li>{Кроме бутылок 6 л и 18,9 л}</li>\n',
                        _comment: `В условиях указываем исключения. Характеристики товара по возможности пишем прямо в названии акции.
                                    Кавычки в маленькой карточке не ставим, но есть ${wikiLink('исключения', 'texts/#quotemarks')}.`
                    }
                },
                {
                    '_c.skuFeatures.includes("minSum") && _c.cashbackFor == "sku"': '\t<li>При покупке на сумму от {150} ₽ в чеке</li>\n'
                },
                {
                    'skuFeatures.minQuantity': {
                        _value: '\t<li>От {3 бутылок} в чеке</li>\n',
                        _comment: 'Где уместно, вместо «шт.» пишем более конкретное «бутылок», «банок» и т.п.'
                    }
                },
                {
                    'rewardDependsOn.quantity': {
                        'rewardUnit.rublesPerItem': `\t<li>{1 банка — 10} ₽</li>
                                \t<li>От {2 банок — 12,50 ₽} за каждую</li>\n`,
                        _else: `\t<li>{1 банка — 10}[rewardUnit]</li>
                                \t<li>От {2 банок — 12,50}[rewardUnit]</li>\n`,
                        _comment: 'От меньшего вознаграждения к большему.'
                    }
                },
                {
                    'rewardDependsOn.sum': {
                        _value: `\t<li>При покупке на сумму до {300 ₽} в чеке — {10}[rewardUnit]</li>
                        \t<li>От {301 ₽ — 15}[rewardUnit]</li>\n`,
                        _comment: 'От меньшего вознаграждения к большему.'
                    }
                },
                {
                    'rewardDependsOn.purchaseNumber': `\t<li>На первую покупку — {15}[rewardUnit]</li>
                        \t<li>На следующие — {10}[rewardUnit]</li>\n`
                },
                {
                    '_c.retailer == "chosenWithConsolation" && _c.promoPrices == "promoConsolation"': {
                        _value: `\t<li class="small">При покупке в других сетях или со скидкой в {Перекрестке — 1%}</li>
                                \t<li class="big">При покупке в других сетях или со скидкой в {Перекрестке (до 55 ₽ за шт.) — 1%}</li>\n`,
                        _comment: `Кавычки в маленькой карточке не ставим, но есть ${wikiLink('исключения', 'texts/#quotemarks')}.`
                    },
                    '_c.retailer == "chosenWithConsolation" && _c.promoPrices == "promoConsolationSeveral"': {
                        _value: '\t<li>При покупке в других сетях или со скидкой в {Перекрестке — 1%}</li>\n',
                        _comment: `Кавычки в маленькой карточке не ставим, но есть ${wikiLink('исключения', 'texts/#quotemarks')}.`
                    },
                    'retailer.chosenWithConsolation': '\t<li>В других сетях — {1%}</li>\n',
                    'promoPrices.promoConsolation': `\t<li class="small">При покупке со скидкой — {1%}</li>
                                                    \t<li class="big">При покупке со скидкой (до {55} ₽ за шт.) — {1%}</li>\n`,
                    'promoPrices.promoConsolationSeveral': '\t<li>При покупке со скидкой — {1%}</li>\n'
                },
                {
                    'promoPrices.noPromoSeveral':
                            '\t<li>Кроме товаров со скидкой</li>\n',
                    'promoPrices.noPromo': {
                        '_c.retailer.includes("chosen")': 
                            `\t<li class="small">Кроме товаров со скидкой</li>
                            \t<li class="big">Не начисляется на товары со скидкой: действует при цене от {50} ₽ за шт.</li>\n`,
                        _else: 
                            '\t<li>При покупке по цене от {50} ₽ за шт.</li>\n'
                    }   
                },
                {
                    'retailer.anyExcluding': 
                        `\t<li class="small">Кроме сети «{Магнит}»</li>
                        \t<li class="big">Купите в любом магазине кроме сети «{Магнит}»</li>\n`
                },
                {
                    'skuFeatures.exceptAlcoTobacco': 
                        `\t<li class="small">Кроме табачной и алкогольной продукции»</li>
                        \t<li class="big">В чеке не учитывается стоимость табачной и алкогольной продукции</li>\n`
                },
                {
                    'limits.paymentsSingle': {
                        'rewardType.coupon': '\t<li>Получить купон можно 1 раз</li>\n',
                        '_else': '\t<li>Получить кэшбэк можно 1 раз</li>\n'
                    }
                },
                {
                    'limits.perDaySingle': '\t<li>Засчитывается 1 чек в сутки</li>\n',
                    'limits.perMonthSingle': '\t<li>Засчитывается 1 чек в месяц</li>\n'
                },
                {
                    '_c.rewardDependsOn == "nothing" && _c.retailer != "anyExcluding" && _c.retailer != "chosenWithConsolation" \
                            && _c.limits.every(l => !l.includes("Single")) && _c.promoPrices == "anyPrice" \
                            && (!_c.skuFeatures.length || _c.cashbackFor == "receipt" && _c.skuFeatures.every(f => f == "minSum"))': {
                        'rewardType.money': {
                            'placeholderDescription.assortment': {
                                _value: `\t<li>{Любой вкус/Любой сорт/Любая упаковка/Весь ассортимент}</li>\n`,
                                _comment: `Если уместно, лучше написать «любой» прямо в названии акции. 
                                        Используйте этот вариант, если, например, можно купить любой вкус, но только определенный размер упаковки, или любой подвид в определенной линейке.`
                            },
                            'placeholderDescription.productLineDescription': {
                                _value: `\t<li>{Шоколадный, яблочный, банановый}</li>\n`,
                                _comment: `Кавычки в маленькой карточке не ставим, но есть ${wikiLink('исключения', 'texts/#quotemarks')}.`
                            },
                            _else: {
                                'accumulationType.milestones': '\t<li class="small">Чем больше покупок, тем выше кэшбэк</li>\n',
                                _else: '\t<li class="small">Покупайте, сканируйте чек и получайте кэшбэк</li>\n'
                            }
                        },
                        _else: '\t<li class="small">Покупайте, сканируйте чек и получайте купон</li>\n'
                    }
                },
                {
                    '_c.promoPrices.includes("Several")': {
                        _value: '\t<li class="big" style="color: #999">Ценой со скидкой считается: {пиво светлое 0,5 л и 0,45 л — до 55 ₽, пиво 0% 0,5 л и 0,45 л — до 45 ₽, бочки 5 л — до 900 ₽}</li>\n',
                        _comment: 'В списке промоцен пишем только различающиеся признаки. Например, не надо повторять для каждой цены название марки, если оно уже указано в названии акции.'
                    }
                },
                '\t<li class="big" style="color: #999">',
                    {
                        'limits.payments': {
                            'rewardType.coupon': 'Получайте купон до {3} раз. ',
                            _else: 'Получайте кэшбэк до {5} раз. '
                        }
                    },
                    {
                        'limits.sumPerReceipt': {
                            '_c.accumulationType != "immediate"': 'Засчитывается до {450} ₽ в чеке. ',
                            _else: {
                                'rewardDependsOn.purchaseNumber': 'Кэшбэк не больше {200} ₽ за первый чек, {100} ₽ — за следующие. ',
                                _else: 'Кэшбэк не больше {100} ₽ за чек. '
                            }
                        }
                    },
                    {
                        'limits.amountPerReceipt': 'Засчитывается до {3} шт. в чеке. '
                    },
                    {
                        '_c.accumulationType == "milestones" && _c.rewardUnit == "percents"':
                            'Максимальная выплата — {X} ₽. '
                    },
                    {
                        '_c.limits.includes("perDay") && _c.limits.includes("perMonth")': 'До {3} чеков в сутки, до {12} в месяц. ',
                        'limits.perMonth': 'До {8} чеков в месяц. ',
                        'limits.perDay': 'До {3} чеков в сутки. '
                    },
                'Бюджет акции ограничен</li>\n',
                {
                    'disclaimer.disclaimer': '\t<li class="big" style="color: #999">{Текст дисклеймера, например: Возможны противопоказания. Проконсультируйтесь с врачом.}</li>\n'
                },
			'</ul>'
		]
	},

    'Полные условия': {
        'Условия': [
            {
                'rewardType.money': '<h2>Как получить деньги</h2>\n',
                'rewardType.coupon': '<h2>Как получить купон от «{Пятёрочки}»</h2>\n',
                _comment: `В большой карточке все названия ставим в кавычки. 
                        Исключения:
                        – названия на латинице, 
                        – Едадил и другие сервисы Яндекса (но если перед этим слова «приложение», «сервис» и т.д., то в кавычках)`
            },
            '<ol>\n',
                {
                    'cashbackFor.receipt': '\t<li>Сделайте покупку',
                    'accumulationType.immediate': '\t<li>Купите',
                    _else: '\t<li>Покупайте'
                },
                {
                    'retailer.chosenWithConsolation': ' ',
                    'retailer.anyExcluding': ' в любом магазине кроме сети «{Магнит}» ',
                    '_c.retailer.includes("any")': ' в любом магазине ',
                    _else: ' в любом магазине «{Пятёрочка}» '
                },
                {
                    'cashbackFor.receipt': {
                        'skuFeatures.minSum': 'на сумму от {500} ₽.</li>\n',
                        _else: '.</li>\n'
                    },
                    'accumulationType.immediate': '{подробное описание акционных товаров со всеми критериями, включая минимальное количество}.</li>\n',
                    'accumulationType.milestones': '{подробное описание акционных товаров со всеми критериями}. За покупку {[milestone] получите кэшбэк Y[rewardUnit], [milestone] — Y[rewardUnit], [milestone] — Y[rewardUnit]}. Товары могут быть в одном или нескольких чеках.</li>\n',
                    'accumulationType.paws': '{подробное описание акционных товаров со всеми критериями}. После покупки {N шт./упаковок} получите назад среднюю стоимость одной штуки. Товары могут быть в одном или нескольких чеках.</li>\n'
                },
                `\t<li>Сохраните чек.</li>
                \t<li>Нажмите на кнопку сканирования в приложении «Едадил». Отсканируйте чек в течение 3 часов после покупки наличными или за 24 часа при оплате картой.</li>\n`,
                {
                    '_c.accumulationType != "immediate"': '\t<li>Мы засчитаем покупку после проверки чека.</li>\n'
                },
                {
                    'rewardType.money': {
                        'accumulationType.immediate': '\t<li>Дождитесь начисления кэшбэка и переведите средства на телефон или кошелек в Яндекс.Деньгах.</li>\n',
                        'accumulationType.milestones': '\t<li>Забирайте кэшбэк, когда накопите нужную сумму. Переведите средства со счета на телефон или кошелек в Яндекс.Деньгах.</li>\n',
                        'accumulationType.paws': '\t<li>После покупки N штук дождитесь начисления кэшбэка. Переведите средства со счета на телефон или кошелек в Яндекс.Деньгах.</li>\n'
                    },
                    'rewardType.coupon': {
                        'accumulationType.milestones': '\t<li>Забирайте купон, когда накопите нужную сумму. Он появится в <a href="edadeal://wallet">разделе «Купоны»</a>.</li>\n',
                        'accumulationType.paws': {
                            _value: '\t<li>Купон появится в <a href="edadeal://wallet">разделе «Купоны»</a>{, когда вы накопите X покупок}.</li>\n',
                            _comment: 'Если одна лапка, то вместо «когда вы накопите X покупок» пишем «после проверки чека».'
                        }
                    }
                },
            `</ol>`
        ]
    },
    
    'Полные (юридические) условия': {
        'Контент блока': [
            {
                _value: `<h2>Расчет вознаграждения</h2>
                        <ul>\n`,
                _comment: 'Тут не весь блок, а только изменяемая часть с заголовком «Расчет вознаграждения»'
            },
            '\t<li>При покупке ',
            {
                'accumulationType.immediate': '{подробное описание акционных товаров со всеми критериями, включая минимальное количество} кэшбэк составит {X[rewardUnit]}.</li>\n',
                'accumulationType.paws': '{5 упаковок} {подробное описание акционных товаров со всеми критериями} кэшбэк составит 100% от средней стоимости одной упаковки.</li>\n',
                '_c.accumulationType == "milestones" && _c.milestoneUnit == "rub"': '{подробное описание акционных товаров со всеми критериями} на сумму {[milestone] кэшбэк составит Y[rewardUnit], [milestone] — Y[rewardUnit], [milestone] — Y[rewardUnit]}.</li>\n',
                _else: '{подробное описание акционных товаров со всеми критериями} в количестве {[milestone] кэшбэк составит Y[rewardUnit], [milestone] — Y[rewardUnit], [milestone] — Y[rewardUnit]}.</li>\n',
            },
            {
                '_c.retailer == "chosenWithConsolation" && _c.promoPrices == "promoConsolation"': 
                    '\t<li>При покупке в других магазинах или со скидкой в {Перекрестке (до 55 ₽ за шт.)} кэшбэк составит {1%}.</li>\n',
                '_c.retailer == "chosenWithConsolation" && _c.promoPrices == "promoConsolationSeveral"': 
                    `\t<li>При покупке в других сетях или со скидкой в {Перекрестке} кэшбэк составит {1%}.</li>
                    \t<li>Ценой со скидкой считается: {пиво светлое 0,5 л и 0,45 л — до 55 ₽, пиво 0% 0,5 л и 0,45 л — до 45 ₽, бочки 5 л — до 900 ₽}</li>\n`,
                'retailer.chosenWithConsolation': '\t<li>При покупке в других сетях кэшбэк составит {1%}.</li>\n',
                'promoPrices.promoConsolation': '\t<li>При покупке со скидкой (до {55} ₽ за шт.) кэшбэк составит {1%}.</li>\n',
                'promoPrices.promoConsolationSeveral': '\t<li>При покупке со скидкой кэшбэк составит {1%}.</li>\n'
            },
            {
                '_c.accumulationType != "immediate"': '\t<li>Покупки можно совершить несколькими чеками в период действия акции.</li>\n'
            },
            {
                'limits.paymentsSingle': {
                    'rewardType.coupon': '\t<li>Получить купон можно 1 раз.</li>\n',
                    '_else': '\t<li>Получить кэшбэк можно 1 раз.</li>\n'
                }
            },
            {
                'limits.perDaySingle': '\t<li>Засчитывается 1 чек в сутки.</li>\n',
                'limits.perMonthSingle': '\t<li>Засчитывается 1 чек в месяц.</li>\n'
            },
            {
                'limits.payments': {
                    'rewardType.coupon': '\t<li>Получайте купон до {3} раз.</li>\n',
                    _else: '\t<li>Получайте кэшбэк до {5} раз.</li>\n'
                }
            },
            {
                'limits.sumPerReceipt': {
                    '_c.accumulationType != "immediate"': '\t<li>Засчитывается до {450} ₽ в чеке.</li>\n',
                    _else: {
                        'rewardDependsOn.purchaseNumber': '\t<li>Кэшбэк не больше {200} ₽ за первый чек, {100} ₽ — за следующие.</li>\n',
                        _else: '\t<li>Кэшбэк не больше {100} ₽ за чек.</li>\n'
                    }
                }
            },
            {
                'limits.amountPerReceipt': '\t<li>Засчитывается до {3} шт. в чеке.</li>\n'
            },
			 {
				'_c.accumulationType == "milestones" && _c.rewardUnit == "percents"':'\t<li>Максимальная выплата — {X} ₽.</li>\n'
			},
            {
                '_c.limits.includes("perDay") && _c.limits.includes("perMonth")': '\t<li>До {3} чеков в сутки, до {12} в месяц.</li>\n',
                'limits.perMonth': '\t<li>До {8} чеков в месяц.</li>\n',
                'limits.perDay': '\t<li>До {3} чеков в сутки.</li>\n'
            },
            '\t<li>Бюджет акции ограничен.</li>\n',
            '</ul>'
        ]
    },

    'Ритейлер купона': {
        'Контент блока': [
			{   
                'rewardType.coupon': {
                    'cashbackFor.sku': {
                        'skuFeatures.bundle': {
                            _value: 'За покупку {соуса Помидорка} + {любых спагетти}'
                        },
                        _else: 'За покупку {соуса Помидорка}'
                    },
                    'skuFeatures.minSum': 'За покупку',
                    _else: 'За любую покупку',
                    _comment: 'Этот текст отображается вместо названия кампании на маленькой карточке купонной кампании.'
                }
			},
			{
				'_c.rewardType == "coupon" && _c.retailer.includes("chosen")': ' в {Пятёрочке}'
            },
            {
                '_c.rewardType == "coupon" && _c.skuFeatures.includes("minSum") && _c.cashbackFor == "receipt"':  ' на сумму от {250} ₽'
            }
		]
    },

    'Условия получения купона': {
        'Контент блока': [
            {
                'rewardType.coupon': `<h2>Как использовать купон</h2>
                                      <ul>
                                      \t<li>`
            },
            {
                'rewardType.coupon': {
                    'accumulationType.milestones': 'Забирайте купон, когда накопите нужную сумму. Он появится в разделе «Купоны».',
                    'accumulationType.paws': {
                        _value: 'Купон появится в разделе «Купоны»{, когда вы накопите X покупок}.',
                        _comment: 'Если одна лапка, то вместо «когда вы накопите X покупок» пишем «после проверки чека».'
                    }
                }
            },
            {
                'rewardType.coupon': ` Покажите купон кассиру в «{Пятёрочке}» перед покупкой.</li>
                                      </ul>`
            }
        ]
    },

    'Блок BTL': {
        'Gift URL': {
            '_c.campaignPerks.some(p => p.includes("btl"))': '{Адрес лендинга}'
        },
        'Текст кнопки': {
            '_c.campaignPerks.some(p => p.includes("btl"))': 'Узнать больше'
        },
        'Условия BTL': {
            '_c.campaignPerks.some(p => p.includes("btl"))': {
                'campaignPerks.btlOneTwo': `<ol>
                                        \t<li>Отсканируйте хотя бы один чек по этой акции.</li>
                                        \t<li>Получите шанс выиграть {ежедневный приз 1000 бонусных баллов (1 балл = 1₽)}.</li>
                                        \t<li>{100 самых активных участников получат сертификат на 5000 ₽ на покупки в Спортмаcтере}.</li>
                                        </ol>`,
                'campaignPerks.btlMany': `Отсканируйте хотя бы один чек по этой акции и получите шанс выиграть:
                                        <ol>
                                        \t<li>{ежедневно сертификат на 3000 ₽ на покупки в Спортмаcтере или Ozon},</li>
                                        \t<li>{каждую неделю 10 000 бонусных баллов (1 балл = 1 ₽)},</li>
                                        \t<li>{главный приз по итогам акции — 100 000 бонусных баллов}.</li>
                                        </ol>`,
                _comment: `Не используем сноски.
                        Не употребляем слова «рубли», «розыгрыш», «лотерея», так как юридически это стимулирующее мероприятие и мы выдаем не деньги, а бонусы.`
            }
        },
        'Описание подарочного BTL': {
            '_c.campaignPerks.some(p => p.includes("btl"))': {
                _value: '{Ежедневный приз 1000 бонусных баллов (1 балл = 1 ₽) и главный приз — автомобиль Škoda Rapid}',
                _comment: `Это текст для маленькой карточки, пишем кратко:
                        – если несколько денежных призов, указываем только максимальный,
                        – если много разнотипных призов, указываем только самые привлекательные.`
            }
        } 
    },

    'Блок дополнительных вознаграждений': {
        'Текст бэйджа': {
            '_c.retailer.includes("Bonus")': '<div class="bun__badge">Бонус {5}%</div>\n'
        },
        'Полные условия': {
			'_c.retailer.includes("Bonus")': {
				'retailer.anyWithBonusOne': `<div class="bun">
                                        \t<img src="https://leonardo.edadeal.io/dyn/re/retailers/images/icons/sq/ret_{id}.png">
                                        \t<div class="bun__title">Дополнительный кэшбэк {5}%</div>
                                        \t<div class="bun__description">При покупке в сети «{Магнит}».</div>
                                        </div>
										`,
				'retailer.anyWithBonusSeveral': `<div class="bun">
                                        \t<img src="https://leonardo.edadeal.io/dyn/re/retailers/images/icons/sq/ret_{id}.png">
                                        \t<img src="https://leonardo.edadeal.io/dyn/re/retailers/images/icons/sq/ret_{id}.png">
                                        \t<img src="https://leonardo.edadeal.io/dyn/re/retailers/images/icons/sq/ret_{id}.png">
                                        \t<div class="bun__title">Дополнительный кэшбэк {5}%</div>
                                        \t<div class="bun__description">При покупке в сетях {«Магнит», «Пятёрочка» или «Дикси»}.</div>
                                        </div>
										`,
				_comment: `${wikiLink('Логотипы', 'cashback-product/cashbackcontent/Logotipy/')}`
			}
        }
		
    }

}

function wikiLink(text, relPath) {
	const rootPath = 'https://wiki.yandex-team.ru/edadeal/'
	return `<a href='${rootPath + relPath}' target='_blank'>${text}</a>`
}
