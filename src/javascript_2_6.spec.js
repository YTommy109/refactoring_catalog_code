// プロダクトコード
function isHigh(v) {
  const value = v             // <- 変数を用意します
  return v >= 50
}

function highAndLow(value) {
  let ans = 'Low'
  if (isHigh(value)) {
    ans = 'High'
  }
  return ans
}

// テストコード
it('49 なら false になること', () => {
  expect(isHigh(49)).toBe(false)
})
it('50 なら true になること', () => {
  expect(isHigh(50)).toBe(true)
})
it('49 なら Low になること', () => {
  expect(highAndLow(49)).toEqual('Low')
})
it('50 なら High になること', () => {
  expect(highAndLow(50)).toEqual('High')
})
