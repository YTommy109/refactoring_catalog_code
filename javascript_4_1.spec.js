// プロダクトコード
function fizz(val) {
  return val===3 ? 'Fizz' : String(val)
}

function main() {
  let ret = []
  // for (let i=1; i<=3; i++) {     // <- 消します
  //   ret.push(fizz(i))            // <-
  // }                              // <-
  ret = [1,2,3].map(fizz)

  return ret
}

// テストコード
it('', () => {
  expect(main()).toEqual(['1', '2', 'Fizz'])
})
