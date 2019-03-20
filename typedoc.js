module.exports = {
  out: './docs/',
  readme: 'README.md',
  name: 'Sentry JavaScript SDKs',
  includes: './',
  exclude: [
    '**/test/**/*',
    '**/*.js',
    '**/dist/**/*',
    '**/esm/**/*',
    '**/build/**/*',
    '**/packages/integrations/**/*',
    '**/packages/opentracing/**/*',
    '**/packages/typescript/**/*',
    '**/packages/raven-js/**/*',
    '**/packages/raven/**/*',
    '**/dangerfile.ts',
  ],
  mode: 'modules',
  excludeExternals: true,
  excludeNotExported: true,
  excludePrivate: true,
  'external-modulemap': '.*packages/([^/]+)/.*',
};
