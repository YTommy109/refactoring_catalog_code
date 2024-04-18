// プロダクトコード
function adhoc() {
  return 0
}

function zero() {             // <- 新たに関数を作ります。
  return adhoc()              // <- 元の関数を呼び出すだけです。
}

// テストコード
it('0 を返すこと', () => {
  expect(adhoc()).toBe(0)
})
