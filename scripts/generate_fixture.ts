import { saveFetchShownMovieFixture, saveFetchMovieInfoFixture } from '../src/test_helper/fixture'

saveFetchShownMovieFixture()
const items = [
  'toshitai',
  'kokuradio',
  'tojinomiko'
]
items.forEach(saveFetchMovieInfoFixture)
