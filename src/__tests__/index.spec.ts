import axios from 'axios'
import { loadFixture, saveFixture } from '../test_helper/fixture'
import BPromise from 'bluebird'

const LIST_URL = 'http://www.onsen.ag/api/shownMovie/shownMovie.json'
const SHOW_URL = "http://www.onsen.ag/data/api/getMovieInfo";

const unwrap = (jsonp: string) : any => {
  const text = jsonp.slice(9, jsonp.length - 3)
  console.log(text)
  return JSON.parse(text)
}

type ProgramMoviePath = {
  pc: string
  iPhone: string
  Android: string
}

type ProgramLink = {
  imagePath: string
  url: string
}
type ShowApiResponse = {
  type: string
  thumbnailPath: string
  moviePath: ProgramMoviePath
  title: string
  personality: string
  guest: string
  update: string
  schedule: string
  count: string
  link: ProgramLink[]
}
class Program {
  constructor(
    public readonly type: string,
    public readonly thumbnailPath: string,
    public readonly moviePath: ProgramMoviePath,
    public readonly title: string,
    public readonly personalities: string[],
    public readonly guest: string,
    public readonly update: Date,
    public readonly count: number,
    public readonly links: ProgramLink[]
  ) {}
}
class ProgramFactory {
  static buildFromShowApiResponse(response: ShowApiResponse): Program {
    const [year, month, day] = response.update.split('.').map(_ => Number(_))
    const personalities = response.personality.split('/').map(_ => _.trim())

    return new Program(
      response.type,
      response.thumbnailPath,
      response.moviePath,
      response.title,
      personalities,
      response.guest,
      new Date(year, month, day),
      Number(response.count),
      response.link
    )
  }
}

test('list request', async () => {
  // const response = await axios({ method: 'get', url: LIST_URL })
  const result = await loadFixture('list_results.json')
  const response = { data: result }
  expect(response.data.result[0]).toBe('mhr3')
  expect(response.data.result[response.data.result.length - 1]).toBe('koitate')

  console.log(process.cwd())
  console.log(__dirname)
  console.log(__filename)
  // await saveFixture('list_results.json', response['data'])
})

const sleep = async (msec: number): Promise<void> => new Promise(resolve => setTimeout(resolve, msec));

test('loop show request', async () => {
  const fixture = await loadFixture('list_results.json')
  const lists = fixture.result.slice(0, 10) as string[]

  const result = await BPromise.map(
    lists,
    (async item => {
      console.log(`request: ${item}`)
      const response = await axios({ method: 'get', url: `${SHOW_URL}/${item}` })
      const data = response.data
      await saveFixture(`show_results/${item}.json`, data)
      await sleep(2000)
      console.log(`item: ${item}`)
      return data
    }),
    { concurrency: 5 }
  )
  console.log(result)
})

test.skip('show request', async () => {
  const item = 'toshitai'
  const response = await axios({ method: 'get', url: `${SHOW_URL}/${item}` })
  console.log(response['data'])
  console.log(unwrap(response['data']))
})

const parsedResponse = {
  type: 'sound',
  thumbnailPath: '/program/toshitai/image/327_pgi05_m.jpg',
  moviePath: {
    pc: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200121Ax1O.mp3',
    iPhone: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200121Ax1O.mp3',
    Android: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200121Ax1O.mp3'
  },
  title: 'セブン-イレブン presents 佐倉としたい大西',
  personality: '佐倉綾音 / 大西沙織',
  guest: '',
  update: '2020.1.21',
  count: '199',
  schedule: '毎週火曜配信 / 超！A＆G＋：23時30分～24時（動画配信） ＜音泉＞：24時～（音声配信）＋音声ダケの特別コーナー有',
  optionText: '',
  mail: 'toshitai@joqr.net',
  copyright: '©文化放送 ©Internet Radio Station＜音泉＞',
  url: 'toshitai',
  link: [
    {
      imagePath: '/program/toshitai/image/327_pgl01.jpg',
      url: 'http://www.agqr.jp/'
    }
  ],
  recommendGoods: [],
  recommendMovie: [
    {
      imagePath: '/program/saekano/image/201_pgi03_b.jpg',
      url: '/program/saekano/'
    }
  ],
  cm: [],
  allowExpand: 'false'
}

test('parse response', () => {
  const program = ProgramFactory.buildFromShowApiResponse(parsedResponse)
  expect(program.type).toBe('sound')
  expect(program.thumbnailPath).toBe('/program/toshitai/image/327_pgi05_m.jpg')
  expect(program.moviePath).toEqual({
    pc: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200121Ax1O.mp3',
    iPhone: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200121Ax1O.mp3',
    Android: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200121Ax1O.mp3'
  })
  expect(program.title).toBe('セブン-イレブン presents 佐倉としたい大西');
  expect(program.personalities).toEqual(['佐倉綾音', '大西沙織'])
  expect(program.guest).toBe('')
  expect(program.update).toEqual(new Date(2020, 1, 21))
  expect(program.count).toBe(199)
  expect(program.links).toEqual([
    {
      imagePath: '/program/toshitai/image/327_pgl01.jpg',
      url: 'http://www.agqr.jp/'
    }
  ])
})
