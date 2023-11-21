const input = document.querySelector("#inp")
let ul = document.querySelector("#ul")
let array = []
function renderTodo(){
    for( let i = 0; i < array.length; i++ ){
        ul.innerHTML += `<li class = "list" >  ${array[i]} <button class="btn"  onclick="deleteTodo(${i})" > Delete </button> <button class="btn" onclick="EditTodo(${i})">Edit</button>  </li>`
    }
}
//add work start
function add(){
    
   if(input.value == ""){
    alert("please Enter Text")
   }
   else{
    ul.innerHTML = ""
    array.push(input.value)
    console.log(array);
    renderTodo()
    input.value = ""
}
}
//buttons work (delete All)
function Deleteall(){
    ul.innerHTML = ""
    array = []
}
//end

//deletetodo work
 function deleteTodo(i){
    ul.innerHTML = ""
    array.splice(i,1)
    console.log(array);
    renderTodo()
}
//end
//editTodo work
function EditTodo(i){
    let User = prompt("Enter Text?")
    if(User === ""){
        alert("please Enter Text")
    }
    else{
        ul.innerHTML = ""
        array.splice(i,1,User)
        renderTodo()
    }
} 

















