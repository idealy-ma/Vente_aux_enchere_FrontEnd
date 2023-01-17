export default class User{
    private id : number | undefined;
    private nom : string | undefined;
    private prenom : string | undefined;
    private userToken: string | undefined;
    
    public getId() {
        return this.id;
    }

    public setId(value : number) {
        this.id = value;
    }

    public getNom(): string | undefined {
        return this.nom;
    }

    public setNom(value: string | undefined) {
        this.nom = value;
    }

    public getPrenom(): string | undefined {
        return this.prenom;
    }

    public setPrenom(value: string | undefined) {
        this.prenom = value;
    }

    public getUserToken(): string | undefined {
        return this.userToken;
    }

    public setUserToken(value: string | undefined) {
        this.userToken = value;
    }

    public verifyLogin(mdp : string | undefined){
        fetch("http://localhos:8080/clients",{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
    }
}