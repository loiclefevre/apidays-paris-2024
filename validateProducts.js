// npm install oracledb
'use strict';
Error.stackTraceLimit = 50;

const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function run() {

    // connect
    const connection = await oracledb.getConnection ({
        user          : "apidays",
        password      : "free",
        connectString : "localhost/freepdb1.fr.oracle.com"
    });

    // query JSON Schema from database table
    const result = await connection.execute(
        `select dbms_json_schema.describe( 'PRODUCTS' ) as "schema"`
    );

    // retrieve the JSON Schema document
    var schema = result.rows[0].schema;
    console.log(schema);

    await connection.close();
}

run();