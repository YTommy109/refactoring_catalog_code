# Refactoring Catalog Code

## 概要

このリポジトリは、コミット単位で細かくリファクタリング手順を表したものです。

## 使い方

### セットアップ

```sh
git clone git@github.com:YTommy109/refactoring_catalog_code.git
cd refactoring_catalog_code
pnpm install
```

### テスト実行

```sh
pnpm test
```

### コード参照

VSCode なのでコードを開いたまま、コミット履歴を追ってみて下さい。テストを通り続けたまま、細かくコードを変更する手順が分かります。

### jujutsu 推奨

git だと移動が面倒かもしれません。[jujuts](https://martinvonz.github.io/jj/v0.16.0/) なら `jj prev`, `jj next` で一つづつコミットを追いやすいと思います。

拙作の jujutsu の日本語の説明がこちらにあります。 [jujutsu こそ、僕たちの欲しかった VCS だ!!](https://zenn.dev/tommy109/articles/d63b46f398379c)
