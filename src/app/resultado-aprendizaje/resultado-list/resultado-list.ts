import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ResultadoAprendizajeService } from '../resultado-aprendizaje';
import { ResultadoAprendizaje } from '../resultado-aprendizaje.model';

@Component({
  selector: 'app-resultado-list',
  imports: [CommonModule, RouterLink],
  templateUrl: './resultado-list.html',
  styleUrl: './resultado-list.scss',
})
export class ResultadoList implements OnInit {
  private service = inject(ResultadoAprendizajeService);
  private router = inject(Router);

  resultados: ResultadoAprendizaje[] = [];
  cargando = true;

  ngOnInit() {
    // Angular destruye y vuelve a crear este componente cada vez que se
    // reentra a la ruta '/resultado-aprendizaje', así que basta con cargar aquí.
    this.cargarLista();
  }

  cargarLista() {
    this.cargando = true;
    this.service.getAll().subscribe({
      next: (data) => {
        this.resultados = data;
        this.cargando = false;
      },
      error: (err) => {
        console.error('Error al cargar resultados', err);
        this.cargando = false;
      },
    });
  }

  editar(id?: number) {
    if (id) this.router.navigate(['/resultado-aprendizaje', id, 'editar']);
  }

  eliminar(id?: number) {
    if (!id) return;
    const confirmado = confirm('¿Seguro que deseas eliminar este resultado de aprendizaje?');
    if (!confirmado) return;

    this.service.delete(id).subscribe({
      next: () => this.cargarLista(),
      error: (err) => console.error('Error al eliminar', err),
    });
  }
}
