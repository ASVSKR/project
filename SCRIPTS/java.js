   function myNav(){
    var x = document.getElementById('nav-toggle-list');
    if(x.style.display == 'none'){
        x.style.display = 'block';
    }
    else{
        x.style.display = 'none';
    }
}

////////////////////////portal.html page///////////////////////////////////////////////////////////////
       function mytitle(click){
            var x = click;
            var y = document.getElementById("sp");
            var a = document.getElementById("pp");
            var b = document.getElementById("ep");
            var z = document.getElementById(x).value;
            document.getElementById("pt1").innerHTML = z;
            if(x == 'btn'){
              y.style.display = 'block';
              a.style.display = 'none';
              b.style.display = 'none';
            }
            else if(x == 'btn1'){
              y.style.display = 'none';
              a.style.display = 'block';
              b.style.display = 'none';
            }
            else if(x == 'btn2'){
              y.style.display = 'none';
              b.style.display = 'block';
              a.style.display = 'none';
            }
            else{
              y.style.display = 'none';
              b.style.display = 'none';
              a.style.display = 'none';
            }
       }
      function myfun(){
        alert('please contact Admin...')
      }
///////////////////////////////////////////////////////////////////////////////////////
////////////////////academics .html page //////////////////////////////////////////////\
function myAcademics(click){
  var x = click;
      var z = document.getElementById(x).value;
      var y = document.getElementById("engineering");
      var a = document.getElementById("bba");
      var b = document.getElementById("architecture");
      var c = document.getElementById("biotechnology");
      var d = document.getElementById("bpharmacy");
      var e = document.getElementById("humanities");
      var f = document.getElementById("mtech");
      var g = document.getElementById("msc");
      document.getElementById("pt1").innerHTML = z;
      if(x == 'btn'){
          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'none';
          e.style.display = 'none';
          f.style.display = 'none';
          g.style.display = 'none';
          y.style.display = 'block';
      }
      if(x == 'btn1'){
          a.style.display = 'block';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'none';
          e.style.display = 'none';
          f.style.display = 'none';
          g.style.display = 'none';
          y.style.display = 'none';
      }
      if(x == 'btn2'){
          a.style.display = 'none';
          b.style.display = 'block';
          c.style.display = 'none';
          d.style.display = 'none';
          e.style.display = 'none';
          f.style.display = 'none';
          g.style.display = 'none';
          y.style.display = 'none';
      }
      if(x == 'btn3'){
          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'block';
          d.style.display = 'none';
          e.style.display = 'none';
          f.style.display = 'none';
          g.style.display = 'none';
          y.style.display = 'none';
      }
      if(x == 'btn4'){
          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'block';
          e.style.display = 'none';
          f.style.display = 'none';
          g.style.display = 'none';
          y.style.display = 'none';
      }
      if(x == 'btn5'){
          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'none';
          e.style.display = 'block';
          f.style.display = 'none';
          g.style.display = 'none';
          y.style.display = 'none';
      }
      if(x == 'btn6'){
          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'none';
          e.style.display = 'none';
          f.style.display = 'block';
          g.style.display = 'none';
          y.style.display = 'none';
      }
      if(x == 'btn7'){
          a.style.display = 'none';
          b.style.display = 'none';
          c.style.display = 'none';
          d.style.display = 'none';
          e.style.display = 'none';
          f.style.display = 'none';
          g.style.display = 'block';
          y.style.display = 'none';
      }
}
