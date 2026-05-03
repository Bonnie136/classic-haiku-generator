function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku", {
    strings: "haiku here",
    autoStart: true,
    cursor: "",
    delay: 40,
  });
}

let haikuGeneratorForm = document.querySelector("#haiku-form-submit");
haikuGeneratorForm.addEventListener("submit", generateHaiku);
