// プロダクトコード
function adhoc(value=0) {
  return value
}

// テストコード
it('0 を返すこと', () => {
  expect(adhoc(0)).toBe(0)
})
it('1 を返すこと', () => {
  expect(adhoc(1)).toBe(1)    // <- 正しい引数に直します。
})
