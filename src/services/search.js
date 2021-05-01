import request from "./request";

export const getSearchHot = function () {
  return request({
    url: "/search/hot"
  })
}

export function getSearchAll(keywords, type = 1, limit = 30, offset = 0) {
  return request({
    url: "/search",
    params: {
      keywords,
      limit,
      offset,
      type
    }
  })
}

export function getSearchSing(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}
