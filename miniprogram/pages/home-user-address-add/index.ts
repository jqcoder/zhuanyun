// pages/home-user-address-add/index.ts
Page({
    data: {
        name: '',
        phone: '',
        address: '',
        city: '',
        postcode: '',
        isDefault: false
    },

    onLoad() {

    },

    handleSwitchClick() {
        this.setData({
            isDefault: !this.data.isDefault
        })
    }
})