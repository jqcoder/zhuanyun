// pages/subPages/agreement/index.ts
Page({
    data: {
        timeOut: 1,
        address: ''
    },

    onLoad() {
    },

    onShow() {
        let time = setInterval(() => {
            if (this.data.timeOut < 0){
                clearInterval(time)
            }else{
                this.setData({
                    timeOut: this.data.timeOut - 1
                })
            }
        }, 1000)
    },

    handleBtnClick() {
        wx.navigateTo({
            url: `/pages/subPages/awaitWriteOrder/index?orderState=0`
        })
    }
})