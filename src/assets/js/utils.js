export default {
  getUrlParam: function (url) {
    var result = {}
    var arrs = url.split('?')
    if (arrs.length > 1) {
      var arrParas = arrs[1].split('&')
      for (var i = 0; i < arrParas.length; i++) {
        var arr = arrParas[i].split('=')
        result[arr[0]] = arr[1]
      }
    }
    return result
  },

  log: function (content) {
    if (process.env.NODE_ENV === 'development') {
      console.log(content)
    }
  }
}
