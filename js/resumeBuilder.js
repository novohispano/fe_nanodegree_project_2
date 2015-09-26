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
$("#header").append(HTMLskillsStart);
$.each(bio.skills, function(_, skill) {
  var formattedSkills = HTMLskills.replace("%data%", skill);
  $("#header").append(formattedSkills);
})
