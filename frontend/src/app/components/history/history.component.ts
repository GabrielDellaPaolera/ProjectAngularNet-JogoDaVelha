import { Component, OnInit } from '@angular/core';
import { Resultado, ResultadoService } from '../../services/resultado.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  ultimosVencedores: Resultado[] = [];

  constructor(private resultadoService: ResultadoService) {}

  ngOnInit(): void {
    this.resultadoService.listarUltimos().subscribe(resultados => {
      this.ultimosVencedores = resultados;
    });
  }
}
