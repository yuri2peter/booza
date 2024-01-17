module.exports = {
  apps: [
    {
      name: 'empty-project',
      script: './dist/server/main.js',
      env: {
        NODE_ENV: 'production',
        SERVER_PORT: '3001',
      },
    },
  ],
};
