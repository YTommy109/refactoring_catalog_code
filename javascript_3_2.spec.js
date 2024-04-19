/**
 * タイトル: 3.2. 関数の仮引数の変更
 * シナリオ:
 *    面積の計算と単位の付与を同時に行っているのが気になります。分離しましょう。
 */

// プロダクトコード
function square(size, unit) {
  const menseki = size * size
  return menseki + ' ' + unit     // <- 変数利用に書き換えます。
}

// テストコード
it('正方形の面積を求める', () => {
  expect(square(5, '㎡')).toBe('25 ㎡')
})
