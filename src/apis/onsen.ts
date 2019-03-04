import * as Onsen from 'onsen-node'

interface Program {
  name: string

}

const getList = (): Promise<object> => {
  return new Promise(resolve => {
    Onsen.getList((list: Array<any>) => {
      resolve(list)
    })
  })
}

class Program {
  name: string
  personality: string
  updateDate: Date
  count: number

  constructor(name: string, personality: string, updateDate: Date, count: number) {
    this.name = name
    this.personality = personality
    this.updateDate = updateDate
    this.count = count
  }
}
// {
//   type: "sound",
//   thumbnailPath: "/program/kamo/image/35_pgi02_m.jpg",
//   moviePath: {
//   pc: "https://onsen-dl.sslcs.cdngc.net/radio/kamo190225QJd0.mp3",
//   iPhone: "https://onsen-dl.sslcs.cdngc.net/radio/kamo190225QJd0.mp3",
//   Android: "https://onsen-dl.sslcs.cdngc.net/radio/kamo190225QJd0.mp3"
//   },
//   title: "名塚佳織のかもさん學園",
//   personality: "名塚佳織",
//   guest: "",
//   update: "2019.2.25",
//   count: "404",
//   schedule: "隔週月曜配信",
//   optionText: "コスパ,GEE!STORE.COM",
//   mail: "kamo3@onsen.ag",
//   copyright: "©GEE!STORE.COM",
//   url: "kamo",
//   link: [
//   {
//   imagePath: "/program/kamo/image/35_pgl01.gif",
//   url: "http://www.cospa.com/"
//   },
//   {
//   imagePath: "/program/kamo/image/35_pgl02.gif",
//   url: "http://www.geestore.com/"
//   }
//   ],
//   recommendGoods: [ ],
//   recommendMovie: [
//   {
//   imagePath: "/program/501st/image/102_pgi01_b.jpg",
//   url: "/program/501st/"
//   }
//   ],
//   cm: [ ],
//   allowExpand: "false"
//   }
const getProgram = (programName: string): Promise<object> => {
  return new Promise(resolve => {
    Onsen.getInfo(programName, (info: any) => {
      resolve(info)
    })
  })
}

export const fetchProgram = async (programName: string): Promise<any> => {
  const program = await getProgram(programName)
  return program
}

export const fetchPrograms = async (): Promise<object> => {
  const list = await getList()
  // const sample = {
  //   mon: [
  //     'kamo',
  //     'cr'
  //   ],
  //   tue: [
  //     'kakazu',
  //     'otomeclub'
  //   ],
  //   sat: [
  //     'yuko'
  //   ]
  // }
  return list
}
