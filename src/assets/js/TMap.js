import axios from 'axios'
import utils from '@/assets/js/utils.js'

export function TMap (key) {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(qq)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'http://map.qq.com/api/js?v=2.exp&callback=init&key=' + key
    script.onerror = reject
    document.head.appendChild(script)
  })
}

export function JSSDK () {
  return new Promise(function (resolve, reject) {
    window.init = function () {
      resolve(wx)
    }
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'http://res2.wx.qq.com/open/js/jweixin-1.4.0.js'
    script.onerror = reject
    document.head.appendChild(script)
  })
}

export function getGPRS (key, address) {
  return new Promise(function (resolve, reject) {
    var url = '/ws/geocoder/v1/?address=' + address + '&key=' + key
    utils.log(url)
    axios.get(url).then(function (res) {
      utils.log(url)
      utils.log(res.data.result)
      resolve(res.data.result)
    })
    // window.init = function () {
    //   resolve(qq)
    // }
    // var script = document.createElement('script')
    // script.type = 'text/javascript'
    // script.src = 'http://map.qq.com/api/js?v=2.exp&callback=init&key=' + key
    // script.onerror = reject
    // document.head.appendChild(script)
  })
}
