// index.ts
const app = getApp<IAppOption>()

Page({
    data: {
        showRransit: false,
        active: 0,
        transitInfo: [{
            id: 1,
            method: '普通货物',
        }, {
            id: 2,
            method: '普通货物',
        }, {
            id: 3,
            method: '普通货物',
        },
        {
            id: 4,
            method: '普通货物',
        }, {
            id: 5,
            method: '普通货物',
        }]
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
        wx.navigateTo({
            url: "/pages/home-index-writeAddress/index"
        })
    },

    // to复制仓库地址
    handleCopyLocationClick() {
        wx.navigateTo({
            url: "/pages/subPages/copyLocation/index"
        })
    },



})
