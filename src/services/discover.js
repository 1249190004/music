import request from "./request"

export function getTopBanners() {
  return request({
    url: "/banner"
  })
}

export function getRecommendSheet(limit = 24) {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}

export function getRecommendSing() {
  return request({
    url: "/personalized/newsong"
  })
}

export function getRecommendSinger(offset = 0, limit = 30) {
  return request({
    url: "/top/artists",
    params: {
      offset,
      limit
    }
  })
}
