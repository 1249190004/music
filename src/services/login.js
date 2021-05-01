import request from "./request";

export function getPhonePasswordLogin(phone, md5_password) {
  return request({
    url: "/login/cellphone",
    params: {
      phone,
      md5_password
    }
  })
}
