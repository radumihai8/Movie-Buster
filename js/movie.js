let title = "";
let imgpath = "";


console.log(localStorage.getItem("watchedArray"));
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const mid = urlParams.get('mid');

function isWatched(id) {
    const watched = JSON.parse(localStorage.getItem('watchedArray')) || [];
    
	
	for(let i = 0; i<watched.length; i++)
		if(id == watched[i]['movie-id'])
			return 1;
	
	return 0;
}

if(isWatched(mid))
	document.getElementById("watched").innerHTML = "You`ve already seen this movie";

document.getElementById("watched").addEventListener("click", function() {
	if(isWatched(mid)==0){	
		var oldWatched = JSON.parse(localStorage.getItem('watchedArray')) || [];

		var newItem = 
		{
		 'movie-id': mid,
		 'movie-title':title,
		 'movie-poster':imgpath,
		};

		oldWatched.push(newItem);

		localStorage.setItem('watchedArray', JSON.stringify(oldWatched));
		 
		document.getElementById("watched").innerHTML = "You`ve already seen this movie";
	}
});

let xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "https://api.themoviedb.org/3/movie/"+mid+"?api_key=ea9763c57b0db5df04ae8d0cce7ad143&language=en-US", true);
xmlhttp.send();


xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let filme = JSON.parse(this.responseText);
	console.log(filme);
    afisare(filme);
  }
};

function afisare(arr) {

		let f_container = document.getElementById('movieinfo');
		let f_obj = arr;
		let imagine = document.createElement('img');
		imagine.src = 'https://image.tmdb.org/t/p/w300/'+f_obj["poster_path"];
		imgpath = 'https://image.tmdb.org/t/p/w300/'+f_obj["poster_path"];
		document.getElementById('movie-header').append(imagine);
		
		let br = document.createElement('br');
		document.getElementById('movie-header').append(br);
		let br2 = document.createElement('br');
		document.getElementById('movie-header').append(br2);
		
		
		for(i=0;i<f_obj['genres'].length; i++)
		{
			let gen = document.createElement('span');
			gen.innerHTML = '<span class="blue">'+f_obj['genres'][i]['name']+'</span>&nbsp;';
			document.getElementById('movie-header').append(gen);
		}
		
		
		document.getElementById('movie-title').innerHTML = f_obj['title'];
		title = f_obj['title'];
		
		let descriere = document.createElement('p');
		descriere.innerHTML = f_obj['overview'];
		
		f_container.append(descriere);
		
		let durata = document.createElement('p');
		durata.innerHTML = "<span class='att'> Movie length: </span> " + f_obj['runtime'] + "Movies";
		f_container.append(durata);
		
		let revenue = document.createElement('p');
		revenue.innerHTML = "<span class='att'> Movie revenue:  </span>" + f_obj['revenue'] + "$";
		f_container.append(revenue);
		
		let budget = document.createElement('p');
		budget.innerHTML = "<span class='att'> Movie budget:  </span>" + f_obj['budget'];
		f_container.append(budget);
	
}