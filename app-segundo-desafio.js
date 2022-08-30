/* Mi algoritmo es una ampliacion del implementado anteriormente aplicando funciones y otras opciones
para profesores y/o administrativos encargados de inscribir alumnos.  
Consiste en efectuar la carga de alumnos por curso con un cupo maximo indicado por el usuario.
No se permite ingresar valores nulos */


/* Programa principal */

elegirCurso();


//Funciones

function inscripcionMateria(){
    nombre=" ";
    dni=0;
    let cupo= Number(prompt("Ingrese el cupo de personas permitido"))

    for (i=0; nombre!="-1"; i<=cupo) {
        nombre= prompt("Ingrese un nombre o -1 para terminar");        
        while(nombre==""){
            alert('No se ingresó ningún nombre');
            nombre= prompt("Ingrese un nombre o -1 para terminar");  
        }        
        if(nombre==-1){   
            break;
        }         
        if(i==cupo){
            alert(`Cupo lleno. El maximo permitido es de ${cupo} personas.\n Presione ACEPTAR para cerrar`);
            break;

        }else{
            dni= Number(prompt("Ingrese el DNI"));            
            while(dni==""){
                alert('No se ingresó el DNI');
                dni= Number(prompt("Ingrese el DNI"));  
            }
            i++;
        }
        let resultado = nombre+ " " + dni;
        alert(nombre +", "+dni +"\n Presione ACEPTAR para continuar");
    }
    alert("Total"+" "+i+" "+"inscriptos") 
}
    

    
    
function elegirCurso(){
    a=0;
    b=0;
    c=0;
    materia=""
    while(materia!=-1){
        materia=prompt("Ingrese el curso \n 1-Desarrollo Web \n 2-Javascript \n 3-Programacion Backend o -1 para terminar")
        while(materia==""){
            alert("No se ingresaron materias");
            materia= prompt("Ingrese el curso \n 1-Desarrollo Web \n 2-Javascript \n 3-Programacion Backend");  
        }

        if (materia==1){
            inscripcionMateria();
        }
        if (materia==2){
            inscripcionMateria();
        } 
        if (materia==3){
            inscripcionMateria();        
        }
        if (materia=-1){
            break
        }

    }
}
      




