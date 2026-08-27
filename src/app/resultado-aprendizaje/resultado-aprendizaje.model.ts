export interface AsignaturaResumen {
  idAsignatura: number;
  codigoAsignatura?: string;
  nombreAsignatura?: string;
}

export interface ResultadoAprendizaje {
  idResultado?: number;
  descripcion: string;
  asignatura: AsignaturaResumen | null;
}