const Image = function(title,artist,date){
    this.title = title;
    this.artist = artist;
    this.date = date;
}
let images = {
    //array property
    list: [],

    //methods
    contains: function(title) {
        if (this.list.length === 0) return false;
        let found = false;
        this.list.forEach((obj) => {
            if (title === obj.title) {
                found = true;
            }
        });
        return found;
    },    

    add: function(title,artist,date){
        let newImg = new Image(title,artist,date);
        if(!this.contains(title))
            this.list.push(newImg);
    },
    show: function(){
        this.list.forEach((obj)=>{
            console.log(`Title: ${obj.title}, Artist: ${obj.artist}, Date: ${obj.date}`);
        })
    },
    clear: function(){
        while(this.list.length!=0){
            this.list.pop();
        }
    },
    edit: function(title,artist,date){
        for(image of this.list){
            if(image.title===title){
                image.artist = artist;
                image.date = date;
                break;
            }
        }
    },
    delete: function(title){
        for(let i=0;i<this.list.length;i++){
            if(this.list[i].title === title){
                this.list.splice(i,1);
                break;
            }
        }
    }
}
// images.delete = function(title) {
//     for(let i=0; i < this.list.length; i++) {
//         if(this.list[i].title === title) {
//             this.list.splice(i,1);
//             break;
//         }
//     }
// }
// images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
// images.add('The Last Supper', 'Leonardo da Vinci', 1495);
// images.add('The Starry Night', 'Vincent van Gogh', 1889);
// images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
// images.show();
// // -> Mona Lisa (Leonardo da Vinci, 1503)
// // -> Last Supper (Leonardo da Vinci, 1495)
// // -> The Starry Night (Vincent van Gogh, 1889)
// images.clear();
// images.show();

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();