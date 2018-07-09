var fs = require('fs');

module.exports = function(app){

    app.post('/create-shortcut', function(req, res){
        var shortcutInfo = req.body;

        var appName = shortcutInfo.appName;
        var execPath = shortcutInfo.execPath;
        var iconPath = shortcutInfo.iconPath;
        var comment = shortcutInfo.comment;

        var lines = '[Desktop Entry]\n' +
        'Encoding=UTF-8\n' +
        'Version=1.0\n' +
        'Type=Application\n' +
        'Terminal=false\n' +
        'Name=' + appName + '\n' +
        'Exec=' + execPath + '\n' +
        'Icon=' + iconPath + '\n' +
        'Comment=' + comment + '\n';

        var filePath = './shortcut/' + appName + '.desktop';

        fs.writeFile(filePath, lines, function(err){
            if(err){
                console.log(err);
            }else{
                res.download(filePath);
            }
        });
    });
}