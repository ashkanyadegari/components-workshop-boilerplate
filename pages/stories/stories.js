// pages/stories/stories.js
const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    this.getStories()
  },

  getStories() {
    this.setData({ stories: app.globalData.stories })
  },

  goToStory(e) {
    console.log(e);
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/show/show?id=${id}`,
    })
  },

  goToForm() {
    wx.navigateTo({
      url: '/pages/form/form',
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})