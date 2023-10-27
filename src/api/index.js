// import Password from "antd/lib/input/Password";
import ajax  from "./ajax";
 
 const BASE ='http://127.0.0.1:3000'
// export const reqLogin =(username,password) => { 
// // console.log(username,password)
//     return ajax('/login',{username,password},'POST')
// }
// 获取分类列表
export const reqCategorys = () => {
  return ajax(BASE +'/manage/category/list')
}
// 修改分类
export const reqUpdateCategory = ({categoryId,categoryName})=>{
  return ajax.post(BASE + '/manage/category/update',{
    categoryId,
    categoryName
  })
}
// 添加分类
export const reqAddCategory = ({ categoryName }) => {
  return ajax.post(BASE + '/manage/category/add', {
    categoryName
  })
}

export const reqLogin = (data) => ajax({
    url: "/login",
    data,
    method: "POST"
  })