import Vue from 'vue'

declare module '*.vue' {
  export default Vue
}

// 全局变量设置
declare global {
}

// iview 全局方法
declare module 'vue/types/vue' {
  interface Vue {
    $Message: any,
    $Modal: any
  }
}
