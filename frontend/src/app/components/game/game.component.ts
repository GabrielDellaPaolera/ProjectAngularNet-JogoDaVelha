import { Component } from '@angular/core';
import { ResultadoService } from '../../services/resultado.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {
  board: string[][] = [['', '', ''], ['', '', ''], ['', '', '']];
  currentPlayer: string = 'X';
  winner: string | null = null;
  moves: number = 0;

  playerX: string = '';
  playerO: string = '';
  gameStarted: boolean = false;

  constructor(private resultadoService: ResultadoService) {}

  startGame() {
    if (!this.playerX.trim() || !this.playerO.trim()) return;
    this.reset();
    this.gameStarted = true;
  }

  play(row: number, col: number): void {
    if (this.board[row][col] || this.winner) return;

    this.board[row][col] = this.currentPlayer;
    this.moves++;

    if (this.checkWinner()) {
      this.winner = this.currentPlayer;
      this.resultadoService.enviarResultado(this.winner).subscribe();
    } else if (this.moves === 9) {
      this.winner = 'Empate'; // empate
      this.resultadoService.enviarResultado(this.winner).subscribe();
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  }

  checkWinner(): boolean {
    const lines = [
      [this.board[0][0], this.board[0][1], this.board[0][2]],
      [this.board[1][0], this.board[1][1], this.board[1][2]],
      [this.board[2][0], this.board[2][1], this.board[2][2]],
      [this.board[0][0], this.board[1][0], this.board[2][0]],
      [this.board[0][1], this.board[1][1], this.board[2][1]],
      [this.board[0][2], this.board[1][2], this.board[2][2]],
      [this.board[0][0], this.board[1][1], this.board[2][2]],
      [this.board[0][2], this.board[1][1], this.board[2][0]]
    ];

    return lines.some(line => line.every(cell => cell === this.currentPlayer));
  }

  reset(): void {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.currentPlayer = 'X';
    this.winner = null;
    this.moves = 0;
  }

  get currentPlayerName(): string {
    return this.currentPlayer === 'X' ? this.playerX : this.playerO;
  }

  get winnerName(): string {
    if (this.winner === 'X') return this.playerX;
    if (this.winner === 'O') return this.playerO;
    return '';
  }
}
