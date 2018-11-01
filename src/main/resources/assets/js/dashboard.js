"use strict";
(function ($) {

        var alertHideTimer;
        var svcUrl = document.currentScript.getAttribute('data-svcurl');

        console.log("Wreck havoc, svcUrl: ", svcUrl)

        $("#btnGC").click(function () {
            startGCHavoc();
        });


        var startGCHavoc = function () {

                var data = {
                    runTime: $('#inpRunTime').val(),
                    iterations: $('#inpIterations').val()
                };

                $.ajax({
                    url: svcUrl + 'havoc-service',
                    data: data,
                    method: 'GET',
                    cache: false
                }).then(function (data) {
                    showAlertMessage('Started GC-Havoc.', 'success');

                }).fail(function (jqXHR) {
                    showAlertMessage('Cannot start GC-Havoc!', 'error');
                });
            }
        ;


        var showAlertMessage = function (text, type) {
            type = type || 'warning';
            $('#alertMessageText').text(text);
            $('#alertMessage')
                .show()
                .toggleClass('alert-warning', type === 'warning')
                .toggleClass('alert-danger', type === 'error')
                .toggleClass('alert-info', type === 'info')
                .toggleClass('alert-success', type === 'success');

            clearTimeout(alertHideTimer);
            alertHideTimer = setTimeout(function () {
                $('#alertMessage').hide();
            }, 5000);
        };
    }(jQuery)
);
