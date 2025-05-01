# AI-Powered Virtual Talent Manager

An AI-powered virtual talent manager that helps creators handle sponsorships, content drops, and revenue — all onchain using Sequence.

## Features

- Smart contract wallet with Embedded Wallets
- Revenue sharing via Sequence standard contracts
- Gated NFT drops using Audiences, Sidekick, and Transaction API
- AI-powered management of sponsorships and content drops
- Progressive Web App (PWA) support for mobile devices
- Error tracking and monitoring with Sentry
- Comprehensive test coverage with Jest
- Enhanced security headers and best practices
- Performance optimizations and compression

## Tech Stack

- Next.js with TypeScript
- Tailwind CSS for styling
- Sequence SDK for blockchain integration
- Solidity for smart contracts
- Hardhat for contract deployment
- Jest for testing
- Sentry for error tracking
- PWA support for mobile

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Fill in the required values:
     - `NEXT_PUBLIC_SEQUENCE_PROJECT_ACCESS_KEY`: Your Sequence project access key
     - `POLYGON_RPC_URL`: Polygon RPC URL
     - `MUMBAI_RPC_URL`: Mumbai testnet RPC URL
     - `PRIVATE_KEY`: Your wallet private key for contract deployment
     - `POLYGONSCAN_API_KEY`: PolygonScan API key for contract verification
     - `NEXT_PUBLIC_SENTRY_DSN`: Your Sentry DSN for error tracking

4. Deploy smart contracts:
   ```bash
   npx hardhat run scripts/deploy.ts --network mumbai
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## Testing

Run the test suite:
```bash
npm test
```

Watch mode for development:
```bash
npm run test:watch
```

## Production Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## Smart Contracts

### RevenueSharing.sol
- Manages revenue distribution among stakeholders
- Supports both ETH and ERC20 token distributions
- Configurable share percentages

### ContentDrop.sol
- Handles gated NFT content drops
- Configurable pricing and supply
- Access control for content viewing

## Security Features

- HTTPS-only in production
- Secure headers configuration
- Content Security Policy
- XSS protection
- CSRF protection
- Rate limiting
- Input validation with Zod

## Performance Optimizations

- Image optimization
- Code splitting
- Route prefetching
- Static generation where possible
- Compression enabled
- PWA for offline support

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 

## Husky Setup

To initialize Husky hooks, run:
```bash
npx husky install
``` 