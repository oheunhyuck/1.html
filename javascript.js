

var color={
textcolor:function(color){
      document.querySelector('body').style.color=color;
  },
  Backgroundcolor:function(color){

    document.querySelector('body').style.backgroundColor=color;
  },
  acolor:function (color){

      var links=document.querySelectorAll('a');
      var i;
      for( i=0;i<links.length; i++ ){
      links[i].style.color=color;}
  }
}
var ect={
   value:function(value){
    document.getElementById("ww").value=value;
  },
  nightday:function(self){
  if(self.value==='night'){
  color.textcolor('white');
  color.Backgroundcolor ('black');
  ect.value('day')
  color.acolor('blue');
  }
  else{
    color.textcolor('black');
    color.  Backgroundcolor ('white');
  ect.value('night')
  color.acolor('powderblue');
  }
  }

}
function fetchpage(name){
  fetch(name).then(function(a){
    a.text().then(function(text){
      document.querySelector('div').innerHTML=text;
    })
  });
}
