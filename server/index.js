const express = require("express");
const app = express();
const port = 3001;
const db = require("./models")
const cors = require('cors');

app.use(express.json());
app.use(cors());

// app.use(cors({
//     credentials: true,
//     origin: ["http://localhost:3000"]
// }));

//Routes
const adminDigitalHub = require('./routes/Digitalhub.routes')
app.use('/digitalhub', adminDigitalHub)

const adminVideoBlog = require('./routes/Videoblog.routes')
app.use('/videoblog', adminVideoBlog )

db.sequelize.sync().then(() =>{
    app.listen(port, ()=>{
        console.log("server running on port " +  port)
    })
})









// sequelize db
// var SequelizeAuto = require('sequelize-auto');
// var auto = new SequelizeAuto('connect_', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql',
// });

// auto.run(function (err) {
//     if (err) throw err;

// }) 
// var Sequelize=require('sequelize');
// const Conn = new Sequelize("mysql://root:@localhost/connect_", {// dbdielect: 'mysql' ,//user:password@host:port/database
//     define: {
//       timestamps: true // true by default. false because bydefault sequelize adds createdAt, modifiedAt columns with timestamps.if you want those columns make ths true.
//     }
//   });

// var noticias = Conn.import(__dirname+"/models/noticias.js");

// Conn.sync({force:false}).then(()=>{ 
//     /*make sure you use false here. otherwise the total data 
//     from the impported models will get deleted and new tables will be created*/
//     // now we cann do all db operations on customers table.
//     //Ex:- lets read all data
//     // noticias_blog.findAll().then(noticias=>{
//     //     console.log("customers are:-",noticias);
//     // }
//     // );
//     console.log("sync is completed")
// });
