import Categorie from "./Categorie";
import User from "./User";

export default class Enchere{
    private idEnchere: number | undefined;
    private nomProduit: string | undefined;
    private dateDebut: string | undefined;
    private prixMin: string | undefined;
    private description?: string | undefined;
    private categorie?: Categorie | undefined;
    private client?: User | undefined;

    public getIdEnchere(): number | undefined {
        return this.idEnchere;
    }
    public setIdEnchere(value: number | undefined) {
        this.idEnchere = value;
    }
    
    public getNomProduit(): string | undefined {
        return this.nomProduit;
    }
    public setNomProduit(value: string | undefined) {
        this.nomProduit = value;
    }
    public getDateDebut(): string | undefined {
        return this.dateDebut;
    }
    public setDateDebut(value: string | undefined) {
        this.dateDebut = value;
    }
    public getPrixMin(): string | undefined {
        return this.prixMin;
    }
    public setPrixMin(value: string | undefined) {
        this.prixMin = value;
    }
    public getDescription(): string | undefined {
        return this.description;
    }
    public setDescription(value: string | undefined) {
        this.description = value;
    }
    public getCategorie(): Categorie | undefined {
        return this.categorie;
    }
    public setCategorie(value: Categorie | undefined) {
        this.categorie = value;
    }

    public getClient(): User | undefined {
        return this.client;
    }
    public setClient(value: User | undefined) {
        this.client = value;
    }
}