// pages/subPages/order-insure/index.ts
Page({
    data: {
        iptValue: '',
        errmsg: '',
        diushiChecked: false,
        guanshuiChecked: false,
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

    iptValChange(e: any){
        if(!Number(e.detail.value)){
            this.setData({errmsg: '请输入数字类型'})
        }else{
            this.setData({errmsg: ''})
        }
        this.setData({
            iptValue: e.detail.value
        })
    },

    // 丢失险开关
    onDiushiChange(){
        this.setData({
            diushiChecked: !this.data.diushiChecked,
        })
    },

    onGuanshuiChange(){
        this.setData({
            guanshuiChecked: !this.data.guanshuiChecked,
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