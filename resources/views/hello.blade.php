<h1>Hello World</h1>

<form action="/hello" method="post">
    <input type="hidden" name="_token" value="{{ csrf_token() }}">
    <input type="text" name="name" id="">
    <input type="submit" class="enviar">
</form>