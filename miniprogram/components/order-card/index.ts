// components/order-card/index.ts
Component({
    properties: {
        orderCardInfo: {
            type: Object,
            value: {}
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
