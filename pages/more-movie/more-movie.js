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
  onReady() {
    switch(this.data._type) {
      case 'in_theaters':
        wx.setNavigationBarTitle({
          title: '正在热映',
        })
        break;
      case 'coming_soon':
        wx.setNavigationBarTitle({
          title: '即将上映',
        })
        break;
      case 'top250':
        wx.setNavigationBarTitle({
          title: '豆瓣TOP250',
        })
        break;
      case "default":
        wx.setNavigationBarTitle({
          title: '正在热映',
        })
        break;      
    }
  },
  onReachBottom() {
    this.getDataInfo(this.data._type)
  },
  onPullDownRefresh() {
    this.getDataInfo(this.data._type, 0)
  },
  getDataInfo(type, start = null) {
    wx.showNavigationBarLoading()
    wx.request({
      url: app.baseURL + type,
      data: {
        start: start === 0 ? start : this.data.movies.length,
        count: 12
      },
      success: (res) => {
        if (res.statusCode === 200) res = res.data
        if (res.subjects.length) {
          this.setData({
            movies: start === 0 ? res.subjects : [...this.data.movies, ...res.subjects]
          })
        }
        wx.hideNavigationBarLoading()
        if (start === 0) wx.stopPullDownRefresh()
      }
    })
  }
})