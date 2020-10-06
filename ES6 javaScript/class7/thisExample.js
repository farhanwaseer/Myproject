let abc = {
    name: 'farhan',
    myName: function (){
        setTimeout(()=> {console.log(this)}, 2000)
    },
    anotherName: () =>{
        console.log(this);
    }
}

abc.myName();
abc.anotherName();