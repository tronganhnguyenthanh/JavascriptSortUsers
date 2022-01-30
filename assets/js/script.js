let users = [
 {
   avatar:"https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
   name:"Trọng Anh",
   age:22
 },
 {
   avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrZNG2V1kv_IH_8aTfCrLyEYKVDuCeuKoHaQ&usqp=CAU",
   name:"Anh Thư",
   age:27
 },
 {
   avatar:"https://www.shareicon.net/data/512x512/2017/01/06/868320_people_512x512.png",
   name:"Hoài Anh",
   age:24
 }
]

let text = "<div class='row'>"
for(let i = 0; i < users.length; i++){
 text += "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-4'>" + `<img src=${users[i].avatar} class="w-50 p-2">` + "<h1 class='ml-4'>" + users[i].name + "</h1>" + "</div>"
}
text += "</div>"
document.getElementById("webpage").innerHTML = text;

function sortAscUsers(){
 users.sort(function(a, b){
   if(a.name > b.name){
     return 1;
   }
   if(a.name < b.name){
     return -1;
   }
     return 0;
   });
   let text = "<div class='row'>"
   for(let i = 0; i < users.length; i++){
    text += "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-4'>" + `<img src=${users[i].avatar} class='w-50 p-2'>` + "<h1 class='ml-4'>" + users[i].name + "</h1>" + "</div>";
   }
   text += "</div>"
   document.getElementById("webpage").innerHTML = text;
}

function sortDescUsers(){
  users.sort(function(a, b){
    if(b.name > a.name){
      return 1;
     }
     if(b.name < a.name){
      return -1;
     }
      return 0;
     });
     let text = "<div class='row'>"
     for(let i = 0; i < users.length; i++){
      text += "<div class='col-lg-4 col-md-4 col-sm-4 col-xs-4'>" + `<img src=${users[i].avatar} class='w-50 p-2'>` + "<h1 class='ml-4'>" + users[i].name + "</h1>" + "</div>";
    }
    text += "</div>"
    document.getElementById("webpage").innerHTML = text;
}