Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "Sep 18 2019",
    title: "正是虾肥蟹壮时",

  },
  imPath: "",
  process: function() {
    var date = "NOV 18 2019";
    var date_ele = document.getElementById("id");
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var post_content1 = {
      date: "NOV 18 2019",
      title: "正是虾肥蟹壮时",
      post_img: "/images/crab.png",
      content: "1、螃蟹的背上驮着一个硬邦邦的大壳，壳的中央有几条几乎看不清楚的白色花纹。我凑近一看，哈！活像是一位老翁慈祥的面容。壳的两旁伸出三个小尖叉，就像京剧里武将背上插的小旗儿，显得那么威风！",
      view_num: "92",
      collect_num: "65",
      author_img: "/images/1.png",
    }
    this.setData(post_content1);
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})