# NAPI-benches

## String performance

Run `node ./bench.js` to get the following results:

```
To Rust
========== case: 1000 ==========
fromString: 1000: 0.037ms
Buffer.from: 1000: 0.013ms
fromBufferToString: 1000: 0.008ms
fromBufferToStringSimd: 1000: 0.003ms
========== case: 10000 ==========
fromString: 10000: 0.01ms
Buffer.from: 10000: 0.014ms
fromBufferToString: 10000: 0.002ms
fromBufferToStringSimd: 10000: 0.002ms
========== case: 100000 ==========
fromString: 100000: 0.061ms
Buffer.from: 100000: 0.092ms
fromBufferToString: 100000: 0.017ms
fromBufferToStringSimd: 100000: 0.005ms
========== case: 1000000 ==========
fromString: 1000000: 0.649ms
Buffer.from: 1000000: 0.796ms
fromBufferToString: 1000000: 0.131ms
fromBufferToStringSimd: 1000000: 0.02ms
========== case: 10000000 ==========
fromString: 10000000: 6.234ms
Buffer.from: 10000000: 7.166ms
fromBufferToString: 10000000: 1.401ms
fromBufferToStringSimd: 10000000: 0.193ms
========== case: 100000000 ==========
fromString: 100000000: 56.714ms
Buffer.from: 100000000: 69.664ms
fromBufferToString: 100000000: 13.693ms
fromBufferToStringSimd: 100000000: 1.73ms


To JavaScript
========== case: 1000 ==========
toBufferWithLength: 1000: 0.06ms
toStringWithLength: 1000: 0.002ms
========== case: 10000 ==========
toBufferWithLength: 10000: 0.672ms
toStringWithLength: 10000: 0.007ms
========== case: 100000 ==========
toBufferWithLength: 100000: 0.033ms
toStringWithLength: 100000: 0.025ms
========== case: 1000000 ==========
toBufferWithLength: 1000000: 0.242ms
toStringWithLength: 1000000: 0.272ms
========== case: 10000000 ==========
toBufferWithLength: 10000000: 1.485ms
toStringWithLength: 10000000: 1.923ms
========== case: 100000000 ==========
toBufferWithLength: 100000000: 22.889ms
toStringWithLength: 100000000: 30.22ms
```

_Profile was generated on MacBook Pro Apple M2 Max, 64GB_
