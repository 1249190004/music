import request from "./request";

export function getVideo(limit = 12, offset = 0, type = "全部", area = "全部", order = "上升最快") {
  return request({
    url: "/mv/all",
    params: {
      limit,
      offset,
      type,
      area,
      order
    }
  })
}

export function getVideoPlay(id) {
  return request({
    url: "/video/url",
    params: {
      id
    }
  })
}

export function getVideoDesc(id) {
  return request({
    url: "/video/detail",
    params: {
      id
    }
  })
}

export function getVideoInfo(vid) {
  return request({
    url: "/video/detail/info",
    params: {
      vid
    }
  })
}

export function getVideoRecommend(id) {
  return request({
    url: "/related/allvideo",
    params: {
      id
    }
  })
}

export function getVideoComment(id, limit = 20, offset = 0) {
  return request({
    url: "/comment/video",
    params: {
      id,
      limit,
      offset
    }
  })
}
