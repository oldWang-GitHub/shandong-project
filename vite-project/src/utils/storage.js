import config from "../config"
export default {
    // 设置
    setItem(key,value){
        // 定义需要存储的key和value
        // 存储的key, 是当前的命名空间
        const storageKey = config.namespace
        // 存储的value,是接收的两个形参,
        let storageValue = {[key]:value}
        // 先取出原来的storageKey对应的value,如果没有,返回空对象
        let oldStorageValue = localStorage.getItem(storageKey) || '{}'
        // 取出的是json字符串,需要序列化成对象
        oldStorageValue = JSON.parse(oldStorageValue)
        // 将原来的数据和新数据进行合并
        storageValue = {...oldStorageValue,...storageValue}
        // 把整理好的数据存入localStorage中,新的storageValue要转成JSon字符串后再进行存储
        localStorage.setItem(storageKey,JSON.stringify(storageValue))
    },
    // 获取
    getItem(key){
        // 存储的key, 是当前的命名空间
        const storageKey = config.namespace
        // 取出storageKey对应的value,如果没有,返回空对象
        let storageValue = localStorage.getItem(storageKey) || '{}'
        // JSON字符串转对象
        storageValue = JSON.parse(storageValue)
        // 通过key,从对象中取值并返回
        return storageValue[key]
    },
    // 删除某一项
    clearItem(key){
        // 存储的key, 是当前的命名空间
        const storageKey = config.namespace
        // 取出storageKey对应的value,如果没有,返回空对象
        let storageValue = localStorage.getItem(storageKey) || '{}'
        // JSON字符串转对象
        storageValue = JSON.parse(storageValue)
        // 通过delete删除
        delete storageValue[key]
        // 将storageValue转成JSON字符串后,存储在localStorage中
        localStorage.setItem(storageKey,JSON.stringify(storageValue))
    },
    // 删除全部
    clearAll(){
        localStorage.clear()
    }
}