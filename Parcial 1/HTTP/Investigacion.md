# Rafael Mosqueda Barragán  19100223
## Métodos de petición HTTP

>### 1. Get
> El método GET solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.
>### 2. Head
>El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.
>### 3. Post
>El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.
>### 4. Put
>El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
>### 5. Delete
>El método DELETE borra un recurso en específico.
>### 6. Connect
>El método CONNECT establece un túnel hacia el servidor identificado por el recurso.
>### 7. Options
>El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.

# Codigos de respuesta HTTP

- Respuestas informativas (100–199),
- Respuestas satisfactorias (200–299),
- Redirecciones (300–399),
- Errores de los clientes (400–499),
- Errores de los servidores (500–599).

|Numero de respuesta|Nombre de las respuetas|Descripcion de las respuestas|
|-------------------|-----------------------|-----------------------------|
|        100        |Continue               |Esta respuesta provisional indica que todo hasta ahora está bien y que el cliente debe continuar con la solicitud o ignorarla si ya está terminada.|
|        101        |Switching Protocol     |Envía en respuesta a un encabezado de solicitud Upgrade por el cliente e indica que el servidor acepta el cambio de protocolo propuesto por el agente de usuario.|
|        102        |Proccesing             |Este código indica que el servidor ha recibido la solicitud y aún se encuentra procesandola, por lo que no hay respuesta disponible.|
|        200        |Ok                     |La solicitud ha tenido éxito. El significado de un éxito varía dependiendo del método HTTP|
|        201        |Created                |La solicitud ha tenido éxito y se ha creado un nuevo recurso como resultado de ello.|
|        202        |Accepted               |Significa que no hay forma en HTTP que permite enviar una respuesta asíncrona que indique el resultado del procesamiento de la solicitud.|
|        300        |Multiple choice        |Esta solicitud tiene más de una posible respuesta. User-Agent o el usuario debe escoger uno de ellos. No hay forma estandarizada de seleccionar una de las respuestas.|
|        301        |Moved Permanently      |Este código de respuesta significa que la URI del recurso solicitado ha sido cambiado. Probablemente una nueva URI sea devuelta en la respuesta.|
|        302        |Found                  |Este código de respuesta significa que el recurso de la URI solicitada ha sido cambiado temporalmente.|
|        400        |Bad request            |Esta respuesta significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida.|
|        401        |Unathorized            |Es necesario autenticar para obtener la respuesta solicitada. Esta es similar a 403, pero en este caso, la autenticación es posible.|
|        404        |Not Found              |El servidor no pudo encontrar el contenido solicitado. Este código de respuesta es uno de los más famosos dada su alta ocurrencia en la web.|
|        500        |Internal Server Error  |El servidor ha encontrado una situación que no sabe cómo manejarla.
|        501        |Not Implemented        |El método solicitado no está soportado por el servidor y no puede ser manejado.
|        502        |Bad Gateway            |Esta respuesta de error significa que el servidor, mientras trabaja como una puerta de enlace para obtener una respuesta necesaria para manejar la petición, obtuvo una respuesta inválida.