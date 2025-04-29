export class CreateJobDto {
  title: string;
  description: string;
  embedding: number[]; // Vector embedding for the job
} 