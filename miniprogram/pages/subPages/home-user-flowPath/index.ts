// pages/subPages/home-user-flowPath/index.ts
Page({
    data: {

    },

    onLoad() {

    },
    handleBtnClick(){
        wx.navigateBack({
            delta: 1
        })
    }
})