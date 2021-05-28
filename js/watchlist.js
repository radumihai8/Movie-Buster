console.log(localStorage.getItem("watchedArray"));


const watched = JSON.parse(localStorage.getItem('watchedArray')) || [];


for(let i = 0; i<watched.length; i++)
{
		let f_obj = watched[i];
		let mid = f_obj['movie-id'];
		
		
		let href = "movie.html/?mid="+f_obj["movie-id"];
		let image_path = 'https://image.tmdb.org/t/p/w500/'+f_obj["movie-poster"];
		
		let a = document.createElement('a');
		a.href = href;
		a.classList.add('movie');
		a.style.width = "60%";
		a.style.backgroundImage = "url('"+image_path+"')";
		a.innerHTML = '<div class="info"><br><p><span class="movie-name">'+f_obj["movie-title"]+'</span></p></div>';

		let cell = document.createElement('div');
		cell.classList.add("grid-item");
		cell.append(a);
		document.getElementById('watched_grid').append(cell);
}
	