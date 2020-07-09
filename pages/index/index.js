//index.js
//获取应用实例
const app = getApp()
const tools = require("../../utils/tools.js")
Page({
  data: {
    watchData: "",
    my: {
      name: 'yeshen',
      age: 18,
      hobby: ['girls', 'games'],
      info: {
        tag: "年轻的少年",
        like: {
          food: "鱼"
        }
      }
    },
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  watch: {
    'my': {
      handler(newValue, oldValue) {
        this.setData({
          watchData: {
            newValue,
            oldValue
          }
        })
        console.log(newValue, oldValue, '-----监听到数据变化')
      },
      deep: true
    }
  },
  onLoad: function () {
    this.setData({
      'my.age': "20"
    })
    setTimeout(() => {
      this.data.my.info.like.food = "肉肉"
    }, 1000)
    
  },
  debounce: tools.debounce(function() {
    console.log("防抖")
  }),
  throttle: tools.throttle(function () {
    console.log("节流")
  }),
})
