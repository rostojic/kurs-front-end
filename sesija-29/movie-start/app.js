var imagePath = 'http://image.tmdb.org/t/p/w300';
var ajaxUrl = 'https://api.themoviedb.org/3/search/movie';
var api_key = 'f2c99cf74ee4c4214605f5ac1bc00fc6';
var basic_url = "https://developers.themoviedb.org/3/getting-started/introduction";

var container = document.getElementById('flex-container');
var h3 = document.getElementById('nema-tog-naslova');
var divRes;

document.getElementById('search').addEventListener('keypress', callApi);

function callApi(event){
    if(event.key === 'Enter'){
        //alert('Enter je pritisnut!');
        var xr = new XMLHttpRequest();
        xr.addEventListener('load', reqListener);
        var ajaxUrlResolved = ajaxUrl + '?api_key=' + api_key + '&query=' + document.getElementById('search').value;
        xr.open('GET', ajaxUrlResolved);
        //console.log(ajaxUrlResolved);
        xr.send();
    }
}

function reqListener(){
    if(document.getElementById('divRes')!== null){
        resetHtml();
    }
    //console.log(this.responseText);
    var obj = JSON.parse(this.responseText);
    console.log(obj);

    var img; //=document.createElement('img)
    divRes = document.createElement('div');
    divRes.setAttribute('id', 'divRes');
    divRes.setAttribute('class', 'result');//visak??
    container.appendChild(divRes);
    if(obj.total_results > 0) {
        for(var i = 0; i < obj.results.length; i++){
            img = document.createElement('img');
            img.setAttribute('class', 'poster');
            img.setAttribute('title', obj.results[i].title);
            divRes.appendChild(img);
            if(obj.results[i].poster_path !== null){
                img.setAttribute('src',imagePath + obj.results[i].poster_path);
            }
            else {
                img.setAttribute('src','no-image.jpeg');
            }
        }
    }
    else {
        setNoResults(document.getElementById('search').value)
    }

}


function resetHtml(){
 
    divRes.parentNode.removeChild(divRes);
    h3.textContent = '';
    h3.style.visibility = 'hidden';
}

function setNoResults(searchQ){
    h3.style.visibility = 'visible';
    h3.innerHTML = "Nema pogodaka za <strong>" + searchQ + "</strong>";
}

var searchPersonUrl = 'https://api.themoviedb.org/3/search/person?api_key=f2c99cf74ee4c4214605f5ac1bc00fc6&query=Radovan';
