import * as Onsen from 'onsen-node'

export const fetchList = () => {
  return new Promise(resolve => {
    Onsen.getList((list: Array<any>) => {
      resolve(list)
    })
  })
}
