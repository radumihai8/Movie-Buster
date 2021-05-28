let xmlhttp = new XMLHttpRequest();

xmlhttp.open("GET", "https://api.themoviedb.org/3/trending/movie/week?api_key=ea9763c57b0db5df04ae8d0cce7ad143", true);
xmlhttp.send();


xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let filme = JSON.parse(this.responseText);
    afisare(filme);
  }
};


function afisare(arr) {
	for(let i = 0; i < arr['results'].length; i++) {
			let f_obj = arr['results'][i];
			let film = document.createElement('a');
			film.href="movie.html/?mid="+f_obj["id"];
			let image_path = 'https://image.tmdb.org/t/p/w500/'+f_obj["poster_path"];
			film.classList.add("movie");
			film.style.backgroundImage = "url('"+image_path+"')";
			film.innerHTML = '<div class="info"><br><p><span class="movie-name">'+f_obj["original_title"]+'</span></p><p><span class="star">&#9733; </span><span class="rating">'+f_obj["vote_average"]+' / 10 </span></p></div>';
			document.getElementById('trending').append(film);
	}
}