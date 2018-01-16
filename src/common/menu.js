import { isUrl } from '../utils/utils'

const menuData = [
  {
    name: '月半指數',
    icon: 'line-chart',
    path: '/weight-index',
  },
  {
    name: '輸入月半',
    icon: 'form',
    path: '/weight-form',
  },
]

function formatter(data, parentPath = '', parentAuthority) {
  return data.map(item => {
    let { path } = item
    if (!isUrl(path)) {
      path = parentPath + item.path
    }
    const result = {
      ...item,
      path,
      authority: item.authority || parentAuthority,
    }
    if (item.children) {
      result.children = formatter(
        item.children,
        `${parentPath}${item.path}/`,
        item.authority
      )
    }
    return result
  })
}

export const getMenuData = () => formatter(menuData)
