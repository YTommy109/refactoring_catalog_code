// プロダクトコード
function getPi() {
  const pi = 3.14
  return pi
}

// テストコード
it('3.14 を返すこと', () => {
  expect(getPi()).toBe(3.14)
})
