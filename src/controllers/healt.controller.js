export const healtController = (req, res) => {
    res.status(200).json({
        "status":"ok",
        "service":"arcana-saas-api",
        "timestamp":"2026-03-16T10:30:00.000Z",
        "environment":"development"
    })
}