# Project Overview
Quiz Voyageは、クイズを出題するWebアプリケーションです。フロントエンドとバックエンドの２層構造からなります。
アプリ名: Quiz Voyage
主要機能: クイズの出題、答えの表示
- フロントエンド：React, Typescript
- バックエンド: python, fastapi
- DB: 現状未定（一旦レポジトリ内に設置したjsonlファイルから読み込む形で開発）

## ディレクトリ説明
- `backend`: バックエンドを実装する
- `frontend`: フロントエンドを実装する
- `rules`: プロジェクトの共通ルールを格納する。CLAUDE.mdを書く時に、共通ルールはここから **@import** する