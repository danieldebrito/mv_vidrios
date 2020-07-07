<?php
class login
{
	public $usuario;
	public $clave;

	public function Login($usuario, $clave) {
		$objetoAccesoDato = AccesoDatos::dameUnObjetoAcceso();

        $consulta = $objetoAccesoDato->RetornarConsulta(
			"SELECT * FROM `usuarios` WHERE `usuario`= '".$usuario."' AND `clave`= '".$clave."'"
		);

		$consulta->execute();
		$resultado = $consulta->fetch();
        return $resultado;
    }
}


