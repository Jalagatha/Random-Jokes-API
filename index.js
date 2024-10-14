document.querySelector("#fetchButton").addEventListener("click", () => {
  //
  const url = "https://official-joke-api.appspot.com/random_joke";
  fetch(url)
    .then((response) => {  if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();  
    }).then((data) => {
      document.querySelector(
        "#displayJoke"
      ).innerText = `${data.setup}-${data.punchline}`;
    })

    .catch((error) => {
      document.querySelector("#displayJoke").innerText = "something went wrong";
      console.error("Problem encountered", error);
    });
});
