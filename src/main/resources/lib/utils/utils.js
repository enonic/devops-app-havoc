var portalLib = require('/lib/xp/portal');

exports.baseUrl = function () {
    var url = portalLib.url({
        path: '/app/' + app.name,
        type: "absolute"
    });

    if (!url.endsWith("/")) {
        return url + "/";
    }

    return url;
};
