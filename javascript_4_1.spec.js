// プロダクトコード
function fizz(val) {
  return val===3 ? 'Fizz' : String(val)
}

function main() {
  let ret = []

  ret = [1,2,3].map(fizz)

  return [1,2,3].map(fizz)        // <- 変数のインライン化をします
}

// テストコード
it('', () => {
  expect(main()).toEqual(['1', '2', 'Fizz'])
})
