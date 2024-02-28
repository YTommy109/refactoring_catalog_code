// プロダクトコード
function highAndLow(value) {  // <- 関数を作成します
  let ans = null              // <- コピペ
  if (value>=50) {            // <- コピペ
    ans = 'High'              // <- コピペ
  } else {                    // <- コピペ
    ans = 'Low'               // <- コピペ
  }                           // <- コピペ
  return ans                  // <- コピペ
}                             // <- 関数の作成
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
