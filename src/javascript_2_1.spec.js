// プロダクトコード
function menseki(r) {
  const pi = 3.14
  const ret = r*r*pi        // <- 変数を用意します。
  return r*r*pi
}

// テストコード
it('半径 2 の円の面積が 12.56 であること', () => {
  expect(menseki(2)).toBe(12.56)
})
