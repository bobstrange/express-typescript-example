
import Sinon from 'sinon'

import {
  OnsenClient,
  MovieInfoResult
} from '../lib/onsen_client'

import {
  OnsenRepository,
} from '../onsen_repository'

describe('OnsenRepository', () => {
  let repository: OnsenRepository
  const clientStub: OnsenClient = {
    fetchShownMovie() {
      return Promise.resolve(['foo', 'bar'])
    },
    fetchMovieInfo() {
      return Promise.resolve({
        type: 'sound',
        thumbnailPath: '/program/toshitai/image/327_pgi05_m.jpg',
        moviePath: {
          pc: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3',
          iPhone:
            'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3',
          Android:
            'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3'
        },
        title: 'セブン-イレブン presents 佐倉としたい大西',
        personality: '佐倉綾音 / 大西沙織',
        guest: '',
        update: '2020.1.28',
        count: '200',
        schedule:
          '毎週火曜配信 / 超！A＆G＋：23時30分～24時（動画配信） ＜音泉＞：24時～（音声配信）＋音声ダケの特別コーナー有',
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
      } as MovieInfoResult);
    }
  }

  beforeEach(() => {
    repository = new OnsenRepository(clientStub)
  })

  describe('fetchProgramNames', () => {
    test('returns program names', async () => {
      expect(await repository.fetchProgramNames()).toEqual(
        ['foo', 'bar']
      )
    })
  })

  describe('fetchProgram', () => {
    test('returns a Program', async () => {
      const program = await repository.fetchProgram('toshitai')
      expect(program.name).toBe('toshitai')
      expect(program.type).toBe('sound')
      expect(program.thumbnailPath).toBe('/program/toshitai/image/327_pgi05_m.jpg')
      expect(program.moviePath).toEqual({
        pc: 'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3',
        iPhone:
          'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3',
        Android:
          'https://onsen-dl.sslcs.cdngc.net/radio/toshitai200128Tu7R.mp3'
      })
      expect(program.title).toBe('セブン-イレブン presents 佐倉としたい大西')
      expect(program.personalities).toEqual(['佐倉綾音', '大西沙織'])
      expect(program.guest).toBe('')
      expect(program.update).toEqual(new Date(2020, 1, 28))
      expect(program.count).toBe(200)
      expect(program.links).toEqual([
        {
          imagePath: '/program/toshitai/image/327_pgl01.jpg',
          url: 'http://www.agqr.jp/'
        }
      ]);
    })
  })
})
