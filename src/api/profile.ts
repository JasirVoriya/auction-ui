/**
 * @description 获取当前登录用户信息
 */
export const getUserProfile = () => {
    return request({
        url: `profile/info`,
        method: Method.GET,
        needToken: true
    });
}