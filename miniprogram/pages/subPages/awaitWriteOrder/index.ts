// pages/subPages/awaitWriteOrder/index.ts
import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({
    data: {
        number: 0,
        numPlaceholder: '请输入（输入后弹出快递单号位置',
        isNum: true, // 是否是数字 开启错误提示
        isNan: { // 错误时的赋值对象
            numPlaceholder: '请输入数字类型或者非数字0',
            isNum: false,
            number: 0
        },
        NumIptDisabled: false, // 禁用按钮

        orderList: []
    },

    onLoad() {

    },

    // 监听个数改变
    listenNumIptChange(e) {
        let keyWord = e.detail
        if (!Number(keyWord)) {
            this.setData(this.data.isNan)
            return
        }
        this.setData({
            isNum: true,
        })
        if (Number(keyWord) <= 10) {
            this.setData({
                number: Number(keyWord)
            })
        } else {
            this.setData({
                number: 10
            })
        }
    },

    // 监听个数ipt失焦
    listenNumIptBlur() {
        if (Number(this.data.number) > 0) {
            this.setData({
                NumIptDisabled: true
            })
        }
        this.createIptItem(this.data.number)
    },

    // 创建输入框arr item
    createIptItem(num) {
        for (let i = 0; i <= num - 1; i++) {
            this.data.orderList.push('')
        }

        this.setData({
            orderList: this.data.orderList
        })
    },

    // 监听item值的修改
    handleIptItemValChange(e) {
        let keyWord = e.detail.value
        let index = e.currentTarget.dataset.index
        this.setData({
            [`orderList[${index}]`]: keyWord
        })
    },

    // 监听删除点击
    handleDelectClick(e) {
        Dialog.confirm({
            title: '标题',
            message: '弹窗内容',
        }).then(() => {
            let index = e.currentTarget.dataset.index
            this.data.orderList.splice(index, 1)
            this.setData({
                orderList: this.data.orderList,
                number: this.data.number - 1
            })

            wx.showToast({
                title: '成功',
                icon: 'success',
            })
        }).catch(() => {
        });
    },

    // 追加订单个数
    handleAppendOrder() {
        Dialog.confirm({
            title: '是否增加快递单号？',
            message: '增加快递单号后，发往转运中心的快递个数+1。是否要继续？',
        }).then(() => {
            this.createIptItem(1)
            if (this.data.number < 10) {
                this.setData({
                    number: this.data.number + 1,
                })
            } else {
                wx.showToast({
                    title: "最多10个哦",
                    icon: 'error'
                })
            }
        }).catch(() => { })

    },

    // 取消订单
    handleCancelClick() {
        Dialog.confirm({
            title: '是否取消订单',
            message: '取消订单后，订单将不能进行后续操作是否要继续？',
        }).then(() => {
            
        }).catch(() => { })
    }
})