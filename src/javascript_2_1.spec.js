// プロダクトコード
function menseki(r) {
                              // 一行空けます。
  return r*r*3.14
}

// テストコード
it('半径 2 の円の面積が 12.56 であること', () => {
  expect(menseki(2)).toBe(12.56)
})
