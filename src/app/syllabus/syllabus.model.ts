export interface AsignaturaResumen {
  idAsignatura: number;
  codigoAsignatura?: string;
  nombreAsignatura?: string;
  creditos?: number;
  intensidadHoraria?: number;
}

export interface Syllabus {
  idSyllabus?: number;
  descripcion: string;
  asignatura: AsignaturaResumen | null;
  fechaCreacion?: string;
}
