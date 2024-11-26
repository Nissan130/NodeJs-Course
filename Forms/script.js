
function takeInputValue() {
    const name = document.querySelector('#name').value;
    const mobile = document.querySelector('#mobile').value;
    // document.write('Your name is: '+name+'<br>');
    // document.write('Your mobile number is: '+mobile);

    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        database: 'demo'
    });

    con.connect((err)=>{
        if(err) throw err;
        var insert_query = 'INSERT INTO students_info(name,mobile) VALUES(name, mobile)';
    })
}



