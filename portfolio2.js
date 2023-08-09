$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });
    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });
    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [ " Certified Java-Developer","Student"],
        typeSpeed: 100,
        backSpeed: 40,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: ["Certified Web-Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


// Get all the "Read More" links
var readMoreLinks = document.querySelectorAll(".read-more");

// Loop through each "Read More" link and add a click event listener
readMoreLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    var postTitle = this.parentNode.querySelector(".post-title").textContent;
    var postContent = this.parentNode.querySelector(".post-content").textContent;

    // Display the post title and content in an alert box
    alert("Post Title: " + postTitle + "\n\n" + "Post Content: " + postContent);

    // You can also redirect to a specific blog post page or perform other actions here
  });
});

// Scroll to education section on menu item click
$('.navbar .menu li a[href="#education"]').click(function(){
    // Applying smooth scroll on education section click
    $('html').css("scrollBehavior", "smooth");
});

// Update the scroll-up button show/hide condition
$(window).scroll(function(){
    // Other scroll scripts...

    // Scroll-up button show/hide for education section
    if(this.scrollY > 1000){ // Adjust the value as needed
        $('.scroll-up-btn').addClass("show");
    }else{
        $('.scroll-up-btn').removeClass("show");
    }
});

