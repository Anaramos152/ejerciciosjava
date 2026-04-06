document.getElementById('btnCalcular').addEventListener('click', function() {
    
    const cuenta = parseFloat(document.getElementById('cuenta').value);
    const porcentaje = parseInt(document.getElementById('porcentaje').value);
    
    const errorDiv = document.getElementById('mensajeError');
    const resultadoDiv = document.getElementById('resultado');

    
    errorDiv.textContent = "";
    resultadoDiv.style.display = "none";

    
    if (porcentaje === 5 || porcentaje === 10 || porcentaje === 15) {
       
        const propina = cuenta * (porcentaje / 100);
        const total = cuenta + propina;

        
        document.getElementById('valorPropina').textContent = `$${propina.toLocaleString()}`;
        document.getElementById('valorTotal').textContent = `$${total.toLocaleString()}`;
        resultadoDiv.style.display = "block";
    } else {
        
        errorDiv.textContent = "❌ Error: El porcentaje debe ser 5, 10 o 15.";
    }
});