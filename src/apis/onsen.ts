import * as Onsen from 'onsen-node'

export default class OnsenNodeWrapper {
  getList() {
    return new Promise(resolve => {
      Onsen.getList((list: Array<any>) => {
        resolve(list)
      })
    })
  }
}
