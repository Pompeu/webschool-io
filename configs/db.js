// file: configs/db.js - created at 2015-12-06, 04:04
'use strict';


let dbHandler = {};
const local ='mongodb://localhost/pompeuapi'; 
const mongolab ='mongodb://ItacirPompeu:552525@ds049130.mongolab.com:49130/pompeuapi';

dbHandler.getDb = () => {
	return process.env.USER === 'pompeu'? local : mongolab;
};

module.exports = dbHandler;
