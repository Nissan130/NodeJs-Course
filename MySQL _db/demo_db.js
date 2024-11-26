var mysql = require('mysql')

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: 'demo'
});



con.connect((err) => {
    if(err) throw err;
    console.log('Connected');

    var sql = "insert into student (name,roll) values('Nissan',2003130)";
    con.query(sql, (err,result) => {
        if(err) throw err;
        console.log('Table created successfully');
    })
})