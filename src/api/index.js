// import Password from "antd/lib/input/Password";
import ajax  from "./ajax";

// export const reqLogin =(username,password) => { 
// // console.log(username,password)
//     return ajax('/login',{username,password},'POST')
// }

export const reqLogin = (data) => ajax({
    url: "/login",
    data,
    method: "POST"
  })