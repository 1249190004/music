import request from "./request"

export function getRanking() {
  return request({
    url: "/toplist"
  })
}

export function getRankingDetail(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id
    }
  })
}

export function getRankingSubscribers(id, limit = 28, offset = 0) {
  return request({
    url: "/playlist/subscribers",
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getRankingRelated(id) {
  return request({
    url: "/related/playlist",
    params: {
      id
    }
  })
}

export function getRankingComment(id, limit = 28, offset = 0) {
  return request({
    url: "/comment/playlist",
    params: {
      id,
      limit,
      offset
    }
  })
}
