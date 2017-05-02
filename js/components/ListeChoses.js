System.register(["@angular/core", "@NoyauFonctionnel/service"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, service_1, htmlTemplate, ListeChoses;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
	<section class="todoapp" *ngIf="nf">
		<header class="header">
			<h1>{{titre}}</h1>
			<form (submit)="nf.Ajouter(newTodo.value, getType(), getChoice(), newPath.value, getUrl(), getColor()); 
            newTodo.value =''; reset();">
                <div class="add">
                    <label (click)="setType('img')"><input id="img" type="radio" name="type" value="img" />
                    <a>Ajouter une image&nbsp;
                        <img src="../../img/img.png" alt="img" height="10" width="10">
                    </a></label>&nbsp;&nbsp;
                    <label (click)="setType('sound')"><input id="sound" type="radio" name="type" value="sound" />
                    <a>Ajouter un son&nbsp;
                        <img src="../../img/sound.png" alt="son" height="10" width="10">
                    </a></label>&nbsp;&nbsp;
                    <label (click)="setType('video')"><input id="video" type="radio" name="type" value="video" />
                    <a>Ajouter une video&nbsp;
                        <img src="../../img/video.png" alt="video" height="10" width="10">
                    </a></label>&nbsp;&nbsp;
                    <label (click)="color()"><a>Ajouter une couleur&nbsp;
                        <img src="../../img/color.png" alt="color" height="10" width="10">
                    </a></label>&nbsp;&nbsp;
                    <a (click)="reset()">
                        <img src="../../img/reset.png" id="reset" alt="reset" height="10" width="10">
                    </a>
                </div>
                <div class="choice" id="choice" hidden>
                    <label (click)="setChoice('url')"><input type="radio" name="choice" value="url" />
                    <a>Entrer une URL&nbsp;</a></label>&nbsp;&nbsp;
                    <label (click)="setChoice('path')"><input type="radio" name="choice" value="path" />
                    <a>Choisir un fichier&nbsp;</a></label>&nbsp;&nbsp;
                </div>
                &nbsp;&nbsp;
                <div class="multi" id="path" hidden>
                    <input type="file" [accept]="type()" #newPath />
                </div>
                <div class="multi" id="url" hidden>
                    <a (click)="setUrl()">URL</a>
                </div>
                &nbsp;&nbsp;
                <div class="color" id="color" hidden>
                    <label><input (click)="setColor('grey')" type="radio" name="color"/><a style="color: grey;">
                    Gris&nbsp;</a></label>&nbsp;&nbsp;
                    <label><input (click)="setColor('purple')" type="radio" name="color"/><a style="color: purple;">
                    Violet&nbsp;</a></label>&nbsp;&nbsp;
                    <label><input (click)="setColor('blue')" type="radio" name="color"/><a style="color: blue;">
                    Bleu&nbsp;</a></label>&nbsp;&nbsp;
                    <label><input (click)="setColor('green')" type="radio" name="color"/><a style="color: green;">
                    Vert&nbsp;</a></label>&nbsp;&nbsp;
                    <label><input (click)="setColor('yellow')" type="radio" name="color"/><a style="color: yellow;">
                    Jaune&nbsp;</a></label>&nbsp;&nbsp;
                    <label><input (click)="setColor('orange')" type="radio" name="color"/><a style="color: orange;">
                    Orange&nbsp;</a></label>&nbsp;&nbsp;
                    <label><input (click)="setColor('pink')" type="radio" name="color"/><a style="color: pink;">
                    Rose&nbsp;</a></label>&nbsp;&nbsp;
                    <label><input (click)="setColor('red')" type="radio" name="color"/><a style="color: red;">
                    Rouge&nbsp;</a></label>&nbsp;&nbsp;
                    <label><input (click)="setColor('black')" type="radio" name="color"/><a style="color: black;">
                    Aucune&nbsp;</a></label>&nbsp;&nbsp;
                </div>
				<input class="new-todo" placeholder="Que faire?" #newTodo autofocus />
			</form>
		</header>
		<section class="main">
			<input  class="toggle-all" 
			        type="checkbox"
			        [ngModel]="ToutEstFait()"
			        (ngModelChange)="ToutCocherDecocher()"/>
			<label for="toggle-all">Mark all as complete</label>
			<ul class="todo-list">
			    <li *ngFor="let chose of getChoses()" [class.completed] = "chose.fait" [class.editing]="compo.editing">
			        <item-chose [nf]="chose" #compo></item-chose>
                </li>
            </ul>
		</section>
        <footer class="footer">
            <span class="todo-count"><strong></strong> {{getRestante()}} restante(s)</span>
            <ul class="filters">
                <li>
                    <a class="filterAll" (click)="currentFilter = filterAll" [class.selected] ="currentFilter === filterAll">Tous</a>
                </li>
                <li>
                    <a class="filterActives" (click)="currentFilter = filterActives" 
                    [class.selected] ="currentFilter === filterActives">Actifs</a>
                </li>
                <li>
                    <a class="filterCompleted" (click)="currentFilter = filterCompleted" 
                    [class.selected] ="currentFilter === filterCompleted">Complétés</a>
                </li>
            </ul>
            <button class="clear-completed" (click)="DeleteCompleted()">Supprimer cochées</button>
        </footer>
	</section>
	<hr/>
	<!--section>
	    <section *ngFor="let chose of getChoses()">
	        {{chose.fait}} : {{chose.texte}}
        </section>
	</section-->
    <div class="test">
        <h4>Exemples de vues : </h4>
        <p>
            <label>Image : </label>
            <a class="fancybox-media" data-fancybox href="../../test/arthas.jpg" title="Arthas, WOW">
                <img height="20" width="20" src="../../img/img.png"/>
            </a>
        </p>
        <p>
            <label>Son : </label>
            <a class="fancybox-media" data-fancybox href="../../test/piou.mp3" title="Réveil avec les oiseaux">
                <img height="20" width="20" src="../../img/sound.png"/>
            </a>
        </p>
        <p>
            <label>Vidéo : </label>
            <a class="fancybox-media" data-fancybox href="https://www.youtube.com/watch?v=8guxsR0k_AU" 
            title="Musique, Les Gardiens de la galaxie 2">
                <img height="20" width="20" src="../../img/video.png"/>
            </a>
        </p>
    </div>
`;
            ListeChoses = class ListeChoses {
                constructor(serviceListe) {
                    this.serviceListe = serviceListe;
                    this.choses = [];
                    this.filterAll = () => true;
                    this.filterActives = (c) => !c.fait;
                    this.filterCompleted = (c) => c.fait;
                    this.currentFilter = this.filterAll;
                    this.currentType = "";
                }
                ;
                ngOnInit() {
                    service_1.ListeChosesService.getData().then((nf) => {
                        this.nf = nf;
                        this.choses = nf.choses;
                    });
                }
                getChoses() {
                    return this.choses.filter(this.currentFilter);
                }
                ToutEstFait() {
                    return this.nf.choses.reduce((acc, c) => acc && c.fait, true);
                }
                ToutCocherDecocher() {
                    let cocher = !this.ToutEstFait();
                    this.nf.choses.forEach(c => c.Fait(cocher));
                }
                DeleteCompleted() {
                    this.choses.filter(this.filterCompleted).forEach(c => c.dispose());
                }
                getRestante() {
                    return this.choses.filter(this.filterActives).length;
                }
                type() {
                    if (this.currentType === "img")
                        return "image/*";
                    if (this.currentType === "sound")
                        return "audio/*";
                    if (this.currentType === "video")
                        return "video/*";
                }
                setType(s) {
                    this.currentType = s;
                    document.getElementById("choice").hidden = false;
                }
                getType() {
                    return this.currentType;
                }
                color() {
                    document.getElementById("color").hidden = false;
                }
                setColor(s) {
                    this.currentColor = s;
                }
                getColor() {
                    return this.currentColor;
                }
                setChoice(s) {
                    this.currentChoice = s;
                    if (s === "path") {
                        document.getElementById("path").hidden = false;
                        document.getElementById("url").hidden = true;
                    }
                    if (s === "url") {
                        document.getElementById("url").hidden = false;
                        document.getElementById("path").hidden = true;
                    }
                }
                getChoice() {
                    return this.currentChoice;
                }
                setUrl() {
                    this.currentPath = prompt("Entrer une URL", "");
                }
                getUrl() {
                    return this.currentPath;
                }
                reset() {
                    document.getElementById("choice").hidden = true;
                    document.getElementById("url").hidden = true;
                    document.getElementById("path").hidden = true;
                    document.getElementById("color").hidden = true;
                    this.currentType = undefined;
                    this.currentChoice = undefined;
                    this.currentPath = undefined;
                    this.currentColor = undefined;
                }
            };
            __decorate([
                core_1.Input(),
                __metadata("design:type", String)
            ], ListeChoses.prototype, "titre", void 0);
            ListeChoses = __decorate([
                core_1.Component({
                    selector: "liste-choses",
                    template: htmlTemplate
                }),
                __metadata("design:paramtypes", [service_1.ListeChosesService])
            ], ListeChoses);
            exports_1("ListeChoses", ListeChoses);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdGVDaG9zZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFJTSxZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F5SHBCLENBQUM7WUFPVyxXQUFXLEdBQXhCO2dCQWNDLFlBQXNCLFlBQWdDO29CQUFoQyxpQkFBWSxHQUFaLFlBQVksQ0FBb0I7b0JBTjNDLFdBQU0sR0FBa0IsRUFBRSxDQUFDO29CQUVuQyxjQUFTLEdBQW1CLE1BQU0sSUFBSSxDQUFDO29CQUN2QyxrQkFBYSxHQUFlLENBQUMsQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDMUMsb0JBQWUsR0FBYSxDQUFDLENBQUMsS0FBSSxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUdyQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxXQUFXLEdBQUssRUFBRSxDQUFDO2dCQUMvQixDQUFDO2dCQUFBLENBQUM7Z0JBRUMsUUFBUTtvQkFDSiw0QkFBa0IsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUUsQ0FBQyxFQUFFO3dCQUNsQyxJQUFJLENBQUMsRUFBRSxHQUFPLEVBQUUsQ0FBQzt3QkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQztnQkFDUCxDQUFDO2dCQUNELFNBQVM7b0JBQ0wsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDbEQsQ0FBQztnQkFFRCxXQUFXO29CQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxLQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM5RCxDQUFDO2dCQUVELGtCQUFrQjtvQkFDZCxJQUFJLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztvQkFDakMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLENBQUM7Z0JBRUQsZUFBZTtvQkFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztnQkFDckUsQ0FBQztnQkFFRCxXQUFXO29CQUNQLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUN6RCxDQUFDO2dCQUVELElBQUk7b0JBQ0EsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxLQUFLLENBQUM7d0JBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDcEQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLENBQUM7d0JBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztvQkFDcEQsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLENBQUM7d0JBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQztnQkFDeEQsQ0FBQztnQkFFRCxPQUFPLENBQUMsQ0FBVTtvQkFDZCxJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztvQkFDckIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUNyRCxDQUFDO2dCQUVELE9BQU87b0JBQ0gsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsS0FBSztvQkFDRCxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsUUFBUSxDQUFDLENBQVU7b0JBQ2YsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsUUFBUTtvQkFDSixNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztnQkFDN0IsQ0FBQztnQkFFRCxTQUFTLENBQUMsQ0FBVTtvQkFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7b0JBQ3ZCLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNkLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQzt3QkFDL0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUksSUFBSSxDQUFDO29CQUNsRCxDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO3dCQUNiLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFJLEtBQUssQ0FBQzt3QkFDL0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUNsRCxDQUFDO2dCQUNMLENBQUM7Z0JBRUQsU0FBUztvQkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDOUIsQ0FBQztnQkFFRCxNQUFNO29CQUNGLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUNwRCxDQUFDO2dCQUVELE1BQU07b0JBQ0YsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsS0FBSztvQkFDRCxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ2hELFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFNLElBQUksQ0FBQztvQkFDaEQsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEdBQUssSUFBSSxDQUFDO29CQUNoRCxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBSSxJQUFJLENBQUM7b0JBQ2hELElBQUksQ0FBQyxXQUFXLEdBQUssU0FBUyxDQUFDO29CQUMvQixJQUFJLENBQUMsYUFBYSxHQUFHLFNBQVMsQ0FBQztvQkFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBSyxTQUFTLENBQUM7b0JBQy9CLElBQUksQ0FBQyxZQUFZLEdBQUksU0FBUyxDQUFDO2dCQUNuQyxDQUFDO2FBQ0osQ0FBQTtZQTFHWTtnQkFBUixZQUFLLEVBQUU7O3NEQUFvQjtZQURuQixXQUFXO2dCQUp2QixnQkFBUyxDQUFDO29CQUNULFFBQVEsRUFBSSxjQUFjO29CQUMxQixRQUFRLEVBQUksWUFBWTtpQkFDekIsQ0FBQztpREFlbUMsNEJBQWtCO2VBZDFDLFdBQVcsQ0EyR3ZCOztRQUNELENBQUMiLCJmaWxlIjoiY29tcG9uZW50cy9MaXN0ZUNob3Nlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0fSAgICAgICAgICAgICAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q2hvc2UsIExpc3RlQ2hvc2VzIGFzIExpc3RlQ2hvc2VzTkZ9IFx0ZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL25mXCI7XHJcbmltcG9ydCB7TGlzdGVDaG9zZXNTZXJ2aWNlfSAgICAgICAgICAgICAgICAgICAgIGZyb20gXCJATm95YXVGb25jdGlvbm5lbC9zZXJ2aWNlXCI7XHJcblxyXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXHJcblx0PHNlY3Rpb24gY2xhc3M9XCJ0b2RvYXBwXCIgKm5nSWY9XCJuZlwiPlxyXG5cdFx0PGhlYWRlciBjbGFzcz1cImhlYWRlclwiPlxyXG5cdFx0XHQ8aDE+e3t0aXRyZX19PC9oMT5cclxuXHRcdFx0PGZvcm0gKHN1Ym1pdCk9XCJuZi5Bam91dGVyKG5ld1RvZG8udmFsdWUsIGdldFR5cGUoKSwgZ2V0Q2hvaWNlKCksIG5ld1BhdGgudmFsdWUsIGdldFVybCgpLCBnZXRDb2xvcigpKTsgXHJcbiAgICAgICAgICAgIG5ld1RvZG8udmFsdWUgPScnOyByZXNldCgpO1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFkZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCAoY2xpY2spPVwic2V0VHlwZSgnaW1nJylcIj48aW5wdXQgaWQ9XCJpbWdcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwiaW1nXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Bam91dGVyIHVuZSBpbWFnZSZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltZy9pbWcucG5nXCIgYWx0PVwiaW1nXCIgaGVpZ2h0PVwiMTBcIiB3aWR0aD1cIjEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPjwvbGFiZWw+Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIChjbGljayk9XCJzZXRUeXBlKCdzb3VuZCcpXCI+PGlucHV0IGlkPVwic291bmRcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwidHlwZVwiIHZhbHVlPVwic291bmRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPkFqb3V0ZXIgdW4gc29uJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vaW1nL3NvdW5kLnBuZ1wiIGFsdD1cInNvblwiIGhlaWdodD1cIjEwXCIgd2lkdGg9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT48L2xhYmVsPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCAoY2xpY2spPVwic2V0VHlwZSgndmlkZW8nKVwiPjxpbnB1dCBpZD1cInZpZGVvXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInR5cGVcIiB2YWx1ZT1cInZpZGVvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YT5Bam91dGVyIHVuZSB2aWRlbyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltZy92aWRlby5wbmdcIiBhbHQ9XCJ2aWRlb1wiIGhlaWdodD1cIjEwXCIgd2lkdGg9XCIxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT48L2xhYmVsPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCAoY2xpY2spPVwiY29sb3IoKVwiPjxhPkFqb3V0ZXIgdW5lIGNvdWxldXImbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9pbWcvY29sb3IucG5nXCIgYWx0PVwiY29sb3JcIiBoZWlnaHQ9XCIxMFwiIHdpZHRoPVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+PC9sYWJlbD4mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwicmVzZXQoKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2ltZy9yZXNldC5wbmdcIiBpZD1cInJlc2V0XCIgYWx0PVwicmVzZXRcIiBoZWlnaHQ9XCIxMFwiIHdpZHRoPVwiMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaG9pY2VcIiBpZD1cImNob2ljZVwiIGhpZGRlbj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKGNsaWNrKT1cInNldENob2ljZSgndXJsJylcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNob2ljZVwiIHZhbHVlPVwidXJsXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8YT5FbnRyZXIgdW5lIFVSTCZuYnNwOzwvYT48L2xhYmVsPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCAoY2xpY2spPVwic2V0Q2hvaWNlKCdwYXRoJylcIj48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNob2ljZVwiIHZhbHVlPVwicGF0aFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+Q2hvaXNpciB1biBmaWNoaWVyJm5ic3A7PC9hPjwvbGFiZWw+Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm11bHRpXCIgaWQ9XCJwYXRoXCIgaGlkZGVuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIFthY2NlcHRdPVwidHlwZSgpXCIgI25ld1BhdGggLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm11bHRpXCIgaWQ9XCJ1cmxcIiBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgKGNsaWNrKT1cInNldFVybCgpXCI+VVJMPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xvclwiIGlkPVwiY29sb3JcIiBoaWRkZW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCAoY2xpY2spPVwic2V0Q29sb3IoJ2dyZXknKVwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb2xvclwiLz48YSBzdHlsZT1cImNvbG9yOiBncmV5O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEdyaXMmbmJzcDs8L2E+PC9sYWJlbD4mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IChjbGljayk9XCJzZXRDb2xvcigncHVycGxlJylcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29sb3JcIi8+PGEgc3R5bGU9XCJjb2xvcjogcHVycGxlO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFZpb2xldCZuYnNwOzwvYT48L2xhYmVsPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgKGNsaWNrKT1cInNldENvbG9yKCdibHVlJylcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29sb3JcIi8+PGEgc3R5bGU9XCJjb2xvcjogYmx1ZTtcIj5cclxuICAgICAgICAgICAgICAgICAgICBCbGV1Jm5ic3A7PC9hPjwvbGFiZWw+Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCAoY2xpY2spPVwic2V0Q29sb3IoJ2dyZWVuJylcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29sb3JcIi8+PGEgc3R5bGU9XCJjb2xvcjogZ3JlZW47XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgVmVydCZuYnNwOzwvYT48L2xhYmVsPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgKGNsaWNrKT1cInNldENvbG9yKCd5ZWxsb3cnKVwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJjb2xvclwiLz48YSBzdHlsZT1cImNvbG9yOiB5ZWxsb3c7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSmF1bmUmbmJzcDs8L2E+PC9sYWJlbD4mbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+PGlucHV0IChjbGljayk9XCJzZXRDb2xvcignb3JhbmdlJylcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29sb3JcIi8+PGEgc3R5bGU9XCJjb2xvcjogb3JhbmdlO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIE9yYW5nZSZuYnNwOzwvYT48L2xhYmVsPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgKGNsaWNrKT1cInNldENvbG9yKCdwaW5rJylcIiB0eXBlPVwicmFkaW9cIiBuYW1lPVwiY29sb3JcIi8+PGEgc3R5bGU9XCJjb2xvcjogcGluaztcIj5cclxuICAgICAgICAgICAgICAgICAgICBSb3NlJm5ic3A7PC9hPjwvbGFiZWw+Jm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPjxpbnB1dCAoY2xpY2spPVwic2V0Q29sb3IoJ3JlZCcpXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yXCIvPjxhIHN0eWxlPVwiY29sb3I6IHJlZDtcIj5cclxuICAgICAgICAgICAgICAgICAgICBSb3VnZSZuYnNwOzwvYT48L2xhYmVsPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD48aW5wdXQgKGNsaWNrKT1cInNldENvbG9yKCdibGFjaycpXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cImNvbG9yXCIvPjxhIHN0eWxlPVwiY29sb3I6IGJsYWNrO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIEF1Y3VuZSZuYnNwOzwvYT48L2xhYmVsPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0PGlucHV0IGNsYXNzPVwibmV3LXRvZG9cIiBwbGFjZWhvbGRlcj1cIlF1ZSBmYWlyZT9cIiAjbmV3VG9kbyBhdXRvZm9jdXMgLz5cclxuXHRcdFx0PC9mb3JtPlxyXG5cdFx0PC9oZWFkZXI+XHJcblx0XHQ8c2VjdGlvbiBjbGFzcz1cIm1haW5cIj5cclxuXHRcdFx0PGlucHV0ICBjbGFzcz1cInRvZ2dsZS1hbGxcIiBcclxuXHRcdFx0ICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHQgICAgICAgIFtuZ01vZGVsXT1cIlRvdXRFc3RGYWl0KClcIlxyXG5cdFx0XHQgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIlRvdXRDb2NoZXJEZWNvY2hlcigpXCIvPlxyXG5cdFx0XHQ8bGFiZWwgZm9yPVwidG9nZ2xlLWFsbFwiPk1hcmsgYWxsIGFzIGNvbXBsZXRlPC9sYWJlbD5cclxuXHRcdFx0PHVsIGNsYXNzPVwidG9kby1saXN0XCI+XHJcblx0XHRcdCAgICA8bGkgKm5nRm9yPVwibGV0IGNob3NlIG9mIGdldENob3NlcygpXCIgW2NsYXNzLmNvbXBsZXRlZF0gPSBcImNob3NlLmZhaXRcIiBbY2xhc3MuZWRpdGluZ109XCJjb21wby5lZGl0aW5nXCI+XHJcblx0XHRcdCAgICAgICAgPGl0ZW0tY2hvc2UgW25mXT1cImNob3NlXCIgI2NvbXBvPjwvaXRlbS1jaG9zZT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcblx0XHQ8L3NlY3Rpb24+XHJcbiAgICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvZG8tY291bnRcIj48c3Ryb25nPjwvc3Ryb25nPiB7e2dldFJlc3RhbnRlKCl9fSByZXN0YW50ZShzKTwvc3Bhbj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZmlsdGVyc1wiPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmlsdGVyQWxsXCIgKGNsaWNrKT1cImN1cnJlbnRGaWx0ZXIgPSBmaWx0ZXJBbGxcIiBbY2xhc3Muc2VsZWN0ZWRdID1cImN1cnJlbnRGaWx0ZXIgPT09IGZpbHRlckFsbFwiPlRvdXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZmlsdGVyQWN0aXZlc1wiIChjbGljayk9XCJjdXJyZW50RmlsdGVyID0gZmlsdGVyQWN0aXZlc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF0gPVwiY3VycmVudEZpbHRlciA9PT0gZmlsdGVyQWN0aXZlc1wiPkFjdGlmczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJmaWx0ZXJDb21wbGV0ZWRcIiAoY2xpY2spPVwiY3VycmVudEZpbHRlciA9IGZpbHRlckNvbXBsZXRlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtjbGFzcy5zZWxlY3RlZF0gPVwiY3VycmVudEZpbHRlciA9PT0gZmlsdGVyQ29tcGxldGVkXCI+Q29tcGzDqXTDqXM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xlYXItY29tcGxldGVkXCIgKGNsaWNrKT1cIkRlbGV0ZUNvbXBsZXRlZCgpXCI+U3VwcHJpbWVyIGNvY2jDqWVzPC9idXR0b24+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcblx0PC9zZWN0aW9uPlxyXG5cdDxoci8+XHJcblx0PCEtLXNlY3Rpb24+XHJcblx0ICAgIDxzZWN0aW9uICpuZ0Zvcj1cImxldCBjaG9zZSBvZiBnZXRDaG9zZXMoKVwiPlxyXG5cdCAgICAgICAge3tjaG9zZS5mYWl0fX0gOiB7e2Nob3NlLnRleHRlfX1cclxuICAgICAgICA8L3NlY3Rpb24+XHJcblx0PC9zZWN0aW9uLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGVzdFwiPlxyXG4gICAgICAgIDxoND5FeGVtcGxlcyBkZSB2dWVzIDogPC9oND5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgICAgPGxhYmVsPkltYWdlIDogPC9sYWJlbD5cclxuICAgICAgICAgICAgPGEgY2xhc3M9XCJmYW5jeWJveC1tZWRpYVwiIGRhdGEtZmFuY3lib3ggaHJlZj1cIi4uLy4uL3Rlc3QvYXJ0aGFzLmpwZ1wiIHRpdGxlPVwiQXJ0aGFzLCBXT1dcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjIwXCIgc3JjPVwiLi4vLi4vaW1nL2ltZy5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxsYWJlbD5Tb24gOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImZhbmN5Ym94LW1lZGlhXCIgZGF0YS1mYW5jeWJveCBocmVmPVwiLi4vLi4vdGVzdC9waW91Lm1wM1wiIHRpdGxlPVwiUsOpdmVpbCBhdmVjIGxlcyBvaXNlYXV4XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGhlaWdodD1cIjIwXCIgd2lkdGg9XCIyMFwiIHNyYz1cIi4uLy4uL2ltZy9zb3VuZC5wbmdcIi8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxsYWJlbD5WaWTDqW8gOiA8L2xhYmVsPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImZhbmN5Ym94LW1lZGlhXCIgZGF0YS1mYW5jeWJveCBocmVmPVwiaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj04Z3V4c1Iwa19BVVwiIFxyXG4gICAgICAgICAgICB0aXRsZT1cIk11c2lxdWUsIExlcyBHYXJkaWVucyBkZSBsYSBnYWxheGllIDJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgaGVpZ2h0PVwiMjBcIiB3aWR0aD1cIjIwXCIgc3JjPVwiLi4vLi4vaW1nL3ZpZGVvLnBuZ1wiLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgIDwvZGl2PlxyXG5gO1xyXG5cclxudHlwZSBGSUxURVIgPSAoYyA6IENob3NlKSA9PiBib29sZWFuO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3Rvclx0XHQ6IFwibGlzdGUtY2hvc2VzXCIsXHJcbiAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGVcclxufSlcclxuZXhwb3J0IGNsYXNzIExpc3RlQ2hvc2VzIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHRpdHJlXHQgICAgOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgbmYgICAgICAgICAgIDogTGlzdGVDaG9zZXNORjtcclxuICAgIHB1YmxpYyBjdXJyZW50RmlsdGVyOiBGSUxURVI7XHJcbiAgICBwdWJsaWMgY3VycmVudFR5cGUgIDogc3RyaW5nO1xyXG4gICAgcHVibGljIGN1cnJlbnRQYXRoICA6IHN0cmluZztcclxuICAgIHB1YmxpYyBjdXJyZW50Q2hvaWNlOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY3VycmVudENvbG9yIDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjaG9zZXMgICAgICA6IENob3NlW10gPSBbXTtcclxuXHJcbiAgICBmaWx0ZXJBbGwgICAgICAgIDogRklMVEVSID0gKCkgPT4gdHJ1ZTtcclxuICAgIGZpbHRlckFjdGl2ZXMgICAgOiBGSUxURVIgPSAoYyk9PiAhYy5mYWl0O1xyXG4gICAgZmlsdGVyQ29tcGxldGVkICA6IEZJTFRFUiA9IChjKT0+IGMuZmFpdDtcclxuXHJcblx0Y29uc3RydWN0b3JcdFx0KHByaXZhdGUgc2VydmljZUxpc3RlOiBMaXN0ZUNob3Nlc1NlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRGaWx0ZXIgPSB0aGlzLmZpbHRlckFsbDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRUeXBlICAgPSBcIlwiO1xyXG5cdH07XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgTGlzdGVDaG9zZXNTZXJ2aWNlLmdldERhdGEoKS50aGVuKCAobmYpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZiAgICAgPSBuZjtcclxuICAgICAgICAgICAgdGhpcy5jaG9zZXMgPSBuZi5jaG9zZXM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBnZXRDaG9zZXMoKSA6IENob3NlW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNob3Nlcy5maWx0ZXIodGhpcy5jdXJyZW50RmlsdGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBUb3V0RXN0RmFpdCgpOmJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5mLmNob3Nlcy5yZWR1Y2UoKGFjYyxjKT0+YWNjICYmIGMuZmFpdCx0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBUb3V0Q29jaGVyRGVjb2NoZXIoKSB7XHJcbiAgICAgICAgbGV0IGNvY2hlciA9ICF0aGlzLlRvdXRFc3RGYWl0KCk7XHJcbiAgICAgICAgdGhpcy5uZi5jaG9zZXMuZm9yRWFjaChjPT5jLkZhaXQoY29jaGVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgRGVsZXRlQ29tcGxldGVkKCkge1xyXG4gICAgICAgIHRoaXMuY2hvc2VzLmZpbHRlcih0aGlzLmZpbHRlckNvbXBsZXRlZCkuZm9yRWFjaChjPT5jLmRpc3Bvc2UoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmVzdGFudGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hvc2VzLmZpbHRlcih0aGlzLmZpbHRlckFjdGl2ZXMpLmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICB0eXBlKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudFR5cGUgPT09IFwiaW1nXCIpICAgICByZXR1cm4gXCJpbWFnZS8qXCI7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50VHlwZSA9PT0gXCJzb3VuZFwiKSAgIHJldHVybiBcImF1ZGlvLypcIjtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRUeXBlID09PSBcInZpZGVvXCIpICAgcmV0dXJuIFwidmlkZW8vKlwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFR5cGUocyA6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGUgPSBzO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hvaWNlXCIpLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFR5cGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFR5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgY29sb3IoKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvclwiKS5oaWRkZW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb2xvcihzIDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50Q29sb3IgPSBzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRDb2xvcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaG9pY2UocyA6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudENob2ljZSA9IHM7XHJcbiAgICAgICAgaWYocyA9PT0gXCJwYXRoXCIpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXRoXCIpLmhpZGRlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVybFwiKS5oaWRkZW4gID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYocyA9PT0gXCJ1cmxcIikge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVybFwiKS5oaWRkZW4gID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0aFwiKS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDaG9pY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudENob2ljZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVcmwoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0aCA9IHByb21wdChcIkVudHJlciB1bmUgVVJMXCIsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVybCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50UGF0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXNldCgpIHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNob2ljZVwiKS5oaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXJsXCIpLmhpZGRlbiAgICA9IHRydWU7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYXRoXCIpLmhpZGRlbiAgID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbG9yXCIpLmhpZGRlbiAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFR5cGUgICA9IHVuZGVmaW5lZDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRDaG9pY2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UGF0aCAgID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvbG9yICA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
