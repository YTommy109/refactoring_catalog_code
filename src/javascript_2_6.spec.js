// プロダクトコード
function highAndLow(value) {
  let ans = 'Low'
  if (value >= 50) {
    ans = 'High'
  }
  return ans
}

// テストコード
it('49 なら Low になること', () => {
  expect(highAndLow(49)).toEqual('Low')
})
it('50 なら High になること', () => {
  expect(highAndLow(50)).toEqual('High')
})
