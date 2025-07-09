import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Resultado {
  id: number;
  vencedor: string;
  dataHora: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {
  private apiUrl = 'http://localhost:5139/api/resultados';

  constructor(private http: HttpClient) {}

  enviarResultado(vencedor: string) {
    return this.http.post(this.apiUrl, { vencedor });
  }

  listarUltimos() {
    return this.http.get<any[]>(`${this.apiUrl}/ultimos`);
  }
}
