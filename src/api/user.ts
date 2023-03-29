import request from "@/utils/request";

export const login=(params:object)=> {
  return request({
    url: "/login",
    method: "get",
    params,
  });
}

// 获取当前登陆的用户信息
export const getUserByToken=(params:object)=> {
  return request({
    url: "/user/getUserByToken",
    method: "get",
    params
  });
}

// 获取用户列表
export const getUserList=(params:object)=> {
  return request({
    url: "/user/getUserList",
    method: "get",
    params
  });
}

