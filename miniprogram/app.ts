// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    console.log(wx.getSystemInfoSync().windowWidth);
  },
})