// プロダクトコード
function fizzbuzz() {
  const ret = []
  for (let i=1; i<=3; i++) {
    let temp = null                     // ここからコピペ
    if (i===3) {                        //
      temp = 'Fizz'                     //
    } else {                            //
      temp = String(i)                  //
    }                                   // ここまでコピペ

    ret[i-1] = temp
  }

  return ret
}

function hantei(i) {                    // <- 新規作成を作成します
  let temp = null                       // <- コピペ
  if (i===3) {                          // <- コピペ
    temp = 'Fizz'                       // <- コピペ
  } else {                              // <- コピペ
    temp = String(i)                    // <- コピペ
  }                                     // <- コピペ

  return temp                           // <- 戻り値を設定を追加します
}

// テストコード
it('1から3までの FizzBuzz を取れること', () => {
  expect(fizzbuzz()).toEqual(['1', '2', 'Fizz'])
})
