
import { OnsenClient } from '../lib/onsen_client'

import FS from 'fs'
import Path from "path";
const fixtureDir = Path.resolve(process.cwd(), "fixtures");

export const saveFixture = async (filename: string, data: any): Promise<void> => {
  const path = Path.resolve(fixtureDir, filename);
  await FS.promises.writeFile(path, JSON.stringify(data));
};

export const loadFixture = async (filename: string): Promise<any> => {
  const path = Path.resolve(fixtureDir, filename);
  return JSON.parse(await FS.promises.readFile(path, "utf-8"));
};

const fetchShownMovieFixtureName = 'list_results.json'
const fetchMovieInfoFixtureName = (movieName: string): string => {
  return `movie_info_result_${movieName}.json`
}

export const saveFetchShownMovieFixture = async (): Promise<void> => {
  const data = await OnsenClient.fetchShownMovie()
  const apiResponse = { result: data }
  await saveFixture(fetchShownMovieFixtureName, apiResponse)
}

export const loadFetchShownMovieFixture = async (): Promise<any> => {
  return await loadFixture(fetchShownMovieFixtureName)
}

export const saveFetchMovieInfoFixture = async (movieName: string): Promise<void> => {
  const data = await OnsenClient.fetchMovieInfo(movieName)
  const apiResponse = 'callback(' + JSON.stringify(data) + ') ;'
  const fixtureName = fetchMovieInfoFixtureName(movieName)
  await saveFixture(fixtureName, apiResponse)
}

export const loadFetchMovieInfoFixture = async (movieName: string): Promise<any> => {
  const fixtureName = fetchMovieInfoFixtureName(movieName)
  return await loadFixture(fixtureName)
}
