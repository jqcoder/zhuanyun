// pages/subPages/order-insure/index.ts
Page({
    data: {
        diushiChecked: true,
        showCard: false,
    },

    onLoad() {

    },

    handleXiayibu(){
        this.setData({
            showCard: true
        })
    }
})