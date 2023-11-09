import Tema from './Tema';
import Usuario from './Usuario';

export default interface Postagem {
  id: number;
  titulo: string;
  texto: string;
  data: string;
  idTema: Tema | null;
  idUsuario: Usuario | null;
}