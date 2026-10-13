const message = document.getElementById("message");
const counter = document.getElementById("counter");
const remaining = document.getElementById("remaining");
const warning = document.getElementById("warning");

const maxCharacters = 200;

message.addEventListener("input", function () {
const typedCharacters = message.value.length;
const remainingCharacters = maxCharacters - typedCharacters;

counter.textContent =
    typedCharacters + "/" + maxCharacters + " characters";

remaining.textContent =
    remainingCharacters + " characters remaining";

if (typedCharacters >= maxCharacters) {
    warning.textContent = "Warning: Character limit reached!";
} else {
    warning.textContent = "";
}

});