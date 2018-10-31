import { NavbarComponent } from './../navbar/navbar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TiendaService } from '../servicios/tienda.service';

@Component({
	selector: 'tiendas',
	templateUrl: './tiendas.component.html',
	styleUrls: [],
	providers: [TiendaService]
})
export class TiendasComponent implements OnInit {
	@ViewChild('barraTienda') barraTienda: NavbarComponent;

	public tiendas = null;
	public isData;
	public msg;

	constructor(
		private tiendaServicio: TiendaService,
	) { }

	ngOnInit() {
		this.listaTienda();
		this.barraTienda.estadoTienda("activo");
	}

	listaTienda() {
		this.tiendaServicio.listaTienda().subscribe(
			response => {
				if (response.status != 204) {
					this.tiendas = response;
					this.isData = true;
				} else {
					this.msg = response.msg;
					this.isData = false;
				}
			},
			error => { }
		);
	}

	onEliminarTienda(id) {
		this.tiendaServicio.eliminarTienda(id).subscribe(
			response => {
				this.listaTienda();
			},
			error => { }
		);
	}

}
