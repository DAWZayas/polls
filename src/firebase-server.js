var data = require('./utils/redux-polls-export.json');

var FirebaseServer = require('firebase-server');

new FirebaseServer(5000, '127.0.1', data).setAuthSecret('sRhN4rw1LfRCN8BXS5zCNpo3odJAWhTvLXXT8edk');

var client = new Firebase('ws://127.0.1:5000');
client.on('value', function(snap) {
    console.log(JSON.stringify(snap.val(), null, '  '));
});