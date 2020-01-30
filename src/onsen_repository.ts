import { OnsenClient, buildOnsenClient } from './lib/onsen_client'

type ProgramMoviePath = {
  pc: string
  iPhone: string
  Android: string
}

type ProgramLink = {
  imagePath: string
  url: string
}

class Program {
  constructor(
    public readonly name: string,
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

// class ProgramFactory {
//   static buildFromShowApiResponse(response: ShowApiSuccessResponse): Program {
//     const [year, month, day] = response.update.split('.').map(_ => Number(_))
//     const personalities = response.personality.split('/').map(_ => _.trim())

//     return new Program(
//       response.url,
//       response.type,
//       response.thumbnailPath,
//       response.moviePath,
//       response.title,
//       personalities,
//       response.guest,
//       new Date(year, month, day),
//       Number(response.count),
//       response.link
//     )
//   }
// }
interface OnsenRepositoryInterface {
  fetchProgramNames(): Promise<string[]>
  // fetchProgram(name: string): Promise<Program>
}

export class OnsenRepository implements OnsenRepositoryInterface {
  constructor(private client: OnsenClient) {
  }

  async fetchProgramNames(): Promise<string[]> {
    return await this.client.fetchShownMovie()
  }

  // async fetchProgram(name: string): Promise<Program> {
  //   const result = await OnsenClient.fetchMovieInfo(name)

  // }
}

export const buildOnsenRepository = (): OnsenRepository => {
  return new OnsenRepository(buildOnsenClient())
}
