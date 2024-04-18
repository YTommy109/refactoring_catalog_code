// プロダクトコード
function adhoc(value=0) {
  return value
}

// テストコード
it('0 を返すこと', () => {
  expect(adhoc(0)).toBe(0)
})
it('1 を返すこと', () => {      // <- 引数が使われていることを確認するテストを追加します。
  expect(adhoc(0)).toBe(1)    // <- エラーになるように書きます。
})
