export interface Livro {
    titulo: string;
    autoria: string;
    genero: GeneroLiterario;
    favorito: boolean;
    imagem: string;
}

export interface GeneroLiterario {
    id: string;
    value: string;
    livros: Livro[];
}