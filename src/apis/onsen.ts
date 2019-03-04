import * as Onsen from 'onsen-node'

export const fetchList = () => {
const getList = (): Promise<object> => {
  return new Promise(resolve => {
    Onsen.getList((list: Array<any>) => {
      resolve(list)
    })
  })
}
export const fetch = (programName: string): Promise<object> => {
  return new Promise(resolve => {
    Onsen.getInfo(programName, (info: any) => {
      resolve(info)
    })
  })
}

export const fetchPrograms = async (): Promise<object> => {
  const list = await getList()
  return list
}
