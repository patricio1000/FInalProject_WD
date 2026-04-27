// BOTÓN DE INDEX (redirige a events)
document.getElementById("exploreBtn")?.addEventListener("click", () => {
  window.location.href = "events.html";
});


// BOTÓN DE EVENTS (carga eventos)
document.getElementById("loadEvents")?.addEventListener("click", () => {

  const container = document.getElementById("eventsContainer");

  container.innerHTML = "<p>Loading events...</p>";

  fetch("https://api.tvmaze.com/shows")
    .then(response => response.json())
    .then(data => {

      container.innerHTML = "";

      data.slice(0, 6).forEach(show => {
        const card = document.createElement("div");
        card.className = "col-md-4 mb-4";

        card.innerHTML = `
          <div class="border p-3 h-100">
      
            <img 
              src="${show.image ? show.image.medium : 'https://via.placeholder.com/210x295'}" 
              alt="${show.name}" 
              class="img-fluid mb-2"
            >

            <h5>${show.name}</h5>
            <p><strong>Genres:</strong> ${show.genres.join(", ") || "N/A"}</p>
            </div>
          `;

        container.appendChild(card);
      });

    })
    .catch(error => {
      container.innerHTML = "<p>Error loading events.</p>";
      console.error("Error:", error);
    });

});