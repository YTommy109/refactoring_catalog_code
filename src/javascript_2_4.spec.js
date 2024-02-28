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
  ans = highAndLow(value)
  return ans
}

// テストコード
it('49 なら Low になること', () => {
  expect(highAndLow(49)).toEqual('Low')  // <- highAndLow のテストに変えます
})
it('50 なら High になること', () => {
  expect(highAndLow(50)).toEqual('High')  // <- highAndLow のテストに変えます
})
