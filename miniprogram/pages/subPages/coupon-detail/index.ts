// pages/subPages/coupon-detail/index.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        isLingqu: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad() {

    },

    handleLingqu(){
        this.setData({
            isLingqu: false
        })
    }
})