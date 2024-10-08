const {
  fromString,
  fromBufferToString,
  fromBufferToStringSimd,
  toBufferWithLength,
  toStringWithLength,
  shareArrayBuffer,
  shareBuffer,
} = require('./index')

let cases = [10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000]
let str = cases.map((c) => 'a'.repeat(c))

console.log('To Rust')

for (let i = 0; i < str.length; i++) {
  let item = str[i]
  console.log('========== case:', item.length, '==========')
  console.time(`fromString: ${item.length}`)
  fromString(item)
  console.timeEnd(`fromString: ${item.length}`)

  console.time(`Buffer.from: ${item.length}`)
  let buf = Buffer.from(item)
  console.timeEnd(`Buffer.from: ${item.length}`)

  console.time(`fromBufferToString: ${item.length}`)
  fromBufferToString(buf)
  console.timeEnd(`fromBufferToString: ${item.length}`)

  console.time(`fromBufferToStringSimd: ${item.length}`)
  fromBufferToStringSimd(buf)
  console.timeEnd(`fromBufferToStringSimd: ${item.length}`)
}

console.log('\n\nTo JavaScript')

for (let i = 0; i < cases.length; i++) {
  console.log('========== case:', cases[i], '==========')
  let len = cases[i]
  console.time(`toBufferWithLength: ${len}`)
  let buf = toBufferWithLength(len)
  buf.toString('utf-8')
  console.timeEnd(`toBufferWithLength: ${len}`)

  console.time(`toStringWithLength: ${len}`)
  toStringWithLength(len)
  console.timeEnd(`toStringWithLength: ${len}`)
}

console.log('\n\nShare Buffer')

for (let i = 0; i < str.length; i++) {
  let buf = Buffer.from(str[i])
  console.log('========== case:', str[i].length, '==========')

  console.time(`shareArrayBuffer: ${str[i].length}`)
  shareArrayBuffer(buf)
  console.timeEnd(`shareArrayBuffer: ${str[i].length}`)

  console.time(`shareBuffer: ${str[i].length}`)
  shareBuffer(buf)
  console.timeEnd(`shareBuffer: ${str[i].length}`)
}
