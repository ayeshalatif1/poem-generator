let poemForm = document.querySelector("#generate-poem")
poemForm.addEventListener("submit", displayPoem)

function displayPoem(e){
    e.preventDefault()
    let poemTopic = document.querySelector("#topic-input").value
    let key = 'bao5t9f4e8f4fd51c321081492282b64'
    let context = 'You are an AI Assistant. Act like an artist who loves to write short poems and your poems are impactful, emotional, and memorable. Your goal is to generate a short 4 lines poem. Separate each line with a <br />'
    let prompt =  `Generate a 4 lines poem on this ${poemTopic.trim()}. Poem should be interesting to read`
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${key}`
    fetch(apiURL)
    .then((res)=>res.json())
    .then((data)=>handleRes(data))
}
function handleRes(data)
{
  console.log(data)
      let poemText = data.answer
    let poemDiv = document.querySelector("#poem")
    new Typewriter('#poem', {
  strings: poemText,
  autoStart: true,
  delay:2,
  cursor: '',
});
}
