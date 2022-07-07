// index.ts
const app = getApp<IAppOption>()

Page({
    data: {
        showRransit: false,
        transitMethods: {},
        fromCountry: '中国',
        destination: {
            countryCName: '美国',
            countryEName: 'United States'
        },
        active: 0,
        transitInfo: [
            {
                id: 1,
                method: '普通货物',
            }, {
                id: 2,
                method: '电子产品',
            }, {
                id: 3,
                method: '液体粉末',
            },
            {
                id: 4,
                method: '内地EMS',
            }, {
                id: 5,
                method: '广东EMS',
            }],
    },

    onLoad() {

    },

    // ==============事件监听
    // 立即转运
    handleGoTransitClick() {
        this.setData({
            showRransit: true
        })
    },

    onClickHide() {
        this.setData({
            showRransit: false
        })
    },

    // 开启遮罩层后阻止背景滑动      
    moveHandle() { },

    // 监听转运的模式按钮点击
    handleTransitBtnClick(e: any) {
        let index = e.currentTarget.dataset.index
        this.setData({
            active: index
        })
    },

    // to选择国家地区
    handleSelectCountry() {
        wx.navigateTo({
            url: "/pages/home-index-selectCountry/index"
        })
    },

    // 转运下一步
    handleNextStepClick() {
        let active = this.data.active
        this.setData({
            transitMethods: this.data.transitInfo[active]
        })

        wx.navigateTo({
            url: `/pages/home-index-writeAddress/index`
        })
    },

    handleGusuanClick() {
        wx.navigateTo({
            url: '/pages/subPages/estimate-fare/index'
        })
    },

    handleXuZhiClick() {
        wx.navigateTo({
            url: '/pages/subPages/home-user-instructions/index'
        })
    },

    // to复制仓库地址
    handleCopyLocationClick() {
        wx.navigateTo({
            url: "/pages/subPages/copyLocation/index"
        })
    },



})
