import { defineStore } from 'pinia'
import { getUserByToken } from '@/api/user'
export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({ userInfo: <{ name: string, menus: Array<object>, token: string }>{} }),
    getters: {
        name: (state) => state.userInfo.name,
        menus: (state) => state.userInfo.menus,
        token: (state) => state.userInfo.token,
    },
    actions: {
        getUserByToken() {
            getUserByToken({ token: this.token }).then((res: any) => {
                useUserInfoStore().userInfo = res.userInfo;
            })
        }
    },
})

export const useTokenStore = defineStore('token', {
    state: () => ({ token: '' }),
    getters: {
        getToken: (state) => state.token
    },
    actions: {
        setToken(token: string) {
            this.token = token;
        }
    },
})

export const useMenusStore = defineStore('menus', {
    state: () => ({ menus: <any>[] }),
    getters: {
        getMenus: (state) => state.menus
    },
    actions: {
    }
})

export const useActiveMenuPathStore = defineStore('activeMenuPath', {
    state: () => ({
        activeMenuPath: ''
    }),
    actions: {
        setMenuPath(path: string) {
            this.activeMenuPath = path;
        }
    }
})

