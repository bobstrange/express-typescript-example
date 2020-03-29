import axios from 'axios'

const LIST_URL = 'http://www.onsen.ag/api/shownMovie/shownMovie.json'
const SHOW_URL = "http://www.onsen.ag/data/api/getMovieInfo";

// const unwrapJsonp = <T>(jsonp: string): T => {
//   const text = jsonp.slice(9, jsonp.length - 3)
//   return JSON.parse(text)
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

export class OnsenClient {
  async fetchPrograms(): Promise<string[]> {
    try {
      const result = (await axios.get<ListResponse>(LIST_URL)).data.result
      return result
    } catch (error) {
      throw(error)
    }
  }
  // async fetchProgramDetail(movieName: string): Promise<ProgramDetailResult> {
  //   const response = await axios.get<string>(`${SHOW_URL}/${movieName}`)
  //   return unwrapJsonp<ProgramDetailResult>(response.data)
  // }
}

export const buildOnsenClient = (): OnsenClient => {
  return new OnsenClient()
}
