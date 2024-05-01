// プロダクトコード
function fizz(val) {
  return val===3 ? 'Fizz' : String(val)
}

function main() {
  const ret = []
  for (let i=1; i<=3; i++) {
    ret.push(fizz(i))                     // <- 変数をインライン化します
  }

  return ret
}

// テストコード
it('', () => {
  expect(main()).toEqual(['1', '2', 'Fizz'])
})
