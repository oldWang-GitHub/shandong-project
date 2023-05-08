<template>
  <div class="login-wrapper">
    <!-- 模态框 -->
    <div class="modal">
      <!-- 表单 -->
      <el-form ref="userFormRef" :model="user" status-icon :rules="rules">
        <!-- 标题 -->
        <div class="title">iEMS系统</div>
        <!-- 表单元素 -->
        <el-form-item prop="userName">
          用户名 :
          <!-- input框 -->
          <el-input type="text" :prefix-icon="User" v-model="user.userName" />
        </el-form-item>
        <el-form-item prop="userPassword">
          密码 :
          <!-- 密码框 -->
          <el-input type="password" :prefix-icon="View" v-model="user.userPassword" />
        </el-form-item>
        
        <el-form-item>
          <!-- 按钮, primary, 背景色是蓝色 -->
          <el-button type="primary" class="btn-login" @click="login(userFormRef)">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
// 引入响应式
import { reactive, ref } from 'vue'
// 引入element图标
import { User, View } from '@element-plus/icons-vue'
// 引入路由
import { useRouter } from 'vue-router'
// 导入api,表单验证成功后,进行ajax请求
import api from '../../api'
//导入useStore,验证通过后,要把用户信息存入vuex中
import { useStore } from 'vuex'
// 引入路由实例
const router = useRouter()
//创建store
const store = useStore()
// 定义表单的用户数据
const user = reactive({
  userName: '',
  userPassword: ''
})

// 定义表单的ref
const userFormRef = ref()
// 定义表单规则
const rules = {
  userName: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
  ],
  userPassword: [
    {
      required: true,
      message: '请输入用户密码',
      trigger: 'blur'
    }
  ]
}

// 定义点击按钮出发的login方法
function login(formRef) {
  // 进行验证, 参数是一个回调函数, 形参valid是验证的结果
  formRef.validate((valid) => {
    // 如果结果为true
    if (valid) {
      // 调用我们封装好的ajax方法, 进行用户的登录
      api.login(user).then((res) => {
        // 如果登录成功, 存一份与用户信息到vuex
        store.commit('saveUserInfo', res)
        // 登录成功后, 跳转首页
        router.push('/')
      })
    } else {
      // 失败, return false, 还留在登录页
      return false
    }
  })
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  // 模态框垂直水平居中
  display: flex;
  justify-content: center;
  align-items: center;
  // 给背景色
  background-color: #f8fcff;
  // 设置背景图片,不要重复,平铺
  background-image: url('../../assets/img/bg4.png');
  background-repeat: no-repeat;
  background-size: cover;

  // 设置宽高
  width: 100vw;
  height: 100vh;
  // 设置模态框
  .modal {
    // 设置宽度, 高度由内容撑起来
    width: 500px;
    padding: 50px;
    //只设置背景色的透明度，不影响文字
    background-color: rgba(255, 255, 255, 0.9);
    // 设置背景色
    // background-color: #fff;
    // 设置圆角
    border-radius: 4px;
    // 加阴影
    box-shadow: 0px 0px 10px 3px #dad9d9;
    //设置标题
    .title {
      // 设置字体大小和行高
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    // 设置按钮
    .btn-login {
      width: 100%;
    }
  }
}
</style>