module.exports = {
  apps: [
    {
      name: "2048 Game",
      script: "npm",
      args: "run start",
      instances: 1,
      autorestart: true,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 8009,
      },
    },
  ],
};
