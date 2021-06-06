const bookname = document.querySelector(".name");
const author = document.querySelector(".yazar");
const btn = document.querySelector(".btn");
const add= document.querySelector(".addproduct");

btn.addEventListener('click', function(){
    
    
    if (bookname.value===""||author.value==="") {
        alert("enter bookname or author");
        
    }else{
        var name = document.createElement('p');
        name.innerText = `Author:   ${bookname.value}`;
        add.appendChild(name);
        var yazar = document.createElement('p');
        yazar.innerText = author.value;
        add.appendChild(yazar);
    }
    
        
        
    

    name.addEventListener('click', function(){
        name.style.textDecoration = "line-through";
    })
    name.addEventListener('dblclick', function(){
        add.removeChild(name);
    })
    yazar.addEventListener('click', function(){
        yazar.style.textDecoration = "line-through";
    })
    yazar.addEventListener('dblclick', function(){
        add.removeChild(yazar);
    })
    
})
