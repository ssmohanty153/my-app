var mongoClient=require("mongodb").MongoClient;
var express=require("express");
var cors=require("cors");

var url="mongodb://127.0.0.1:27017";

var app=express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

app.get("/getproduct", function(request,response){
    mongoClient.connect(url,function(err,clientObject){
        var dbo=clientObject.db("productdb");
        dbo.collection("tblProduct").find().toArray(function(err,document){
            if(!err){
                response.send(document);
            }
        })
    })
});

app.listen(8080);
console.log("server started in: http://127.0.0.1:8080")
