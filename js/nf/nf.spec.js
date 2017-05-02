System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            /*describe("Tests d'initialisation d'une liste", () => {
                let Liste : ListeChoses = new ListeChoses();
                it(`Liste doit être vide`, () => expect(Liste.choses.length === 0).toBe(true));
            
            });
            
            
            describe("Tests ajout d'une chose", () => {
                let Liste : ListeChoses = new ListeChoses();
                let eventListe : EventListeChoses, txt = "un truc à faire";
                let type : string;
                let path : string;
                Liste.on("update", (NF: ListeChoses, eventName: string, event: EventListeChoses) => {
                    eventListe = event;
                } );
            
                Liste.Ajouter( txt, type, path );
                it("Liste contient un élément", () => expect(Liste.choses.length).toEqual(1));
                it(`Le texte du premier élément de Liste vaut "${txt}"`, () => expect(Liste.choses[0].texte === txt).toBe(true));
                it(`La liste a bien prévenue de l'ajout`, () => expect(eventListe && eventListe.append === Liste.choses[0]).toBe(true));
            });
            
            describe("Tests retrait de la seconde chose dans une liste de trois choses", () => {
                let Liste : ListeChoses = new ListeChoses();
                let eventListe : EventListeChoses, txt = "un truc à faire";
                Liste.on("update", (NF: ListeChoses, eventName: string, event: EventListeChoses) => {
                    eventListe = event;
                } );
            
                //Liste.Ajouter( "1:"+txt ).Ajouter( "2:"+txt ).Ajouter( "3:"+txt );
                let élémentRetiré = Liste.choses[1];
                Liste.Retirer( élémentRetiré );
                it("Liste contient 2 élément", () => expect(Liste.choses.length).toEqual(2));
                it(`Le texte du premier élément de Liste vaut "1:${txt}"`, () => expect(Liste.choses[0].texte === "1:"+txt).toBe(true));
                it(`Le texte du premier élément de Liste vaut "3:${txt}"`, () => expect(Liste.choses[1].texte === "3:"+txt).toBe(true));
                it(`La liste a bien prévenue du retrait du second élément`, () => expect(eventListe && eventListe.remove).toBe(élémentRetiré));
            });*/
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5mL25mLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O1lBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQkFvQ0s7UUFDTCxDQUFDIiwiZmlsZSI6Im5mL25mLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0xpc3RlQ2hvc2VzLCBDaG9zZSwgRXZlbnRMaXN0ZUNob3Nlc30gZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL25mXCI7XHJcblxyXG4vKmRlc2NyaWJlKFwiVGVzdHMgZCdpbml0aWFsaXNhdGlvbiBkJ3VuZSBsaXN0ZVwiLCAoKSA9PiB7XHJcbiAgICBsZXQgTGlzdGUgOiBMaXN0ZUNob3NlcyA9IG5ldyBMaXN0ZUNob3NlcygpO1xyXG4gICAgaXQoYExpc3RlIGRvaXQgw6p0cmUgdmlkZWAsICgpID0+IGV4cGVjdChMaXN0ZS5jaG9zZXMubGVuZ3RoID09PSAwKS50b0JlKHRydWUpKTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbmRlc2NyaWJlKFwiVGVzdHMgYWpvdXQgZCd1bmUgY2hvc2VcIiwgKCkgPT4ge1xyXG4gICAgbGV0IExpc3RlIDogTGlzdGVDaG9zZXMgPSBuZXcgTGlzdGVDaG9zZXMoKTtcclxuICAgIGxldCBldmVudExpc3RlIDogRXZlbnRMaXN0ZUNob3NlcywgdHh0ID0gXCJ1biB0cnVjIMOgIGZhaXJlXCI7XHJcbiAgICBsZXQgdHlwZSA6IHN0cmluZztcclxuICAgIGxldCBwYXRoIDogc3RyaW5nO1xyXG4gICAgTGlzdGUub24oXCJ1cGRhdGVcIiwgKE5GOiBMaXN0ZUNob3NlcywgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudExpc3RlQ2hvc2VzKSA9PiB7XHJcbiAgICAgICAgZXZlbnRMaXN0ZSA9IGV2ZW50O1xyXG4gICAgfSApO1xyXG5cclxuICAgIExpc3RlLkFqb3V0ZXIoIHR4dCwgdHlwZSwgcGF0aCApO1xyXG4gICAgaXQoXCJMaXN0ZSBjb250aWVudCB1biDDqWzDqW1lbnRcIiwgKCkgPT4gZXhwZWN0KExpc3RlLmNob3Nlcy5sZW5ndGgpLnRvRXF1YWwoMSkpO1xyXG4gICAgaXQoYExlIHRleHRlIGR1IHByZW1pZXIgw6lsw6ltZW50IGRlIExpc3RlIHZhdXQgXCIke3R4dH1cImAsICgpID0+IGV4cGVjdChMaXN0ZS5jaG9zZXNbMF0udGV4dGUgPT09IHR4dCkudG9CZSh0cnVlKSk7XHJcbiAgICBpdChgTGEgbGlzdGUgYSBiaWVuIHByw6l2ZW51ZSBkZSBsJ2Fqb3V0YCwgKCkgPT4gZXhwZWN0KGV2ZW50TGlzdGUgJiYgZXZlbnRMaXN0ZS5hcHBlbmQgPT09IExpc3RlLmNob3Nlc1swXSkudG9CZSh0cnVlKSk7XHJcbn0pO1xyXG5cclxuZGVzY3JpYmUoXCJUZXN0cyByZXRyYWl0IGRlIGxhIHNlY29uZGUgY2hvc2UgZGFucyB1bmUgbGlzdGUgZGUgdHJvaXMgY2hvc2VzXCIsICgpID0+IHtcclxuICAgIGxldCBMaXN0ZSA6IExpc3RlQ2hvc2VzID0gbmV3IExpc3RlQ2hvc2VzKCk7XHJcbiAgICBsZXQgZXZlbnRMaXN0ZSA6IEV2ZW50TGlzdGVDaG9zZXMsIHR4dCA9IFwidW4gdHJ1YyDDoCBmYWlyZVwiO1xyXG4gICAgTGlzdGUub24oXCJ1cGRhdGVcIiwgKE5GOiBMaXN0ZUNob3NlcywgZXZlbnROYW1lOiBzdHJpbmcsIGV2ZW50OiBFdmVudExpc3RlQ2hvc2VzKSA9PiB7XHJcbiAgICAgICAgZXZlbnRMaXN0ZSA9IGV2ZW50O1xyXG4gICAgfSApO1xyXG5cclxuICAgIC8vTGlzdGUuQWpvdXRlciggXCIxOlwiK3R4dCApLkFqb3V0ZXIoIFwiMjpcIit0eHQgKS5Bam91dGVyKCBcIjM6XCIrdHh0ICk7XHJcbiAgICBsZXQgw6lsw6ltZW50UmV0aXLDqSA9IExpc3RlLmNob3Nlc1sxXTtcclxuICAgIExpc3RlLlJldGlyZXIoIMOpbMOpbWVudFJldGlyw6kgKTtcclxuICAgIGl0KFwiTGlzdGUgY29udGllbnQgMiDDqWzDqW1lbnRcIiwgKCkgPT4gZXhwZWN0KExpc3RlLmNob3Nlcy5sZW5ndGgpLnRvRXF1YWwoMikpO1xyXG4gICAgaXQoYExlIHRleHRlIGR1IHByZW1pZXIgw6lsw6ltZW50IGRlIExpc3RlIHZhdXQgXCIxOiR7dHh0fVwiYCwgKCkgPT4gZXhwZWN0KExpc3RlLmNob3Nlc1swXS50ZXh0ZSA9PT0gXCIxOlwiK3R4dCkudG9CZSh0cnVlKSk7XHJcbiAgICBpdChgTGUgdGV4dGUgZHUgcHJlbWllciDDqWzDqW1lbnQgZGUgTGlzdGUgdmF1dCBcIjM6JHt0eHR9XCJgLCAoKSA9PiBleHBlY3QoTGlzdGUuY2hvc2VzWzFdLnRleHRlID09PSBcIjM6XCIrdHh0KS50b0JlKHRydWUpKTtcclxuICAgIGl0KGBMYSBsaXN0ZSBhIGJpZW4gcHLDqXZlbnVlIGR1IHJldHJhaXQgZHUgc2Vjb25kIMOpbMOpbWVudGAsICgpID0+IGV4cGVjdChldmVudExpc3RlICYmIGV2ZW50TGlzdGUucmVtb3ZlKS50b0JlKMOpbMOpbWVudFJldGlyw6kpKTtcclxufSk7Ki9cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
