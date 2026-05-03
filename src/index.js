function generateHaiku(response) {
  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 40,
  });
}

function runApi(event) {
  event.preventDefault();
  let apiKey = "3dac3be53b3oa402t7c1d0bf431fad39";
  let inspirationInput = document.querySelector("#form-input");
  let context =
    "You're an AI assistant who has studied the works of the best haiku authors of all time. make sure to use the instructions given";
  let prompt = `Instructions; Please create a unique haiku using ${inspirationInput.value}. Use basic html by splitting each line with <br />, don't display html text. Only display the haiku. Always use English`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let haikuElement = document.querySelector("#haiku");
  haikuElement.classList.remove("hidden");
  haikuElement.innerHTML = `<div class="blink">⌛ Generating a Haiku about ${inspirationInput.value}</div>`;

  axios.get(apiUrl).then(generateHaiku);
}

let haikuGeneratorForm = document.querySelector("#haiku-form-submit");
haikuGeneratorForm.addEventListener("submit", runApi);
