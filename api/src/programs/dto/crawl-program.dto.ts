interface ProgramMoviePath {
  pc: string
  iPhone: string
  Android: string
}

interface ProgramLink {
  imagePath: string
  url: string
}

export class CrawlProgramDto {
  readonly name: string
  readonly type: string
  readonly thumbnailPath: string
  readonly moviePath: ProgramMoviePath
  readonly title: string
  readonly personalities: string[]
  readonly guest: string
  readonly update: Date
  readonly count: number
  readonly links: ProgramLink[]
}
