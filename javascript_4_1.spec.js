// プロダクトコード
function fizz(val) {                              // <- 引数名を変えます
  return val===3 ? 'Fizz' : String(val)           // <-
}

function main() {
  const ret = []
  for (let i=1; i<=3; i++) {
    const temp = i === 3 ? 'Fizz' : String(i)
    ret.push(temp)
  }

  return ret
}

// テストコード
it('', () => {
  expect(main()).toEqual(['1', '2', 'Fizz'])
})
