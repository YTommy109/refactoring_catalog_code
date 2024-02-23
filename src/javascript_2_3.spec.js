// プロダクトコード
function getPi() {
  const pi = 3.14
  const ret = pi
  return ret                  // <- 戻り値を新たな変数に変えます。
}

// テストコード
it('3.14 を返すこと', () => {
  expect(getPi()).toBe(3.14)
})
