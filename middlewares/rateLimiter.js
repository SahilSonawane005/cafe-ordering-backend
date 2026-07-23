import rateLimit from 'express-rate-limit';

const rateLimiter = rateLimit({
    windowMs:2 * 60 * 1000, 
    max: 10,
    handler: (req, res) => {
        res.status(429).json({
            message: 'Too many requests, please try again later.'
        });
    }
})

export { rateLimiter };