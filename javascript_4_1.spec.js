// プロダクトコード
function fizz(i) {                              // <- 関数を追加します
  return i===3 ? 'Fizz' : String(i)             // <- (ここにペースト)
}                                               // <-

function main() {
  const ret = []
  for (let i=1; i<=3; i++) {
    const temp = i === 3 ? 'Fizz' : String(i)   // <- (ここからコピー)
    ret.push(temp)
  }

  return ret
}

// テストコード
it('', () => {
  expect(main()).toEqual(['1', '2', 'Fizz'])
})
