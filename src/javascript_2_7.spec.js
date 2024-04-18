// プロダクトコード
// function adhoc() {         // <- 使わなくなった関数を消します。
//   return 0                 //
// }                          //

function zero() {
  return 0
}

// テストコード
it('0 を返すこと', () => {
  expect(zero()).toBe(0)
})
