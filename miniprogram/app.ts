// app.ts
App<IAppOption>({
  globalData: {},
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    // 登录
    wx.login({
      success: res => {
        console.log(res.code, "我登陆成功")
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
      error: rej => {
        console.log(rej, "我登陆失败了")
      }
    })
  },
})