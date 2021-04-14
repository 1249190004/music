import request from "./request";

export function getHotSheet() {
  return request({
    url: "/playlist/hot"
  })
}

export function getCatList() {
  return request({
    url: "/playlist/catlist"
  })
}

export function getSheetList(order = "hot", cat = "全部", limit = 40, offset = 0) {
  return request({
    url: "/top/playlist",
    params: {
      order,
      cat,
      limit,
      offset
    }
  })
}
