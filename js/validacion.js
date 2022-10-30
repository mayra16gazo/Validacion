let contra1 = document.getElementById("password1");
let contra2 = document.getElementById("password2");

function validarCheck() {
    let check = document.getElementById("terminos");
    let feedback = document.getElementById("pecito");
    let botoncito = document.getElementById("boton-terminos");

    if (!check.checked) {
        botoncito.classList.add('text-danger');
        feedback.classList.remove('d-none');
        feedback.classList.add('d-inline');
    } else if (check.checked) {
        botoncito.classList.remove('text-danger');
        feedback.classList.remove('d-inline');
        feedback.classList.add('d-none');
    }
}

function validarContra() {
    if ((contra2.value === contra1.value) && contra1.checkValidity() === true) {
        contra2.setCustomValidity("");
    } else {
        contra2.setCustomValidity(false);
    }
}
// Example starter JavaScript for disabling form submissions if there are invalid fields

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
            let check = document.getElementById("terminos");
            validarContra();
            validarCheck();
            contra2.addEventListener('input', function(e) {
                validarContra();
            })
            contra1.addEventListener('input', function(e) {
                validarContra();
            })
            check.addEventListener('input', function(e) {
                validarCheck();
            })
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
