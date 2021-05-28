let express = require('express');
let fs=require('fs');
app=express();


app.use('/post', express.urlencoded({extended:false}));


app.post("/post", function(req,res){
	fs.readFile("filme.json", function(err, d) { 
		let p = JSON.parse(d);
		res.write('<body style="margin:0px;">');
		res.write('<div style="text-align:center;background:#06223e;min-height:500px;">');
		for(let i = 0; i < p.length; i++) {
			if(p[i]['title'].includes(req.body.searchString))
				res.write('<a style="color:#fff;" href="http://localhost:8080/pages/movie.html/?mid='+p[i].id+'" target="blank">' + p[i].title +'</a><br>');
		} 
		res.write('</div>');
		res.write('</body>');
		
		res.end();
	});
});

console.log('a pornit');
app.listen(4000);
