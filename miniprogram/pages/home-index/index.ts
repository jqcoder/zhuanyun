// index.ts
const app = getApp<IAppOption>()

Page({
  data: {
    showRransit: false,
    active: 0,
    transitInfo: [{
        id: 1,
        method: '普通货物',
    },{
        id: 2,
        method: '普通货物',
    },{
        id: 3,
        method: '普通货物',
    },
    {
        id: 4,
        method: '普通货物',
    },{
        id: 5,
        method: '普通货物',
    }]
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

  handleTransitBtnClick(e: any){
    let index = e.currentTarget.dataset.index
    this.setData({
        active: index
    })
  },

    // 开启遮罩层后阻止背景滑动      
  moveHandle(){

  }

})
