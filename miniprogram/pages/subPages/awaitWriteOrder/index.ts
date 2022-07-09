// pages/subPages/awaitWriteOrder/index.ts
import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({
    data: {
        orderState: 0,
        handleLock: false, // 操作锁  

        store: {
            name: '新希望仓库',
            tel: '18612313214',
            address: '深圳市龙华区龙华街道工业路壹城环智中心C座2607室'
        },
        destination: {
            name: '',
            tel: '',
            address: ''
        },

        // 快递单号
        // number: 0,
        number: 0,
        numPlaceholder: '请输入（输入后弹出快递单号位置',
        isNan: { // 错误时的赋值对象
            numPlaceholder: '请输入数字类型或者非数字0',
            number: 0
        },
        NumIptDisabled: false, // 禁用个数输入框

        orderList: [
            // {disabled: false,value: 1},
            // {disabled: false,value: 2}
        ], // 单号列表
        textArea: '', // 备注文本域
        orderMethods: {}, // 预选渠道
        addressInfo: {}, // 地址

        state0Setdata: {
            NumIptDisabled: true
        },
        monilist1: [{ num: '111', state: 0 }, { num: '222', state: 1 }],
        monilist2: [{ num: '11133', state: 1 }, { num: '222', state: 1 }]
    },

    onLoad(options: any) {
        // 0待填写(订单未创建)
        // 1待入仓（未打包 数量、备注、以添加的快递单号必须禁用掉,另外添加的可以修改）确认打包
        // 2待拣货 打包后等待仓库打包完成后可以进去支付状态
        // 3支付 
        console.log(options?.orderState);
        console.log(wx.getStorageSync('orderInfo1'));
        console.log(wx.getStorageSync('orderInfo2'));
        this.setData({
            orderState: options?.orderState
        })

        if (options?.orderState === '0') {
            this.state0()
        } else if (options?.orderState === '1') {
            this.state1()
        } else if (options?.orderState === '2') {
            this.state2()
        } else if (options?.orderState === '3') {
            this.state3()
        }
    },

    // 状态0
    state0() {
        // 获取本地存储的数据并且回显
        let addressInfo = wx.getStorageSync('orderInfo2')
        let orderMethods = wx.getStorageSync('orderInfo1')
        this.setData({
            addressInfo,
            orderMethods,
            'destination.name': addressInfo.name,
            'destination.tel': addressInfo.phone,
            'destination.address': addressInfo.address
        })
    },

    // 状态1 待入仓等待快递-未打包
    state1() {
        // 模拟网络请求获取订单数据
        this.state0()
        // 获取状态1该设置的属性 => 快递个数禁用
        this.setData(this.data.state0Setdata)

        // 根据获取到的快递单号列表 创建不可修改ipt
        // 模拟
        this.setData({ number: 2 }) // 到时候改为快递单号length
        this.createIptItem(2, true, this.data.monilist1)
    },

    // 状态2
    state2() {
        // 模拟网络请求获取订单数据
        this.state0()
        this.setData(this.data.state0Setdata) // 快递个数禁用 并且文本域禁用（在组件写了）
        this.setData({ number: 2 }) // 到时候改为快递单号length
        this.createIptItem(2, true, this.data.monilist2)
    },
    state3() {
        // 模拟网络请求获取订单数据
        this.state0()
        this.setData(this.data.state0Setdata) // 快递个数禁用 并且文本域禁用
        this.setData({ number: 2 }) // 到时候改为快递单号length
        this.createIptItem(2, true, this.data.monilist2)
    },


    // 仓库地址复制
    handleCopyClick(e: any) {
        wx.setClipboardData({
            data: '物流仓库地址',
        })
    },

    // 订单号复制
    handleCardOrderClick(e: any) {
        wx.setClipboardData({
            data: '物流仓库地址',
        })
    },

    // 备注文本域
    onTextAreaChange(e) {
        this.setData({
            textArea: e.detail
        })
    },

    // 监听个数改变
    listenNumIptChange(e) {
        let keyWord = e.detail
        // 当不是num类型的时候,切换Placeholder
        if (!Number(keyWord)) {
            this.setData(this.data.isNan)
            return
        }

        // 输入的数值大于10就赋值10，反之就直接赋值
        this.setData({
            number: keyWord = Number(keyWord) > 10 ? 10 : Number(keyWord)
        })
    },

    // 监听个数ipt失焦
    listenNumIptBlur() {
        // 失去焦点，并且输入框的值大于0
        if (Number(this.data.number) > 0) {
            this.setData({
                NumIptDisabled: true
            })
        }
        // 创建数据
        this.createIptItem(this.data.number, false)
    },

    // 创建输入框arr item
    createIptItem(num: number, iptDisabled: boolean = false, list: any = false) {
        // num 个数  iptDisabled每个的ipt是否禁用 list每个ipt对应的单号默认未kong
        for (let i = 0; i < num; i++) {
            if (list) {
                this.data.orderList.push({
                    disabled: iptDisabled,
                    value: list[i].num,
                    state: list[i].state
                })
            } else {
                this.data.orderList.push({
                    disabled: iptDisabled,
                    value: '',
                })
            }
        }
        this.setData({
            orderList: this.data.orderList
        })
    },

    // 监听输入框列表值的修改
    handleIptItemValChange(e: any) {
        let keyWord = e.detail.detail.value
        let index = e.detail.currentTarget.dataset.index
        let keyword = e.detail.detail.value
        if (keyword) {
            wx.showModal({
                title: '请确认快递单号是否无误',
                showCancel: true,
                success: (res) => {
                    if (res.confirm && !!keyword) {
                        this.setData({
                            [`orderList[${index}].value`]: keyWord,
                            [`orderList[${index}].disabled`]: true
                        })
                    }
                }
            })
        }
    },

    // 监听删除点击
    handleDelectClick(e: any) {
        Dialog.confirm({
            title: '删除',
            message: '确认删除此订单吗',
        }).then(() => {
            // 拿到在数组的索引，去删除指定元素，然后赋值回去，并且数字-1
            let index = e.detail.currentTarget.dataset.index
            this.data.orderList.splice(index, 1)
            this.setData({
                orderList: this.data.orderList,
                number: this.data.number - 1
            })
            wx.showToast({
                title: '成功',
                icon: 'success',
            })

            if (this.data.number == 0) {
                this.setData({
                    NumIptDisabled: false
                })
            }
        }).catch(() => {
        });
        console.log(123);
        
    },

    // 追加订单个数
    handleAppendOrder() {
        if (this.data.number >= 10) {
            wx.showToast({
                title: "最多10个哦"
            })
            return
        }

        Dialog.confirm({
            title: '是否增加快递单号？',
            message: '增加快递单号后，发往转运中心的快递个数+1。是否要继续？',
        }).then(() => {
            this.createIptItem(1, false)
            this.setData({
                number: this.data.number + 1,
            })
        }).catch(() => { })
    },

    // 取消订单
    handleCancelClick() {
        Dialog.confirm({
            title: '是否取消订单',
            message: '取消订单后，订单将不能进行后续操作是否要继续？',
        }).then(() => {

        }).catch(() => { })
    },

    // 文本域
    handleTextAreaChange(e: any) {
        this.setData({
            textArea: e.detail.detail.value
        })
    },

    // 确认订单
    handleAddOrder() {
        Dialog.confirm({
            title: '请确认快递单号是否无误'
        }).then(() => {
            if (!this.data.number) {
                wx.showToast({
                    title: '快递单号不能为空'
                })
            }
            console.log(this.data.textArea);
            console.log(this.data.orderList);
            console.log(this.data.orderMethods);
            console.log(this.data.addressInfo);
            console.log('提交订单');
            // wx.navigateTo({
            //     url: '/pages/tabBar/home-order/index'
            // })
            wx.switchTab({
                url: '/pages/tabBar/home-order/index',
            })
        }).catch(() => { })
    },

    //确认打包
    handleDabaoClick() {
        let isOk = true
        this.data.monilist1.forEach((item => {
            if (!item.state) {
                isOk = false
            }
        }))
        if (isOk) {
            console.log('确认打包');
        } else {
            console.log('不能打包');
        }
    },

    // 支付
    handlePayClick() {
        // 开启询问,确认无误后就跳转
        wx.navigateTo({
            url: "/pages/subPages/order-insure/index"
        })
    }
})