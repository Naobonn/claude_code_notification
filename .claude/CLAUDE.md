# CLAUDE.md

## Conversation Guidelines

- YOU MUST consider in ENGLISH and YOU MUST use JAPANESE when you explain what you did.
- 常に英語で思考し、日本語でやったことを説明してください。

## Development Philosophy

### Test-Driven Development (TDD)

- 原則としてテスト駆動開発（TDD）で進める
- 期待される入出力に基づき、まずテストを作成する
- 実装コードは書かず、テストのみを用意する
- テストでは、モックを使わない。実際のWeb接続を使用する。
- テストを実行し、失敗を確認する
- テストが正しいことを確認できた段階でコミットする
- その後、テストをパスさせる実装を進める
- 実装中はテストを変更せず、コードを修正し続ける
- すべてのテストが通過するまで繰り返す
