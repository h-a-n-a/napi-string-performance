# NAPI-benches

## String performance

Run `node ./bench.js` to get the following results:

```
To Rust
========== case: 10 ==========
fromString: 10: 0.035ms
Buffer.from: 10: 0.013ms
fromBufferToString: 10: 0.004ms
fromBufferToStringSimd: 10: 0.002ms
========== case: 100 ==========
fromString: 100: 0.002ms
Buffer.from: 100: 0.006ms
fromBufferToString: 100: 0.002ms
fromBufferToStringSimd: 100: 0.002ms
========== case: 1000 ==========
fromString: 1000: 0.003ms
Buffer.from: 1000: 0.011ms
fromBufferToString: 1000: 0.002ms
fromBufferToStringSimd: 1000: 0.002ms
========== case: 10000 ==========
fromString: 10000: 0.006ms
Buffer.from: 10000: 0.012ms
fromBufferToString: 10000: 0.002ms
fromBufferToStringSimd: 10000: 0.002ms
========== case: 100000 ==========
fromString: 100000: 0.064ms
Buffer.from: 100000: 0.078ms
fromBufferToString: 100000: 0.017ms
fromBufferToStringSimd: 100000: 0.003ms
========== case: 1000000 ==========
fromString: 1000000: 0.549ms
Buffer.from: 1000000: 0.68ms
fromBufferToString: 1000000: 0.122ms
fromBufferToStringSimd: 1000000: 0.018ms
========== case: 10000000 ==========
fromString: 10000000: 5.726ms
Buffer.from: 10000000: 7.259ms
fromBufferToString: 10000000: 1.485ms
fromBufferToStringSimd: 10000000: 0.179ms
========== case: 100000000 ==========
fromString: 100000000: 58.488ms
Buffer.from: 100000000: 73.384ms
fromBufferToString: 100000000: 13.751ms
fromBufferToStringSimd: 100000000: 1.68ms


To JavaScript
========== case: 10 ==========
toBufferWithLength: 10: 0.051ms
toStringWithLength: 10: 0.002ms
========== case: 100 ==========
toBufferWithLength: 100: 0.637ms
toStringWithLength: 100: 0.002ms
========== case: 1000 ==========
toBufferWithLength: 1000: 0.008ms
toStringWithLength: 1000: 0.002ms
========== case: 10000 ==========
toBufferWithLength: 10000: 0.006ms
toStringWithLength: 10000: 0.003ms
========== case: 100000 ==========
toBufferWithLength: 100000: 0.091ms
toStringWithLength: 100000: 0.031ms
========== case: 1000000 ==========
toBufferWithLength: 1000000: 0.229ms
toStringWithLength: 1000000: 0.263ms
========== case: 10000000 ==========
toBufferWithLength: 10000000: 1.415ms
toStringWithLength: 10000000: 1.818ms
========== case: 100000000 ==========
toBufferWithLength: 100000000: 22.415ms
toStringWithLength: 100000000: 30.59ms


Share Buffer
========== case: 10 ==========
shareArrayBuffer: 10: 0.002ms
shareBuffer: 10: 0.002ms
========== case: 100 ==========
shareArrayBuffer: 100: 0.001ms
shareBuffer: 100: 0.001ms
========== case: 1000 ==========
shareArrayBuffer: 1000: 0.001ms
shareBuffer: 1000: 0.001ms
========== case: 10000 ==========
shareArrayBuffer: 10000: 0.001ms
shareBuffer: 10000: 0.001ms
========== case: 100000 ==========
shareArrayBuffer: 100000: 0.001ms
shareBuffer: 100000: 0.001ms
========== case: 1000000 ==========
shareArrayBuffer: 1000000: 0.001ms
shareBuffer: 1000000: 0.002ms
========== case: 10000000 ==========
shareArrayBuffer: 10000000: 0.003ms
shareBuffer: 10000000: 0.002ms
========== case: 100000000 ==========
shareArrayBuffer: 100000000: 0.004ms
shareBuffer: 100000000: 0.002ms
```

_Profile was generated on MacBook Pro Apple M2 Max, 64GB_
