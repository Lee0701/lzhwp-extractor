
const fs = require('fs')
const wtf = require('wtf_wikipedia')

const texts = JSON.parse(fs.readFileSync('./out.json').toString())
const result = texts.map((text) => {
    try {
        return wtf(text).text().replace(/\n{2,}/g, '\n')
    } catch(e) {
        return
    }
}).filter((text) => text)

fs.writeFileSync('out.txt', result.join('\n\n'))
