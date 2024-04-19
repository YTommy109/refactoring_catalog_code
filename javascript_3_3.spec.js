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
  return raise(value, 5)                // <- 追加した関数に置き換えます。
}

function raise10(value) {
  return raise(value, 10)               // <- 追加した関数に置き換えます。
}

// テストコード
it('5 倍になること', () => {
  expect(raise5(2)).toBe(10)
})

it('10 倍になること', () => {
  expect(raise10(2)).toBe(20)
})
