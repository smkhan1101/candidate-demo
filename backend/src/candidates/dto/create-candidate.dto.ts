export class CreateCandidateDto {
  name: string;
  skills: string;
  embedding: number[]; // Vector embedding for the candidate
} 