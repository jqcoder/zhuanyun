// pages/subPages/home-user-instructions/index.ts
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