/**
 * @description 成功拍下，付款
 * @param {number} goodsId - 商品ID
 */
export const pay = (goodsId: number) => {
    const url = `/pay/goods/${goodsId}`;
    const method = Method.POST;
    return request({ url, method, needToken: true });
};