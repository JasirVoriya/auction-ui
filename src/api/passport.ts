/**
 * @description 密码登录
 * @param {String} account 账号
 * @param {String} password 密码
 */
export const passwordLogin = (account: String,password:String) => {
  return request({
    url: `passport/login/password`,
    method: Method.POST,
    data:{
      account,
      password
    }
  })
}
/**
 * @description 验证码登录
 * @param {String} email 邮箱
 * @param {String} code 验证码
 */
export const codeLogin = (email: String,code:String) => {
  return request({
    url: `passport/login/code`,
    method: Method.POST,
    data:{
      email,
      code
    }
  })
}