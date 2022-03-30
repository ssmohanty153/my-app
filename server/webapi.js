var mongoClient =require("mongodb").MongoClient;
var express=require("express");
var cors=require("cors");

var url="mongodb://127.0.0.1:27017";

var app=express();

app.use(express.json());
app.use(cors());

app.get('/getcatagory',function(req,res){
    mongoClient.connect(url,function(err,clientObject){
        if(!err){
            var dbo=clientObject.db("onlinestore");
            dbo.collection("tblcategories").find().toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})
app.get('/getproduct',function(req,res){
    mongoClient.connect(url,function(err,clientObject){
        if(!err){
            var dbo=clientObject.db("onlinestore");
            dbo.collection("tblProducts").find().toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})

app.get('/getproduct/:id',function(req,res){
    var id=parseInt(req.params.id);
    mongoClient.connect(url,function(err,clientObject){
        if(!err){
            var dbo=clientObject.db("onlinestore");
            dbo.collection("tblProducts").find({CatagoryId:id}).toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})

app.get('/getproductDetail/:id',function(req,res){
    var id=parseInt(req.params.id);
    mongoClient.connect(url,function(err,clientObject){
        if(!err){
            var dbo=clientObject.db("onlinestore");
            dbo.collection("tblProducts").find({ProductId:id}).toArray(function(err,documents){
                if(!err){
                    res.send(documents);
                }
            })
        }
    })
})
app.post("/addproduct",function(request,response){
    mongoClient.connect(url,function(err,clientObject){
        if(!err){
            var dbo=clientObject.db("onlinestore");
            var data={
                ProductId:parseInt(request.body.ProductId),
                Name:request.body.Name,
                Price:parseFloat(request.body.Price),
                CatagoryId:parseInt(request.body.CatagoryId)
            }

            dbo.collection("tblProducts").insertOne(data,function(err,result){
                if(!err){
                   console.log("record insterted")
                }
            })
        }
    })
})


app.listen(8080);
console.log("server Started");