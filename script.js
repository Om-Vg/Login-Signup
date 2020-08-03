$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

// Form filter
// let searchBar=document.getElementById['Search'].querySelector('input');
// searchBar.addEventListner('keyup',function(e){
//     console.log("e is caught");
//     const term= e.target.value.toLowerCase();
//     const vid=list.getElementById('list');
//     Array.from(vid).forEach(function(vid){
//         const title=vid.p.textContent;
//         if(title.toLowerCase().indexOf(term)!=-1){
//             vid.style.display='block';
//         }else{
//             vid.style.display='none';
//         }
//     })

// })

// const list=document.querySelector("list");


// let searchInput=document.querySelector('Search');
// console.log(searchInput);
// searchInput.addEventListener('keyup',filterNames);

// function filterNames(){

//         let searchValue = document.querySelector('searchInput').toLowerCase();
//         console.log(searchValue);
//         //Get ul
//         let ul = document.querySelector('list');
//         //Get li
//         let li= ul.querySelectorAll('li.column');
//         //loop
//         for (let i=0;i< li.length;i++){
//             let a =li[i].getElementsByTagName('p')[0];
//             //match
//             if(p.innerHTML.toLowerCase().indexOf(searchValue)>-1){
//                 li[i].style.display='';
//             }else{
//                 li[i].style.display='none';
//             }
//         }
//       }   

//const is immutable let is mutable


function filter() {

    var filterValue, input, ul, li, p, i;
    input = document.getElementById("search-text");
    filterValue = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        p = li[i].getElementsByTagName("p")[0];
        if (p.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = "";

        } else {
            li[i].style.display = "none";
        }
    }
}

//Login form

function login()
	{
		var uname = document.getElementById("email").value;
		var pwd = document.getElementById("pwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
            alert("enter the password");
		}
		else if(!filter.test(uname))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 6)
		{
			alert("Password min length is 6");
		}
		else
		{
	alert('You are now logged in');
  //Redirecting to other page or webste code or you can set your own html page.
        window.location = "index.html";
			}
	}		

// Sign Up Module   

function signup()
	{   
        var email = document.getElementById("email1").value;
		var uname = document.getElementById("username").value;
        var pwd = document.getElementById("spwd").value;
        var pwd1 = document.getElementById("spwd1").value;
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(uname =='')
		{
			alert("please enter user name.");
		}
		else if(pwd=='')
		{
            alert("enter the password");
		}
		else if(!filter.test(email))
		{
			alert("Enter valid email id.");
		}
		else if(pwd.length < 6)
		{
			alert("Password min length is 6");
		}
		else if(pwd1 !== pwd){
            alert("Confirm Password should be same as Password")
        }else
		{
	alert('You have signed up');
  //Redirecting to other page or webste code or you can set your own html page.
        window.location = "index.html";
			}
	}		
