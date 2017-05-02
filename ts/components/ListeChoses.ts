import {Component, Input, OnInit}               from "@angular/core";
import {Chose, ListeChoses as ListeChosesNF} 	from "@NoyauFonctionnel/nf";
import {ListeChosesService}                     from "@NoyauFonctionnel/service";

const htmlTemplate = `
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

type FILTER = (c : Chose) => boolean;
@Component({
  selector		: "liste-choses",
  template		: htmlTemplate
})
export class ListeChoses implements OnInit {
    @Input() titre	    : string;
    public nf           : ListeChosesNF;
    public currentFilter: FILTER;
    public currentType  : string;
    public currentPath  : string;
    public currentChoice: string;
    public currentColor : string;
    private choses      : Chose[] = [];

    filterAll        : FILTER = () => true;
    filterActives    : FILTER = (c)=> !c.fait;
    filterCompleted  : FILTER = (c)=> c.fait;

	constructor		(private serviceListe: ListeChosesService) {
        this.currentFilter = this.filterAll;
        this.currentType   = "";
	};

    ngOnInit(): void {
        ListeChosesService.getData().then( (nf) => {
            this.nf     = nf;
            this.choses = nf.choses;
        });
    }
    getChoses() : Chose[] {
        return this.choses.filter(this.currentFilter);
    }

    ToutEstFait():boolean {
        return this.nf.choses.reduce((acc,c)=>acc && c.fait,true);
    }

    ToutCocherDecocher() {
        let cocher = !this.ToutEstFait();
        this.nf.choses.forEach(c=>c.Fait(cocher));
    }

    DeleteCompleted() {
        this.choses.filter(this.filterCompleted).forEach(c=>c.dispose());
    }

    getRestante() {
        return this.choses.filter(this.filterActives).length;
    }

    type() {
        if(this.currentType === "img")     return "image/*";
        if(this.currentType === "sound")   return "audio/*";
        if(this.currentType === "video")   return "video/*";
    }

    setType(s : string) {
        this.currentType = s;
        document.getElementById("choice").hidden = false;
    }

    getType() {
        return this.currentType;
    }

    color() {
        document.getElementById("color").hidden = false;
    }

    setColor(s : string) {
        this.currentColor = s;
    }

    getColor() {
        return this.currentColor;
    }

    setChoice(s : string) {
        this.currentChoice = s;
        if(s === "path") {
            document.getElementById("path").hidden = false;
            document.getElementById("url").hidden  = true;
        }
        if(s === "url") {
            document.getElementById("url").hidden  = false;
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
        document.getElementById("url").hidden    = true;
        document.getElementById("path").hidden   = true;
        document.getElementById("color").hidden  = true;
        this.currentType   = undefined;
        this.currentChoice = undefined;
        this.currentPath   = undefined;
        this.currentColor  = undefined;
    }
}
