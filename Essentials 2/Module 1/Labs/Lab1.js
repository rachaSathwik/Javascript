/*
You have started to organize the paintings you keep at home, and have decided to make an inventory of some of the most important ones. Declare an array of objects that will correspond to the following images: Mona Lisa (Leonardo da Vinci, 1503), The Last Supper (Leonardo da Vinci, 1495), Starry Night (Vincent van Gogh, 1889), The Scream (Edvard Munch, 1893), Guernica (Pablo Picasso, 1937), The Kiss (Gustav Klimt, 1907), Girl With a Pearl Earring (Johannes Vermeer, 1665), The Birth of Venus (Sandro Botticelli, 1485), Las Meninas (Diego Velázquez, 1656), The Creation of Adam (Michelangelo, 1512).

Display all the images in the list in the console (full information: title, artist and date of creation).
*/
let array = [
    painting1 = {
        title: "Mona Lisa",
        artist: "Lenardo da Vinci",
        doc: "1503"
    },
    painting2 = {
        title: "The Last Supper",
        artist: "Lenardo da Vinci",
        doc: "1495"
    },
    painting3 = {
        title: "Starry Night",
        artist: "Vincent van Gogh",
        doc: "1889"
    },
    painting4 = {
        title:"The Scream",
        artist: "Edvard munch",
        doc: "1893"
    },
    painting5 = {
        title:"Guarnica",
        artist:"Pablo Picasso",
        doc: "1937"
    },
    painting6 = {
        title: "The Kiss",
        artist: "Gustav Klimt",
        doc: "1907"
    },
    painting7 = {
        title:"Girl With a Pearl Earring",
        artist: "Johannes Vermeer",
        doc: "1607"
    },
    painting8 = {
        title: "The Birth of Venus",
        artist: "Sandro Botticelli",
        doc: "1485"
    },
    painting9 = {
        title: "Las Meninas",
        artist:"Diego Velázquez",
        doc: "1656"
    },
    painting10 = {
        title: "The Creation of Adam",
        artist: "Michelangelo",
        doc: "1512"
    }
]
for(let i=0;i<10;i++){
    //let object = "painting"+(i+1);
    console.log(`full information: ${array[i].title}, ${array[i].artist} & ${array[i].doc}`);
}

//Alternative wayusing forEach method
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
images.forEach(image => {console.log(`${image.title}
(${image.artist}, ${image.date})`)});