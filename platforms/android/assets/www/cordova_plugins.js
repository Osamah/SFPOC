cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.keith.cordova.plugin.canvascamera/www/CanvasCamera.js",
        "id": "com.keith.cordova.plugin.canvascamera.CanvasCamera",
        "clobbers": [
            "plugin.CanvasCamera",
            "CanvasCamera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.keith.cordova.plugin.canvascamera": "1.0.0dev",
    "cordova-plugin-whitelist": "1.0.0"
}
// BOTTOM OF METADATA
});