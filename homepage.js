
var prevScrollpos = window.pageYOffset;
window.onscroll = function()
{
    var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) 
  {
    document.getElementById("rightmenu").style.top = "0"
  } 
  else 
  {
    document.getElementById("rightmenu").style.top = "-50px"
  }
  prevScrollpos = currentScrollPos;
}
