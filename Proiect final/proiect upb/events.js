
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

searchBox.addEventListener("click", ()=>{
  navbar.classList.toggle("showInput");
  if(navbar.classList.contains("showInput")){
    searchBox.classList.replace("bx-search" ,"bx-x");
  }else {
    searchBox.classList.replace("bx-x" ,"bx-search");
  }
});

let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


let htmlcssArrow = document.querySelector(".htmlcss-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}
let moreArrow = document.querySelector(".more-arrow");
moreArrow.onclick = function() {
 navLinks.classList.toggle("show2");
}
let jsArrow = document.querySelector(".js-arrow");
jsArrow.onclick = function() {
 navLinks.classList.toggle("show3");
}

var app = new Vue({
    el: '#form1',
    data: function () {
      return {
      email : "",
      emailBlured : false,
      valid : false,
      submitted : false,
      password:"",
      passwordBlured:false
      }
    },
  
    methods:{
  
      validate : function(){
  this.emailBlured = true;
  this.passwordBlured = true;
  if( this.validEmail(this.email) && this.validPassword(this.password)){
  this.valid = true;
  }
  },
  
  validEmail : function(email) {
     
  var re = /(.+)@(.+){2,}\.(.+){2,}/;
  if(re.test(email.toLowerCase())){
    return true;
  }
  
  },
  
  validPassword : function(password) {
     if (password.length > 7) {
      return true;
     }
  },
  
  submit : function(){
  this.validate();
  if(this.valid){
  this.submitted = true;
  }
  }
    }
  });