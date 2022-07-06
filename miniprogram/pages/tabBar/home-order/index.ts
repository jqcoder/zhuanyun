// pages/home-order/index.ts
Page({
    data: {
        active: 0,
        orderList: []
    },

    onLoad() {
        this.getOrderList(this.data.active)
    },

    onChange(e: any) {
        let currentIndex = e.detail.index
        this.getOrderList(currentIndex)
    },

    getOrderList(index: number) {
        // index为tab对应的下标
        // 发请求获取 or filter筛选
    },

    handleCopyOrderClick() {
        wx.setClipboardData({
            data: '物流仓库地址',
        })
    }
})