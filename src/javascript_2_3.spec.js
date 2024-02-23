// プロダクトコード
function getPi() {
  const pi = 3.14
  const ret = 3.14            // <- pi 依存から切り離します。
  return ret
}

// テストコード
it('3.14 を返すこと', () => {
  expect(getPi()).toBe(3.14)
})
