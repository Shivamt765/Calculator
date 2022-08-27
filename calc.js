debugger;
let result=document.getElementById('inputtext');
let valueButton=(number)=>{
    result.value+=number;
}
let Calculate=()=>{
    result.value=eval(result.value)
}
let clr=()=>{
    result.value="";
}

function del(){
    result.value=result.value.slice(0,1);
}