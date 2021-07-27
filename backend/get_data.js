const {config} = require("./config.js");
const https = require('https');

const ASTRA_DB_ID = config.ASTRA_DB_ID;
const ASTRA_DB_REGION = config.ASTRA_DB_REGION;
const ASTRA_DB_KEYSPACE = config.ASTRA_DB_KEYSPACE;
const ASTRA_DB_APPLICATION_TOKEN = config.ASTRA_DB_APPLICATION_TOKEN;

const url = "https://"+ASTRA_DB_ID+"-"+ASTRA_DB_REGION+".apps.astra.datastax.com/api/rest/v1/keyspaces/"+ASTRA_DB_KEYSPACE+"/tables/Word/rows?pageSize=5";

const options = {
  headers: {
    "accept": "application/json",
    "X-Cassandra-Token": ASTRA_DB_APPLICATION_TOKEN
  }
};

// fetch(url, options)
//   .then( res => res.json() )
//   .then( data => data['rows'].map(e => x.insert(e['word'])));