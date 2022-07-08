// pages/home-user-address/index.ts
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({
    data: {
        addressList: [
            {
                id: 1,
                name: 'jack zheng',
                tel: '13066664444',
                address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA',
                postcode: 123984,
                isDefault: 1
            },
            {
                id: 2,
                name: 'jiejiejie',
                tel: '13066663333',
                address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA',
                postcode: 125725,
                isDefault: 0
            }
        ]
    },

    onLoad() {

    },

    // 添加地址点击
    handleAddAddressClick() {
        wx.navigateTo({
            url: '/pages/home-user-address-add/index'
        })
    },

    // 监听设为默认按钮
    listenSetDefaultClick(e: any) {
        let that = this
        let id = e.detail
        Dialog.confirm({
            message: '确认设为默认地址吗？',
        }).then((res) => {
            that.SetDefaultClick(id)
        }).catch((err: any) => { })
    },
    SetDefaultClick(id) {
        let index = this.data.addressList.findIndex((item: any) => {
            return item.id === id
        })
        this.data.addressList.forEach((item, index) => {
            item.isDefault = 0
            this.setData({
                [`addressList[${index}]`]: item
            })
        })

        this.data.addressList[index].isDefault = 1
        this.setData({
            [`addressList[${index}]`]: this.data.addressList[index]
        })

    },

    listenDeleteClick(e: any) {
        let addressId = e.detail
        Dialog.confirm({
            message: '确认删除改地址吗？',
        }).then((res) => {
            console.log(e);
        }).catch((err: any) => { })
    },

    handleInfoclick(e: any){
        let lastPage = getCurrentPages()[getCurrentPages().length-2]
        
        // 判断上一层一面是哪个
        if(lastPage.route === 'pages/home-index-writeAddress/index'){
            let addressInfo = e.detail
            lastPage.setData({
                'name.value': addressInfo.name,
                'phone.value': addressInfo.tel,
                'address.value': addressInfo.address,
                'postcode.value': addressInfo.postcode
            })
            wx.navigateBack()
        }else{
            
        }
    }

})