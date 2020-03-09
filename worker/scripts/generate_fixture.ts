import { saveFetchShownMovieFixture, saveFetchMovieInfoFixture } from '../src/test_helper/fixture'

saveFetchShownMovieFixture()
const items = [
  'toshitai',
  'kokuradio',
  'tojinomiko',
  'home',
  'tate',
  'iine'
]
items.forEach(saveFetchMovieInfoFixture)
saveFetchMovieInfoFixture('error')

