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
  },
  convertHtmlToText: function convertHtmlToText (inputText) {
    if (!inputText) {
      return ''
    }
    var returnText = '' + inputText
    returnText = returnText.replace(/<\/div>/ig, '\r\n')
    returnText = returnText.replace(/<\/li>/ig, '\r\n')
    returnText = returnText.replace(/<li>/ig, '  *  ')
    returnText = returnText.replace(/<\/ul>/ig, '\r\n')
    // returnText = returnText.replace(/<br\s*[\/]?>/gi, '\r\n')
    returnText = returnText.replace(/<br\/>/gi, '\r\n')
    returnText = returnText.replace(/<p.*?>/gi, '\r\n')
    returnText = returnText.replace(/<a.*href="(.*?)".*>(.*?)<\/a>/gi, ' $2 ($1)')
    returnText = returnText.replace(/<script.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/script>/gi, '')
    returnText = returnText.replace(/<style.*>[\w\W]{1,}(.*?)[\w\W]{1,}<\/style>/gi, '')
    returnText = returnText.replace(/<(?:.|\s)*?>/g, '')
    returnText = returnText.replace(/(?:(?:\r\n|\r|\n)\s*){2,}/gim, '\r\n\r\n')
    returnText = returnText.replace(/ +(?= )/g, '')
    returnText = returnText.replace(/ /gi, ' ')
    returnText = returnText.replace(/&/gi, '&')
    returnText = returnText.replace(/"/gi, '"')
    returnText = returnText.replace(/</gi, '<')
    returnText = returnText.replace(/>/gi, '>')

    return returnText
  }
}
