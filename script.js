const app = {};

app.apiUrl='https://api.spotify.com/v1';

app.events = function(){
    $('form').on('submit', function(e){
        e.preventDefault();
        let artists = $('input[type=search]').val();
        artists = artists.split(',');
        let search = artists.map(artistName=>app.searchArtist(artistName));
        console.log(search);
    });
};

var access_token='BQB3GoH8g3RB8Pcvl3roAi4sL2__m5eha_TQT8hgr77JrVo8VjCfxxMXpBIN7DI4J8cpFpWBSQOdV6dipFUIyMLGsGikKcgDELOSQH0ARsG2rjYS_17p0gSHBhZe7Vrlt3BrhCh7Sndxf_648cTKdeOhlXVBfPR4tlTyhkoQ0hRBmLYkYC1l';

app.searchArtist = (artistName) => $.ajax({
    url: '${app.apiUrl}/search',
    method: 'GET',
    dataType: 'json',
    headers: {
        'Authorization': 'Bearer ' + access_token,
    },
    data: {
        q:artistName,
        type:'artist'
    }
})

app.init = function(){
    //console.log("fff");
    app.events();
};

$(app.init);