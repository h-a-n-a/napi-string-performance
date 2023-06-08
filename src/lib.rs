#![deny(clippy::all)]

use criterion::black_box;
use napi::bindgen_prelude::*;
use napi_derive::napi;

#[napi]
pub fn from_string(input: String) {
  let _ = black_box(input);
}

#[napi]
pub fn from_buffer_to_string(input: Buffer) {
  let buf = black_box(input);
  let _ = black_box(String::from_utf8(buf.to_vec())).unwrap();
}

#[napi]
pub fn from_buffer_to_string_simd(input: Buffer) {
  let buf = black_box(input);
  let _ = black_box(simdutf8::basic::from_utf8(buf.as_ref()))
    .unwrap()
    .to_owned();
}

#[napi]
pub fn to_buffer_with_length(len: u32) -> Buffer {
  let buf = b"a".repeat(len as usize);
  Buffer::from(buf)
}

#[napi]
pub fn to_string_with_length(len: u32) -> String {
  let buf = b"a".repeat(len as usize);
  String::from_utf8(buf).unwrap()
}
