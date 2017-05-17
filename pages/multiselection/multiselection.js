// multiselection.js
let nowTime = new Date()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    options: ['111','222'],
    isNoName: false,
    date: nowTime.getFullYear() + '-' + (nowTime.getMonth() + 1) + '-' + (nowTime.getDate() + 1),
    time: nowTime.getHours() + '-' + nowTime.getMinutes()
  },
  addOptions() {
    this.setData({
      options: this.data.options.concat([''])
    })
  },
  removeOption(e) {
    console.log('e.target', e.currentTarget.dataset.index)

    let index = e.currentTarget.dataset.index
    this.data.options.splice(index,1)
    this.setData({
      options: this.data.options
    });
  },
  submitData() {
    console.log('data', this.data)
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  }
})