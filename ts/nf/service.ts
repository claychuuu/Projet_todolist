import { Injectable } from "@angular/core";
import * as NF from "./nf";

// Load from localStorage
type SerialisationChoses = Array<{texte: string, addType: string, choice: string, path: string, url:string, color: string,
    fait: boolean, date: string}>;
let nf = new NF.ListeChoses();
let cbSaveData = () => {
    let serialization : SerialisationChoses = [];
    nf.choses.forEach( c => serialization.push( {texte: c.texte, addType: c.addType, choice: c.choice, path: c.path, url: c.url,
    color: c.color, fait: c.fait, date: c.date.toString()} ));
    localStorage.setItem("todoListMiage", JSON.stringify(serialization) );
};

nf.on("update", (nf: NF.ListeChoses, eventName : string, eventValue : NF.EventListeChoses) => {
    if(eventValue.append) {
        let chose = eventValue.append;
        chose.on("update", cbSaveData);
    }
    if(eventValue.remove) {
        let chose = eventValue.remove;
        chose.off("update", cbSaveData);
    }
    cbSaveData();
} );

// Ajouter les choses déjà présentes dans le localStorage
let choses : SerialisationChoses = <SerialisationChoses>JSON.parse( localStorage.getItem("todoListMiage") || "[]" );
choses.forEach( c => {
    nf.Ajouter( c.texte, c.addType, c.choice, c.path, c.url, c.color, c.fait, new Date(c.date));
});


// Definit service
@Injectable()
export class ListeChosesService {
    static getData	() : Promise<NF.ListeChoses> {
        return Promise.resolve( nf );
    }
}
