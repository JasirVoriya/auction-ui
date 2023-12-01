/**
 * @description 发送登录/注册验证码
 * @param {String} email 邮箱
 */
export const sendLoginCode = (email:String) => {
  return request({
    url: `email/login/${email}`,
    method: Method.GET,
  })
}