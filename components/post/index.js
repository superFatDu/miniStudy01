// components/post/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
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
    _onTap(event) {
      // const pid = event.currentTarget.dataset.postId
      const pid = this.properties.item.postId
      this.triggerEvent("triggerpost", {pid})
    }
  }
})
