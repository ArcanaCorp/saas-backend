export const getHealth = (_req, res) => {
  return res.status(200).json({
    status: "ok",
    service: process.env.SERVICE_NAME ?? "arcana-saas-api",
    environment: process.env.NODE_ENV ?? "development",
    timestamp: new Date().toISOString(),
  });
};