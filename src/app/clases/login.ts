export class Login {
    constructor(
        public usuario: string,
        public password: string,
        public isLogged?: boolean,
    ) { }
}
