// pages/movies/movies.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inTheaters: [],
    comingSoon: [],
    top250: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInTheaters()
    this.getComingSoon()
    this.getTop250()
  },
  getInTheaters() {
    wx.request({
      url: app.baseURL + 'in_theaters?start=0&count=3',
      success: (res) => {
        if (res.statusCode === 200) res = res.data
        this.setData({
          inTheaters: res.subjects
        })
      }
    })
  },
  getComingSoon() {
    wx.request({
      url: app.baseURL + 'coming_soon?start=0&count=3',
      success: (res) => {
        if (res.statusCode === 200) res = res.data
        this.setData({
          comingSoon: res.subjects
        })
      }
    })
  },
  getTop250() {
    wx.request({
      url: app.baseURL + 'top250?start=0&count=3',
      success: (res) => {
        if (res.statusCode === 200) res = res.data
        this.setData({
          top250: res.subjects
        })
      }
    })
  },
  onGoToMore(e) {
    const type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/more-movie/more-movie?type=' + type,
    })
  }
})