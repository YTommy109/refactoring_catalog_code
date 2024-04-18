// プロダクトコード
function adhoc() {
  return 0
}

function zero() {
  return 0                    // <- 元の adhoc 関数の中身をコピペします
}

// テストコード
it('0 を返すこと', () => {
  expect(zero()).toBe(0)
})
