const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const moiveBox = document.querySelector("#movie-box");


const getMovie = async(api) => {
    const res = await fetch(api);
    const data = await res.json();
    //console.log(data);
    showMovies(data.results);

}

const showMovies = (data) => {
    //Reset The Movie Box
    moiveBox.innerHTML = "";
    //console.log(data);
    data.forEach(item => {
        //console.log(item);
        const box = document.createElement('div');
        box.classList.add('box');
        box.innerHTML = `
            <img src="${IMGPATH + item.poster_path}" alt="" />
                <div class="overlay">
                    <div class="title"> 
                         <h2> ${item.original_title} </h2>
                         <span> ${item.vote_average} <span>
                    </div>
                    <h3> Overview : ${item.overview}</h3>
                    <p> 
                         
                    </p>
                 </div>
        `
        moiveBox.appendChild(box);
    });
}


document.querySelector('#search').addEventListener('keyup',function(e){
    //console.log(e.target.value);
    if(e.target.value != ""){
        getMovie(SEARCHAPI + e.target.value);
    }else{
        getMovie(APIURL);
    }
})

getMovie(APIURL);

