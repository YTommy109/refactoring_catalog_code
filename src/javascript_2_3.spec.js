// プロダクトコード
function getPi() {
  const pi = 3.14
  const ret = pi              // <- 新たな変数を作ります。
  return pi
}

// テストコード
it('3.14 を返すこと', () => {
  expect(getPi()).toBe(3.14)
})
