// pages/home-index-writeAddress/index.ts
Page({
    data: {
        orderData: {},
        addressID: 0,

        name: {
            value: '',
            reg: false,
            currentErrMsg: '',
            errMsg: '名字格式不正确'
        },
        phone: {
            value: '',
            reg: true,
            currentErrMsg: '',
            errMsg: '手机号格式不正确'
        },
        address: {
            value: '',
            reg: false,
            currentErrMsg: '',
            errMsg: '地址不能为空'
        },
        city: {
            value: '',
            reg: false,
            currentErrMsg: '',
            errMsg: '城市不能为空'
        },
        postcode: {
            value: '',
            reg: true,
            currentErrMsg: '',
            errMsg: '邮政编码不正确'
        }
    },

    onLoad() {

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

    // 输入框修改值
    onChange(e: any) {
        let formName = e.currentTarget.dataset.type
        let formData = {
            [`${formName}`]: e.detail.value
        }
        
        let result = this.testFormData(formData)
        this.setData({
            [`${formName}.value`]: e.detail.value
        })
    },

    // 监听立即转运
    handleGoOrder() {
        let pageData = this.data
        let formData = {
            name: pageData.name.value,
            phone: pageData.phone.value,
            address: pageData.address.value,
            city: pageData.city.value,
            postcode: pageData.postcode.value,
        }

        // 验证表单
        let result = this.testFormData(formData)

        if (result) {
            wx.setStorageSync('orderInfo2',formData)
            wx.navigateTo({
                url: `/pages/subPages/agreement/index`
            })
        }
    },

    testFormData(formData: any) {
        let result: boolean[] = []
        let PhoneReg = /^1[3-9]\d{9}$/
        let postcodeReg = /^\d{6}$/

        for (const item in formData) {
            // item->key  
            let currentIptValue = formData[item]
            // 先判断值是否为空
            if (!currentIptValue.length && !currentIptValue) {
                this.setData({
                    [`${item}.currentErrMsg`]: '值不能为空'
                })
                result.push(false)
            } else {
                // 如果有值
                // 有正则就去验证正则，没有就通过
                if (this.data[item].reg) {
                    if (item === 'phone') {
                        if (!PhoneReg.test(currentIptValue)) {
                            this.setData({
                                [`${item}.currentErrMsg`]: this.data[item].errMsg
                            })
                            result.push(false)
                        } else {
                            this.setData({
                                [`${item}.currentErrMsg`]: ''
                            })
                            result.push(true)
                        }
                    }

                    if (item === 'postcode') {
                        if (!postcodeReg.test(currentIptValue)) {
                            this.setData({
                                [`${item}.currentErrMsg`]: this.data[item].errMsg
                            })
                            result.push(false)
                        } else {
                            this.setData({
                                [`${item}.currentErrMsg`]: ''
                            })
                            result.push(true)
                        }
                    }
                } else {
                    // 通过验证
                    this.setData({
                        [`${item}.currentErrMsg`]: ''
                    })
                    result.push(true)
                }
            }

        }
        return !result.includes(false)
    }
})