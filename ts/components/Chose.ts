import { Component, Input, ViewChild, ElementRef} from "@angular/core";
import {Chose} from "@NoyauFonctionnel/nf";

const htmlTemplate = `
	<div class="view">
		<input 	class			= "toggle" 
				type			= "checkbox" 
				name			= "fait"
				[ngModel]       = "nf.fait"
				(ngModelChange) = "fait(inputFait.checked)"
				#inputFait/>
		<label [class]="nf.color" (dblclick)="edit()">{{nf.texte}}
            <a data-fancybox class="fancybox" href="{{nf.path}}" title="{{nf.texte}}">
		        <div [innerHTML]="htmlStr()"></div>
            </a>
		</label>
		<button class="destroy" (click)="dispose()"></button>
	</div>
	<form (submit)="setTexte(newText.value)" *ngIf="editing">
		<input class="edit" [value]="nf.texte" (blur)="setTexte(newText.value)" #newText/>
	</form>
`;

@Component({
  selector		: "item-chose",
  template		: htmlTemplate
})

export class ItemChose {
    @Input ("nf" ) nf   : Chose;
	@ViewChild("newText") newTextInput : ElementRef;
	editing			    : boolean = false;

    dispose() {
        this.nf.dispose();
    }

    fait(f:boolean) {
        this.nf.Fait(f);
    }

    edit() {
        this.editing = true;
        requestAnimationFrame(() => {this.newTextInput.nativeElement.focus();});
    }

    setTexte(s:string) {
        this.editing = false;
        this.nf.Texte(s);
    }

    htmlStr() {
    	if(this.nf.addType === "img" && this.nf.path !== "")   return "<img src=\"../../img/img.png\" height=\"20\" width=\"20\" />";
    	if(this.nf.addType === "sound" && this.nf.path !== "") return "<img src=\"../../img/sound.png\" height=\"20\" width=\"20\" />";
    	if(this.nf.addType === "video" && this.nf.path !== "") return "<img src=\"../../img/video.png\" height=\"20\" width=\"20\" />";
    	return "";
    }
}
