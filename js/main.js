let elMovis = document.querySelector(".films_list")


function normalizeData(format) {
    let data = new Date(format);
    let day = String(data.getDate()).padStart(2, 0);
    let month = String(data.getMonth() + 1).padStart(2, 0);
    let year =data.getFullYear()

    return(day + '.' + month + '.' + year);    
    
}


function renderFilms(_films){

    for (var i = 0; i < _films.length; i++) {

        let newLi  = document.createElement('li');
        let newImg  = document.createElement('img');
        let newHeading  = document.createElement('h3');
        let newparagr  = document.createElement('p');
        let newtime  = document.createElement('time');
        let newul  = document.createElement('ul');
       



        newLi.setAttribute('class', 'film')
        newImg.setAttribute ('class', 'filim__poster')
        newImg.setAttribute ('src', _films[i].poster);
        newImg.setAttribute('alt', _films.titel + ", poster")
        newImg.setAttribute('width', 200)
        newImg.setAttribute('height', 150)
        newHeading.setAttribute('class', 'film__heading')
        newparagr.setAttribute('class', 'film__paragrf')
        newtime.setAttribute('class', 'film__time')
        newul.setAttribute('class','film__geners')        
    



        newHeading.textContent = _films[i].title
        newparagr.textContent = _films[i].overview
        newtime.textContent = normalizeData( _films[i].release_date)



        newLi.appendChild(newImg)
        newLi.appendChild(newHeading)
        newLi.appendChild(newparagr)
        newLi.appendChild(newtime)
        newLi.appendChild(newul)
        elMovis.appendChild(newLi)
        
        

    }



}


renderFilms(films)
