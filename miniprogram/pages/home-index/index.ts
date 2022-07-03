// index.ts
const app = getApp<IAppOption>()

Page({
  data: {
    showRransit: false
  },

  onLoad() {

  },

  handleGoTransitClick(){
    this.setData({
        showRransit: true
    })
  },

  onClickHide(){
    this.setData({
        showRransit: false
    })
  },

  handleCopyLocationClick(){
      wx.navigateTo({
          url: "/pages/copyLocation/index"
      })
  },

    // 开启遮罩层后阻止背景滑动      
  moveHandle(){

  }

})
