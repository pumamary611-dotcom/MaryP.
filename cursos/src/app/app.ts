import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CursoCard } from './curso-card/curso-card'; 
import { Curso } from './models/curso.models';       

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CursoCard], 
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  cursos: Curso[] = [
    { id: 1, nombre: 'Angular Básico', horas: 20, precio: 300 },
    { id: 2, nombre: 'Desarrollo Web Full Stack', horas: 40, precio: 600 },
    { id: 3, nombre: 'Bases de Datos SQL', horas: 25, precio: 350 }
  ];

  inscritos: Curso[] = [];
  total: number = 0;

  inscribirCurso(curso: Curso) {
    const yaInscrito = this.inscritos.some(c => c.id === curso.id);

    if (yaInscrito) {
      alert(`⚠️ Ya estás inscrito en el curso: "${curso.nombre}"`);
      return;
    }

    this.inscritos.push(curso);
    this.total += curso.precio;
  }
}