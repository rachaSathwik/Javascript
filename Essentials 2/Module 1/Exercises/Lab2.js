let images = [
    {
        title: 'Mona Lisa',
        artist: 'Leonardo da Vinci',
        date: 1503
    },
    {
        title: 'The Last Supper',
        artist: 'Leonardo da Vinci',
        date: 1495
    },
    {
        title: 'The Starry Night',
        artist: 'Vincent van Gogh',
        date: 1889
    },
    {
        title: 'The Scream',
        artist: 'Edvard Munch',
        date: 1893
    },
    {
        title: 'Guernica',
        artist: 'Pablo Picasso',
        date: 1937
    },
    {
        title: 'The Kiss',
        artist: 'Gustav Klimt',
        date: 1907
    },
    {
        title: 'Girl With a Pearl Earring',
        artist: 'Johannes Vermeer',
        date: 1665
    },
    {
        title: 'The Birth of Venus',
        artist: 'Sandro Botticelli',
        date: 1485
    },
    {
        title: 'Las Meninas',
        artist: 'Diego Velázquez',
        date: 1656
    },
    {
        title: 'Creation of Adam',
        artist: 'Michelangelo',
        date: 1512
    }
];


let Image = function(title,artist,date){
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let getImage = function(title,artist,date){
    return{
        title,
        artist,
        date
    };
}

let images1 = [],images2 = [];
images.forEach(object =>{
    images1.push(new Image(object.title,object.artist,object.date));
    images2.push(getImage(object.title,object.artist,object.date));
})

images2.forEach(obj =>{
    console.log(`${obj.title} ${obj.artist} ${obj.date}`);
})