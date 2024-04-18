// プロダクトコード
function adhoc(value) {       // <-　デフォルト値を消します。
  return value
}

// テストコード
it('0 を返すこと', () => {
  expect(adhoc(0)).toBe(0)
})
it('1 を返すこと', () => {
  expect(adhoc(1)).toBe(1)
})
