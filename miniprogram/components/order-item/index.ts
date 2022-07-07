// components/order-item/index.ts
Component({
    properties: {
        order: {
            type: Object,
            value: {}
        },
        orderType: {
            type: Number,
            value: 0
        }
    },

    data: {

    },

    methods: {
        handleCopyClick() {
            this.triggerEvent('copy', this.properties.store)
        }
    }
})
