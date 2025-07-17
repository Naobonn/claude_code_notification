## 共通ルールの読み込み
@import ../../rules/common_rule.md
@import ../../rules/project_overview.md

## このプロジェクト固有の設定
- 使用言語: python
- テストコードは pytest を利用して作成する
- フロントとの通信にはFastAPIを用いる

## 仕様
レポジトリ内にあるクイズデータを読み込み、フロントエンドに転送する
クイズデータは`/backend/assets/aio_04_dev_v1.0.jsonl`に保存されている

