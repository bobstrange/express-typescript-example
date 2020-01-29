import axios from 'axios'

const LIST_URL = 'http://www.onsen.ag/api/shownMovie/shownMovie.json'
const SHOW_URL = "http://www.onsen.ag/data/api/getMovieInfo";

const unwrapJsonp = <T>(jsonp: string): T => {
  const text = jsonp.slice(9, jsonp.length - 3)
  return JSON.parse(text)
}

type ShownMovieResult = string[]

interface ShownMovieResponseData {
  result: ShownMovieResult
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

export interface MovieInfoSuccessResult {
  url: string
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
export interface MovieInfoErrorResult {
  error: string
}

export type MovieInfoResult = MovieInfoSuccessResult | MovieInfoErrorResult

type MovieInfoResponseData = string

export class OnsenClient {
  static async fetchShownMovie(): Promise<ShownMovieResult> {
    const response = await axios.get<ShownMovieResponseData>(LIST_URL)
    return response.data.result
  }
  static async fetchMovieInfo(movieName: string): Promise<MovieInfoResult> {
    const response = await axios.get<MovieInfoResponseData>(`${SHOW_URL}/${movieName}`)
    console.log(response)
    return unwrapJsonp<MovieInfoResult>(response.data)
  }
}
