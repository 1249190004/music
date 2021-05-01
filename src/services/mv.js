import request from "./request";

export function getMvPlay(id) {
  return request({
    url: "/mv/url",
    params: {
      id
    }
  })
}

export function getMvDesc(mvid) {
  return request({
    url: "/mv/detail",
    params: {
      mvid
    }
  })
}

export function getMvInfo(mvid) {
  return request({
    url: "/mv/detail/info",
    params: {
      mvid
    }
  })
}

export function getMvRecommend(mvid) {
  return request({
    url: "/simi/mv",
    params: {
      mvid
    }
  })
}

export function getMvComment(id, limit = 20, offset = 0) {
  return request({
    url: "/comment/mv",
    params: {
      id,
      limit,
      offset
    }
  })
}


