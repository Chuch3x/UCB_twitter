function longTextAreaTitulo(titulo){

    if (titulo.value.length >=50)
    {
    alert('Por Favor el titulo no debe exceder de 50 caracteres');
    titulo.focus();
    return false;
    }else{
    return true;
    }
}

export default longTextAreaTitulo;