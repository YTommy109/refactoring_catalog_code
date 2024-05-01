// プロダクトコード
function main() {
  const ret = []
  for (let i=1; i<=3; i++) {
    const temp = i === 3 ? 'Fizz' : String(i)   // <- 変数を抽出します
    ret.push(temp)
  }

  return ret
}

// テストコード
it('', () => {
  expect(main()).toEqual(['1', '2', 'Fizz'])
})
