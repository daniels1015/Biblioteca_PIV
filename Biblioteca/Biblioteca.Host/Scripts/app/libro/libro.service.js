﻿app.service('libroService',
    [
        '$http',
        'miConfiguracion',
        function ($http, miConfiguracion) {
            function obtenerLibros() {
                return $http.get(miConfiguracion.urlBackend + 'Api/Libro');
            }

            function agregarLibro(nuevoLibro) {
                return $http.post('http://localhost:50295/Api/Libro', nuevoLibro);
            }

            function editarLibro(libro) {
                return $http.put(miConfiguracion.urlBackend + 'Api/Libro/' + libro.Id, libro);
            }

            function eliminarLibro(libro) {
                return $http.delete(miConfiguracion.urlBackend + 'Api/Libro/' + libro.Id);
            }

            function agregarEditorial(libro, editorial) {
                return $http.put(miConfiguracion.urlBackend + 'Api/Libro/' + libro.Id + '/editorial/' + editorial.Id);
            }

            return {
                editarLibro: editarLibro,
                obtenerLibros: obtenerLibros,
                agregarLibro: agregarLibro,
                eliminarLibro: eliminarLibro,
                agregarEditorial: agregarEditorial
            }

        }
    ]);