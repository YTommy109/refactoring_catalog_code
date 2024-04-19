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
  // const multiplier = 5               // <- 使わなくなった変数を消します
  return raise(value, 5)
}

function raise10(value) {
  return value * 10
}

// テストコード
it('5 倍になること', () => {
  expect(raise5(2)).toBe(10)
})

it('10 倍になること', () => {
  expect(raise10(2)).toBe(20)
})
