// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        //导航高度
        let statusBarHeight = res.statusBarHeight,
        navTop = menuButtonObject.top,
        //胶囊按钮与右侧距离=windowWidth-right+胶囊宽度
        navObjWid = res.windowWidth - menuButtonObject.right + menuButtonObject.width,
        navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2;
        this.globalData.navHeight;//导航栏总体高度
        this.globalData.navTop=navTop;//胶囊距离顶部距离
        this.globalData.navObj=menuButtonObject.height;//胶囊高度
        this.globalData.navObjWid=navObjWid;//胶囊宽度（包括右边距离）
        this.globalData.windowWidth=res.windowWidth;
        this.globalData.windowHeight=res.windowHeight;
      }
    })
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
    userInfo: null
  }
})