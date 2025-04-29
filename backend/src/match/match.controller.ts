import { Controller, Post, Body } from '@nestjs/common';
import { MatchService } from './match.service';
import { MatchDto } from './dto/match.dto';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Post()
  async findMatches(@Body() matchDto: MatchDto) {
    return this.matchService.findMatches(matchDto);
  }
} 