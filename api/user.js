/**
 * @apiGroup User
 * @api {post} /user/:id PostLogin
 * @apiName PostLogin
 * @apiVersion 0.1.0
 * @apiDescription 使用者登入
 * @apiPermission -
 *
 * @apiUse HeaderDefault
 *
 * @apiParam {String {6..20}} username 使用者帳號
 * @apiParam {String {8..20}} password 使用者密碼，須包含大小寫、數字。
 *
 *
 * @apiSuccess {String} token token令牌
 * @apiSuccessExample 登入成功
 *     {
 *       "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvY2FybG9zLXdlYmF1dGhuLWV4YW1wbGUudGtcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2MTAwODkwNjUsImV4cCI6MTYxMDA5MjY2NSwibmJmIjoxNjEwMDg5MDY1LCJqdGkiOiI4MjNYNW81V3hGTXY1TnJkIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.CAgjN_u6tSyGDsWNh_3kQKzEOAt9CFGx0lNuMW3uJdU"
 *     }
 *
 *
 * @apiError {String} error 錯誤狀態碼
 * @apiError {String} msg 錯誤訊息
 * @apiErrorExample 401-登入失敗
 *     {
 *       "errCode": "1001"
 *       "errMsg": "帳號或密碼錯誤"
 *     }
 */

/**
 * @apiGroup User
 * @api {get} /user/:id GetUser
 * @apiName GetUser
 * @apiVersion 0.1.0
 * @apiDescription 取得使用者資料
 * @apiPermission 會員
 *
 * @apiUse HeaderDefault
 *
 * @apiParam {Number} id 使用者ID
 *
 *
 * @apiSuccess {Object} user 使用者資料
 * @apiSuccess {Number} user.id 使用者ID
 * @apiSuccess {String} user.name 使用者姓名
 * @apiSuccessExample 登入成功
 *     {
 *       "user": {
 *          "id": 1,
 *          "name": "Carlos"
 *       }
 *     }
 *
 *
 * @apiError {String} error 錯誤狀態碼
 * @apiError {String} msg 錯誤訊息
 * @apiErrorExample 401-登入失效
 *     {
 *       "errCode": "1002"
 *       "errMsg": "令牌已過期"
 *     }
 */
