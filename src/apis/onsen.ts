import * as Onsen from 'onsen-node'

/**
 * Wrap onsen-node getList()
 */
const getList = (): Promise<any> => {
  return new Promise(resolve => {
    Onsen.getList((list: Array<any>) => {
      resolve(list)
    })
  })
}

class Program {
  constructor(
    readonly title: string,
    readonly personality: string,
    readonly updateDate: Date,
    readonly count: number
  ) {}
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

/**
 * Wrap onsen-node getInfo()
 */
const getProgram = (programName: string): Promise<any> => {
  return new Promise(resolve => {
    Onsen.getInfo(programName, (info: any) => {
      resolve(info)
    })
  })
}

/**
 * Convert 'yyyy.m.d' to Date
 * @param {string} update - Example '2019.1.10'
 */
const updateToDate = (update: string): Date => {
  const delimiter = '.'
  const [year, month, day] = update.split(delimiter).map(item => Number.parseInt(item, 10))
  return new Date(year, month, day)
}

export const fetchProgram = async (programName: string): Promise<Program> => {
  const programParams = await getProgram(programName)
  const program = new Program(
    programParams.title,
    programParams.personality,
    updateToDate(programParams.update),
    programParams.count
  )
  return program
}

export const fetchPrograms = async (): Promise<any> => {
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
