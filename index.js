const artistInput = document.querySelector('#search');
const form = document.querySelector('#form');

const artistSection = document.querySelector('#artist-section');

form.addEventListener('submit', function(e){
    e.preventDefault()
    let artistValue = e.target.search.value.trim();
    console.log(artistValue)
    fetchArtsist(artistValue);
})

// const artistID = '3TVXtAsR1Inumwj472S9r4?si=umhor4kJQd-nrzbLxY6Lqw';

let artistID

const fetchArtsist = function(artist){

    fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(artist)}&type=artist&limit=1`, {
        headers: {
            'Authorization': 'Bearer BQARkJPpHfOW-WGzJL_2IFVHAWJJ5t68KEKkfDVc6Sp4hYurJlWUAO3JbfhWhVjZqhcLeaAJMD6nJa0oZK866iEY-CH-kgZJXkmOt6YiselZLSr2UmI'
        }
    })
    .then(res => res.json())
    // .then(data => console.log(data.artists.items[0]))
    .then(function(data){
                console.log(data.artists.items[0])
        
        displayDetails(data)
    })
    
}


const displayDetails = function(artist){
    artistSection.innerHTML = '';

    const artistsData = document.createElement('div');
    artistsData.classList.add('artist');

    artistsData.innerHTML = `
    <img id="malaika" src="${artist.artists.items[0].images[0].url}" alt="free" class="artist-img">
            <div id="songs"> 
                <p id="lyrics">${artist.artists.items[0].name}</p>
                Genres: <ul></ul>
                <li>${artist.artists.items[0].genres[0]}</li>
                <li>${artist.artists.items[0].genres[1]}</li>
                <li>${artist.artists.items[0].genres[2]}</li>
                <li>${artist.artists.items[0].genres[3]}</li>
               
            </ul>
            <p class="monlis">Monthly Listeners: ${artist.artists.items[0].followers.total}</p>
            <a href="${artist.artists.items[0].external_urls.spotify}">Spotify Profile</a>
        </div>
    `;

    artistSection.appendChild(artistsData)

}
