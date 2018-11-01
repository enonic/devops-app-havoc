var mustache = require('/lib/xp/mustache');
var portalLib = require('/lib/xp/portal');
var DashboardView = resolve('./dashboard.html');
var utils = require('/lib/utils/utils');

var baseUrl = function () {
    return utils.baseUrl();
};

exports.handleGet = function (req) {
    var params = {
        assetsUri: portalLib.assetUrl({path: ""}),
        svcUrl: portalLib.serviceUrl({service: 'Z'}).slice(0, -1),
        baseUrl: baseUrl(),
        statusUrl: baseUrl(),
        projectsUrl: baseUrl() + 'projects',
        configUrl: baseUrl() + 'configuration'
    };

    return {
        contentType: 'text/html',
        body: mustache.render(DashboardView, params)
    };
};
