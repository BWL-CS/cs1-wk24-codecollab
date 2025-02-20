// THIS IS A JS COMMENT (like a note to yourself)
// The comments in this program are used to identify different sections
// Pick one of the sections to focus on in your discussion post.
// Press RUN to start the script!

// CODE SECTION 1
let message = "Let's learn about...";
message += "JavaScript!";
alert(message);

// CODE SECTION 2
let userName = prompt("What is your name?");
alert("Hello, " + userName);

// CODE SECTION 3
let userAge = Number(prompt("How old are you?"));
let nextAge = userAge + 1;
alert("Next year, you will be " + nextAge + " years old.");

// CODE SECTION 4
let likesJavaScript = confirm("Do you like JavaScript? Press OK to confirm.");
if (likesJavaScript == true) {
  alert("Awesome! JavaScript is very useful in web development.");
}
else {
  alert("That's okay, you might like it more as you learn!");
}
