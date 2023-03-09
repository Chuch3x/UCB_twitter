import longTextAreaTitulo from "./maxlenght";

function crearPost(titulo, detalle){
  return{
    titulo: titulo,
    detalle: detalle, 
    fecha: new Date()
  };
}

export default crearPost;