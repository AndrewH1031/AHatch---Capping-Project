const mysql = require('mysql');

const config = {
    host: '34.162.61.150',
    user: 'root',
    password: 'csSQLpass',
    database: 'foxride-db'

};

//connection pool
const pool = mysql.createPool(config).promise();

//Insert query
const insertQuery = 'INSERT INTO table (col1, col2) VALUES (a, b)';
const dataToInsert = ['value1', 'value2'];

// Execute the query
  pool.execute(insertQuery, dataToInsert)
    .then(() => {
      console.log('Data inserted successfully');
    })
    .catch((err) => {
      console.error('Error inserting data:', err);
    })
    .finally(() => {
      // Close the connection pool
      pool.end();
    });

// Example select query
const selectQuery = 'SELECT * FROM table';

// Execute the query
pool.execute(selectQuery)
  .then(([rows]) => {
    // Process the retrieved data
    rows.forEach((row) => {
      console.log(row);
    });
  })
  .catch((err) => {
    console.error('Error retrieving data:', err);
  })
  .finally(() => {
    // Close the connection pool
    pool.end();
  });