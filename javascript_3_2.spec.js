/**
 * タイトル: 3.2. 関数の仮引数の変更
 * シナリオ:
 *    面積の計算と単位の付与を同時に行っているのが気になります。分離しましょう。
 */

// プロダクトコード
function square(size, unit) {
  return square_new(size) + ' ' + unit
}

function square_new(size) {
  return size * size
}

// テストコード
it('正方形の面積を求める', () => {
  expect(square_new(5) + ' ㎡').toBe('25 ㎡')  // <- 新しい関数に置き換えます
})
