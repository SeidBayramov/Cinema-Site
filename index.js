

fetch("https://api.tvmaze.com/shows")
  .then(res => res.json())
  .then(data=>console.log(data))



let row = document.getElementById("show-container");

fetch("https://api.tvmaze.com/shows")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      row.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img src="${data[i].image.medium}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${data[i].name}</h5>
            <p class="card-text">IMDB rating: ${data[i].rating.average}</p>
            <a href="" class="btn btn-outline-dark show-details-btn">See more details</a>
          </div>
        </div>`;
    }

    const detailButtons = document.querySelectorAll(".show-details-btn");
    detailButtons.forEach((button, index) => {
      button.addEventListener("click", () => showDetails(data[index]));
    });
  });

  function showDetails(show) {
    const newTab = window.open('', '_blank');
  
    newTab.document.write(`
      <html>
      <head>
        <title>${show.name} Details</title>
        <style>
          body {
            font-family: 'Arial', sans-serif;
            padding: 20px;
            background-color: #000000; 
            color: #ffffff; 
          }
          h1 {
            color: #ffffff; 
          }
          p {
            margin-bottom: 10px;
          }
          strong {
            color: #28a745; 
          }
          a {
            text-decoration: none;
            color: #007bff; 
          }
          .btn {
            display: inline-block;
            padding: 0.5rem 1rem; 
            font-size: 1.2rem; 
            font-weight: 600; 
            line-height: 1.5;
            text-align: center;
            text-decoration: none;
            vertical-align: middle;
            cursor: pointer;
            border: 2px solid #28a745; 
            border-radius: 0.5rem; 
            color: #28a745;
            background-color: #ffffff; 
            transition: transform 0.3s;
          }
          
          .img-container {
            max-width: 50%; 
            margin: 20px auto; 
            border: 2px solid #007bff; 
            border-radius: 0.5rem; 
            overflow: hidden; 
          }
          
          img {
            width: 25%; 
            height: auto;
          }      

          .btn:hover {
            transform: scale(1.1);
          }
        </style>
        </head>
        <body>
          <h1>${show.name} Details</h1>
          <p><strong>Runtime</strong> ${show.weight} minute</p>
          <p><strong>IMDB rating:</strong> ${show.rating.average}</p>
          <p><strong>Language</strong> ${show.language}</p>
          <p><strong>Summary:</strong> ${show.summary}</p>
          <a href="${show.officialSite}" class="btn">Go to Official Site</a>
          <button class="btn btn-watch">Go to Watching Adress</button>
          <p><strong>Genres:</strong> ${show.genres.join(', ')}</p>
          <img src="${show.image.medium}" alt="${show.name} Image">
    
          <script>
            document.querySelector('.btn-watch').addEventListener('click', function() {
              window.location.href = 'https://www.dizibox.in/';
            });
          </script>
        </body>
        </html>
      `);
    
      newTab.document.close();
    }
 
    
    
    
    
    





