// プロダクトコード
function menseki(r) {
  const ret = r*r*3.14
  return r*r*3.14             // <- 式をインライン化します。
}

// テストコード
it('半径 2 の円の面積が 12.56 であること', () => {
  expect(menseki(2)).toBe(12.56)
})
