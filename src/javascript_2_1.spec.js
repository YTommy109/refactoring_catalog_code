// プロダクトコード
function menseki(r) {
  const pi = 3.14
  const ret = r*r*pi
  return ret                // <- 変数利用に変えます
}

// テストコード
it('半径 2 の円の面積が 12.56 であること', () => {
  expect(menseki(2)).toBe(12.56)
})
