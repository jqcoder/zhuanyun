// components/order-detail-form/index.ts
Component({
    properties: {
        orderState: {
            type: String,
            value: '0'
        },
        number:{
            type: Number,
            value: 0
        },
        numPlaceholder: {
            type: String,
            value: '不能为空'
        },
        NumIptDisabled: {
            type: Boolean,
            value: false
        },
        textareaPlaceholder: {
            type: String,
            value: '不能为空'
        },
        orderList: {
            type: Array,
            value: []
        }
    },

    data: {
        disablede: false
    },

    methods: {
        listenNumIptChange(e: any){ // num修改
            this.triggerEvent('numberInputChange',e.detail.value)
        },
        listenNumIptBlur(){ // num失焦
            this.triggerEvent('numberInputBlur')
        },
        handleIptItemValChange(e: any){ // ipt item值修改
            this.triggerEvent('orderItemChange', e)
        },
        handleDelectClick(e: any){ // 删除
            this.triggerEvent('orderItemDelete', e)
        },
        handleAppendOrder(){ // 添加
            this.triggerEvent('orderItemAppend')
        },
        handleTextAreaChange(e: any){ // 文本域修改
            this.triggerEvent('textAreaChange', e)
        }
    }
})
