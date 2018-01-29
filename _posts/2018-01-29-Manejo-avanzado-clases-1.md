---
layout: post
title: Manejo Avanzado de Clases. Parte 1.
author: "JdeJ"
avatar: "images/profile.jpg"
date: 2018-01-29
categories: Java 8
---

# Manejo Avanzado de Clases. Parte 1.

En estos momentos me encuentro preparando el examen para la certificación oficial de Oracle: ***OCP: Java SE 8 Programmer II [1Z0-809]***, y estoy escribiendo una serie de artículos para explicar el funcionamiento de la API de Java en su versión 8 de una manera más concienzuda para que si alguien está interesado en prepararse la certificación le puedan servir de ayuda.

En ésta serie de 3 artículos intentaré resumir modificadores de acceso, clases abstractas, overriding y overloading... así como algo que no es muy habitual como son los inicializadores estáticos y de instancia. Después comentaré que son las Nested Clases y terminaré con la clase Enum.

***

## Modificadores de acceso

Al definir cualquier elemento (ya sea una clase, método o variable) en Java debemos declarar que visibilidad va a tener ese elemento para nuestra aplicación. Los elementos en java pueden tener una de estas 4 opciones:

Modificador | Significado
--- | ---
private | Los elementos marcados como private sólo están disponibles para clases o métodos dentro la misma clase.
default o package private | Si no especificamos un moficador, Java supone que usamos el default. Los elementos default, sólo estarán disponibles dentro de la misma clase o paquete.
protected | Similar a default, pero además ese elemento será accesible por elementos de una subclase (siempre que se cree una instancia de la clase padre).
public | Éste elemento será accesible desde cualquier clase o paquete.

Por último las Clases sólo pueden llevar el modificador **public** o **default**, sino el código no compilará. Además de que se aconseja tener una sola Clase por archivo y en el caso de tener más de una, sólo puede haber una public.


## Clases Abstractas

  

## Imports


## Inicializadores estáticos y de instancia




## El uso de instanceof



## Overloading y Overrriding

  

## Virtual Method Invocation




## Sobreescribiendo equals, hasCode y toString



## La clase Enum
    


## Nested Classes

Antes de comenzar a ejecutar comandos debemos conocer la estructura de los mismos:

  ```
  comando -opciones argumentos
  ```




***

Con esto termino la primera parte del manejo avanzado de clases.

Un saludo.
