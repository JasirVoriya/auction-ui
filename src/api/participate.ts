/**
 * @description 参拍并支付
 * @param {number} goodsId - 商品ID
 */
export const participate = (goodsId: number) => {
  const url = "/participate";
  const method = Method.POST;
  const data = { goodsId };
  return request({ url, method, data, needToken: true });
};

/**
 * @description 获取商品参拍信息
 * @param {number | String} goodsId - 商品ID
 */
export const getParticipateBidInfo = (goodsId: number|String) => {
  const url = `/participate/${goodsId}`;
  const method = Method.GET;
  return request({ url, method, needToken: true });
};

/**
 * @description 支付保证金
 * @param {number} goodsId - 商品ID
 */
export const payDeposit = (goodsId: number) => {
  const url = "/participate/pay";
  const method = Method.POST;
  const data = { goodsId };
  return request({ url, method, data, needToken: true });
};

/**
 * @description 获取用户拍卖商品记录（待交保）
 * @param {number} page - 页码
 * @param {number} size - 每页记录数
 */
export const getUserUnpaidBidGoods = (page: number, size: number) => {
  const url = "/participate/bid/unpaid";
  const method = Method.GET;
  const params = { page, size };
  return request({ url, method, params, needToken: true });
};

/**
 * @description 获取用户拍卖商品记录（待开拍）
 * @param {number} page - 页码
 * @param {number} size - 每页记录数
 */
export const getUserWaitBidGoods = (page: number, size: number) => {
  const url = "/participate/bid/wait";
  const method = Method.GET;
  const params = { page, size };
  return request({ url, method, params, needToken: true });
};

/**
 * @description 获取用户拍卖商品记录（竞价中）
 * @param {number} page - 页码
 * @param {number} size - 每页记录数
 */
export const getUserBiddingBidGoods = (page: number, size: number) => {
  const url = "/participate/bid/bidding";
  const method = Method.GET;
  const params = { page, size };
  return request({ url, method, params, needToken: true });
};

/**
 * @description 获取用户拍卖商品记录（已结束）
 * @param {number} page - 页码
 * @param {number} size - 每页记录数
 */
export const getUserEndBidGoods = (page: number, size: number) => {
  const url = "/participate/bid/end";
  const method = Method.GET;
  const params = { page, size };
  return request({ url, method, params, needToken: true });
};

/**
 * @description 获取用户拍卖商品记录（已拍下）
 * @param {number} page - 页码
 * @param {number} size - 每页记录数
 */
export const getUserSuccessBidGoods = (page: number, size: number) => {
  const url = "/participate/bid/success";
  const method = Method.GET;
  const params = { page, size };
  return request({ url, method, params, needToken: true });
};
/**
 * @description  获取待交保、待开拍、竞价中、已结束、已拍下的数量
 */
export const getUserAllBidGoodsNum = () => {
  const url = "/participate/bid/num";
  const method = Method.GET;
  return request({ url, method, needToken: true });
};