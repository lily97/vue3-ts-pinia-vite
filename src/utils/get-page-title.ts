
const title:string =  'Vue Admin Template'

export default function getPageTitle(pageTitle:string) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
