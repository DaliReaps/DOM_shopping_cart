const btn=document.getElementsByTagName("button")
const elem2=document.getElementsByClassName("container3")
const    cart=elem2[0];

var msg=`heart`
//this fuction adds the element to the cart when clicked//
function addtocart(event){
var bolea=false;
var text=event.target;
var  y=text.parentElement.parentElement;

const name=y.querySelector("h2");

const image=y.querySelector("img").getAttribute("src");

const price=y.querySelector("p").innerText;


//checks if the item already exists//
var x=cart.getElementsByClassName("name_added");

var len=x.length;


if (len==0) {var content=`<div><h1 class="name_added"> ${name.innerText}</h1> <img src=${image} style="width:200px;height:200px"> <p>${price}</p><p>${"DT"}</p><button onclick="addition(event)" >+</button> <p>0</p> <button onclick="ommit(event)" >-</button> <button onclick="like(event)" ><p hidden>-1</p><p>heart</p></button> <button onclick="remove(event)" >Remove Item</button></div>`

const new1 = document.createElement("div");
    new1.setAttribute("class","container_added");
    new1.innerHTML = content;
    cart.appendChild(new1);
}
else {for (let i = 0; i < len; i++) {
    var test = x[i].innerText;
    
    

    if ((name.innerText)==test){
        bolea=true;break;
        }
                                    }
    }
    if((!bolea)&&(len!=0)){
        var content=`<div><h1 class="name_added"> ${name.innerText}</h1> <img src=${image} style="width:200px;height:200px"> <p>${price}</p><p>${"DT"}</p><button onclick="addition(event)" >+</button> <p>0</p> <button onclick="ommit(event)" >-</button> <button onclick="like(event)" ><p hidden>-1</p><p>heart</p></button> <button onclick="remove(event)" >Remove Item</button></div>`
        
        const new1 = document.createElement("div");
            new1.setAttribute("class","container_added");
            new1.innerHTML = content;
            cart.appendChild(new1);
    }
}







console.log(cart);



//this function changes the heart color on each element u click on like //


function like(event) {
    var text2=event.target;
    if(text2.innerHTML=="heart"){console.log("hi");
text2=text2.parentElement;
var h=text2.querySelectorAll("p");
console.log(text2.innerHTML);
console.log(h);
var k=h[1];
var par=k.parentElement;
var text22=k.innerText;
console.log(text22);
console.log(k);
var2=text2.querySelector("p");
   var text21=var2.innerText;
console.log(text21);
var myvar =Number(text21);
console.log(myvar);
myvar *=-1;
var2.innerHTML=myvar;
console.log(myvar);
if (myvar>0){ 

par.setAttribute("class","like_class");
}
else par.setAttribute("class","");
console.log(text2);
}

    else{console.log(text2);
        var h=text2.querySelectorAll("p");
        console.log(text2.innerHTML);
        console.log(h);
        var k=h[1];
        var par=k.parentElement;
        var text22=k.innerText;
        console.log(text22);
        console.log(k);
        var2=text2.querySelector("p");
           var text21=var2.innerText;
       console.log(text21);
        var myvar =Number(text21);
        console.log(myvar);
        myvar *=-1;
        var2.innerHTML=myvar;
        console.log(myvar);
       if (myvar>0){ 
    
        par.setAttribute("class","like_class");
       }
       else par.setAttribute("class","");
        console.log(text2);
        }
    

}
function addition(event){
    var text3=event.target.parentElement;
    console.log(text3);
    var x3=text3.getElementsByTagName("p");
    var y3=x3[2].innerHTML;
    console.log(x3);
    console.log(y3);
    num =Number(y3);

   console.log(num);
   x3[2].innerText=num+1;
  
}
function ommit(event){
    var text4=event.target.parentElement;
    console.log(text4);
    var x4=text4.getElementsByTagName("p");
    var y4=x4[2].innerHTML;
    console.log(y4);
    num =Number(y4);
    if (Number(y4)>0){ 
        x4[2].innerText=num-1;
        console.log(num);
    }
}
//remove is a function that removes an item from the cart//
function remove(event){
    var text5=event.target.parentElement.parentElement;
    console.log(text5);
cart.removeChild(text5);
console.log(cart);
}


function final_price(event){
    var final_price =0;
   var text5=event.target;
    console.log(text5);
    console.log(cart);
    var text6=cart.getElementsByClassName("container_added");
    console.log(text6);
    var finalprice=0;
    var max=text6.length;
    for (let i = 0; i < max; i++) {
        var element = text6[i];
        console.log(element);
        var y1=element.getElementsByTagName("p");
        console.log(y1);    
        console.log(y1[0]) ;
        console.log(y1[2]);
        var elemprice=Number(y1[0].innerText) ;
        console.log(elemprice);
        var elemnumber=Number(y1[2].innerText);
        console.log(elemnumber);
       final_price=final_price+elemprice*elemnumber;
       console.log(final_price);
        
    }



console.log(cart);
var d=cart.getElementsByTagName("p");
d[1].innerText=final_price;
console.log(d[1].innerText);

}

