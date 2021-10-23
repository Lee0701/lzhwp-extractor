
const fs = require('fs')

const text = fs.readFileSync('./out.txt').toString()

const result = text
        .replace(/([\u4E00-\u62FF\u6300-\u77FF\u7800-\u8CFF\u8D00-\u9FFF\u3400-\u4DBF])\./g, '$1。')
        .replace(/[^\s，．、。·？！：；《》「」『』〇\u4E00-\u62FF\u6300-\u77FF\u7800-\u8CFF\u8D00-\u9FFF\u3400-\u4DBF]/g, '')
        .replace(/[ \t]/g, '')
        .replace(/ ?\n ?/g, '\n')
        .replace(/\n{3,}/g, '\n\n')

fs.writeFileSync('./filtered.txt', result)