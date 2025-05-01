const Sentry = require('@sentry/nextjs')

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  
  // Configure integrations
  integrations: [
    new Sentry.Replay({
      // Additional Replay configuration
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
}) 