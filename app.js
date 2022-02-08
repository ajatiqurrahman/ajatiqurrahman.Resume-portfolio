let about = document.getElementById("about");
let getAbout = document.getElementById("getAbout");
let resume = document.getElementById("resume");
let getResume = document.getElementById("getResume");
let works = document.getElementById("works");
let getWorks = document.getElementById("getWorks");
let blog = document.getElementById("blog");
let getBlog = document.getElementById("getBlog");
let contact = document.getElementById("contact");
let getContact = document.getElementById("getContact");

const pagesData = {
  home: {
    name: "https://es-bootcamp.jsmastery.xyz/",
    job: "Web Designer",
    social: {
      github: "#",
      twitter: "#"
    },
    download: {
      title: "Download CV",
      url: "#"
    },
    contact: {
      title: "Contact Me",
      url: "#"
    }
  },
  about: {
    text: "I am Ryan Adlard, web designer from USA, California.",
    age: 24,
    residence: "USA",
    freelance: "Available",
    address: "California, USA",
    services: [
      {
        title: "Web Development",
        text: "Modern and mobile-ready website that will help you reach all of your marketing."
      },
      {
        title: "MUSIC WRITING",
        text: "Music copying, transcription, arranging and composition services."
      },
      {
        title: "ADVETISING",
        text: "Advertising services include television, radio, print, mail and web."
      },
      {
        title: "GAME DEVELOPMENT",
        text: "Developing memorable and unique mobile android, ios games."
      }
    ]
  },
  resume: {
    experience: {
      title: "Experience",
      dates: [
        {
          date: "2013 - PRESENT",
          position: "ART DIRECTOR",
          company: "FACEBOOK INC.",
          description: "Collaborate with creative and development teams on the execution of ideas."
        },
        {
          date: "2011 - 2012",
          position: "FRONT-END DEVELOPER",
          company: "GOOGLE INC.",
          description: "Collaborate with creative and development teams on the execution of ideas."
        },
        {
          date: "2009 - 2010",
          position: "SENIOR DEVELOPER",
          company: "ABC INC.",
          description: "Optimize website performance using latest technology."
        },
      ]
    },
    education: {
      title: "EDUCATION",
      dates: [
        {
          date: "2006 - 2008",
          title: "ART Course",
          city: "New York",
          description: "Collaborate with creative and development teams on the execution of ideas."
        },
        {
          date: "2011 - 2012",
          title: "PROGRAMMING COURSE",
          city: "PARIS.",
          description: "Coursework - Git, WordPress, Javascript, iOS, Android."
        },
        {
          date: "2009 - 2010",
          position: "WEB DESIGN COURSE",
          city: "London.",
          description: "Converted Photoshop layouts to web pages using HTML, CSS, and JavaScript."
        },
      ]
    },
  },
  contact: {
    address: "ADDRESS . . . . California, USA",
    email: "EMAIL . . . . adlard@example.com",
    phone: "PHONE . . . . +123 654 78900",
    available: "FREELANCE . . . . Available",
  }
};

function remove() {
    about.classList.remove('view');
    getAbout.classList.remove('selected');
    resume.classList.remove('view');
    getResume.classList.remove('selected');
    works.classList.remove('view');
    getWorks.classList.remove('selected');
    blog.classList.remove('view');
    getBlog.classList.remove('selected');
    contact.classList.remove('view');
    getContact.classList.remove('selected');
}

getAbout.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove('about');
        about.classList.add('view');
        getAbout.classList.add('selected');
    }

});
getResume.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        resume.classList.add('view');
        getResume.classList.add('selected');
    }
})
getWorks.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        works.classList.add('view');
        getWorks.classList.add('selected');
    }
})
getBlog.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        blog.classList.add('view');
        getBlog.classList.add('selected');
    }
})
getContact.addEventListener('click', function (e) {
    if (window.innerWidth > 1040) {
        e.preventDefault();
        remove();
        contact.classList.add('view');
        getContact.classList.add('selected');
    }

})

/* Logic for email form.

var email = document.getElementById("email");
var form = document.getElementById("form");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I expect an e-mail, darling!");
  } else {
    email.setCustomValidity("");
  }
});

form.addEventListener("submit", function (event) {
    event.preventDefault();
  });
*/

/* Example using fetch and Promise.
fetch("https://randomuser.me/api/",{
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
}).then((value) =>{
    return value.json();
}).then((value) => {
    return value.results[0]
}).then((value) => {
    let nombre = document.getElementById("nombre");
    nombre.innerHTML = value.name.title + " " + value.name.first + " " + value.name.last;
})
*/