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

    onLoad(options: any) {
        if(options?.address){
            let obj = JSON.parse(options?.address)
            console.log(obj);
            this.setData({
                name: obj.name,
                phone: obj.tel,
                address: obj.address,
                city: obj.city,
                postcode: obj.postcode
            })
        }
    },

    handleSwitchClick() {
        this.setData({
            isDefault: !this.data.isDefault
        })
    },

    handleUpdateClick(){
        wx.navigateBack()
    }
})