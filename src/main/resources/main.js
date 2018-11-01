var authLib = require('/lib/xp/auth');
var router = require('/lib/router')();
var dashboardPage = require('/lib/pages/dashboard/dashboard');

var authFilter = function (req, next) {
    var isAuthorized = authLib.hasRole('system.admin.login') || authLib.hasRole('backup.manager');
    if (!isAuthorized) {
        return {
            status: 401
        };
    }
    return next(req);
};

router.get('/', dashboardPage.handleGet);
router.filter(authFilter);

exports.all = function (req) {
    return router.dispatch(req);
};
