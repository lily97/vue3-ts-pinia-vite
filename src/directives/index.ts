// 引入vue中定义的指令对应的类型定义
import type { Directive, DirectiveBinding } from 'vue'
import { getCookie } from '@/utils/auth'

const permission: Directive = {
    // mounted是指令的一个生命周期
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        // value 获取用户使用自定义指令绑定的内容
        const { value } = binding
        // 获取用户所有的权限按钮
        const permissionBtn = getCookie('permission')?.split(',') as any;
        console.log(permissionBtn, 'permissionBtnpermissionBtn');
        // 判断用户使用自定义指令，是否使用正确了
        if (value && value instanceof Array && value.length > 0 && permissionBtn.length > 0) {
            const permissionFunc = value
            //判断传递进来的按钮权限，用户是否拥有
            //Array.some(), 数组中有一个结果是true返回true，剩下的元素不会再检测
            const hasPermission = permissionBtn.some((role: any) => {
                return permissionFunc.includes(role)
            })
            // 当用户没有这个按钮权限时，删除该按钮
            if (!hasPermission) {
                el.remove();
            }
        } else {
            throw new Error('need roles! Like v-permission="[\'admin\',\'editor\']"')
        }
    }
}

export { permission }

// 注意，我们这里写的自定义指令，传递内容是一个数组，也就说，按钮权限可能是由
// 多个因素决定的，如果你的业务场景只由一个因素决定，自定义指令也可以不传递一个数组，
// 只传递一个字符串就可以了
