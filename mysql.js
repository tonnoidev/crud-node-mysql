var mysql = require('mysql')

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'p@ssw0rd2535',
	database: 'testdb'
})

con.connect((err)=> {
	if (err) throw err
	console.log('Connected')

	// show all data
	// con.query('select * from cars', (err, result)=> {
	// 	if(err) throw err
	// 	console.log("Result: "+JSON.stringify(result));
	// })

	// insert data
	// con.query("insert into cars values(10, 'Mazda2', 20000)", (err, result)=>{
	// 	if(err) throw err
	// 	console.log('Inserted Successfully')
	// })

	// update data
	// con.query("update cars set price=99999 where id=10", (err, result)=>{
	// 	if(err) throw err
	// 	console.log('Updated Successfully')
	// })

	con.query("delete from cars where id=10", (err, result)=>{
		if(err) throw err
		console.log('Deleted Successfully')
	})
})
