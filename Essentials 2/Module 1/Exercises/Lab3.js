let Image = function(title,artist,date){
    this.title = title;
    this.artist = artist;
    this.date = date;
}
let images = {
    list: [],
    contains: function(title){
        if(this.list.length==0)return false;
        for(let img of this.list){
            if(img.title===title)return true;
        }
        return false;  
    },
    add: function(title,artist,date){
        let newObj = new Image(title,artist,date);
        if(!this.contains(title)){
            this.list.push(newObj);
        }
    },
    show: function(){
        this.list.forEach(obj =>{
            //console.log(`${obj.title} ${obj.artist} ${obj.date}`);
            obj.show();
        })
    },
    clear: function(){
        while(this.list.length!=0){
            this.list.pop();
        }
    },
    edit: function(title,artist,date){
        this.list.forEach(obj =>{
            if(obj.title===title){
                obj.artist = artist;
                obj.date = date;
            }
            //break;   Jump target cannot cross function boundary  
        })
    },
    delete: function(title){
        for(let i=0;i<this.list.length;i++){
            if(this.list[i]["title"]===title){
                this.list.splice(i,1);
                break;
            }
        }
    }
}

Image.prototype.show = function(){
    console.log(`${this.title} - ${this.artist} - ${this.date}`);
}
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.delete('The Last Supper');
images.edit('Mona Lisa', 'Leonardo da Vinci',1489);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();