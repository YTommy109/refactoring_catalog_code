// プロダクトコード
function fizzbuzz() {
  const ret = []
  for (let i=1; i<=3; i++) {
    let temp = null
    if (i===3) {
      ret[i-1] = 'Fizz'
      temp = ret[i-1]
    } else {
      ret[i-1] = String(i)
      temp = ret[i-1]
    }
    ret[i-1] = temp                     // <- 一次変数を使用します
  }

  return ret
}

// テストコード
it('1から3までの FizzBuzz を取れること', () => {
  expect(fizzbuzz()).toEqual(['1', '2', 'Fizz'])
})
