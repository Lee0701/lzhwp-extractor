
const fs = require('fs')

const json = JSON.parse(fs.readFileSync('zh_classicalwiki.json').toString())

const texts = json.elements[0].elements.map((element) => {
    const revision = element.elements.find(({name}) => name == 'revision')
    if(!revision) return
    const text1 = revision.elements.find(({name}) => name == 'text')
    if(!text1 || !text1.elements) return
    const text2 = text1.elements.find(({type}) => type == 'text')
    if(!text2) return
    return text2.text
}).filter((t) => t)

fs.writeFileSync('out.json', JSON.stringify(texts, null, 1))
