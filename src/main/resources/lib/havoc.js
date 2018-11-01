var bean = __.newBean('com.enonic.devops.app.havoc.HavocBean');


function required(params, name) {
    var value = params[name];
    if (value === undefined) {
        throw "Parameter '" + name + "' is required";
    }

    return value;
}

exports.gcHavoc = function (params) {

    var paramsObject = __.newBean('com.enonic.devops.app.havoc.GCHavocParams');
    paramsObject.runTime = required(params, "runTime");
    paramsObject.iterations = required(params, "iterations");
    var result = bean.wreckGC(paramsObject);

    return __.toNativeObject(result);
};
