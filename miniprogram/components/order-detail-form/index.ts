// components/order-detail-form/index.ts
Component({
    properties: {
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
        },
        allIptDisabled: {
            type: Boolean,
            value: false
        }
    },

    data: {

    },

    methods: {
        listenNumIptChange(e){
            this.triggerEvent('numberInputChange',e.detail.value)
        },
        listenNumIptBlur(){
            this.triggerEvent('numberInputBlur')
        },
        handleIptItemValChange(e){
            this.triggerEvent('orderItemChange', e)
        },
        handleDelectClick(e){
            this.triggerEvent('orderItemDelete', e)
        },
        handleAppendOrder(){
            this.triggerEvent('orderItemAppend')
        }
    }
})
