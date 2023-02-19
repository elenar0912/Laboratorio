const inputs =document.querySelectorAll('#form input');

const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,  
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{8,12}$/, 
	password: /^.{8,12}$/, 
}
