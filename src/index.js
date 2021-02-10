import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// const path = require('path');
// const express = require('express');
// const app = new express();
 
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'components/pages/homepage.jsx'));
// });

// app.get('/blogs', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'components/pages/blogs.jsx'));
// });

// app.get('/tutorials', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'components/pages/tutorials.jsx'));
// });


// app.use(express.static('public'));
 
// app.listen(4000, () => {
//     console.log('App listening on port 4000')
// });

