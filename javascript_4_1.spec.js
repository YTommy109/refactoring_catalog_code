// プロダクトコード
function fizz(val) {
  return val===3 ? 'Fizz' : String(val)
}

function main() {
  const ret = []
  for (let i=1; i<=3; i++) {
    const temp = fizz(i)                  // <- 追加した関数を使うようにします
    ret.push(temp)
  }

  return ret
}

// テストコード
it('', () => {
  expect(main()).toEqual(['1', '2', 'Fizz'])
})
