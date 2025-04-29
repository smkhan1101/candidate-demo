import { Module } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchController } from './match.controller';
import { JobsModule } from '../jobs/jobs.module';
import { CandidatesModule } from '../candidates/candidates.module';

@Module({
  imports: [JobsModule, CandidatesModule],
  controllers: [MatchController],
  providers: [MatchService],
})
export class MatchModule {} 