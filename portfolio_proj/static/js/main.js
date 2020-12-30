// Menu button and Navbar

let menuButton = $('.menu-button');
let navbar = $('nav')
const backgroundClosed = navbar.css("background-color");
let backgroundOpen = null;


menuButton.click(function () {

    if (!navbar.hasClass("open")) {
        navbar.addClass('open');
        $('body').css("overflow", "hidden");
        if (backgroundOpen == null) {
            backgroundOpen = navbar.css("background-color");
        }
        gsap.fromTo(".open", { backgroundColor: backgroundClosed, y: -100, height: "auto" }, { duration: 0.5, height: "100vh", backgroundColor: backgroundOpen, y: 0, ease: "power1" },);

    }

    else {
        navbar.removeClass('open');
        $('body').css("overflow", "auto");
        navbar.addClass('closed');
        gsap.fromTo(".closed", { height: "100vh", backgroundColor: backgroundOpen, y: 100 }, { duration: 0.5, backgroundColor: backgroundClosed, y: 0, height: "auto", ease: "power1" });

    }

});


// Form label text:

let formInput = $('.form-row input, .form-row textarea');

formInput.focus(function () {

    if ($(this).attr("type") != "submit") {
        $(this).parents('.form-row').toggleClass('focused');
        if ($(this).is("textarea")) {
            $(this).attr("rows", "10");
            $(this).prev("label").css("transform", "translateY(-90px)");
        }
    }
});


formInput.blur(function () {
    if ($(this).attr("type") != "submit") {

        if (!$(this).val()) {
            $(this).parents('.form-row').toggleClass('focused');
        }


        if ($(this).is("textarea") && !$(this).val()) {
            $(this).attr("rows", "10");
            $(this).prev("label").css("transform", "translateY(0)");
        }
    }
});



// Sections animations:--------------------------------------


// Hero

gsap.from(".hero", {
    duration: 2,
    opacity: 0.2,
    y: -50,
    // ease: "elastic"
});

// // Skills

let skillsTimeline = gsap.timeline(
    {
        scrollTrigger: {
            trigger: ".skills .section-title",
            scrub: 2,
            start: "top bottom",
            ease: "elastic"
        }
    }
);

skillsTimeline.from(".skills .section-title",
    {
        duration: 2,
        opacity: 0.2,
        y: -20,

    })

    .from(".skills .skills-content-card",
        {
            duration: 2,
            opacity: 0,
            y: -20,
            ease: "elastic",
            stagger: 0.05
        }, 0.2);


// Projects

let projectsTimeline = gsap.timeline({

    scrollTrigger: {
        trigger: ".projects .section-title-text",
        scrub: 2,
        start: "top bottom",
        ease: "elastic"

    }

});

projectsTimeline
    .from(".projects .section-title-text",
        {
            duration: 2,
            opacity: 0.2,
            y: -20,
        })
    .from(".projects .projects-content-card",
        {
            duration: 2,
            opacity: 0,
            y: -20,
            stagger: 0.05
        }, 0.2);


// Resume

let resumeTimeline = gsap.timeline(
    {

        scrollTrigger: {
            trigger: ".resume .section-title-text",
            scrub: 2,
            start: "top bottom",
            ease: "elastic"

        }

    }
);

resumeTimeline
    .from(".resume .section-title-text",
        {
            duration: 2,
            opacity: 0.2,
            y: -20,
        })
    .from(".resume .resume-content-card",
        {
            duration: 2,
            opacity: 0,
            y: -20,
            stagger: 0.05
        }, 0.2);

// contactform

let contactFormTimeline = gsap.timeline(
    {

        scrollTrigger: {
            trigger: ".contact-form .section-title-text",
            scrub: 2,
            start: "top bottom",
            ease: "elastic"

        }

    }
);

contactFormTimeline
    .from(".contact-form .section-title-text",
        {
            duration: 2,
            opacity: 0.2,
            y: -20,
        })
    .from(".contact-form .form-content-card .contact-form",
        {
            duration: 2,
            opacity: 0,
            y: -20,
        }, 0.2);

// Section Observation:

let options = {

    rootMargin: '-600px 0px -200px 0px',

};

let sections = document.querySelectorAll('main section');
let scrollLinks = $('nav ul li a');

let sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.intersectionRatio > 0) {
            scrollLinks.each(function () {
                if (this.hash == `#${entry.target.id}`) {
                    // console.log($(this));
                    $(this).addClass("active");
                    $(this).parent().siblings("li").children().removeClass("active");
                }
            });
        }

    });
}, options);

sections.forEach((section) => {

    sectionObserver.observe(section);

});

scrollLinks.click(function () {
    // sectionObserver.unobserve(section);
    $(this).addClass("active");
    $(this).parent().siblings("li").children().removeClass("active");
});

// Theme switch

let themeSwitch = $('.toggle-checkbox');


themeSwitch.click(() => {

    $('body').fadeOut(100, function () {

        $('body').toggleClass('light');

    });
    $('body').fadeIn(500);
})

$('form.contact-form').attr('autocomplete', 'off');
