<?php
require_once 'login.php';

class loginApi extends login {
	
	public function LoginCliente($request, $response, $args)
    {
        $json = $request->getBody();
		$data = json_decode($json, true);

		$retorno = cliente::Login($data["usuario"], $data["password"]);

        if ($retorno["usuario"] != "") {
            $respuesta = array("Estado" => "OK", "Mensaje" => "Logueado Exitosamente", "result" => $retorno["true"]);
        } else {
            $respuesta = array("Estado" => "ERROR", "Mensaje" => "Usuario o password Invalidos");
        }
        $newResponse = $response->withJson($respuesta, 200);
        return $newResponse;
    }   
}
?>




