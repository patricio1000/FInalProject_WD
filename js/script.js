// Load events when button is clicked
document.getElementById("loadEvents")?.addEventListener("click", () => {

  fetch("https://api.tvmaze.com/shows") // FREE API (works)
    .then(response => response.json())
    .then(data => {

      const container = document.getElementById("eventsContainer");
      container.innerHTML = "";

      data.slice(0, 5).forEach(show => {
        const div = document.createElement("div");
        div.innerHTML = `
          <h3>${show.name}</h3>
          <p>${show.genres.join(", ")}</p>
        `;
        container.appendChild(div);
      });

    })
    .catch(error => {
      console.log("Error:", error);
    });

});