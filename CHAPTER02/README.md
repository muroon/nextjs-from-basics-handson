# 全体

このプロジェクトはTypeScriptベースのNext.jsアプリケーションとして構成されています。

### 主要ディレクトリとファイル
- lib/component/
  - コンポーネントが格納されているディレクトリ
  - 例: `Post.tsx` - ブログ記事表示用のコンポーネント
- pages/
  - Next.jsのページコンポーネントが配置されるディレクトリ

### 設定ファイル
- next.config.js - Next.jsの設定ファイル
- .babelrc - Babel設定ファイル
- tsconfig.json - TypeScript設定
- .eslintrc.json - ESLint設定

### その他
- .next/ - ビルド成果物が格納されるディレクトリ
- package.json - プロジェクトの依存関係管理
- .env.local - 環境変数設定ファイル

# CHAPTER02/pages ディレクトリの構造説明

## ファイル構成

### 1. index.tsx
メインページのコンポーネントを含むファイルです。主な機能：

- Notionとの連携（DatabaseとAPI通信）
- ブログ記事の一覧表示
- 型定義（`Post`, `Content`）
- データ取得ロジック（`getStaticProps`, `getPosts`, `getPostContents`）

主要な型定義：
```typescript
export type Post = {
    id: string;
    title: string | null;
    slug: string | null;
    createdTs: string | null;
    lastEditedTs: string | null;
    contents: Content[];
};
```

### 2. `[id].tsx` (動的ルーティング)
個別の記事ページを表示するためのファイル。
- 動的ルーティングを使用して各記事の詳細を表示
- `getStaticPaths`と`getStaticProps`を使用したSSG対応

### 3. `_app.tsx`
アプリケーション全体の共通レイアウトや設定を管理。
- グローバルスタイルの適用
- 共通のレイアウトコンポーネントの適用

### 4. `_document.tsx`
HTMLドキュメントのカスタマイズ用。
- メタタグの設定
- 外部スクリプトやスタイルシートの追加

## 特徴
- TypeScriptを使用した型安全な実装
- Next.jsのSSG（Static Site Generation）機能を活用
- NotionをヘッドレスCMSとして利用
- コンポーネントベースのアーキテクチャ
