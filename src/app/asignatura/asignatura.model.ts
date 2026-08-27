export interface ProgramaResumen {
  idPrograma: number;
  codigoPrograma?: string;
  nombrePrograma?: string;
}

export interface Asignatura {
  idAsignatura?: number;
  codigoAsignatura: string;
  nombreAsignatura: string;
  creditos: number;
  intensidadHoraria: number;
  programa: ProgramaResumen | null;
}