const campaignSettings = {
    'Тип кампании': {
        accumulationType: {
            name: 'Механика накопления',
            type: 'radio',
            options: {
                immediate: 'Мгновенная',
                milestones: 'Майлстоуны',
                paws: 'Лапки'
            },
            disable: {
                'campaignPerks.bonus': ['milestones', 'paws'],
                'skuFeatures.bundle': ['milestones', 'paws'],
                'skuFeatures.minQuantity': ['milestones', 'paws'],
                'rewardUnit.rublesPerItem': ['milestones', 'paws'],
                'rewardDependsOn.quantity': ['milestones', 'paws'],
                'rewardDependsOn.sum': ['milestones', 'paws'],
                'rewardDependsOn.purchaseNumber': ['milestones', 'paws'],
                'rewardType.coupon': ['immediate']
            }
        },
        milestoneUnit: {
            name: 'Тип майлстоунов',
            type: 'radio',
            options: {
                rub: 'Рубли',
                amount: 'Штуки'
            },
            disable: {
                'accumulationType.immediate': ['rub', 'amount'],
                'accumulationType.paws': ['rub', 'amount']
            }
        },
        campaignPerks: {
            name: 'Опции',
            type: 'checkbox',
            options: {
                btlOneTwo: 'BTL с 1–2 призами',
                btlMany: 'BTL с 3+ призами',
                bonus: 'Бонусная акция для Я в магазине'
            },
            disable: {
                'accumulationType.milestones': ['bonus'],
                'accumulationType.paws': ['bonus'],
                'campaignPerks.btlOneTwo': ['btlMany'],
                'campaignPerks.btlMany': ['btlOneTwo']
            }
        }
    },
    'Где покупаем': {
        retailer: {
            name: 'Выплачиваем при покупке',
            type: 'radio',
            options: {
                any: 'в любом магазине',
                chosen: 'в определенной сети',
                anyExcluding: 'в любом кроме исключений',
                anyWithBonusOne: 'в любом + допплюшка в 1 сети',
                anyWithBonusSeveral: 'в любом + допплюшка в нескольких сетях',
                chosenWithConsolation: 'в определенной + утешительный КБ в других'
            },
            disable: {
                'cashbackFor.receipt': ['any', 'anyExcluding', 'anyWithBonusOne', 'anyWithBonusSeveral', 'chosenWithConsolation']
            }
        }
    },
    'Что покупаем': {
        cashbackFor: {
            name: 'Начисляем на',
            type: 'radio',
            options: {
                sku: 'Конкретный товар',
                receipt: 'Весь чек'
            },
            disable: {
                'skuFeatures.exclusions': ['receipt'],
                'skuFeatures.bundle': ['receipt'],
                'skuFeatures.minQuantity': ['receipt'],
                'promoPrices.noPromo': ['receipt'],
                'promoPrices.promoConsolation': ['receipt'],
                'promoPrices.noPromoSeveral': ['receipt'],
                'promoPrices.promoConsolationSeveral': ['receipt'],
                'retailer.any': ['receipt'],
                'retailer.anyExcluding': ['receipt'],
                'retailer.anyWithBonusOne': ['receipt'],
                'retailer.anyWithBonusSeveral': ['receipt'],
                'retailer.chosenWithConsolation': ['receipt'],
                'rewardUnit.rublesPerItem': ['receipt'],
                'rewardDependsOn.quantity': ['receipt'],
                'limits.amountPerReceipt': ['receipt'],
                'skuFeatures.exceptAlcoTobacco': ['sku'],
                'rewardType.coupon': ['sku']
            }
        },
        skuFeatures: {
            name: 'Требования к товару',
            type: 'checkbox',
            options: {
                exclusions: 'Исключения и уточнения (объем, вкусы и т.п.)',
                minQuantity: 'Минимальное количество в чеке',
                minSum: 'Минимальная сумма в чеке',
                bundle: 'Смотка',
                exceptAlcoTobacco: 'Кроме табака и алкоголя'
            },
            disable: {
                'cashbackFor.receipt': ['exclusions', 'bundle', 'minQuantity'],
                'accumulationType.milestones': ['bundle', 'minQuantity'],
                'accumulationType.paws': ['bundle', 'minQuantity'],
                'rewardDependsOn.sum': ['minSum'],
                'rewardDependsOn.quantity': ['minQuantity'],
                'cashbackFor.sku': ['exceptAlcoTobacco']
            }
        },
        promoPrices: {
            name: 'Отсечение промоцен',
            type: 'radio',
            options: {
                anyPrice: 'Любая цена',
                noPromo: 'Без промо',
                noPromoSeveral: 'Без промо (разные пороги для разных SKU)',
                promoConsolation: 'По промоцене утешительный КБ',
                promoConsolationSeveral: 'По промоцене утешительный КБ (разные пороги для разных SKU)'
            },
            disable: {
                'cashbackFor.receipt': ['anyPrice', 'noPromo', 'promoConsolation', 'noPromoSeveral', 'promoConsolationSeveral']
            }
        },
        placeholderDescription: {
            name: 'Если в условиях пусто',
            type: 'radio',
            options: {
                none: 'Нечего сказать',
                assortment: 'Любой вкус/сорт/упаковка и т.д.',
                productLineDescription: 'Описание продуктовой линейки'
            },
            disable: {
                'cashbackFor.receipt': ['none', 'assortment', 'productLineDescription'],
                'retailer.anyExcluding': ['none', 'assortment', 'productLineDescription'],
                'retailer.chosenWithConsolation': ['none', 'assortment', 'productLineDescription'],
                'skuFeatures.exclusions': ['none', 'assortment', 'productLineDescription'],
                'skuFeatures.minQuantity': ['none', 'assortment', 'productLineDescription'],
                'skuFeatures.bundle': ['none', 'assortment', 'productLineDescription'],
                'skuFeatures.minSum': ['none', 'assortment', 'productLineDescription'],
                'promoPrices.noPromo': ['none', 'assortment', 'productLineDescription'],
                'promoPrices.promoConsolation': ['none', 'assortment', 'productLineDescription'],
                'promoPrices.noPromoSeveral': ['none', 'assortment', 'productLineDescription'],
                'promoPrices.promoConsolationSeveral': ['none', 'assortment', 'productLineDescription'],
                'rewardDependsOn.quantity': ['none', 'assortment', 'productLineDescription'],
                'rewardDependsOn.sum': ['none', 'assortment', 'productLineDescription'],
                'rewardDependsOn.purchaseNumber': ['none', 'assortment', 'productLineDescription'],
                'limits.paymentsSingle': ['none', 'assortment', 'productLineDescription'],
                'limits.perDaySingle': ['none', 'assortment', 'productLineDescription'],
                'limits.perMonthSingle': ['none', 'assortment', 'productLineDescription']
            }
        },
        disclaimer: {
            name: 'Дисклеймер',
            type: 'checkbox',
            options: {
                disclaimer: 'Нужен юридический дисклеймер'
            }
        }
    },
    'Вознаграждение': {
        rewardType: {
            name: 'Тип вознаграждения',
            type: 'radio',
            options: {
                money: 'Деньги',
                coupon: 'Купон'
            },
            disable: {
                'accumulationType.immediate': ['coupon'],
                'rewardDependsOn.quantity': ['coupon'],
                'rewardDependsOn.sum': ['coupon'],
                'rewardDependsOn.purchaseNumber': ['coupon'],
                'cashbackFor.sku': ['coupon']
            }
        },
        rewardUnit: {
            name: 'Единица вознаграждения',
            type: 'radio',
            options: {
                rubles: 'Рубли',
                rublesPerItem: 'Рубли за штуку',
                percents: 'Проценты'
            },
            disable: {
                'cashbackFor.receipt': ['rublesPerItem'],
                'rewardType.coupon': ['rubles', 'rublesPerItem', 'percents'],
                'accumulationType.milestones': ['rublesPerItem'],
                'accumulationType.paws': ['rubles', 'rublesPerItem', 'percents']
            }
        },
        rewardDependsOn: {
            name: 'Изменяемый кэшбэк',
            type: 'radio',
            options: {
                nothing: 'Постоянный',
                quantity: 'От числа штук',
                sum: 'От суммы',
                purchaseNumber: 'Первая и повторная покупки'
            },
            disable: {
                'cashbackFor.receipt': ['quantity'],
                'accumulationType.milestones': ['quantity', 'sum', 'purchaseNumber'],
                'accumulationType.paws': ['quantity', 'sum', 'purchaseNumber'],
                'rewardType.coupon': ['quantity', 'sum', 'purchaseNumber'],
                'skuFeatures.minQuantity': ['quantity'],
                'skuFeatures.minSum': ['sum']
            }
        }
    },
    'Лимиты': {
        limits: {
            name: 'Лимиты',
            type: 'checkbox',
            options: {
                paymentsSingle: '1 выплата',
                payments: '2+ выплат',
                sumPerReceipt: 'Сумма в чеке',
                amountPerReceipt: 'Штуки в чеке',
                perDaySingle: '1 чек в сутки',
                perDay: '2+ чеков в сутки',
                perMonthSingle: '1 чек в месяц',
                perMonth: '2+ чеков в месяц'
            },
            disable: {
                'cashbackFor.receipt': ['amountPerReceipt'],
                'limits.paymentsSingle': ['payments'],
                'limits.payments': ['paymentsSingle'],
                'limits.perDaySingle': ['perDay', 'perMonthSingle'],
                'limits.perDay': ['perDaySingle', 'perMonthSingle'],
                'limits.perMonthSingle': ['perMonth', 'perDaySingle', 'perDay'],
                'limits.perMonth': ['perMonthSingle']
            }
        }
    }
}