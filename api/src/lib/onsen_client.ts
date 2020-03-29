import axios from 'axios'

const LIST_URL = 'http://www.onsen.ag/api/shownMovie/shownMovie.json'
const SHOW_URL_BASE = "http://www.onsen.ag/data/api/getMovieInfo";

const unwrapJsonp = (jsonp: string) => {
  const text = jsonp.slice(9, jsonp.length - 3)
  console.log(text)
  return JSON.parse(text)
}
// type Program = {
//   type: string
//   thumbnailPath: string
//   moviePath: {
//     pc: string
//     iPhone: string
//     Android: string
//   },
//   title: string
//   personality: string
//   guest: string
//   update: string
//   count: string
//   schedule: string
//   optionText: string
//   mail: string
//   copyright: string
//   url: string
//   link: [
//     {
//       imagePath: '/program/yagakimi/image/619_pgl01.jpg',
//       url: 'http://yagakimi.com/',
//     },
//   ],
//   recommendGoods: [],
//   recommendMovie: [],
//   cm: [],
//   allowExpand: 'true',
// }

// interface ProgramNamesResponse {
//   result: string[]
// }

// type ProgramMoviePath = {
//   pc: string
//   iPhone: string
//   Android: string
// }

// type ProgramLink = {
//   imagePath: string
//   url: string
// }

// export interface ProgramDetailSuccessResult {
//   url: string
//   type: string
//   thumbnailPath: string
//   moviePath: ProgramMoviePath
//   title: string
//   personality: string
//   guest: string
//   update: string
//   schedule: string
//   count: string
//   link: ProgramLink[]
// }

// export interface ProgramDetailErrorResult {
//   error: string
// }

// export type ProgramDetailResult = ProgramDetailSuccessResult | ProgramDetailErrorResult

type ListResponse = {
  result: string[]
}

const showURL = (movieName: string) => {
  return `${SHOW_URL_BASE}/${movieName}`
}
export class OnsenClient {
  async fetchPrograms(): Promise<string[]> {
    try {
      const result = (await axios.get<ListResponse>(LIST_URL)).data.result
      return result
    } catch (error) {
      throw(error)
    }
  }
  async fetchProgram(movieName: string): Promise<Object> {
    const data = (await axios.get<string>(
      showURL(movieName)
    )).data
    return unwrapJsonp(data)
  }
}

export const buildOnsenClient = (): OnsenClient => {
  return new OnsenClient()
}
