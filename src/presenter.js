import crearPost from "./crearPost";


let posts = [];
window.onload = function () {
  window.posts = [];
};

const form = document.querySelector("#post_form");
const titulo = document.querySelector("#titulo");
const detalle = document.querySelector("#detalle");
const div = document.querySelector("#mostrar_posts_div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if(titulo.value == "")
  {
    return alert("El titulo no puede estar vacio");
  }
  else{
    const post = crearPost(titulo.value, detalle.value);
    event.preventDefault();
    posts.push(post);
  
    div.innerHTML += `<div class="card">
    <div class="card-body">
      <h3>${post.titulo}  </h3>
      <hr>
      <p>${post.detalle}  </p>
      <p> Fecha de publicacion: ${post.fecha.getDate()}  / ${post.fecha.getMonth()} / ${post.fecha.getFullYear()}  </p>
      </div>
    </div>`;
  }

  document.getElementById('post_form').reset();
});
