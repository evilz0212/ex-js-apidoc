/**
 * @apiGroup Product
 * @api {get} /prod/:id GetProductInfo
 * @apiName GetProductInfo
 * @apiVersion 0.1.0
 * @apiDescription 取得產品資訊
 * @apiPermission -
 *
 * @apiUse HeaderDefault
 *
 * @apiParam {Number} id 產品ID
 *
 *
 * @apiSuccess {Number} id 產品ID
 * @apiSuccess {String} name 產品名稱
 * @apiSuccessExample 取得資訊
 *     {
 *       "id": 1,
 *       "name": iPhone XS
 *     }
 *
 *
 * @apiError {String} error 錯誤狀態碼
 * @apiError {String} msg 錯誤訊息
 * @apiErrorExample 403-查詢失敗
 *     {
 *       "errCode": "1005"
 *       "errMsg": "查無此商品id"
 *     }
 */
