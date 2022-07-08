// components/order-preview-price/index.ts

Component({
    properties: {
        imageList: {
            type: Array,
            value: []
        }
    },

    data: {

    },

    methods: {
        handleImageClick(e: any){
            let index = e.currentTarget.dataset.index
            this.triggerEvent('imageClick', index)
        }
    }
})
