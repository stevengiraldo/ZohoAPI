<!DOCTYPE html>
<html>
    <head>
        <title>Zoho API Example</title>

        <link href="https://fonts.googleapis.com/css?family=Lato:700:400" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        <link rel="stylesheet" href="{{ secure_asset('css/theme-crisp-touch-all_1.css') }}" />
        <link rel="stylesheet" href="{{ secure_asset('css/theme-crisp-touch-all_2.css') }}" />
        <link rel="stylesheet" href="{{ secure_asset('css/app.css') }}">
        <script type="text/javascript" src="{{ secure_asset('js/ext-all.js') }}"></script>
    </head>
    <body>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col-lg-3">
                        <a href="http://calendariodeideas.com" target="_blanck"><img src="{{ asset('img/logo.jpeg') }}" alt="" width="200" height="100"></a>
                    </div>
                    <div class="col-lg-6">
                        <h1 class="title">Sistema facturas de venta<br><span>(Zoho Invoices Example)<span></h1>
                    </div>
                    <div class="col-lg-3 logo-github">
                        <a href="https://github.com/stevengiraldo/ZohoAPI" target="_blanck"><img src="{{ asset('img/logo-github.png') }}" alt="" width="35" height="35"></a>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="container">
                <div id="invoiceTable"></div>
            </div>
        </section>
        <footer>
            <span>© Steven Giraldo</span>
        </footer>
    <script type="text/javascript" src="{{ secure_asset('js/ext-all.js') }}"></script>
    <script type="text/javascript" src="{{ secure_asset('js/main.js') }}"></script>
    </body>
</html>
