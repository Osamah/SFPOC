cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.keith.cordova.plugin.canvascamera/www/CanvasCamera.js",
        "id": "com.keith.cordova.plugin.canvascamera.CanvasCamera",
        "clobbers": [
            "plugin.CanvasCamera",
            "CanvasCamera"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.0.0",
    "com.keith.cordova.plugin.canvascamera": "1.0.0dev"
}
// BOTTOM OF METADATA
});