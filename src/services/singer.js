import request from "./request";

export function getSingerList(limit = 40, offset = 0, type = -1, area = -1, initial = -1) {
  return request({
    url: "/artist/list",
    params: {
      limit,
      offset,
      type,
      area,
      initial
    }
  })
}

export function getSingerDetail(id) {
  return request({
    url: "/artists",
    params: {
      id
    }
  })
}

export function getSingerDesc(id) {
  return request({
    url: "/artist/desc",
    params: {
      id
    }
  })
}

export function getSingerMv(id, limit, offset = 0) {
  return request({
    url: "/artist/mv",
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getSimilar(id) {
  return request({
    url: "/simi/artist",
    params: {
      id
    }
  })
}

