// pages/subPages/order-pay-detail/index.ts
Page({
    data: {
        destination: {
            name: 'KK Chen',
            tel: '18688880130',
            address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA123'
        },
        isOpenPopup: false,
        checked: false,

        isOpenCoupon: false,
        couponRadio: 0,
        isUseCoupon: false
    },

    onLoad() {

    },

    // 打开协议
    onOpenPopup() {
        if (this.data.checked) {
            this.setData({
                checked: false
            })
            return
        }
        this.setData({
            isOpenPopup: true
        })
    },
    // 同意协议
    handleTongYiClick() {
        this.setData({
            isOpenPopup: false,
            checked: true
        })
    },

    // 去支付
    handleGoPayClick(){
        if(this.data.checked){
            console.log('立即支付');
        }else{
            wx.showToast({
                title: '请先同意协议',
                icon: 'none'
            })
        }
    },

    // 打开选择优惠券列表
    handleCouponClick(){
        this.setData({
            isOpenCoupon: true
        })
    },

    // 关闭优惠券列表
    onCloseCoupon(){
        this.setData({
            isOpenCoupon: false
        })
    },

    // 选择优惠券
    onSelectCouponChange(e: any){
        this.setData({
            couponRadio: e.detail,
            isUseCoupon: false,
        })
    },

    // 是否使用优惠券
    handleUseConponChange(e: any){
        this.setData({
            isUseCoupon: !this.data.isUseCoupon,
            couponRadio: -1
        })
    },

    // 选择哪张优惠券（可不选）
    handleAffirmConponClick(){
        if(this.data.isUseCoupon){
            console.log('不使用优惠券');
        }else{
            console.log(`我当前在使用第${this.data.couponRadio + 1}`);
        }
        this.setData({
            isOpenCoupon: false
        })
    }
})