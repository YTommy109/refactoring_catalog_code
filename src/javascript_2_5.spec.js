// プロダクトコード
function fizzbuzz() {
  const ret = []
  for (let i=1; i<=3; i++) {
    let temp = null
    if (i===3) {
      temp = 'Fizz'
    } else {
      temp = String(i)
    }

    ret[i-1] = hantei(i)              // 関数を使うようにします
  }

  return ret
}

function hantei(i) {
  let temp = null
  if (i===3) {
    temp = 'Fizz'
  } else {
    temp = String(i)
  }

  return temp
}

// テストコード
it('1から3までの FizzBuzz を取れること', () => {
  expect(fizzbuzz()).toEqual(['1', '2', 'Fizz'])
})