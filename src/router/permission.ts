import router from "../router/index";
import { useUserInfoStore, useActiveMenuPathStore } from '@/stores/user'
import { ElMessage } from "element-plus";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getCookie, removeCookie } from "@/utils/auth"; // get token from cookie
import getPageTitle from "@/utils/get-page-title";
import { getUserByToken } from '@/api/user'

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login"]; // no redirect whitelist

router.beforeEach(async (to: any, from, next) => {
  useActiveMenuPathStore().setMenuPath(to.path) // 当前路径赋值给左侧菜单
  NProgress.start();
  document.title = getPageTitle(to.meta.title);
  const hasToken = getCookie('token');
  if (hasToken) {
    if (to.path === "/login") {
      next({ path: "/" });
      NProgress.done();
    } else {
      const hasGetUserInfo = useUserInfoStore().name;
      if (hasGetUserInfo) {
        next();
      } else {
        try {
          // 如果stroe中没有用户信息 就调用接口获取
          // await store.dispatch("user/getInfo");
          // useUserInfoStore().getUserByToken();
          //  await getUserByToken({token:hasToken}).then((res:any)=>{
          //   console.log('11111111111111');
          //     useUserInfoStore().userInfo=res.userInfo;
          // })
          useUserInfoStore().userInfo.name = "范子韬"
          next()
        } catch (error) {
          removeCookie('token');
          ElMessage.error(error || "Has Error");
          next(`/login?redirect=${to.path}`);
          NProgress.done();
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
      NProgress.done();
    }
  }
});


router.afterEach(() => {
  NProgress.done();
});
