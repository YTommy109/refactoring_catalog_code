// プロダクトコード
function highAndLow(value) {
  let ans = null
  if (value>=50) {
    ans = 'High'
  } else {
    ans = 'Low'
  }
  return ans
}
function main(value) {
  let ans = null
  if (value>=50) {
    ans = 'High'
  } else {
    ans = 'Low'
  }
  ans = highAndLow(value)   // <- 関数を使う行を追加します
  return ans
}

// テストコード
it('49 なら Low になること', () => {
  expect(main(49)).toEqual('Low')
})
it('50 なら High になること', () => {
  expect(main(50)).toEqual('High')
})
