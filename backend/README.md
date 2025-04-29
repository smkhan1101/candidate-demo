<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Backend Service

## Overview

This is a NestJS-based backend service that provides a robust foundation for building scalable and maintainable server-side applications. The project uses modern technologies and follows best practices for Node.js development.

## Tech Stack

- **Framework**: [NestJS](https://nestjs.com/) v10
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Code Quality**: ESLint, Prettier
- **Package Manager**: pnpm

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- pnpm (v8 or higher)
- PostgreSQL (v14 or higher)
- Git

## Project Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd backend
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Environment Configuration**

Create a `.env` file in the root directory:
```env
# Database Configuration
DATABASE_URL=postgresql://user:password@localhost:5432/dbname

# Application Configuration
PORT=3000
NODE_ENV=development
```

4. **Database Setup**
```bash
# Generate database migrations
pnpm run db:generate

# Apply migrations
pnpm run db:push

# (Optional) Start Drizzle Studio to manage your database
pnpm run db:studio
```

## Development

```bash
# Start development server with hot-reload
pnpm run start:dev

# Start development server in debug mode
pnpm run start:debug

# Lint the code
pnpm run lint

# Format the code
pnpm run format
```

## Testing

```bash
# Run unit tests
pnpm run test

# Run e2e tests
pnpm run test:e2e

# Generate test coverage report
pnpm run test:cov
```

## Production Deployment

1. **Build the application**
```bash
pnpm run build
```

2. **Start production server**
```bash
pnpm run start:prod
```

### Production Best Practices

1. **Environment Variables**
   - Use proper environment variables for all configurations
   - Never commit sensitive information to version control
   - Use separate .env files for different environments

2. **Security**
   - Use CORS protection
   - Keep dependencies updated
   - Use security headers

3. **Monitoring**
   - Set up proper logging

4. **Database**
   - Regular backups
   - Connection pooling
   - Query optimization
   - Use migrations for schema changes

## Project Structure

```
backend/
├── src/                    # Source code
│   ├── db/                 # Database configuration and models
│   ├── candidates/         # Candidates module
│   ├── jobs/              # Jobs module
│   ├── match/             # Match module
│   └── utils/             # Utility functions
├── test/                  # Test files
├── drizzle/               # Database migrations
└── dist/                  # Compiled output
```

## Code Style Guide

This project follows strict coding standards:

- Uses ESLint for code linting
- Prettier for code formatting
- Follows NestJS best practices
- Implements proper TypeScript types

## Contributing

1. Create a new branch for your feature
2. Write tests for new functionality
3. Ensure all tests pass
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please contact the development team or raise an issue in the repository.

