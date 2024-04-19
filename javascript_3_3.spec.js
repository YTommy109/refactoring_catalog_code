/**
 * タイトル: 3.3. 関数の統合
 * シナリオ:
 *    似たような関数を一つにまとめます。
 */

// プロダクトコード
function raise5(value) {
  const multiplier = 5
  const ret = value * multiplier        // <- 式をローカル変数にします
  return value * multiplier
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
