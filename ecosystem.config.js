// PM2 ecosystem config — keep at /app/public_html/ecosystem.config.js on the server.
// Both processes must run in PRODUCTION mode (next start, uvicorn workers).
module.exports = {
  apps: [
    {
      name: "origami-frontend",
      cwd: "./frontend",
      script: "yarn",
      args: "prod",                // <-- yarn prod = `next start -p 6010`
      env: {
        NODE_ENV: "production",
        PORT: "6010",
        HOST: "0.0.0.0",
      },
      max_memory_restart: "1G",
      exp_backoff_restart_delay: 100,
    },
    {
      name: "origami-backend",
      cwd: "./backend",
      script: "uvicorn",
      args: "server:app --host 0.0.0.0 --port 8001 --workers 2",
      interpreter: "python3.11",
      env: {
        NODE_ENV: "production",
      },
      max_memory_restart: "512M",
      exp_backoff_restart_delay: 100,
    },
  ],
};
