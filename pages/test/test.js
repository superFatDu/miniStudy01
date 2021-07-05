// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.onWxAudio()
  },
  onWxAudio() {
    const innerAudioContext = wx.createInnerAudioContext()
    innerAudioContext.src = 'http://m7.music.126.net/20210702105244/472ce4ddca129733fa3c136b0f6d02e3/ymusic/a007/1dc9/d295/6663c777dbd66cb71ac832a6828cae7f.flac'
    innerAudioContext.autoplay = true
    innerAudioContext.stop()
  }
})