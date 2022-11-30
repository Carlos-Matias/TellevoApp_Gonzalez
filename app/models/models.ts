export interface UserI {
  uid: string;
  correo: string;
  password: string;
  modelo: string;
  patente: string;
  carrera: string;
  ubicacion: {
    lat: number;
    lng: number;
  };
  perfil: 'conductor' | 'cliente';
}


