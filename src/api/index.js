// import Password from "antd/lib/input/Password";
import ajax  from "./ajax";

export const reqLogin =(usename,password) =>  ajax('/login',{usename,password},'POST')