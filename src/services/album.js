import request from "./request";

export function getAlbum(id, limit = 6, offset = 0) {
  return request({
    url: "/artist/album",
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getRelateAlbum(id, limit = 5, offset = 0) {
  return request({
    url: "/album",
    params: {
      id,
      limit,
      offset
    }
  })
}

export function getRelatedComment(id, limit = 28, offset = 0) {
  return request({
    url: "/comment/album",
    params: {
      id,
      limit,
      offset,
    }
  })
}
