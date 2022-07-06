// pages/home-index-writeAddress/index.ts
Page({
    data: {
        addressID: 0,

        name: '',
        phone: '',
        address: '',
        city: '',
        postcode: '',
    },

    onLoad() {

    },

    // 监听copy按钮点击
    handleCopyClick() {
        wx.setClipboardData({
            data: '物流仓库地址',
        })
    },

    // 监听选择地址
    handleSelectAddressClick() {
        wx.navigateTo({
            url: '/pages/home-user-address/index'
        })
    },

    // 监听立即转运
    handleGoOrder() {
        wx.navigateTo({
            url: '/pages/subPages/agreement/index'
        })
    }
})