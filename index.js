let els=[9,2,3,4,6,5,8,7,23,12,43]

let lin=(arg,el)=>{
    for(let i=0;i<=arg.length-1;i++){
        if(arg[i]===el){
            return i
        }
    }
}
console.log(lin(els,8));