import { Component, OnInit } from '@angular/core';
import { FormularioComponent } from "../../componentes/formulario/formulario.component";
import { LivroService } from '../../services/livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../../componentes/livro/livro';

@Component({
  selector: 'app-editar-livro',
  imports: [FormularioComponent],
  templateUrl: './editar-livro.component.html',
  styleUrl: './editar-livro.component.css'
})
export class EditarLivroComponent implements OnInit {
  livro!: Livro;

  constructor(
    private livroService: LivroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get("id");
    if (id) {
      this.livroService.obterLivroPorId(id).subscribe((livro) => {
        this.livro = livro;
      })
    }
  }

  editarLivro(livro: Livro) {
    this.livroService.editarLivro(livro).subscribe((livro) => {
      this.livro = livro;
      this.router.navigate(['lista-livros']);
    })
  }

  

}
