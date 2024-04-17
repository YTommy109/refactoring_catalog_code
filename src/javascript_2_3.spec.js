// プロダクトコード
function getPi() {
  const ret = 3.14
  return ret
}

// テストコード
it('3.14 を返すこと', () => {
  expect(getPi()).toBe(3.14)
})
