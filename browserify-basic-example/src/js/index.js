var hello = require('./hello'); 
var unique = require('uniq');
var $ = require('jquery');
var Person = require('./person');

$(function(){
    var name = prompt("What's your name?");
    var age = prompt("How old are you?");

    var person = new Person(name, age);

    $("body")
        .append($("<h1>").text(hello(person.name)))
        .append($("<p>").text("Below you can see a list of unique values ​​of the following array: [1, 2, 2, 3, 4, 5, 5, 5, 6], generated with the 'uniq' module."))
        .append($("<ul>").append(
            unique([1, 2, 2, 3, 4, 5, 5, 5, 6]).map(value => 
              $("<li>").append($("<p>").text(value))
            )
        ))
        .append($("<p>").text(person.name + " can..."))
        .append($("<button>").text("Say hello").click(person.sayHello))
        .append($("<button>").text("Tell his/her age").click(person.tellAge));
});