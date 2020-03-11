import { Injectable } from '@nestjs/common';
import { OnsenClient } from '../lib/onsen_client'

@Injectable()
export class ProgramsService {
  async crawlPrograms(): Promise<void> {
    const client = new OnsenClient()
    const programNames = await client.fetchProgramNames()
  }
}
