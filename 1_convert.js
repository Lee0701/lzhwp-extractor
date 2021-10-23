
const fs = require('fs')
const xmljs = require('xml-js')

const text = fs.readFileSync('zh_classicalwiki-20211001-pages-articles.xml').toString()
const json = xmljs.xml2js(text)

fs.writeFileSync('zh_classicalwiki.json', JSON.stringify(json))
