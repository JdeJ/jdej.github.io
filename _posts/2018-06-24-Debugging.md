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

El **Debugging** o **Depuración** es el proceso por el que se eliminan problemas en nuestro código, e incluso se mejora su rendimiento. Como curiosidad, el término **Debugging** se dice que viene de la palabra **bug**, en inglés **bicho** y se remonta al inicio de la computación dónde la mayoría de los problemas en los sistemas eran físicos por culpa de insectos (polillas...) que se colaban en los circuitos atraidos por las luces y el calor, y estropeaban la electrónica.

La **Depuración** es un proceso minucioso y lento que pone a prueba al programador y que puede ser la inclusión de líneas de código que ralentizan o detienen el curso natural del programa para detectar al paso por esa instrucción el valor de ciertas variables o incluso si realmente se está pasando por esa parte del código. En la mayoría de los casos se cuenta con un sistema depurador (**debugger**) y en entornos de desarrollo más serios se utilizan las **pruebas unitarias** que son automatizaciones de detección de errores especializadas en partes de nuestro código que lo testean al límite en busca de problemas.

En este artículo explicaré las herramientas con las que contamos para depurar nuestro código en **JavaScript** a través de nuestro navegador.

***

## Alert
Iré explicando las Herramientas con las que contamos desde la más básica a la más compleja. Empezamos por **Alert**, ésta función nos permite lanzar un mensaje al usuario que detiene la ejecución del código hasta que se presione el botón *OK*, una vez presionado el programa sigue su curso. Su sintaxis es ésta:

    alert("Texto que queremos mostrar.");

Podemos usarlo para mostrar mensajes o valores de variables:

    alert("Estamos dentro de la función miFuncion().");
    alert("El valor de la variable es: "+ vble);

Pero **Alert** tiene una limitación muy importante: sólo puede lanzar **Strings** por pantalla

    var obj={name: 'Jorge', age: 36}; //creo un objeto
    alert(obj); //imprimo por pantala mi objeto
    [object Object] //ésto se imprime en el Alert

Aunque en un principio ésta herramienta pueda parecernos inútil, es de gran utilidad para lanzar un mensaje básico y detener la ejecución del código de una manera sencilla.

***

## Developer Tools
Para los que estamos acostumbrados a programar usando un **IDE** (*Integrated Development Environment*) como Netbeans, Eclipse... se nos hace muy cuesta arriba programar con un editor de texto (Notepad, Atom, Sublime...) ya que echamos en falta todas las ayudas y los autocompletados que nos brindan. Aunque tanto *Atom* como *Sublime* ofrecen pluggins que nos ayudan muchísimo, no terminamos de encontrar la misma comodida y fluidez que ofrecen los **IDE**.

En nuestro caso utilizaremos el propio navegador web para poder controlar la ejecución de nuestro código y nos ofrece unas herramientas de desarrollo que no tienen nada que envidiar a los *Netbeans* o *Eclipse*.

El navegador más usado actualmente es **Google Chrome** aunque todos los navegadores modernos ofrecen las mismas herramientas en mayor o menor grado. Por lo que las opciones que explique son válidas para todos.

Para poder acceder a las **Dev Tools** de **Chrome** podemos hacerlo de tres maneras:

1 Pulsando: 

  - En Windows: ctrl + shift + i

  - En Mac OSX: cmd + opt + i

2 Dentro de la página web que queremos inspeccionar:

  - botón derecho -> Inspeccionar

3 A través del menú de Chrome:

  - Más Herramientas/Herramientas para desarrolladores

Una vez activadas el navegador nos divide la pantalla, por una lado nos muestra la web de manera reducida y por otro todas las herramientas en forma de pestañas, destacan éstas:

+ ***Elements***: Desde esta pestaña podemos ir viendo a través del código donde se sitúan los elementos dentro de la propia web.

+ ***Console***: Para nosotros la más importante. Nos ofrece una línea de comandos para poder controlar nuestro código, sacar mensajes, depurar...

+ ***Sources***: Aquí tenemos un pequeño explorador de archivos que nos permite navegar por el sistema de carpetas que configuran la web, también podemos abrir los archivos ya sean css, js...

+ ***Network***: Si la web consume recursos web, desde aquí podemos inspeccionar estas conexiones y comprobar si todo va bien.

***

## Consola
Practicamente todos los programadores están familiarizados con la **Terminal**, para ejecutar su código, depurarlo... Ésto es precisamente lo que nos permite la **Consola**.

- **Errors**

Cuando se produce un error durante la ejecución de nuestro código, en la consola aparece una línea en rojo con una breve descripción del error producido y un poco más a la derecha un link hacia el archivo y la línea en la que se ha producido.
Al hacer click en él, nos lleva a la pestaña *Sources* en la que se abre el archivo en el que se ha producido el error y el cursor se desplaza a la línea que lo ha producido para que podamos *depurarlo*.

- **Línea de comandos**

También podemos utilizar esta consola para ejecutar código directamente como puede ser operaciones matemáticas, crear un objeto, arrays... y operar con ellos. Lo único que debemos tener en cuenta es que todo lo que queramos hacer se tiene que escribir antes de apretar el *Enter*.

    9%3 //esto imprimirá en consola un 0 

    var obj={name: 'Jorge', age: 36}; //creo un objeto

    alert('Ésto es una alerta!!'); //lanzo una alerta personalizada
    
    //Incluso podemos ejecutar un bloque de código
    var miArray = [1, 2, 3];
    for (var i = 0; i < miArray.length; i++) {
      miArray[i] \*= 2;
    }
    miArray;
    (3) [2, 4, 6] //escribirá ésto en pantalla

Pero la *línea de comandos* no se queda ahí, desde la guía de referencia de la [API de la línea de comandos](https://developers.google.com/web/tools/chrome-devtools/console/command-line-reference?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3), nos explican la potencia de ésta y que opciones nos da. Como ejemplo tenemos los siguientes comandos:

    $_ //Muestra el valor de la última sentencia ejecutada
    $_.length //ejecuta la función length sobre el valor de la última sentencia ejecutada(si puede)
    $(selector) //devuelve el elemento del DOM seleccionado
    $(selector).css('propiedad', 'valor'); //accede al css y lo modifica
    $$(selector) //devuelve un array con todos los elementos del DOM seleccionados
    clear() //limpia la consola
    copy(object) //copia en el portapapeles la representacion en String de un objeto
    debug(funcion) //cuando se ejecuta la funcion se activa el depurador en la pestaña *Sources*

- **Console.log** 

Al igual que ***Alert*** lo podemos usar para lanzar mensajes, en éste caso en la consola. Pero con dos grandes diferencias:

1 No detiene la ejecución del programa. Cuando el proceso de ejecución llega al punto del *log* lo muestra en pantalla y sigue con la siguiente instrucción.

    console.log("Estamos dentro de la función miFuncion().");
    console.log("El valor de la variable es: "+ vble);

2 Podemos imprimir en la consola más elementos que no sean únicamente Strings:

    console.log($('p')); //accedemos a elementos del DOM
    console.log(obj); //imprimimos una representación en String del objeto obj

- **Debugger** 

- **Librerías y Minified Code** 














***

Espero haber podido explicar las opciones que tenemos para detectar y corregir esos **bugs** que a los programadores nos fríen los sesos y que son tan difíciles de encontrar. Al menos con éstas herramientas tendrán más complicado esconderse.

Un saludo...
