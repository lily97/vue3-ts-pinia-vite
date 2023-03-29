import Cookies from 'js-cookie'

export function getCookie(Key: string) {
  return Cookies.get(Key)
}

export function setCookie(Key: string, value: any) {
  return Cookies.set(Key, value)
}

export function removeCookie(Key: string) {
  return Cookies.remove(Key)
}
