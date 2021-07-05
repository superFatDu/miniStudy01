// pages/movie-detail/movie-detail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movie: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const mid = options.mid
    wx.request({
      url: app.baseURL + 'subject/' + mid,
      success: res => {
        if (res.statusCode === 200) {
          const handledRes = this.processMovieData(res.data)
          this.setData({
            movie: handledRes
          })
        }
      }
    })
  },
  processMovieData(res) {
    res['ret_directors'] = res.directors.map(item => item.name).join(' / ')
    res['ret_genres'] = res.genres.join('、')
    res['ret_casts'] = res.casts.map(item => item.name).join(' / ')
    res['ret_img_cast'] = res.casts.map(item => {
      return {
        img: item.avatars.large,
        name: item.name
      }
    })
    return res
  },
  onViewImg(e) {
    wx.previewImage({
      urls: [this.data.movie.images.large],
    })
  }
})