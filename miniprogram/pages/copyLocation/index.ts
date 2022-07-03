// pages/copyLocation/index.ts
Page({

    /**
     * 页面的初始数据
     */
    data: {
        flag: false,
        stepInfo: [
            {
                title: '第一步将包裹寄到河马转运仓',
                content: '复制以上收件人信息并添加到淘宝等网购平台，以河马转运为收货人ID号作为包裹识别归属的主要途径，请务必作为收件人信息的一部分完整保留'
            },
            {
                title: '第二步报备包裹国内快递单号',
                content: '快递寄出后将国内快递单号添加至河马转运，因国内部分快递公司会隐藏ID号，请自主添加单号备，以免被识别为无名包事造成不必要的损失:'
            },
            {
                title: '第三步提交打包',
                content: '包裹入库验货后，选择你要寄送的包事提交打包并选择线路渠道，打包时间通常为当天提交次日18:00前完成打包;'
            },
            {
                title: '第四步支付运费',
                content: '打包完成后确认重量与运费明细，完成支付后当日出库提交转运;'
            }]
    },

    onLoad() {

    },

    handleCopyLocationClick(){
              wx.setClipboardData({
          data: '物流仓库地址',  
      })
    }
})