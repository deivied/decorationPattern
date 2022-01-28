export interface ISubject{
    prix() : number;
    showDetails() : string;
}


export class Sejour implements ISubject {

    constructor() {
    }
    prix(): number {
        return 200;
    }
    showDetails(){
        return `Prix total : ${this.prix()} (tarif normaml)`;
    }
    
}

export class SejourAvecOption implements ISubject{
    public sejourEncapsuler: ISubject;
    tarif : number;
    constructor(sejour: ISubject, tarif : number){
        this.sejourEncapsuler = sejour
        this.tarif = tarif;
    }

    prix(): number {
        return this.sejourEncapsuler.prix() + this.tarif;
    }

    showDetails(){
        return `${this.sejourEncapsuler.showDetails()} + ${this.tarif}`;
    }
}

export class sejourAvecResto extends SejourAvecOption{
}

export class sejourAvecPiscine extends SejourAvecOption{
}

export class sejourAvecSport extends SejourAvecOption{
}


const sejourSimple = new Sejour();
const sejourAvecOptions1 = new sejourAvecSport(sejourSimple, 300)
const sejourAvecOptions = new sejourAvecResto(sejourAvecOptions1, 220);

console.log("Contenu de l'offre :", sejourAvecOptions.prix(), sejourAvecOptions.showDetails());



