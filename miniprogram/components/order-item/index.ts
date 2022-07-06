// components/order-item/index.ts
Component({
    properties: {
        order: {
            type: Object,
            value: {}
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
