export class Ssd{
    url?: string;
    titulo?: string;
    descCurta?: string;
    descCompleta?: string;
    valor: string;

    constructor(titulo, descCompleta, descCurta, valor, url){
        this.url = url;
        this.titulo = titulo;
        this.descCompleta = descCompleta;
        this.descCurta = descCurta;
        this.valor = valor;
    }
}