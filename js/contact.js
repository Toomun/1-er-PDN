window.addEventListener('load', () => {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const consulta = document.getElementById('consulta');

    nombre.addEventListener('input', () => {
        validaCampo(nombre, 'nombre', 'Ingrese un nombre.', validaNombre);
    });

    email.addEventListener('input', () => {
        validaCampo(email, 'email', 'Ingrese su correo electrónico.', validaEmail);
    });

    tel.addEventListener('input', () => {
        validaCampo(tel, 'tel', 'Ingrese un núm. de teléfono.', validaTel);
    });

    consulta.addEventListener('input', () => {
        validaCampo(consulta, 'consulta', 'Escriba un mensaje.', validaMensaje);
    });

    const validaCampo = (campo, campoId, mensajeVacio, funcionValidacion) => {
        const valor = campo.value.trim();
        const formControl = campo.parentElement;
        const aviso = formControl.querySelector('p');

        if (!valor) {
            validaFalla(formControl, aviso, mensajeVacio);
        } else if (!funcionValidacion(valor)) {
            validaFalla(formControl, aviso, `El valor ingresado no es válido para ${campoId}.`);
        } else {
            validaOk(formControl, aviso);
        }
    };

    const validaFalla = (formControl, aviso, mensaje) => {
        aviso.innerText = mensaje;
        formControl.classList.remove('ok');
        formControl.classList.add('falla');
    };

    const validaOk = (formControl, aviso) => {
        aviso.innerText = '';
        formControl.classList.remove('falla');
        formControl.classList.add('ok');
    };

    const validaNombre = (nombre) => {
        return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(nombre);
    };

    const validaEmail = (email) => {
        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    };

    const validaTel = (tel) => {
        return /^\d{7,14}$/.test(tel);
    };

    const validaMensaje = (consulta) => {
        return /^[a-zA-ZÀ-ÿ\s]{1,140}$/.test(consulta);
    };
});
