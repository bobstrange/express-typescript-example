import axios from 'axios'

const LIST_URL = 'http://www.onsen.ag/api/shownMovie/shownMovie.json'
const SHOW_URL = "http://www.onsen.ag/data/api/getMovieInfo";

const unwrap = (jsonp: string) : any => {
  const text = jsonp.slice(9, jsonp.length - 3)
  console.log(text)
  return JSON.parse(text)
}

test.skip('list request', async () => {
  const response = await axios({ method: 'get', url: LIST_URL })
  console.log(response['data']['result'])
})

test('show request', async () => {
  const item = 'toshitai'
  const response = await axios({ method: 'get', url: `${SHOW_URL}/${item}` })
  console.log(response['data'])
  console.log(unwrap(response['data']))
})
