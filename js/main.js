window.onscroll = function() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("mainNav").classList.add("fixed");
    } else {
        document.getElementById("mainNav").classList.remove("fixed");
    }
};


let pos = 0;
let page = 0;

function move() {
	console.log("Current pos:" + pos);
    if (pos == 3) {
        pos = 0;
        document.getElementById(page).children[3].classList.remove("highlight");
        document.getElementById(page).style.display = "none";

		page = page + 1;

        if (page == 3) {
            document.getElementById("carousel-paging").children[page - 1].classList.remove("active");
            page = 0;

        } else {
            document.getElementById("carousel-paging").children[page - 1].classList.remove("active");
        }
        document.getElementById(page).style.display = "block";

        document.getElementById("carousel-paging").children[page].classList.add("active");
		
		let actual = document.getElementById(page).children[pos];
		actual.classList.add("highlight");
		
    }
	else {
	
		let actual = document.getElementById(page).children[pos+1];
		actual.classList.add("highlight");
		
		if (pos >= 0) {
			let prev = document.getElementById(page).children[pos];
			prev.classList.remove("highlight");
		}
		
		pos = pos + 1;
	
	}

    console.log("Forward position :" + pos);

}

function moveBack() {
	
    if (pos == 0) {
        pos = 3;
		
        document.getElementById(page).children[0].classList.remove("highlight");
        document.getElementById(page).style.display = "none";

		page = page - 1 ;

        if (page == -1) {
            document.getElementById("carousel-paging").children[page + 1].classList.remove("active");
            page = 2;

        } else {
            document.getElementById("carousel-paging").children[page + 1].classList.remove("active");
        }
		console.log("Page="+page);
        document.getElementById(page).style.display = "block";

        document.getElementById("carousel-paging").children[page].classList.add("active");
		console.log("aici");
		let actual = document.getElementById(page).children[pos];
		actual.classList.add("highlight");
		
    }
	else {
	
		let actual = document.getElementById(page).children[pos-1];
		actual.classList.add("highlight");
		
		
		let prev = document.getElementById(page).children[pos];
		prev.classList.remove("highlight");
		
		
		pos = pos  - 1;
	
	}

}

function showtab(section) {
  let tabcontent = document.getElementsByClassName("tab");
  
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  
  let tablinks = document.getElementsByClassName("tab-link");
  
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("tab-active");
  }
  
  document.getElementById(section).style.display = "block";
  
  document.getElementById(section+"-tab").classList.add("tab-active");
}