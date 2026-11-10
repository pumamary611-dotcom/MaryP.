import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Curso } from '../models/curso.models';

@Component({
  selector: 'app-curso-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './curso-card.html',
  styleUrls: ['./curso-card.css']
})
export class CursoCard {
  @Input() curso!: Curso;
  @Output() inscribirse = new EventEmitter<Curso>();

  alInscribir() {
    this.inscribirse.emit(this.curso);
  }
}