// pages/subPages/agreement/index.ts
Page({
    data: {
        timeOut: 1,
        address: ''
    },

    onLoad(options) {
       this.setData({
        address: options.address
       })
        
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
        let address = this.data.address
        wx.navigateTo({
            url: `/pages/subPages/awaitWriteOrder/index?address=${address}`
        })
    }
})