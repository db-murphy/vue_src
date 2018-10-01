/* @flow */

import Vue from './runtime/index'

/**
 * 这段代码首先缓存了原型上的 $mount 方法，再重新定义该方法,原先原型上的 $mount 方法在 src/platform/web/runtime/index.js 中定义，之所以这么设计完全是为了复用，因为它是可以被 runtime only 版本的 Vue 直接使用的。
 */
const mount = Vue.prototype.$mount
Vue.prototype.$mount = function (
  el?: string | Element,
  hydrating?: boolean
): Component {
  el = el && query(el)

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    process.env.NODE_ENV !== 'production' && warn(
      `Do not mount Vue to <html> or <body> - mount to normal elements instead.`
    )
    return this
  }

  const options = this.$options

  if (!options.render) {
    // 构造render函数
  }
  return mount.call(this, el, hydrating)
}

Vue.compile = compileToFunctions

export default Vue
