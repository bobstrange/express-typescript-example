import axios from 'axios'
import { OnsenClient } from "./onsen_client"

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('OnsenClient', () => {
  describe('fetchProgramList', () => {
    test('returns program names', async () => {
      mockedAxios.get.mockResolvedValue({ data: { result: ['mhr3', 'koitate'] } })
      const client = OnsenClient.client()
      await expect(client.fetchPrograms()).resolves.toEqual(['mhr3', 'koitate'])
    })
    test('throws error when it fails', async () => {
      mockedAxios.get.mockRejectedValue(new Error('Error message'))
      const client = OnsenClient.client()
      await expect(client.fetchPrograms()).rejects.toThrow('Error message')
    })
  })

  describe('fetchProgram', () => {
    test('returns program', async () => {
      mockedAxios.get.mockResolvedValue({
        data: `callback({"type":"sound","thumbnailPath":"\/program\/yagakimi\/image\/619_pgi01_m.jpg","moviePath":{"pc":"https:\/\/onsen-dl.sslcs.cdngc.net\/radio\/yagakimi190418F5Kg.mp3","iPhone":"https:\/\/onsen-dl.sslcs.cdngc.net\/radio\/yagakimi190418F5Kg.mp3","Android":"https:\/\/onsen-dl.sslcs.cdngc.net\/radio\/yagakimi190418F5Kg.mp3"},"title":"やがて君になる～私、このラジオ好きになりそう～","personality":"高田憂希（小糸侑 役） \/ 寿美菜子（七海燈子 役）","guest":"","update":"2019.4.18","count":"12","schedule":"月1回木曜配信","optionText":"やがて君になる製作委員会","mail":"yagakimi@onsen.ag","copyright":"©2018 仲谷 鳰／ＫＡＤＯＫＡＷＡ／やがて君になる製作委員会","url":"yagakimi","link":[{"imagePath":"\/program\/yagakimi\/image\/619_pgl01.jpg","url":"http:\/\/yagakimi.com\/"}],"recommendGoods":[],"recommendMovie":[],"cm":[],"allowExpand":"true"});
`
      })

      const client = OnsenClient.client()
      const expected = {
        thumbnailPath: '/program/yagakimi/image/619_pgi01_m.jpg',
        filePath: 'https://onsen-dl.sslcs.cdngc.net/radio/yagakimi190418F5Kg.mp3',
        title: 'やがて君になる～私、このラジオ好きになりそう～',
        personalities: ['高田憂希（小糸侑 役）','寿美菜子（七海燈子 役）'],
        guests: [],
        updateAt: '2019-04-18',
        titleAlias: 'yagakimi',
        count: 12,
        schedule: '月1回木曜配信',
        mail: 'yagakimi@onsen.ag',
        optionText: 'やがて君になる製作委員会',
        copyright: '©2018 仲谷 鳰／ＫＡＤＯＫＡＷＡ／やがて君になる製作委員会',
        links: [
          {
            imagePath: '/program/yagakimi/image/619_pgl01.jpg',
            url: 'http://yagakimi.com/',
          },
        ],
        recommendGoods: [],
        recommendMovies: []
      }
      return expect(client.fetchProgram('yagakimi')).resolves.toEqual(expected)
    })

    test('throws not found error if program does not exist', () => {
      mockedAxios.get.mockResolvedValue({
        data: `callback({"error":"not found."});
`
      })
      const client = OnsenClient.client()
      return expect(client.fetchProgram('not_exist_program')).rejects.toEqual(
        new Error('Program not_exist_program not found')
      )
    })
    test('throws error when it fails', () => {

    })
  })
})
// import {
//   OnsenClient,
//   buildOnsenClient,
//   MovieInfoErrorResult
// } from '../onsen_client'

// import {
//   loadFetchShownMovieFixture,
//   loadFetchMovieInfoFixture
// } from '../../test_helper/fixture'

// jest.mock('axios')
// import Axios from 'axios'

// describe('OnsenClient', () => {
//   let client: OnsenClient;

//   beforeEach(() => {
//     client = buildOnsenClient()
//   })

//   test('fetchShownMovie', async () => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     (Axios.get as any).mockResolvedValue({ data: await loadFetchShownMovieFixture() });

//     const data = await client.fetchShownMovie()
//     expect(data[0]).toBe('mhr3')
//     expect(data[data.length - 1]).toBe('koitate')
//   })

//   describe('fetchMovieInfo', () => {
//     test('returns movie information', async () => {
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       (Axios.get as any).mockResolvedValue({ data: await loadFetchMovieInfoFixture('toshitai') })
//       const data = await client.fetchMovieInfo('toshitai')

//       expect(data).toEqual(
//         {
//           type: 'sound',
//           thumbnailPath: '/program/toshitai/image/327_pgi05_m.jpg',
//           moviePath: {
//             pc: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3',
//             iPhone: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3',
//             Android: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3'
//           },
//           title: 'セブン-イレブン presents 佐倉としたい大西',
//           personality: '佐倉綾音 / 大西沙織',
//           guest: '',
//           update: '2020.1.28',
//           count: '200',
//           schedule: '毎週火曜配信 / 超！A＆G＋：23時30分～24時（動画配信） ＜音泉＞：24時～（音声配信）＋音声ダケの特別コーナー有',
//           optionText: '',
//           mail: 'toshitai@joqr.net',
//           copyright: '©文化放送 ©Internet Radio Station＜音泉＞',
//           url: 'toshitai',
//           link: [
//             {
//               imagePath: '/program/toshitai/image/327_pgl01.jpg',
//               url: 'http://www.agqr.jp/'
//             }
//           ],
//           recommendGoods: [],
//           recommendMovie: [
//             {
//               imagePath: '/program/saekano/image/201_pgi03_b.jpg',
//               url: '/program/saekano/'
//             }
//           ],
//           cm: [],
//           allowExpand: 'false'
//         }
//       )
//     })

//     test('returns error information', async () => {
//       // eslint-disable-next-line @typescript-eslint/no-explicit-any
//       (Axios.get as any).mockResolvedValue({ data: await loadFetchMovieInfoFixture('error') })
//       const data = await client.fetchMovieInfo('error') as MovieInfoErrorResult
//       expect(data.error).toBe('not found.')
//     })
//   })
// })