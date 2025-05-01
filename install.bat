@echo off
call npm init -y
call npm install next react react-dom typescript @types/react @types/node @types/react-dom
call npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox typescript ts-node dotenv @openzeppelin/contracts
call npm install @0xsequence/kit @0xsequence/wallet ethers@^6.11.1
call npm install tailwindcss postcss autoprefixer @heroicons/react class-variance-authority clsx tailwind-merge
call npx tailwindcss init -p 