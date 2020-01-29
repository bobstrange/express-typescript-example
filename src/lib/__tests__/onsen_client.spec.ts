import { OnsenClient } from '../onsen_client'
import { loadFetchShownMovieFixture, loadFetchMovieInfoFixture } from '../../test_helper/fixture'

jest.mock('axios')
import Axios from 'axios'

describe('OnsenClient', () => {
  test('fetchShownMovie', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Axios.get as any).mockResolvedValue({ data: await loadFetchShownMovieFixture() });

    const data = await OnsenClient.fetchShownMovie()
    expect(data[0]).toBe('mhr3')
    expect(data[data.length - 1]).toBe('koitate')
  })

  test('fetchMovieInfo', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Axios.get as any).mockResolvedValue({ data: await loadFetchMovieInfoFixture('toshitai') })
    const data = await OnsenClient.fetchMovieInfo('toshitai')

    expect(data).toEqual(
      {
        type: 'sound',
        thumbnailPath: '/program/toshitai/image/327_pgi05_m.jpg',
        moviePath: {
          pc: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3',
          iPhone: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3',
          Android: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3'
        },
        title: 'セブン-イレブン presents 佐倉としたい大西',
        personality: '佐倉綾音 / 大西沙織',
        guest: '',
        update: '2020.1.28',
        count: '200',
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
    )
  })
})
// const sleep = async (msec: number): Promise<void> =>
  // new Promise(resolve => setTimeout(resolve, msec));
    // test.skip("loop show request", async () => {
    //   const fixture = await loadFixture("list_results.json");
    //   const lists = fixture.result.slice(0, 10) as string[];

    //   const result = await BPromise.map(
    //     lists,
    //     async item => {
    //       console.log(`request: ${item}`);
    //       const response = await axios({
    //         method: "get",
    //         url: `${SHOW_URL}/${item}`
    //       });
    //       const data = response.data;
    //       await saveFixture(`show_results/${item}.json`, data);
    //       await sleep(2000);
    //       console.log(`item: ${item}`);
    //       return data;
    //     },
    //     { concurrency: 5 }
    //   );
    //   console.log(result);
    // });

