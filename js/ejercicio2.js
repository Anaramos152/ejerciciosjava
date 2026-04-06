document.getElementById('btnVerificar').addEventListener('click', function() {
   
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    
    const display = document.getElementById('resultado');


    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        display.textContent = "Por favor, ingresa las 3 notas.";
        return;
    }

    if (n1 >= 3.0 && n2 >= 3.0 && n3 >= 3.0) {
        display.textContent = "Aprobó todas las materias ✅";
        display.style.color = "green";
    } else {
        display.textContent = "Tiene materias reprobadas ❌";
        display.style.color = "red";
    }
});