// pages/home-index-writeAddress/index.ts
Page({
    data: {
        orderData: {},
        addressID: 0,

        name: '',
        phone: '',
        address: '',
        city: '',
        postcode: ''
    },

    onLoad(options) {
        let lastPage = getCurrentPages()[getCurrentPages().length-2]
        // console.log(getCurrentPages());
        
        
        // let orderData = JSON.parse(options.orderData)
        // this.setData({
        //     orderData
        // })
    },

    // 监听copy按钮点击
    handleCopyClick() {
        wx.setClipboardData({
            data: '物流仓库地址',
        })
    },

    // 监听选择地址
    handleSelectAddressClick() {
        wx.navigateTo({
            url: '/pages/home-user-address/index'
        })
    },

    // 监听立即转运
    handleGoOrder() {
        let pageData = this.data
        let formData = {
            name: pageData.name,
            phone: pageData.phone,
            address: pageData.address,
            city: pageData.city,
            postcode: pageData.postcode,
        }

        // 验证表单
       this.testFormData(formData)

        // wx.navigateTo({
        //     url: `/pages/subPages/agreement/index?address=${formDataStr}`
        // })
    },

    testFormData(formData){
        let isComplete = false
        console.log(formData);
        
        for(let item in formData){
            if(!formData[item].length && !formData[item]){
                wx.showToast({
                    title: '表单不能为空',
                    icon: 'none'
                })
            }
        }
    },

    onChange(e){
        let formName = e.currentTarget.dataset.type
        this.setData({
            [formName]: e.detail
        })
    }
})