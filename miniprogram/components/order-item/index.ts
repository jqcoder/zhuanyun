// components/order-item/index.ts
Component({
    properties: {
        order: {
            type: Object,
            value: {}
        },
        orderState: {
            type: String,
            value: '1'
        }
    },

    data: {

    },

    methods: {
        handleCopyClick() {
            this.triggerEvent('copy', this.properties.store)
        },
        handleDetailsClick(){
            this.triggerEvent('detailClick')
        }
    }
})
