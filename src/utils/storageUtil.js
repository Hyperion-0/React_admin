import store from "store";
// 使用store是因为更好兼容浏览器

const USER_KEY = 'user_key'


export default {
    saveUser(user){
        // localStroage 只能保存 string, 如果传递是对象 , 会自动调用对象的 toString() 并保存
        //localStorage.setItem(USER_KEY, JSON.stringify(user)) // 保存的必须是对象的 json 串
        store.set(USER_KEY,user)
    },

    getUser(){// 如果存在 , 需要返回的是对象 , 如果没有值 , 返回 {}
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}') // [object, Object]
        return store.get(USER_KEY)||{}
    },

    removeUser(){
        store.remove(USER_KEY)
    }
}