// プロダクトコード
function adhoc(value=0) {   // <- デフォルト値付きで仮引数を追加します。
  return 0
}

// テストコード
it('0 を返すこと', () => {
  expect(adhoc()).toBe(0)
})
