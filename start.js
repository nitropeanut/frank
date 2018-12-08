import app from './app/app';

const config = require ('config');

const PORT = config.port | 3000; 

const server = app.listen (PORT, () => {
	
	console.log ('Frank is listening on ' + PORT);
});
