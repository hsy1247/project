var Links = {
  Setcolor : function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i+1;
    // }
    $('a').css('color', color);
  }
}
var Body = {
  Setcolor : function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color', color);
  },
  Setbackgroundcolor : function(color){
    //document.querySelector('body').style.backgroundColor = color;
    $('body').css('backgroundColor', color);
  }
}

function nightmodhandler(self){
  var target = document.querySelector('body');
  if(self.value ==='night'){
    Body.Setbackgroundcolor('black');
    Body.Setcolor('white');
    self.value = 'day';
    Links.Setcolor('white');
  } else{
    Body.Setbackgroundcolor('white');
    Body.Setcolor('black');
    self.value = 'night';
    Links.Setcolor('black');
  }
}
