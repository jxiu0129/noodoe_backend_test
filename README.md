# Noodoe Backend Test

<!-- 面試用測驗 -->

<!-- [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier) -->

## Installation

```shell
git clone https://github.com/jxiu0129/noodoe_backend_test.git
cd noodoe_backend_test
yarn install && yarn start
```

## Request

-   [x] 請使用任何一種 backend 套件(node.js 尤佳) ,建立一個 backend service, 並且符合底下這幾個需求
-   [x] 每一個小時,此 server 去[中央氣象局開放資料平臺](https://opendata.cwb.gov.tw/index)抓取臺北市,新北市,桃園市即時天氣資訊, 並且存到 DB
-   [x] 提供一個 API, 讓合法使用者（定義是擁有 API key 的使用者）可以查詢這三個城市的天氣資訊, 此天氣資訊直接從 DB 讀取.

## How To Use

-   在根目錄匯入.env 檔
-   執行`yarn start`之後，可開啟 [swagger API doc](http://localhost:3000/api-docs) 做查看
-   流程：
    1. 註冊（email, pwd）
    2. 登入後取得 jwt
    3. header.x-access-token 帶入步驟 2 所取得的 jwt，district 可帶入['臺北市','新北市','桃園市']，或不帶入 district 參數取得所有的城市天氣資料

## Source Code File Structure

```
├── README.md
├── app
│   ├── config
│   │   ├── MongoDB.js
│   │   ├── Schedule.js
│   │   └── index.js
│   ├── controllers
│   │   ├── user.controller.js
│   │   └── weather.controller.js
│   ├── dao
│   │   ├── user.dao.js
│   │   └── weather.dao.js
│   ├── logic
│   │   ├── user.logic.js
│   │   └── weather.logic.js
│   ├── models
│   │   ├── User.model.js
│   │   └── Weather.model.js
│   ├── routes
│   │   ├── index.js
│   │   ├── user.route.js
│   │   └── weather.route.js
│   ├── services
│   └── utils
│       ├── ApiResponse.js
│       ├── ApiServices.js
│       ├── Permission.js
│       └── index.js
├── index.js
├── package.json
├── swagger.yaml
├── yarn-error.log
└── yarn.lock
```
