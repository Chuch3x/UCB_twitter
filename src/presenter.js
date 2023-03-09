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

  const post = crearPost(titulo.value, detalle.value);
  event.preventDefault();
  posts.push(post);
  
  div.innerHTML += `<div class="card">
  <div class="card-body">
    <p>${post.titulo}  </p>
    <p>${post.detalle}  </p>
    </div>
  </div>`;
});
