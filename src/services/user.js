import request from "./request";

export function getUserDetail(uid) {
  return request({
    url: "/user/detail",
    params: {
      uid
    }
  })
}

export function getUserRecord(uid, type) {
  return request({
    url: "/user/record",
    params: {
      uid,
      type
    }
  })
}

export function getUserPlaylist(uid) {
  return request({
    url: "/user/playlist",
    params: {
      uid
    }
  })
}

export function getSign() {
  return request({
    url: "/daily_signin",
    params: {
      timestamp: Date.now()
    }
  })
}
