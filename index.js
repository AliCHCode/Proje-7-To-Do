let missionCount = 0;
let inputField= document.querySelector(".to-do-input");
let addButton = document.querySelector(".add-button");
let alertMessage = document.querySelector(".alert-box"); 
const listContainer = document.querySelector('.upper-list');
document.addEventListener('DOMContentLoaded', reload);

function max5todo (){
    if( todos.length >= 5){
        addButton.style.backgroundColor= "gray";
        addButton.style.border= "4px solid gray";
        inputField.disabled =true;
        alertMessage.style.display ="block";
    }
    else{
        addButton.style.backgroundColor= "green";
        addButton.style.border= "4px solid darkgreen";
        inputField.disabled =false;
        alertMessage.style.display ="none";
    }
};

function reload2 (){   // remaine artı vermeyen reload //
    listContainer.innerHTML = '';
    if(localStorage.getItem("todos")===null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    todos.map((e) => {
    const li= document.createElement('li');
    li.className = 'list-item';
    li.setAttribute('title','text');
    li.textContent= e;
    const box=document.createElement('div');
    box.className = 'check-box';
    box.setAttribute('style','cursor:pointer; width:100px; height:25px; text-align:center; background-color:whitesmoke; border: 3px solid black; margin: 10px auto;');
    box.innerHTML='<i class="fa-solid fa-check"></i>';
    li.appendChild(box);
    const remove=document.createElement('div');
    remove.className = 'delete-box';
    remove.innerHTML = '<i class="fa-solid fa-trash"></i>'; 
    li.appendChild(remove);
    
    const arrowUp=document.createElement('div');
    arrowUp.className ='up';
    arrowUp.setAttribute('style','cursor:pointer; width:100px; height:25px; text-align:center; background-color:whitesmoke; border: 3px solid black; margin: 1px auto; margin-top:10px; border-radius:10px;');
    arrowUp.innerHTML='<i class="fa-solid fa-arrow-up"></i>';
    li.appendChild(arrowUp);
    
    const arrowDw=document.createElement('div');
    arrowDw.className ='down';
    arrowDw.setAttribute('style','cursor:pointer; width:100px; height:25px; text-align:center; background-color:whitesmoke; border: 3px solid black; margin: 1px auto; border-radius:10px; ');
    arrowDw.innerHTML='<i class="fa-solid fa-arrow-down"></i>';
    li.appendChild(arrowDw);      
    listContainer.appendChild(li);

    arrowUp.addEventListener('click',(s)=>{
        s.stopPropagation();
        const index = todos.indexOf(arrowUp.parentElement.innerText);
        if(index > 0){
            todos[index]=todos[index -1];
            todos[index-1]=arrowUp.parentElement.innerText;
            localStorage.setItem("todos", JSON.stringify(todos));
            reload2();
        }
    });

    arrowDw.addEventListener('click',(s)=>{
        s.stopPropagation();
        const index = todos.indexOf(arrowDw.parentElement.innerText);
        if(index < todos.length -1){
            todos[index]=todos[index+1];
            todos[index +1]= arrowDw.parentElement.innerText;
            localStorage.setItem("todos", JSON.stringify(todos));
            reload2();
        }
    });
    
    
    /*ekledikten sonra kalan görev sayısını güncelliyor*/
    document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
    
    
    /* remove buton fonksiyonu*/
    remove.addEventListener('click',function(s){
        s.stopPropagation();
        if( addButton.innerText === "Update"){
            alert("You cant delete this todo while you editing");
        }
        else{
            document.querySelector('.upper-list').removeChild(li);
            if(box.style.backgroundColor === 'whitesmoke'){
                missionCount--;
            };
            
            document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
            
            checklocal(); 
            const içerik= todos.indexOf(li.textContent);
            if (içerik> -1) {
                todos.splice(içerik, 1);
            }
            localStorage.setItem("todos", JSON.stringify(todos));
        }
        max5todo();
    });
    
    /* check buton fonksiyonu*/
    box.addEventListener('click',function(s){
        s.stopPropagation();
        if(box.style.backgroundColor === 'whitesmoke'){
            box.style.backgroundColor='green';
            li.style.textDecoration= 'line-through';
            missionCount--;
            document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
        }
        else{
            box.style.backgroundColor= 'whitesmoke';
            li.style.textDecoration= 'none';
            missionCount++;
            document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
        };
    });    
    console.log(e);
});
if(listContainer.children.length!=0){
listContainer.firstElementChild.querySelector('.up').style.display='none';
listContainer.lastElementChild.querySelector('.down').style.display='none';
}
setListItemEvents();
max5todo();
};

function reload (){
    listContainer.innerHTML = '';
    if(localStorage.getItem("todos")===null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    };
    todos.map((e) => {
    const li= document.createElement('li');
    li.className = 'list-item';
    li.setAttribute('title','text');
    li.textContent= e;
    const box=document.createElement('div');
    box.className = 'check-box';
    box.setAttribute('style','cursor:pointer; width:100px; height:25px; text-align:center; background-color:whitesmoke; border: 3px solid black; margin: 10px auto;');
    box.innerHTML='<i class="fa-solid fa-check"></i>';
    li.appendChild(box);
    const remove=document.createElement('div');
    remove.className = 'delete-box';
    remove.innerHTML = '<i class="fa-solid fa-trash"></i>'; 
    li.appendChild(remove);
    
    const arrowUp=document.createElement('div');
    arrowUp.className ='up';
    arrowUp.setAttribute('style','cursor:pointer; width:100px; height:25px; text-align:center; background-color:whitesmoke; border: 3px solid black; margin: 1px auto; margin-top:10px; border-radius:10px;');
    arrowUp.innerHTML='<i class="fa-solid fa-arrow-up"></i>';
    li.appendChild(arrowUp);
    
    const arrowDw=document.createElement('div');
    arrowDw.className ='down';
    arrowDw.setAttribute('style','cursor:pointer; width:100px; height:25px; text-align:center; background-color:whitesmoke; border: 3px solid black; margin: 1px auto; border-radius:10px; ');
    arrowDw.innerHTML='<i class="fa-solid fa-arrow-down"></i>';
    li.appendChild(arrowDw);      
    listContainer.appendChild(li);

    arrowUp.addEventListener('click',(s)=>{
        s.stopPropagation();
        const index = todos.indexOf(arrowUp.parentElement.innerText);
        if(index > 0){
            todos[index]=todos[index -1];
            todos[index-1]=arrowUp.parentElement.innerText;
            localStorage.setItem("todos", JSON.stringify(todos));
            reload2();
        }
    });

    arrowDw.addEventListener('click',(s)=>{
        s.stopPropagation();
        const index = todos.indexOf(arrowDw.parentElement.innerText);
        if(index < todos.length -1){
            todos[index]=todos[index+1];
            todos[index +1]= arrowDw.parentElement.innerText;
            localStorage.setItem("todos", JSON.stringify(todos));
            reload2();
        }
    });
    
    
    /*ekledikten sonra kalan görev sayısını güncelliyor*/
    missionCount++;
    document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
    
    
    /* remove buton fonksiyonu*/
    remove.addEventListener('click',function(s){
        s.stopPropagation();
        if( addButton.innerText === "Update"){
            alert("You cant delete this todo while you editing");
        }
        else{
            document.querySelector('.upper-list').removeChild(li);
            if(box.style.backgroundColor === 'whitesmoke'){
                missionCount--;
            };
            
            document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
            
            checklocal(); 
            const içerik= todos.indexOf(li.textContent);
            if (içerik> -1) {
                todos.splice(içerik, 1);
            }
            localStorage.setItem("todos", JSON.stringify(todos));
        }
        max5todo();
    });
    
    /* check buton fonksiyonu*/
    box.addEventListener('click',function(s){
        s.stopPropagation();
        if(box.style.backgroundColor === 'whitesmoke'){
            box.style.backgroundColor='green';
            li.style.textDecoration= 'line-through';
            missionCount--;
            document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
        }
        else{
            box.style.backgroundColor= 'whitesmoke';
            li.style.textDecoration= 'none';
            missionCount++;
            document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
        };
    });    
    console.log(e);
});
if(listContainer.children.length!=0){
listContainer.firstElementChild.querySelector('.up').style.display='none';
listContainer.lastElementChild.querySelector('.down').style.display='none';
}
setListItemEvents();
max5todo();
};

function checklocal() {
    !(localStorage.getItem("todos")) ? 
        todos = [] :
        todos = JSON.parse(localStorage.getItem("todos"));
};

function addtolocal() {
    checklocal();
    todos.push(inputField.value);
    localStorage.setItem("todos",JSON.stringify(todos));
};

function main() {

    const li= document.createElement('li');
    li.className = 'list-item';
    li.textContent= inputField.value;
    const box=document.createElement('div');
    box.className = 'check-box';
    box.setAttribute('style','cursor:pointer; width:100px; height:25px; text-align:center; background-color:whitesmoke; border: 3px solid black; margin: 10px auto;');
    box.innerHTML='<i class="fa-solid fa-check"></i>';
    li.appendChild(box);
    const remove=document.createElement('div');
    remove.className = 'delete-box';
    remove.innerHTML = '<i class="fa-solid fa-trash"></i>';
    li.appendChild(remove);


    const arrowUp=document.createElement('div');
    arrowUp.setAttribute('style','cursor:pointer; width:100px; height:25px; text-align:center; background-color:whitesmoke; border: 3px solid black; margin: 1px auto; margin-top:10px; border-radius:10px;');
    arrowUp.innerHTML='<i class="fa-solid fa-arrow-up"></i>';
    li.appendChild(arrowUp);
    const arrowDw=document.createElement('div');
    arrowDw.setAttribute('style','cursor:pointer; width:100px; height:25px; text-align:center; background-color:whitesmoke; border: 3px solid black; margin: 1px auto; border-radius:10px; ');
    arrowDw.innerHTML='<i class="fa-solid fa-arrow-down"></i>';
    li.appendChild(arrowDw);

    listContainer.appendChild(li);

    arrowUp.addEventListener('click',(s)=>{
        s.stopPropagation();
        const index = todos.indexOf(arrowUp.parentElement.innerText);
        if(index > 0){
            todos[index]=todos[index -1];
            todos[index-1]=arrowUp.parentElement.innerText;
            localStorage.setItem("todos", JSON.stringify(todos));
            reload2();
        }
    });

    arrowDw.addEventListener('click',(s)=>{
        s.stopPropagation();
        const index = todos.indexOf(arrowDw.parentElement.innerText);
        if(index < todos.length -1){
            todos[index]=todos[index+1];
            todos[index +1]= arrowDw.parentElement.innerText;
            localStorage.setItem("todos", JSON.stringify(todos));
            reload2();
        }
    });

    /*ekledikten sonra kalan görev sayısını güncelliyor*/
    missionCount++;
    document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
    
    
    /* remove buton fonksiyonu*/
    remove.addEventListener('click',function(s){
        s.stopPropagation();
        if( addButton.innerText === "Update"){
           alert("You cant delete while you editing todo");
        }
        else{
            document.querySelector('.upper-list').removeChild(li);
            if(box.style.backgroundColor === 'whitesmoke'){
                missionCount--;
            };
            
            document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
    
            checklocal(); 
        const içerik= todos.indexOf(li.textContent);
        if (içerik> -1) {
            todos.splice(içerik, 1);
        }
        localStorage.setItem("todos", JSON.stringify(todos));
         }
         max5todo();
    });
    
    /* check buton fonksiyonu*/
    box.addEventListener('click',function(s){
        s.stopPropagation();
        if(box.style.backgroundColor === 'whitesmoke'){
            box.style.backgroundColor='green';
            li.style.textDecoration= 'line-through';
            missionCount--;
            document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
        }
     else{
         box.style.backgroundColor= 'whitesmoke';
         li.style.textDecoration= 'none';
         missionCount++;
         document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
        };
    });    
    setListItemEvents();
    max5todo();
};

const updateTodo = (index) => {

};

const addNewTodo = (e) => {
    console.log("Buton:", addButton.innerText)
    
   if(addButton.style.backgroundColor == "green"){
    if(inputField.value == inputField.value.trim() && inputField.value != ""){
        if (addButton.innerText == "Add") {
            main();
            addtolocal();
            /*değer girdikten sonra inputun içini temizliyor */
            inputField.value = "";
        } else {
            console.log("Data update:", addButton.dataset.update);
            todos[addButton.dataset.update] = inputField.value;
            localStorage.setItem("todos", JSON.stringify(todos));
            addButton.innerText = "Add";
            inputField.value = "";
            reload();
        }
    }
    else{
        alert("You can't add blank todo");
        inputField.value = "";
    }
   };
    // else if (todos.length>=5 && addButton.innerText != "Update"){
    //     alert("you Cant add more todos");
    //     inputField.value = "";
    // }
    max5todo();
    reload2();
 };

 addButton.addEventListener('click', addNewTodo);

document.addEventListener('keyup', function(e){
    if(e.keyCode == 13){
        addNewTodo();
        reload2();
    };
});

const setListItemEvents = () => {
    document.querySelectorAll(".list-item").forEach((listItem)=> {
        listItem.addEventListener("click", () => {
            console.log("Event triggerlandı.", listItem.innerText);
            console.log("Todos: ", todos.indexOf(listItem.innerText));
            inputField.value = listItem.innerText;
            addButton.innerText = "Update";
            addButton.setAttribute('data-update', todos.indexOf(listItem.innerText));
            addButton.style.backgroundColor= "green";
            addButton.style.border= "4px solid darkgreen";
            inputField.disabled =false;
            if(todos.length >= 5){alertMessage.style.display ="block";};
            inputField.focus();
            if( addButton.innerText === "Update"){
                function missionCountSet (){
                missionCount= todos.length;
                document.querySelector('.remain-text').innerHTML= missionCount + "  remain mission";
                };
            
                addButton.addEventListener('click', missionCountSet);
                document.addEventListener('keyup', function(e){
                    if(e.keyCode == 13){
                        missionCountSet();
                    };
                });
            };
        });
    })
};