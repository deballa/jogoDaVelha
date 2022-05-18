import { Component } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent {

  currentPlayer: string = '\u25EF';
  winner: string = '';
  board: string[][] = [
    ['','',''],
    ['','',''],
    ['','','']
  ];

  processPlay(line: number, col: number) {
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.currentPlayer;

      //verificar vencedor
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }

      //trocando jogador
      if (this.currentPlayer == '\u25EF') {
        this.currentPlayer = '\u2715';
      } else {
        this.currentPlayer = '\u25EF';
      }
    }
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true;
      }
    }
    for (let i = 0; i < this.board.length; i++) {
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true;
      }
    }
    //diagonais
    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player) {
      return true;
    }
    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
      return true;
    }

    return false;
  }

  reset() {
    this.currentPlayer = '\u25EF';
    this.winner = '';
    this.board = [
      ['','',''],
      ['','',''],
      ['','','']
    ];
  }

  // console.log(`jogada na linha ${line}, coluna ${col} do jogador ${this.currentPlayer}`);
}
