<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Catullus</title>

        <script>
            window.Laravel = {
                'csrfToken': '{{ csrf_token() }}'
            }
        </script>

        <link rel="stylesheet" href="css/app.css">
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <app></app>
        </div>

        <script src="js/app.js"></script>
    </body>
</html>
