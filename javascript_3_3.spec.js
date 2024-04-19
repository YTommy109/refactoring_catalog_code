/**
 * タイトル: 3.3. 関数の統合
 * シナリオ:
 *    似たような関数を一つにまとめます。
 */

// プロダクトコード
function raise(value, multiplier) {
  return value * multiplier
}

// テストコード
it('5 倍になること', () => {
  expect(raise(2, 5)).toBe(10)
})

it('10 倍になること', () => {
  expect(raise(2, 10)).toBe(20
)})
