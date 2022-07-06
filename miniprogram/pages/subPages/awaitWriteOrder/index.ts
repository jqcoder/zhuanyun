// pages/subPages/awaitWriteOrder/index.ts
import Dialog from '../../../miniprogram_npm/@vant/weapp/dialog/dialog';

Page({
    data: {
        store: {
            name: '新希望仓库',
            tel: '18612313214',
            address: '深圳市龙华区龙华街道工业路壹城环智中心C座2607室'
        },
        destination: {
            name: 'KK Chen',
            tel: '18688880130',
            address: 'MEGASYSTEMS INC 799 E DRAGRAM SUITE 5A TUCSON, AZ 85705 USA'
        },

        number: 0,
        numPlaceholder: '请输入（输入后弹出快递单号位置',
        isNum: true, // 是否是数字 开启错误提示
        isNan: { // 错误时的赋值对象
            numPlaceholder: '请输入数字类型或者非数字0',
            isNum: false,
            number: 0
        },
        NumIptDisabled: false, // 禁用按钮

        orderList: [],
        textArea: ''
    },

    onLoad() {

    },

    handleCopyClick(e) {
        wx.setClipboardData({
            data: '物流仓库地址',
        })
    },

    handleCardOrderClick(e){
        wx.setClipboardData({
            data: '物流仓库地址',
        })
    },

    onTextAreaChange(e){
        this.setData({
            textArea: e.detail
        })
    },

    // 监听个数改变
    listenNumIptChange(e) {
        let keyWord = e.detail
        // 当不是num类型的时候
        if (!Number(keyWord)) {
            this.setData(this.data.isNan)
            return
        }
        this.setData({isNum: true})

        // 输入的数值大于10就赋值10，反之就直接赋值
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
        // 失去焦点，并且输入框的值大于0
        if (Number(this.data.number) > 0) {
            this.setData({
                NumIptDisabled: true
            })
        }
        // 创建数据
        this.createIptItem(this.data.number)
    },

    // 创建输入框arr item
    createIptItem(num) {
        for (let i = 0; i < num ; i++) {
            this.data.orderList.push('')
        }
        this.setData({
            orderList: this.data.orderList
        })
    },

    // 监听输入框值的修改
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
            title: '删除',
            message: '确认删除此订单吗',
        }).then(() => {
            // 拿到在数组的索引，去删除指定元素，然后赋值回去，并且数字-1
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
            this.createIptItem(1)
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

    // 确认订单
    handleAddOrder(){
        Dialog.confirm({
            title: '请确认快递单号是否无误',
            message: '请确认快递单号【test12346】是否无误，一旦提交，不可修改。',
        }).then(() => {
            if(!this.data.number){
                wx.showToast({
                    title: '快递单号不能为空'
                })
            }
            console.log(this.data.textArea);
            console.log(this.data.orderList);
            
            

        }).catch(() => { })
    }
})