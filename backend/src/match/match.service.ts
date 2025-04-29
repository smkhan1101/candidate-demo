import { Injectable, NotFoundException } from '@nestjs/common';
import { JobsService } from '../jobs/jobs.service';
import { CandidatesService } from '../candidates/candidates.service';
import { MatchDto } from './dto/match.dto';
import { generateMockEmbedding } from '../utils/mockVectors';

@Injectable()
export class MatchService {
  constructor(
    private jobsService: JobsService,
    private candidatesService: CandidatesService,
  ) {}

  async findMatches(matchDto: MatchDto) {
    let embedding: number[] | null;
    
    if (matchDto.jobId) {
      // Get embedding from existing job
      const job = await this.jobsService.findOne(matchDto.jobId);
      if (!job.embedding) {
        // If no embedding exists, generate one from the job description
        embedding = generateMockEmbedding(job.description);
      } else {
        embedding = job.embedding;
      }
    } else if (matchDto.jobDescription) {
      // Generate embedding from job description
      embedding = generateMockEmbedding(matchDto.jobDescription);
    } else {
      throw new NotFoundException('Either jobId or jobDescription must be provided');
    }

    if (!embedding) {
      throw new Error('Failed to generate embedding');
    }
    
    // Find top matching candidates
    return this.candidatesService.findTopMatches(embedding);
  }
} 