// pages/home-index-selectCountry/index.ts
import debounce from '../../utils/debounce'

Page({
    data: {
        searchVal: '',
        indexList: ['#', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
        countryInfo: {
            '#': [{
                countryCName: '中国（香港、澳门、台湾）',
                countryEName: 'China'
            }, {
                countryCName: '美国',
                countryEName: 'United States'
            }, {
                countryCName: '巴基斯坦',
                countryEName: 'Pakistan'
            }, {
                countryCName: '英国',
                countryEName: 'United Kingdom'
            }],
            A: [{
                countryCName: '阿尔巴尼亚',
                countryEName: 'Albania'
            }, {
                countryCName: '阿尔及利亚',
                countryEName: 'Algeria'
            }, {
                countryCName: '阿富汗',
                countryEName: 'Afghanistan'
            }, {
                countryCName: '阿根延',
                countryEName: 'Argentina'
            }, {
                countryCName: '阿曼',
                countryEName: 'Oman'
            }],
            B: [{
                countryCName: '巴基斯坦2',
                countryEName: 'Pakistan'
            }, {
                countryCName: '巴西',
                countryEName: 'United Kingdom'
            }]
        },
        searchResult: {},
        issearchResult: false
    },

    onLoad() {

    },

    // 事件监听
    debounce_listenSearchValChange: debounce(function (e: any) {
        let iptVal = e.detail
        if (!iptVal) {
            let length = Object.keys(this.data.searchResult).length
            return this.setData({
                searchResult: {},
                issearchResult: false
            })
        }
        // 判断是中文还是英文
        let isChineseReg: RegExp = /^[a-zA-Z]+$/
        let isChinese = !isChineseReg.test(iptVal)
        this.getSearchResult(iptVal, isChinese)
    }, 300),

    getSearchResult(iptVal: string, isChinese: boolean) {
        let resultObj = {}
        let str = ['', ...iptVal, ''].join('.*');
        let reg = new RegExp(str);
        let language = isChinese ? 'countryCName' : 'countryEName'
        for (const lists in this.data.countryInfo) {
            // lists key
            this.data.countryInfo[lists].forEach((item: any) => {
                if (reg.test(item[language])) {
                    if (resultObj[lists]) {
                        resultObj[lists].push(item)
                    } else {
                        resultObj[lists] = [item]
                    }
                }
            })
        }
        let length = Object.keys(resultObj).length
        this.setData({
            searchResult: resultObj,
            issearchResult: !!length
        })
    },

    handleCountryItemClick(e){
        let selectCountry = e.currentTarget.dataset.country
        
        let lastPage = getCurrentPages()[getCurrentPages().length-2]
        lastPage.setData({
            destination: selectCountry
        })
        wx.navigateBack()

    }


})