// プロダクトコード
function fizz(val) {
  return val===3 ? 'Fizz' : String(val)
}

function main() {
  let ret = []                      // <- let に変更します
  for (let i=1; i<=3; i++) {
    ret.push(fizz(i))
  }

  return ret
}

// テストコード
it('', () => {
  expect(main()).toEqual(['1', '2', 'Fizz'])
})
