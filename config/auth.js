module.exports = function(req, res, next) {
    // checks to see if any user is logged in before moving on the pipeline
    if (req.isAuthenticated()) return next();
    // if not, redirect to login page
    res.redirect('auth/google');
}