# try-Lambdalith-with-Hono

Hono + AWS API Gateway + AWS Lambda を使った REST API をお試し作成

## AWS

AWS API Gateway プロキシリソース
AWS Lambda 単一のラムダに Hono を設置
AWS SAM(CloudFormation)で簡単に API Gateway, Lambda, S3 リソースを作成

1 つの API エンドポイントで様々なルーティングの API を処理できる

## CI/CD

Github Actions で main への push をトリガーに自動デプロイ

## 利用技術

Hono

### API Endpoint

- [GET] "/" - ヘルスチェック用
- [GET] "/eri" - eri から挨拶してもらえる
- [GET] "/eri/feeling" - eri の機嫌を取得できる　ブチギレだと 500 エラーが返ってくる
- [POST] "/eri/calculate" - {"a": int, "b": int}のリクエストパラメーターを送ると足し算してくれる
