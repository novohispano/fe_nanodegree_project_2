// Bio Data
var bio = {
  "name"       : "Jorge Téllez",
  "role"       : "Software Developer",
  "contacts"   : {
    "mobile"   : "720.418.1491",
    "email"    : "novohispano@gmail.com",
    "twitter"  : "@novohispano",
    "github"   : "novohispano",
    "location" : "Denver, CO"
  },
  "bioPic"     : "images/jorge.jpg",
  "welcomeMsg" : "Professional daydreamer. Software Developer.",
  "skills"     : ["Ruby", "Ruby on Rails", "JavaScript", "HTML", "CSS"]
};

var experience = {
  "jobs" : [
    {
      "employer" : "Turing School of Software & Design",
      "title"    : "Director of Growth & Operations",
      "dates"    : "2014 - Current",
      "location" : "Denver, CO"
    }
  ]
};

var portfolio = {
  "projects" : [
    {
      "title"       : "BandMatch",
      "dates"       : "2013",
      "description" : "Bandmatch is an application that allows you to find local concerts, create plans and meet new people. The site uses SongKick and Google Maps API, and was built with Ruby, Ruby on Rails, and Bootstrap.",
      "image"       : "images/bandmatch-small_x1.jpg"
    }
  ]
};

var education = {
  "schools" : [
    {
      "name"     : "Tec de Monterrey",
      "degree"   : "Master in Public Management & Public Policy",
      "dates"    : "2005 - 2006",
      "location" : "Monterrey, Mexico"
    }
  ]
};

// Header
var formattedName       = HTMLheaderName.replace("%data%", bio.name);
var formattedRole       = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile     = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail      = HTMLemail.replace("%data%", bio.contacts.email);
var formattedTwitter    = HTMLtwitter.replace("%data%", bio.contacts.twitter);
var formattedGithub     = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation   = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedBioPic     = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#topContacts").append(formattedMobile);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedTwitter);
$("#topContacts").append(formattedGithub);
$("#topContacts").append(formattedLocation);
$("#header").append(formattedBioPic);
$("#header").append(formattedWelcomeMsg);

// Skills
if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  $.each(bio.skills, function(_, skill) {
    var formattedSkills = HTMLskills.replace("%data%", skill);
    $("#header").append(formattedSkills);
  })
}

// Experience
$("#workExperience").append(HTMLworkStart);
$.each(experience.jobs, function(_, job) {
  var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", job.employer);
  var formattedWorkTitle    = HTMLworkTitle.replace("%data%", job.title);
  var formattedWorkDates    = HTMLworkDates.replace("%data%", job.dates);
  var formattedWorkLocation = HTMLworkLocation.replace("%data%", job.location);

  $(".work-entry").append(formattedWorkEmployer);
  $(".work-entry").append(formattedWorkDates);
  $(".work-entry").append(formattedWorkTitle);
  $(".work-entry").append(formattedWorkLocation);
});

// Portfolio
portfolio.display = function () {
  $("#projects").append(HTMLprojectStart);
  $.each(portfolio.projects, function(_, project) {
    var formattedProjectTitle       = HTMLprojectTitle.replace("%data%", project.title);
    var formattedProjectDates       = HTMLprojectDates.replace("%data%", project.dates);
    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", project.description);
    var formattedProjectImage       = HTMLprojectImage.replace("%data%", project.image);

    $(".project-entry").append(formattedProjectTitle);
    $(".project-entry").append(formattedProjectDates);
    $(".project-entry").append(formattedProjectDescription);
    $(".project-entry").append(formattedProjectImage);
  });
}
portfolio.display();

// Education
$("#education").append(HTMLschoolStart);
$.each(education.schools, function(_, school) {
  var formattedSchoolName     = HTMLschoolName.replace("%data%", school.name);
  var formattedSchoolDegree   = HTMLschoolDegree.replace("%data%", school.degree);
  var formattedSchoolDates    = HTMLschoolDates.replace("%data%", school.dates);
  var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", school.location);

  $(".education-entry").append(formattedSchoolName);
  $(".education-entry").append(formattedSchoolDates);
  $(".education-entry").append(formattedSchoolDegree);
  $(".education-entry").append(formattedSchoolLocation);
});

// Internationalize button
$("#main").append(internationalizeButton);
function inName() {
  var fullName  = bio.name.split(" ");
  var firstName = fullName[0][0].toUpperCase() + fullName[0].slice(1);
  var lastName  = fullName[1].toUpperCase();

  fullName = firstName + " " + lastName;

  return fullName;
}
