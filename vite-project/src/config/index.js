// 获取当前环境类型,如果没有配置,默认是生产环境
const env = import.meta.env.MODE === "development"?"dev":"prod"

// 定义相关配置
const EnvConfig = {
    // 开发环境
    dev:{
        baseApi:"//localhost:3000", // 开发环境地址
        mockApi:"https://www.fastmock.site/mock/302796f64337eddef4c3fe37b258650c/api" // mock地址
    },
    // 生产环境
    prod:{
        baseApi:"//localhost:3000", // 生产环境地址
        mockApi:"https://www.fastmock.site/mock/f187ed74424d4140c5fb7944af608df4/api" // mock地址
    }
}
// 导出
export default {
    // 当前环境
    env:env,
    // 是否开启mock,默认是关闭，如果需要开启，需要在接口中配置，优先级更高，不需要在此处配置
    mock:false,
    // 命名空间
    namespace:"manager",
    // 接口调用地址
    ...EnvConfig[env]
}