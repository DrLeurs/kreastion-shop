/**
 * Middlewares
 */

// middleware to test if user is authenticated
function isAuthenticated(req, res, next) {
    if (req.session.user) next()
    else res.status(400).json({ message: 'Unauthorized' })
}

module.exports = {
    isAuthenticated
}