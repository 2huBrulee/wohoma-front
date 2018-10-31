import { Empleado } from './empleado';
export class Permiso{
	constructor(
		public datosEmpleado: Empleado,
		public idPermiso: string,
		public razon: string,
		public fechaInicial: string,
		public fechaFinal: string,
		public bandera: boolean
	){}
}