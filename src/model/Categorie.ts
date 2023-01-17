export default class Categorie{
    private idCategorie: number | undefined;
    private nomCategorie: string | undefined;
    
    public getIdCategorie(): number | undefined {
        return this.idCategorie;
    }

    public setIdCategorie(value: number | undefined) {
        this.idCategorie = value;
    }

    public getNomCategorie(): string | undefined {
        return this.nomCategorie;
    }
    public setNomCategorie(value: string | undefined) {
        this.nomCategorie = value;
    }
    
}