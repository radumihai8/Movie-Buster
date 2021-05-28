let setRandomColor = setTimeout(function setColor() {
	let randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.getElementById("rndColor").style.color = "#"+randomColor;
  timerId = setTimeout(setColor, 2000);
}, 2000);

let timer = setInterval(move, 10000);



document.getElementById("searchString").onkeyup = function() {validateSearch()};


function showIframe(){
	if(validateSearch())
		document.getElementById('iframe').style.display = 'block';
}

function validateSearch()
{
	console.log('asdasda');
	var searchString = document.getElementById('searchString').value;
	var regex = /^[0-9a-zA-Z]+$/;
	if(!searchString.match(regex)) 
	{
	   document.getElementById('validateContainer').innerHTML = "The search string can only contain numbers and letters";
	   document.getElementById("searchBtn").disabled = true; 
	   return false;
	}
	else{
		document.getElementById('validateContainer').innerHTML = "";
		document.getElementById("searchBtn").disabled = false; 
	}
	return true;
}	

window.onload=function(){
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, '0'); //padstart sa aiba format in 2 cifre
	let mm = String(today.getMonth() + 1).padStart(2, '0'); //incepe de la 0
	let yyyy = today.getFullYear();

	today = mm + ' - ' + dd + ' - ' + yyyy;
	document.getElementById('datenow').innerHTML = today;

	afisarePopular();
	afisareComing();
	afisareTop();
}

function hide(event){
	let elem = document.getElementById("hidden");
	let prop = window.getComputedStyle(elem, null).getPropertyValue("display");
	
	if(prop=='none')
		elem.style.display = "block";
	
	event.stopPropagation();
	event.preventDefault();

	event.target.parentElement.parentElement.style.display = 'none';		
}

function afisarePopular() {

	let xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "https://api.themoviedb.org/3/movie/popular?api_key=ea9763c57b0db5df04ae8d0cce7ad143&language=en-US&page=1", true);
	xmlhttp.send();


	xmlhttp.onreadystatechange = function() {
	  if (this.readyState == 4 && this.status == 200) {
		let arr = JSON.parse(this.responseText);
	  
	
	for(let i = 0; i < 10; i++) {
		let f_obj = arr['results'][i];
		let film = document.createElement('a');
		film.href="pages/movie.html/?mid="+f_obj["id"];
		let image_path = 'https://image.tmdb.org/t/p/w500/'+f_obj["poster_path"];
		film.classList.add("movie");
		film.style.backgroundImage = "url('"+image_path+"')";
		film.innerHTML = '<div class="info"><span id="hide" onclick="hide(event)">Hide</span><br><p><span class="movie-name">'+f_obj["original_title"]+'</span></p><p><span class="star">&#9733; </span><span class="rating">'+f_obj["vote_average"]+' / 10 </span></p></div>';
		document.getElementById('popular').append(film);
	}
	
	}
	};
}

function afisareComing() {

	let xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "https://api.themoviedb.org/3/movie/upcoming?api_key=ea9763c57b0db5df04ae8d0cce7ad143&language=en-US&page=1", true);
	xmlhttp.send();


	xmlhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
			let arr = JSON.parse(this.responseText);
		  
		
		for(let i = 0; i < 10; i++) {
			let f_obj = arr['results'][i];
			let film = document.createElement('a');
			film.href="pages/movie.html/?mid="+f_obj["id"];
			let image_path = 'https://image.tmdb.org/t/p/w500/'+f_obj["poster_path"];
			film.classList.add("movie");
			film.style.backgroundImage = "url('"+image_path+"')";
			film.innerHTML = '<div class="info"><span id="hide" onclick="hide(event)">Hide</span><br><p><span class="movie-name">'+f_obj["original_title"]+'</span></p><p><span class="star">&#9733; </span><span class="rating">'+f_obj["vote_average"]+' / 10 </span></p></div>';
			document.getElementById('comingsoon').append(film);
		}
		
		}
	};
}

function afisareTop() {

	let xmlhttp = new XMLHttpRequest();

	xmlhttp.open("GET", "https://api.themoviedb.org/3/movie/top_rated?api_key=ea9763c57b0db5df04ae8d0cce7ad143&language=en-US&page=1", true);
	xmlhttp.send();


	xmlhttp.onreadystatechange = function() {
		  if (this.readyState == 4 && this.status == 200) {
			let arr = JSON.parse(this.responseText);
		  
		
		for(let i = 0; i < 10; i++) {
			let f_obj = arr['results'][i];
			let film = document.createElement('a');
			film.href="pages/movie.html/?mid="+f_obj["id"];
			let image_path = 'https://image.tmdb.org/t/p/w500/'+f_obj["poster_path"];
			film.classList.add("movie");
			film.style.backgroundImage = "url('"+image_path+"')";
			film.innerHTML = '<div class="info"><span onclick="hide(event)">Hide</span><br><p><span class="movie-name">'+f_obj["original_title"]+'</span></p><p><span class="star">&#9733; </span><span class="rating">'+f_obj["vote_average"]+' / 10 </span></p></div>';
			document.getElementById('toprated').append(film);
		}
		
		}
	};
}