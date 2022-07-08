// components/order-card/index.ts
Component({
    properties: {
        begin: {
            type: String,
            value: '中国'
        },
        end: {
            type: String,
            value: '美国'
        },
        method: {
            type: String,
            value: '普通货物'
        },
        orderState: {
            type: String,
            value: '0'
        }
    },

    data: {

    },

    methods: {
        handleCopyClick(){
            this.triggerEvent('copy')
        }
    }
})
