// pages/subPages/agreement/index.ts
Page({
    data: {
        timeOut: 3
    },

    onLoad() {

    },

    onShow() {
        let time = setInterval(() => {
            if (this.data.timeOut === 0) clearInterval(time)
            this.setData({
                timeOut: this.data.timeOut - 1
            })
        }, 1000)
    },

    handleBtnClick() {
        wx.navigateTo({
            url: '/pages/subPages/awaitWriteOrder/index'
        })
    }
})