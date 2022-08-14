function  changefontfam(event){

  var  font = event.value;
document.getElementById('text').style.fontFamily= font
 }


;
 function changefontsize(event){

    var  fontsize = event.value;
     document.getElementById('text').style.fontSize =fontsize
   }
  
;

function italic(event){
document.getElementById('text').style.fontStyle= 'italic'  
};

function bold(event){
    document.getElementById('text').style.fontWeight='bold' 
} ; 

function underline(event){
    document.getElementById('text').style.textDecoration='underline'
}