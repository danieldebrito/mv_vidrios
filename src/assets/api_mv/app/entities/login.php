<?php
class login
{
	public $usuario;
	public $password;

	public function Login($usuario, $password) {
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

        $consulta = $objetoAccesoDato->RetornarConsulta(
			"SELECT * FROM `usuarios` WHERE `usuario`= '".$usuario."' AND `password`= '".$password."'"
		);

		$consulta->execute();
		$resultado = $consulta->fetch();
        return $resultado;
    }
}


