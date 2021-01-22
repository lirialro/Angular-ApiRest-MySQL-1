
let express = require("express");
let bodyParser = require ('body-parser');
let app = express();
let cors = require('cors');
app.use(cors());
let mysql = require("mysql");
let connection = mysql.createConnection(
    {
    host: "localhost", 
    user: "root",
    password: null,
    database: "angular"
    
    });

    connection.connect(function(error) {
        if (error) {
            console.log(error);
        }else{
            console.log('Conexión correcta');
        }
    });

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/discos",
        function(request, response)
        {
            let sql;
            if (request.query.id == null)
                sql = "SELECT * FROM discos";
            else
                sql = "SELECT * FROM discos WHERE id=" + request.query.id;

            connection.query(sql, function (err, result)
            {
                if (err)
                    console.log(err);
                else
                {
                    response.send(result);
                }
            })
        }
);

app.get("/discos/:id",
        function(request, response)
        {
            let sql = "SELECT * FROM discos WHERE id=" + request.params.id;
            console.log(sql);
            connection.query(sql, function (err, result)
            {
                if (err)
                    console.log(err);
                else
            {
                console.log(result)
                response.send(result);
            }
        })
    }
);

app.post("/discos",
        function(request, response)
        {
            console.log(request.body);
            let sql = "INSERT INTO discos (titulo, interprete, anyoPublicacion	) " + 
                    "VALUES ('" + request.body.titulo + "', '" +
                                    request.body.interprete + "', '" +
                                    request.body.anyoPublicacion + "')";
            console.log(sql)
            connection.query(sql, function (err, result)
            {
                if (err)
                    console.log(err);
                else
            {
                if (result.insertId)
                    response.send(String(result.insertId));
                else
                    response.send("-1");
            }
        })
    }
);

app.put("/discos",
        function(request, response)
        {
            let sql = "UPDATE discos SET titulo = '" + request.body.titulo +
                        "', interprete = '" + request.body.interprete +
                        "', anyoPublicacion = '" + request.body.anyoPublicacion + "'" +
                        "WHERE id = " + request.body.id;
            console.log(sql);
            connection.query(sql, function (err, result)
            {
                if (err)
                    console.log(err);
                else
            {
                response.send(result);
            }
        })
    }
);

app.delete("/discos",
    function(request, response)
    {
        const id = request.query.id;
        let sql = "DELETE FROM discos WHERE id = '" + id + "'";
        console.log(sql);
            connection.query(sql, function (err, result)
            {
                if (err)
                    console.log(err);
                else
            {
                response.send(result);
            }
        })
    }
);





app.listen(2750);



