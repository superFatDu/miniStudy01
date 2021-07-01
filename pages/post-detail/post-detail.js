// pages/post-detail/post-detail.js
import {
  postList
} from '../../data/data'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    _pid: null,
    detailInfo: {},
    isCollected: false
  },
  onCollect() {
    let collectsObj = wx.getStorageSync("collectsObj")
    const info = {}
    if (!collectsObj) {
      info[this.data._pid] = true
      wx.setStorageSync('collectsObj', info)
    } else {
      const keys = Object.keys(collectsObj)
      if (keys.includes(this.data._pid)) {
        const key = keys.filter(item => item == this.data._pid)[0]
        collectsObj[key] = !this.data.isCollected
      } else {
        info[this.data._pid] = true
        collectsObj = Object.assign(collectsObj, info)
      }
      wx.setStorageSync('collectsObj', collectsObj)
    }
    this.setData({
      isCollected: !this.data.isCollected
    })
    wx.showToast({
      title: this.data.isCollected ? '收藏成功' : '取消收藏',
    })
  },
  onShare() {
    wx.showActionSheet({
      itemList: ['发送给朋友', '分享到朋友圈', '分享到'],
      success(res) {
        // TODO
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data._pid = options.pid
    const detailInfo = postList.filter(item => item.postId == options.pid)[0]
    this.setData({
      detailInfo
    })
    let collectsObj = wx.getStorageSync("collectsObj")
    let keys = Object.keys(collectsObj)
    if (keys.includes(options.pid)) {
      this.setData({
        isCollected: collectsObj[options.pid]
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})