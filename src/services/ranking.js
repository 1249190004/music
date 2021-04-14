import request from "./request"

export function getRanking() {
  return request({
    url: "/toplist"
  })
}
