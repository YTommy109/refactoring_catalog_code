/**
 * タイトル: 3.3. 関数の統合
 * シナリオ:
 *    似たような関数を一つにまとめます。
 */

// プロダクトコード
function raise(value, multiplier) {
  return value * multiplier
}

function raise5(value) {
  return raise(value, 5)
}

function raise10(value) {
  return raise(value, 10)
}

// テストコード
it('5 倍になること', () => {
  expect(raise(2, 5)).toBe(10)          // <- 新しい関数への置き換えます
})

it('10 倍になること', () => {
  expect(raise(2, 10)).toBe(20)         // <- 新しい関数への置き換えます
})
