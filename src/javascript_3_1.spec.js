// プロダクトコード
function adhoc(value=0) {
  return value                // <-　仮引数を使うように変えます。
}

// テストコード
it('0 を返すこと', () => {
  expect(adhoc()).toBe(0)
})
