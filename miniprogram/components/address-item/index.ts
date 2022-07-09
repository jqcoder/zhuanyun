// components/address-item/index.ts
// isDefault默认地址 
// addressInfo地址信息 name名字 headName头像名 tel电话 address地址
let that: any;
Component({
    properties: {
        isDefault: {
            type: Boolean,
            value: false
        },
        addressInfo: {
            type: Object,
            value: {}
        }
    },
    data: {
        id: 0
    },
    lifetimes: {
        attached: function () {
            that = this
            // console.log(that.data.addressInfo);
            // that.setData({id:that.data.addressInfo.id})
            // console.log(that.data);
        },
    },

    methods: {
        handleInfoClick(e: any) {
            that.triggerEvent('InfoClick', e.currentTarget.dataset.detail)
        },
        handleDefaultAddressClick(e: any) {
            that.triggerEvent('setDefaultAddress', e.currentTarget.dataset.id)
        },
        handleDeleteClick(e: any) {
            that.triggerEvent('deleteAddress', e.currentTarget.dataset.id)
        },
        handleChangeClick(e: any){
            that.triggerEvent('ChangeAddress', e.currentTarget.dataset.id)
        }
    }
})
