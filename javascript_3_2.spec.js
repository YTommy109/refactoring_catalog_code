/**
 * タイトル: 3.2. 関数の仮引数の変更
 * シナリオ:
 *    面積の計算と単位の付与を同時に行っているのが気になります。分離しましょう。
 */

// プロダクトコード
function square(size, unit) {
  const menseki = size * size
  return menseki + ' ' + unit
}

function square_new(size) {
  return size * size                    // <- 面積の計算を関数に切り出します。
}

// テストコード
it('正方形の面積を求める', () => {
  expect(square(5, '㎡')).toBe('25 ㎡')
})
