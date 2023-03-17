function mostrar() {
            div = document.getElementById('flotante');
            div.style.display = '';
        }
        
        function cerrar() {
            div = document.getElementById('flotante');
            div.style.display = 'none';
        }

function mostrar1() {
            div = document.getElementById('flotante1');
            div.style.display = '';
        }
        
        function cerrar1() {
            div = document.getElementById('flotante1');
            div.style.display = 'none';
        }
		
		
function solicitud(valor) {
            var nombre2 = document.getElementById("nombre").value;
            
            var email2 = document.getElementById("email").value;
                    
            var solicitud2 = document.getElementById('solicitud1').value;
			
			if (nombre==""){
			alert ("el nombre de la empresa debe ingresarse obligatoriamente")
			
			}
            console.log(nombre2,email2,solicitud2);
        } 