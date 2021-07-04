// pages/more-movie/more-movie.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    _type: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data._type = options.type
    this.getDataInfo(options.type)
  },
  onReachBottom() {
    this.getDataInfo(this.data._type)
  },
  getDataInfo(type) {
    wx.request({
      url: app.baseURL + type,
      data: {
        start: this.data.movies.length,
        count: 12
      },
      success: (res) => {
        if (res.statusCode === 200) res = res.data
        if (res.subjects.length) {
          this.setData({
            movies: [...this.data.movies, ...res.subjects]
          })
        }
      }
    })
  }
})