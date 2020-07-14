export class Mensaje {
    constructor(
        public idMensaje?: number,
        public fecha?: string,
        public nombre?: string,
        public email?: string,
        public telefono?: string,
        public mensaje?: string,
        public estado?: string,
    ) { }
}
