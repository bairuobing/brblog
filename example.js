let name = 'Window';
let o = {
    name: 'brb',
    getName: function() {
        return function (){
            console.log(this.name);
        }
    }
}

o.getName()();