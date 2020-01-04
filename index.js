




document.getElementById("myform").addEventListener('submit' , SaveBM);

function SaveBM(e) {
    
 var SName = document.getElementById('SN') ;
 var SURL = document.getElementById('SURL') ;
 
        if(!valdition(SName,SURL)){
    return false;
    }
    
    var bookm = {
        name: SName.value,
        url:SURL.value
    }
    if(localStorage.getItem('bookmarks') == null){
        var bookmarks = [];
        bookmarks.push(bookm);
        localStorage.setItem('bookmarks' , JSON.stringify(bookmarks));
    }
    else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookm);
        localStorage.setItem('bookmarks' , JSON.stringify(bookmarks));
        
    }
    bookmark ();
    SName.value = "";
    SURL.value = "";
    
    e.preventDefault();
}

function bookmark (){
            var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
            var rowresult = document.getElementById('row');
    cols = "";
    for(var i=0 ; i<bookmarks.length ; i++){
        cols = cols + `<div class="jumbotron py-3 col-11 rounded d-flex justify-content-start">
              <h3>`+bookmarks[i].name+`</h3>
              <button class="btn btn-light mx-2 border border-dark" id="Visit"><a href="`+bookmarks[i].url+`" target="_blank" class="text-dark">Visit</a></button>
              <button onclick="delet(`+i+`)" class="btn btn-danger mx-2" id="delete">Delete</button>
          </div>`
    }
    rowresult.innerHTML = cols;
    
    
}

function valdition(SName , SURL){
        var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        var regex = new RegExp(expression);
    
    if(!SName.value || !SURL.value){
        alert("Please check Site Name ")
        return false;
    }

    
    if(!SURL.value.match(regex)){
        alert("Please check URL")
        return false;        
    }
    return true;
}

function delet (number){

    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
     bookmarks.splice(number,1);
        localStorage.setItem('bookmarks' , JSON.stringify(bookmarks));
    bookmark ();
    
}

$(".test").slideUp(500)