# 『基礎から学ぶ Next.js』ハンズオンプロジェクト

このプロジェクトは、Next.jsを使用したアプリケーションの開発を学ぶためのハンズオンコードです。以下の内容は、プロジェクトの構成や使用方法についての説明です。

## プロジェクト構成

- **src/pages/_app.js**: アプリケーションのエントリポイントで、全ページに共通するレイアウトやスタイルを設定します。
- **src/pages/_document.js**: カスタムドキュメントを定義し、HTMLの構造をカスタマイズします。
- **src/pages/index.js**: アプリケーションのホームページを定義します。
- **src/styles/globals.css**: 全体のスタイルを定義するCSSファイルです。
- **src/components**: 再利用可能なReactコンポーネントが格納されます。
- **public**: 静的ファイル（画像やフォントなど）が格納されます。
- **package.json**: npmの設定ファイルで、依存関係やスクリプトがリストされています。
- **next.config.js**: Next.jsの設定ファイルで、ビルドや開発サーバーの設定を行います。
- **jsconfig.json**: JavaScriptプロジェクトの設定ファイルで、エディタの補完機能を向上させます。
- **.devcontainer/devcontainer.json**: GitHub Codespacesの設定ファイルで、開発環境の構成を定義します。
- **.devcontainer/Dockerfile**: Dockerイメージのビルドに使用される設定ファイルです。
- **.gitignore**: Gitで無視するファイルやディレクトリを指定します。

## GitHub Codespacesでの開発環境の設定

このプロジェクトでは、GitHub Codespacesを使用してNext.jsのローカル開発環境を整えるための設定が含まれています。

### 必要な定義ファイル

1. **.devcontainer/devcontainer.json**
   {
     "name": "Next.js Development",
     "build": {
       "dockerfile": "Dockerfile",
       "context": ".."
     },
     "settings": {
       "terminal.integrated.shell.linux": "/bin/bash"
     },
     "extensions": [
       "esbenp.prettier-vscode",
       "dbaeumer.vscode-eslint"
     ],
     "postCreateCommand": "npm install"
   }

2. **.devcontainer/Dockerfile**
   FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-14
   RUN npm install -g npm@latest

これにより、GitHub CodespacesでNext.jsのローカル開発環境が整います。