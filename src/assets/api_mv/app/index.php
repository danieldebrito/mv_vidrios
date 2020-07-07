<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../composer/vendor/autoload.php';
require './AccesoDatos.php';

///////////////////   MIDDLEWARE  ///////////
require_once './middleware/MWparaCORS.php';

/////////////////////////////   entities  /////////////////////////////////
//-----------------------------------------------------------------------//
require './entities/loginApi.php';
//-----------------------------------------------------------------------//


$config['displayErrorDetails'] = true;
$config['addContentLengthHeader'] = false;

$app = new \Slim\App(["settings" => $config]);

$app->get("/", function() {
  echo "
  <p style='font-size:50px;'>Hola mundo desde api_meyro_web_test</p> 
  <br> <br> 
  <p style='font-family:courier;'>Conexion ok con la API.</p>

  http://localhost/api_myr_web/app/index.php/
  ";
});

$app->group('/auth', function () {
  $this->post('/login[/]', \userApi::class . ':LoginUser');

  /* body + raw  + 
    {
      "userName":"ddebrito",
      "pass":"1388"
    } */
});

$app->add(function ($req, $res, $next) {
  $response = $next($req, $res);
  return $response
  ->withHeader('Access-Control-Allow-Origin', 'http://localhost:4200')
  ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
    ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
});

$app->run();
