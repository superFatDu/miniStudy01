// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // postId: String,
    // avatar: String,
    // date: String,
    // title: String,
    // imgSrc: String,
    // content: String,
    // collection: String,
    // reading: String
    item: Object
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onGoToDetail(event) {
      const pid = event.currentTarget.dataset.postId
      this.triggerEvent("triggergotodetail", {pid})
    }
  }
})
