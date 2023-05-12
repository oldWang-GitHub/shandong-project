import { Meta2d } from '@meta2d/core'
import api from '../api'
// 封装meta2d的方法
const initMeta2d = (data) => { 
    const meta2d = new Meta2d('meta2d')
    const options = {
      disableScale: true, // 禁止缩放
      disableTranslate: true, // 禁止平移
      disableInput: true // 禁止双击后输入
    }
    meta2d.setOptions(options)
    // 打开图纸
    meta2d.open(data)
    meta2d.setBackgroundColor('#051d3f')
    // 设置预览模式，不可编辑
    meta2d.lock(1)
    // 设置自适应显示 true，完整展示整个图纸；false，短边展示图纸，长边会被截取显示不完整
    //   meta2d.fitView()
    
    meta2d.topView()
    return meta2d
  }

  // 封装请求数据的方法 参数为接口地址
const getMeta2dData = (url) => {
    return new Promise(() => {
      // 请求接口数据 
      api.getMeta2dData(url).then((res) => {
        // 将接口数据更新到data.json中
        updateMetaData(res)
        
        // 重绘图纸
        window.meta2d.render()
        
      })
    })
  }
// 封装清空画布的方法
const clearMeta2d = () => {
  window.meta2d.clear()
}
//  销毁图纸
const destroyMeta2d = () => {
  window.meta2d.destroy()
}

//封装更新数据的方法
const updateMetaData = (res) => {
    res.forEach((item) => {
      // 将data.json中的元素的值更新为res中的值 setvalue({id:元素id,text:元素值},{render: false,doEvent: false,history: false}}), 默认更新后会重绘图纸，触发事件，记录历史，这里设置为false，不重绘图纸，不触发事件，不记录历史
      window.meta2d.setValue({ id: item.id, text: item.text},{render: false,doEvent: false,history: false})
    })
  }

export { initMeta2d, clearMeta2d, destroyMeta2d, getMeta2dData }