// プロダクトコード
function fizzbuzz() {
  const ret = []
  for (let i=1; i<=3; i++) {
    let temp = null
    if (i===3) {
      // ret[i-1] = 'Fizz'              // <- 使わなくなったので消します
      temp = 'Fizz'
    } else {
      // ret[i-1] = String(i)           // <- 使わなくなったので消します
      temp = String(i)
    }
    ret[i-1] = temp
  }

  return ret
}

// テストコード
it('1から3までの FizzBuzz を取れること', () => {
  expect(fizzbuzz()).toEqual(['1', '2', 'Fizz'])
})
