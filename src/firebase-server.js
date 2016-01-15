var data = require('./utils/redux-polls-export.json');

var FirebaseServer = require('firebase-server');

new FirebaseServer(5000, 'test.firebaseio.com', data).setAuthSecret('sRhN4rw1LfRCN8BXS5zCNpo3odJAWhTvLXXT8edk');

var client = new Firebase('ws://test.firebaseio.com:5000');
client.on('value', function(snap) {
    console.log('Got value: ', JSON.stringify(snap.val(), null, '\t'));
});