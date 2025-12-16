import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensagemErroService {

  constructor(private snackbar: MatSnackBar) { }

  mostrarMensagemDeErro(mensagem: string) {
    const config: MatSnackBarConfig ={
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    }
    this.snackbar.open(mensagem, 'Fechar', config);
  }
}
