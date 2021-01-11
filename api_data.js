define({ "api": [
  {
    "group": "Product",
    "type": "get",
    "url": "/prod/:id",
    "title": "GetProductInfo",
    "name": "GetProductInfo",
    "version": "0.1.0",
    "description": "<p>取得產品資訊</p>",
    "permission": [
      {
        "name": "-"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>產品ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>產品ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>產品名稱</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "取得資訊",
          "content": "{\n  \"id\": 1,\n  \"name\": iPhone XS\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>錯誤狀態碼</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>錯誤訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "403-查詢失敗",
          "content": "{\n  \"errCode\": \"1005\"\n  \"errMsg\": \"查無此商品id\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/product.js",
    "groupTitle": "Product",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>接受的回應類型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Origin",
            "description": "<p>允許域名</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Methods",
            "description": "<p>允許方法</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Headers",
            "description": "<p>允許標頭</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token令牌(bearer)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Accept: application/json\"\n\"Access-Control-Allow-Origin: carlos.example.com\"\n\"Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, DELETE\"\n\"Access-Control-Allow-Headers: Origin, Content-Type, Accept\"\n\"Authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY2FybG9zLXdlYmF1dGhuLWV4YW1wbGUudGtcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MTAwODkwNjUsImV4cCI6MTYxMDA5MjY2NSwibmJmIjoxNjEwMDg5MDY1LCJqdGkiOiI4MjNYNW81V3hGTXY1TnJkIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.CAgjN_u6tSyGDsWNh_3kQKzEOAt9CFGx0lNuMW3uJdU\"",
          "type": "Header"
        }
      ]
    }
  },
  {
    "group": "User",
    "type": "get",
    "url": "/user/:id",
    "title": "GetUser",
    "name": "GetUser",
    "version": "0.1.0",
    "description": "<p>取得使用者資料</p>",
    "permission": [
      {
        "name": "會員"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>使用者ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>使用者資料</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user.id",
            "description": "<p>使用者ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.name",
            "description": "<p>使用者姓名</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "登入成功",
          "content": "{\n  \"user\": {\n     \"id\": 1,\n     \"name\": \"Carlos\"\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>錯誤狀態碼</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>錯誤訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-登入失效",
          "content": "{\n  \"errCode\": \"1002\"\n  \"errMsg\": \"令牌已過期\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>接受的回應類型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Origin",
            "description": "<p>允許域名</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Methods",
            "description": "<p>允許方法</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Headers",
            "description": "<p>允許標頭</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token令牌(bearer)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Accept: application/json\"\n\"Access-Control-Allow-Origin: carlos.example.com\"\n\"Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, DELETE\"\n\"Access-Control-Allow-Headers: Origin, Content-Type, Accept\"\n\"Authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY2FybG9zLXdlYmF1dGhuLWV4YW1wbGUudGtcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MTAwODkwNjUsImV4cCI6MTYxMDA5MjY2NSwibmJmIjoxNjEwMDg5MDY1LCJqdGkiOiI4MjNYNW81V3hGTXY1TnJkIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.CAgjN_u6tSyGDsWNh_3kQKzEOAt9CFGx0lNuMW3uJdU\"",
          "type": "Header"
        }
      ]
    }
  },
  {
    "group": "User",
    "type": "post",
    "url": "/user/:id",
    "title": "PostLogin",
    "name": "PostLogin",
    "version": "0.1.0",
    "description": "<p>使用者登入</p>",
    "permission": [
      {
        "name": "-"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "size": "6..20",
            "optional": false,
            "field": "username",
            "description": "<p>使用者帳號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "size": "8..20",
            "optional": false,
            "field": "password",
            "description": "<p>使用者密碼，須包含大小寫、數字。</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>token令牌</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "登入成功",
          "content": "{\n  \"token\": \"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY2FybG9zLXdlYmF1dGhuLWV4YW1wbGUudGtcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MTAwODkwNjUsImV4cCI6MTYxMDA5MjY2NSwibmJmIjoxNjEwMDg5MDY1LCJqdGkiOiI4MjNYNW81V3hGTXY1TnJkIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.CAgjN_u6tSyGDsWNh_3kQKzEOAt9CFGx0lNuMW3uJdU\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "error",
            "description": "<p>錯誤狀態碼</p>"
          },
          {
            "group": "Error 4xx",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>錯誤訊息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "401-登入失敗",
          "content": "{\n  \"errCode\": \"1001\"\n  \"errMsg\": \"帳號或密碼錯誤\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/user.js",
    "groupTitle": "User",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Accept",
            "description": "<p>接受的回應類型</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Origin",
            "description": "<p>允許域名</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Methods",
            "description": "<p>允許方法</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Access-Control-Allow-Headers",
            "description": "<p>允許標頭</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token令牌(bearer)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Header-Example",
          "content": "\"Accept: application/json\"\n\"Access-Control-Allow-Origin: carlos.example.com\"\n\"Access-Control-Allow-Methods: POST, GET, PUT, OPTIONS, DELETE\"\n\"Access-Control-Allow-Headers: Origin, Content-Type, Accept\"\n\"Authorization: bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY2FybG9zLXdlYmF1dGhuLWV4YW1wbGUudGtcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MTAwODkwNjUsImV4cCI6MTYxMDA5MjY2NSwibmJmIjoxNjEwMDg5MDY1LCJqdGkiOiI4MjNYNW81V3hGTXY1TnJkIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.CAgjN_u6tSyGDsWNh_3kQKzEOAt9CFGx0lNuMW3uJdU\"",
          "type": "Header"
        }
      ]
    }
  }
] });
