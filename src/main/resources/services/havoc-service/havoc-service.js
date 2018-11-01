var havoc = require('/lib/havoc.js');

exports.get = function (req) {

    var requestParams = req.params;

    log.info("RequestParams: %s", JSON.stringify(requestParams, null, 4));

    var params = {
        runTime: requestParams.runTime,
        iterations: requestParams.iterations,
    };


    log.info("Calling havoc-service");

    var result = havoc.gcHavoc(params);

    var result = {};

    return {
        contentType: 'application/json',
        body: {
            repairStatus: result
        }
    }
};