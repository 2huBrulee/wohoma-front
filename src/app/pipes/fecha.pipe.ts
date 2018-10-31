import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'fecha'})
export class FechaPipe implements PipeTransform {
	transform(value): string{
		let fecha = new Date(value * 1000);
		let dia = (fecha.getDate() + 1);
		let diaFinal = dia.toString();
		if(dia <= 9){
			diaFinal = "0" + dia;
		}
		let mes = (fecha.getMonth() + 1);
		let mesFinal = mes.toString();
		if(mes <= 9){
			mesFinal = "0" + mes;
		}
		let resultado = diaFinal + "/" + mesFinal + "/" + fecha.getFullYear();
		return resultado;
	}
}
