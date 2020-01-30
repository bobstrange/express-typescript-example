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
      return Promise.resolve({} as  MovieInfoResult)
    }
  }

  test('fetchProgramNames', async () => {
    repository = new OnsenRepository(clientStub)
    expect(await repository.fetchProgramNames()).toEqual(
      ['foo', 'bar']
    )
  })
})
