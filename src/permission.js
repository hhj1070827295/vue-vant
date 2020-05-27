import router from './router'
import NProgress from 'nprogress' // progress bar导航栏加载条
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login/index','/'] // no redirect whitelist 网页的白名单配置

router.beforeEach(async (to, from, next) => {
    // start progress bar
    NProgress.start()

    // set page title

    // determine whether the user has logged in
    const hasToken = getToken()
    console.log(to.path, from.path, '路径')
    console.log(hasToken, 'token')

    if (hasToken) {
        next()
        NProgress.done()
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login/index?redirect=${to.path}`)
            NProgress.done()

        }
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})
