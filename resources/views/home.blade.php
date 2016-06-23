<!DOCTYPE html>
<html>
    <head>
        <title>Zoho API Example</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:700" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        <link rel="stylesheet" href="{{ asset('css/theme-neptune-all_1.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/theme-neptune-all_2.css') }}" />
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <script type="text/javascript" src="{{ asset('js/ext-all.js') }}"></script>
    </head>
    <body>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <img src="{{ asset('img/logo.jpeg') }}" alt="" width="200" height="100">
                    </div>
                    <div class="col-lg-9">
                        <h1 class="title">Facturas de venta</h1>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="container">
                <div id="button"></div>
                <div id="invoiceTable"></div>
            </div>
        </section>
    <script type="text/javascript" src="{{ asset('js/ext-all.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/main.js') }}"></script>
    </body>
</html>
