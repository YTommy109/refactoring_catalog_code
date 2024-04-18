// プロダクトコード
function adhoc() {
  return 0
}

function zero() {
  return adhoc()
}

// テストコード
it('0 を返すこと', () => {
  expect(zero()).toBe(0)      // <- 新たな関数を使います。
})
