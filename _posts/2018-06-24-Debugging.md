---
layout: post
title: JavaScript Debbuging
author: "JdeJ"
avatar: "images/profile.jpg"
date: 2018-06-24
categories: JavaScript
---

### [Aprende Javascript con MentoringJS - Pretraining Step 5](http://mentoringjs.com "MentoringJS")

Después de una parada obligada, retomo mi objetivo de aprender JavaScript con MentoringJS, en este artículo intentaré explicar lo que he aprendido durante el Step 5.

***

## Debugging o Depuración
Independientemente del lenguaje de programación que estemos utilizando, hay un concepto que termina aflorando después de los primeros pasos: **Debugging**.

El *Debugging* o *Depuración* es el proceso por el que se eliminan problemas en nuestro código, e incluso se mejora su rendimiento. Como curiosidad, el término *Debugging* se dice que viene de la palabra *bug*, en inglés *bicho* y se remonta al inicio de la computación dónde la mayoría de los problemas en los sistemas eran físicos por culpa de insectos (polillas...) que se colaban en los circuitos atraidos por las luces y el calor, y estropeaban la electrónica.

La *Depuración* es un proceso minucioso y lento que pone a prueba al programador y que puede ser la inclusión de líneas de código que ralentizan o detienen el curso natural del programa para detectar al paso por esa instrucción el valor de ciertas variables o incluso si realmente se está pasando por esa parte del código. En la mayoría de los casos se cuenta con un sistema depurador (*debugger*) y en entornos de desarrollo más serios se utilizan las *pruebas unitarias* que son automatizaciones de detección de errores especializadas en partes de nuestro código que lo testean al límite en busca de problemas.

En este artículo explicaré las herramientas con las que contamos para depurar nuestro código en *JavaScript* a través de nuestro navegador.

***

## Alert
Iré explicando las Herramientas con las que contamos desde la más básica a la más compleja. Empezamos por *Alert*, ésta función nos permite lanzar un mensaje al usuario que detiene la ejecución del código hasta que se presione el botón *OK*, una vez presionado el programa sigue su curso. Su sintaxis es ésta:

    alert("Texto que queremos mostrar.");

Podemos usarlo para mostrar mensajes o valores de variables:

    alert("Estamos dentro de la función miFuncion().");
    alert("El valor de la variable es: "+ vble);

Pero *Alert* tiene una limitación muy importante: sólo puede lanzar *Strings* por pantalla

    var obj={name: 'Jorge', age: 36}; //creo un objeto
    alert(obj); //imprimo por pantala mi objeto
    [object Object] //ésto se imprime en el Alert

Aunque en un principio ésta herramienta pueda parecernos inútil, es de gran utilidad para lanzar un mensaje básico y detener la ejecución del código de una manera sencilla.

***

## Developer Tools






















1 *class*: Éste parámetro lo usamos para especificar propiedades extra para ciertos elementos. Siguiendo nuestro ejemplo, podemos definir el color, la fuente y el tamaño de todos los párrafos, y ademas que los que sean de la clase cursiva (\<p class="cursiva">) tengan el texto en cursiva:

    <!-- HTML -->
    <p class="cursiva">Éste es nuestro párrafo en cursiva con CSS</p>

    <!-- CSS -->
    p.cursiva {
      font-style: italic;
    }

2 *id*: Al igual que el parámetro *class*, sirve para identificar un elemento aunque de manera única. Si asignamos un *id* a una etiqueta, en nuestra CSS podemos utilizarla a través de él y asignarle mas propiedades que queramos, pero no podemos tener dos etiquetas con el mismo *id*.

    <!-- HTML -->
    <p id="parrafo1"> Párrafo con id: 1</p>
    <p id="parrafo2"> Párrafo con id: 2</p>

    <!-- CSS -->
    parrafo1{
      font-style: italic;
    }
    parrafo2{
      font-style: normal;
    }

***

Espero haber podido explicar las opciones que tenemos para detectar y corregir esos *bugs* que a los programadores nos fríen los sesos y que son tan difíciles de encontrar. Al menos con éstas herramientas tendrán más complicado esconderse :wink:.

Un saludo...
