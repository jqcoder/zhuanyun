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
    
  }

})
