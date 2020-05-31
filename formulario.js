//(funcion)(){
    var formulario = document.getElementById('formulario2'),
		nombre = formulario2.nombre,
		apellido = formulario2.correo,
		numero = formulario2.sexo,
		codigo = formulario2.codigo,
        fecha = formulario2.fecha,
        terminos = formulario2.terminos,
		error = document.getElementById('error');
function validarNombre(e){
    if(nombre.value == '' || nombre == null){
        console.log('Completa el nombre');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Un Nombre</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}

function validarApellido(e){
     if(apellido.value == '' || apellido == null){
        console.log('Completa el Apellido');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Un Apellido</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}
function validarNumero(e){
    if(numero.value == '' || numero.value == null){
        console.log('Completa Un Numero');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresaa Un Numero</li>';
        e.preventDefault();
    }else{
    error.style.display='none';
}
}
function validarCodigo(e){
    if(codigo.value == '' || codigo.value == null){
        console.log('Completa Un Codigo');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Un Codigo</li>';
        e.preventDefault();
    }else{
    error.style.display='none';
}
}
function validarFecha(e){
    if(fecha.value == '' || nfecha.value == null){
        console.log('Completa Una Fecha');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Una Fecha</li>';
        e.preventDefault();
    }else{
    error.style.display='none';
}
}
function validarTerminos(e){
    if(terminos.checked == false){
        console.log('Acepta Los Terminos');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Acepta Los Terminos</li>';
        e.preventDefault();
    }else if(nombre.value == '' || nombre == null || apellido.value == '' || apellido == null || numero.value == '' || numero.value == null || codigo.value == '' || codigo == null || fecha.value == '' || fecha == null){
    error.style.display='block';
}
}

function validarForm(e){
   error.innerHTML = '';
   error.style.display = 'block';
   validarNombre(e);
   validarApellido(e);
   validarNumero(e);
   validarCodigo(e);
   validarFecha(e);
   validarTerminos(e);
}


formulario.addEventListener('submit', validarForm);

//}())