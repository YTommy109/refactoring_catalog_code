// プロダクトコード
function main(value) {
  let ans = null
  if (value>=50) {
    ans = 'High'
  } else {
    ans = 'Low'
  }
  return ans
}

// テストコード
it('49 なら Low になること', () => {
  expect(main(49)).toEqual('Low')
})
it('50 なら High になること', () => {
  expect(main(50)).toEqual('High')
})
