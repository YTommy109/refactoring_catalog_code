// プロダクトコード
function adhoc(value=0) {
  return value
}

// テストコード
it('0 を返すこと', () => {
  expect(adhoc(0)).toBe(0)    // <- 呼び出す側に引数を追加します。
})
