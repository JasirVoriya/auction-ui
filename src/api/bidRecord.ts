/**
 * @description 出价
 * @param {number} goodsId - 商品ID
 * @param {number} price - 出价金额
 */
export const bid = (goodsId: number, price: number) => {
  const url = "/bid-record";
  const method = Method.POST;
  const data = { goodsId, price };
  return request({ url, method, data, needToken: true });
};

/**
 * @description 获取出价记录
 * @param {string} goodsId - 商品ID
 * @param {number} page - 页码
 * @param {number} size - 每页记录数
 */
export const getBidRecord = (goodsId: string, page: number, size: number) => {
  const url = `/bid-record/${goodsId}`;
  const method = Method.GET;
  const params = { page, size };
  return request({ url, method, params });
};