// プロダクトコード
function fizzbuzz() {
  const ret = []
  for (let i=1; i<=3; i++) {
                      // <- 行を空けます
    if (i===3) {
      ret[i-1] = 'Fizz'
                      // <- 行を空けます
    } else {
      ret[i-1] = String(i)
                      // <- 行を空けます
    }
  }

  return ret
}

// テストコード
it('1から3までの FizzBuzz を取れること', () => {
  expect(fizzbuzz()).toEqual(['1', '2', 'Fizz'])
})
