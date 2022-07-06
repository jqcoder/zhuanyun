// components/address-card/index.ts
Component({
    properties: {
        store: {
            type: Object,
            value: {}
        },
        destination: {
            type: Object,
            value: {}
        },
        isShowStore: {
            type: Boolean,
            value: true
        },
        destinationIconBgc: {
            type: String,
            value: ''
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

