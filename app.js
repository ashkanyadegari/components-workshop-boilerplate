// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null,
    stories: [
      {
        id: 1,
        name: 'Ashkan',
        text: 'I miss my dog',
        picture: "https://picsum.photos/500/800"
      },
      {
        id: 2,
        name: 'Ashkan',
        text: 'I need water',
        picture: "https://picsum.photos/500/800"
      },
    ]
  }
})
