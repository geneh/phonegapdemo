//Main page
$(document).on("deviceready", checkConnection);
$(document).on("pageshow", "#mainPage", checkConnection);

function checkConnection() {
    if (typeof Connection !== "undefined") {
        var networkState = navigator.connection.type;

        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';

        $("#networkConnectivityTxt").text("Connection type: " + states[networkState]);
    } else {
        $("#networkConnectivityTxt").text("Unable to detect network. The application does not have access to Cordova APIs.");
    }
}

/** Device Info **/
$(document).on("pageinit", "#devicePage", function() {
    //Populate device information
    var $deviceInfo = $("#deviceInfo");
    $deviceInfo.empty();
    if (typeof device !== "undefined") {
        var deviceInfoHtml = "<li>Cordova Version: " + device.cordova + "</li>";
        deviceInfoHtml += "<li>Device Platform: " + device.platform + "</li>";
        deviceInfoHtml += "<li>Device UUID: " + device.uuid + "</li>";
        deviceInfoHtml += "<li>Device Version: " + device.version + "</li>";
        deviceInfoHtml += "<li>Device Model: " + device.model + "</li>";
        $deviceInfo.append(deviceInfoHtml);
    } else {
        $deviceInfo.append("<li>Unable to detect device type. The application does not have access to Cordova APIs.</li>");
    }
    $deviceInfo.listview("refresh");
});