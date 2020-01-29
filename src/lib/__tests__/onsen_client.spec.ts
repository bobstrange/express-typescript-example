import { OnsenClient } from '../onsen_client'
import { loadFixture } from '../../test_helper/fixture'

jest.mock('axios')
import Axios from 'axios'

describe('OnsenClient', () => {
  test('fetchShownMovie', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (Axios.get as any).mockResolvedValue({ data: await loadFixture("list_results.json") });

    const data = await OnsenClient.fetchShownMovie()
    expect(data[0]).toBe('mhr3')
    expect(data[data.length - 1]).toBe('koitate')
  })
})
