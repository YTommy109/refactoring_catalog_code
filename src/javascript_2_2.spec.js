// プロダクトコード
function menseki(r) {
  const pi = 3.14
  const ret = r*r*3.14        // <- pi をインライン化します。
  return ret
}

// テストコード
it('半径 2 の円の面積が 12.56 であること', () => {
  expect(menseki(2)).toBe(12.56)
})
