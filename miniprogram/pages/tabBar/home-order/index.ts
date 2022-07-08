// pages/home-order/index.ts
Page({
    data: {
        active: 0,
        orderList: []
    },

    onLoad() {
        this.getOrderList(this.data.active)
    },

    // tab修改
    onChange(e: any) {
        let currentIndex = e.detail.index
        this.getOrderList(currentIndex)
    },

    // 获取tab页面数据
    getOrderList(index: number) {
        // index为tab对应的下标
        // 发请求获取 or filter筛选
    },

    // 复制点击
    handleCopyOrderClick() {
        wx.setClipboardData({
            data: '物流仓库地址',
        })
    },

    // 详情点击
    handledetailClick(e: any){
        let state = e.currentTarget.dataset.state
        wx.navigateTo({
            url: `/pages/subPages/awaitWriteOrder/index?orderState=${state}`
        })
    }
})