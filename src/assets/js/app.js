export default {
  // url: 'https://xcx.51mcr.com'
  url: 'http://192.168.1.175:9091',
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
