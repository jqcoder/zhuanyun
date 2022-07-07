// pages/subPages/order-pay-detail/index.ts
Page({
    data: {
        destination: {
            name: 'KK Chen',
            tel: '18688880130',
            address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA123'
        },
        isOpenPopup: false,
        checked: false

    },

    onLoad() {

    },

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

    handleTongYiClick() {
        this.setData({
            isOpenPopup: false,
            checked: true
        })
    },

    handleGoPayClick(){
        console.log('立即支付');
        
    }
})