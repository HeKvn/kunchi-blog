import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'

export const markdown = new MarkdownIt('default', {
  highlight: (str: string, lang: string) => {
    // 判断是否有添加代码语言
    if (lang && hljs.getLanguage(lang)) {
      try {
        // 得到经过highlight.js之后的html代码
        const preCode = hljs.highlight(lang, str, true).value
        // 以换行进行分割
        const lines = preCode.split(/\n/).slice(0, -1)
        // 添加自定义行号
        let html = lines.map((item, index) => {
          return `<li><span class="line-num" data-line="${index + 1}">${item}</span></li>`
        }).join('')
        html = `<ol>${html}</ol>`
        // 添加代码语言
        if (lines.length) {
          html += `<b class="name">${lang}</b>`
        }
        return `<pre class="hljs"><code>${html}</code></pre>`
      } catch (__) {
        console.log('代码高亮失败')
      }
    }
    // 未添加代码语言
    const preCode: string = markdown.utils.escapeHtml(str)
    const lines = preCode.split(/\n/).slice(0, -1)
    let html = lines.map((item, index) => {
      return `<li><span class="line-num" data-line="${index + 1}">${item}</span></li>`
    }).join('')
    html = `<ol>${html}</ol>`
    return `<pre class="hljs"><code>${html}</code></pre>`
  }
})
