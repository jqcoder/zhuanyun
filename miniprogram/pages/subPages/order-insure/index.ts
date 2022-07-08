// pages/subPages/order-insure/index.ts
Page({
    data: {
        diushiChecked: true,
        showCard: false,
    },

    onLoad() {

    },

    // 下一步点击后，弹窗开启
    handleXiayibu(){
        this.setData({
            showCard: true
        })
    },

    // 关闭弹窗
    listenHideCard(){
        this.setData({
            showCard: false
        })
    },

    handlePayClick(){
        // 购买保险
        wx.navigateTo({
            url: '/pages/subPages/order-pay-detail/index'
        })
    },
    handleCancelClick(){
        // 不购买保险
        wx.navigateTo({
            url: '/pages/subPages/order-pay-detail/index'
        })
    }
})