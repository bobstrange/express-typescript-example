describe('OnsenClient', () => {
  describe('fetchProgramList', () => {
    test('returns programs', () => {})
    test('throw error when it fails to fetch data', () => {})
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
