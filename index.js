const fetch = require('node-fetch')

fetch('https://ani.gamer.com.tw/animeList.php')
.then(res => res.text())
.then(body => {
	var pattern = /<div class=\"info\">(.+?)<\/div>/g;
	var matches = body.match(pattern)
	
	console.log(matches)
	
	/*matches.forEach((v) => {
		var r = /(?:<div class=\"info\"><b>)(.+?)(?:<\/b><br>)(.+?)(?:<\/div>)/g
		var m = r.exec(v)
		console.log(m[1])
	})*/
})