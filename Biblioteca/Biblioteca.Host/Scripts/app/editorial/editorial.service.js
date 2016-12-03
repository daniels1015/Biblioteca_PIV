app.service('editorialService',
    [
        '$http',
        'miConfiguracion',
        function ($http, miConfiguracion) {
            function obtenerEditoriales() {
                return $http.get(miConfiguracion.urlBackend + 'Api/Editorial');
            }
            
            function agregarEditorial(nuevaEditorial) {
                return $http.post('http://localhost:50295/Api/Editorial', nuevaEditorial);
            }

            function editarEditorial(editorial) {
                return $http.put(miConfiguracion.urlBackend + 'Api/Editorial/' + editorial.Id, editorial);
            }

            function eliminarEditorial(editorial) {
                return $http.delete(miConfiguracion.urlBackend + 'Api/Editorial/' + editorial.Id);
            }

            return {
                editarEditorial: editarEditorial,
                obtenerEditoriales: obtenerEditoriales,
                agregarEditorial: agregarEditorial,
                eliminarEditorial: eliminarEditorial
            }
        }
    ]);