function longTextAreaTitulo(titulo){

    if (titulo.value.length >=50)
    {
    alert('Por Favor la descripción no debe exceder de 255 caracteres');
    titulo.focus();
    return false;
    }else{
    return true;
    }
}

export default longTextAreaTitulo;