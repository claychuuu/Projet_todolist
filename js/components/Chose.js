System.register(["@angular/core", "@NoyauFonctionnel/nf"], function (exports_1, context_1) {
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
    var core_1, nf_1, htmlTemplate, ItemChose;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (nf_1_1) {
                nf_1 = nf_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
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
            ItemChose = class ItemChose {
                constructor() {
                    this.editing = false;
                }
                dispose() {
                    this.nf.dispose();
                }
                fait(f) {
                    this.nf.Fait(f);
                }
                edit() {
                    this.editing = true;
                    requestAnimationFrame(() => { this.newTextInput.nativeElement.focus(); });
                }
                setTexte(s) {
                    this.editing = false;
                    this.nf.Texte(s);
                }
                htmlStr() {
                    if (this.nf.addType === "img" && this.nf.path !== "")
                        return "<img src=\"../../img/img.png\" height=\"20\" width=\"20\" />";
                    if (this.nf.addType === "sound" && this.nf.path !== "")
                        return "<img src=\"../../img/sound.png\" height=\"20\" width=\"20\" />";
                    if (this.nf.addType === "video" && this.nf.path !== "")
                        return "<img src=\"../../img/video.png\" height=\"20\" width=\"20\" />";
                    return "";
                }
            };
            __decorate([
                core_1.Input("nf"),
                __metadata("design:type", nf_1.Chose)
            ], ItemChose.prototype, "nf", void 0);
            __decorate([
                core_1.ViewChild("newText"),
                __metadata("design:type", core_1.ElementRef)
            ], ItemChose.prototype, "newTextInput", void 0);
            ItemChose = __decorate([
                core_1.Component({
                    selector: "item-chose",
                    template: htmlTemplate
                })
            ], ItemChose);
            exports_1("ItemChose", ItemChose);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ2hvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFHTSxZQUFZLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQWtCcEIsQ0FBQztZQU9XLFNBQVMsR0FBdEI7Z0JBTEE7b0JBUUMsWUFBTyxHQUFtQixLQUFLLENBQUM7Z0JBMEJqQyxDQUFDO2dCQXhCRyxPQUFPO29CQUNILElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3RCLENBQUM7Z0JBRUQsSUFBSSxDQUFDLENBQVM7b0JBQ1YsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLENBQUM7Z0JBRUQsSUFBSTtvQkFDQSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEIscUJBQXFCLENBQUMsUUFBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxDQUFDO2dCQUVELFFBQVEsQ0FBQyxDQUFRO29CQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckIsQ0FBQztnQkFFRCxPQUFPO29CQUNOLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxLQUFLLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUM7d0JBQUcsTUFBTSxDQUFDLDhEQUE4RCxDQUFDO29CQUM3SCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sS0FBSyxPQUFPLElBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDO3dCQUFDLE1BQU0sQ0FBQyxnRUFBZ0UsQ0FBQztvQkFDL0gsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQzt3QkFBQyxNQUFNLENBQUMsZ0VBQWdFLENBQUM7b0JBQy9ILE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBQ1gsQ0FBQzthQUNKLENBQUE7WUE1QmtCO2dCQUFkLFlBQUssQ0FBRSxJQUFJLENBQUU7MENBQVEsVUFBSztpREFBQztZQUNUO2dCQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQzswQ0FBZ0IsaUJBQVU7MkRBQUM7WUFGcEMsU0FBUztnQkFMckIsZ0JBQVMsQ0FBQztvQkFDVCxRQUFRLEVBQUksWUFBWTtvQkFDeEIsUUFBUSxFQUFJLFlBQVk7aUJBQ3pCLENBQUM7ZUFFVyxTQUFTLENBNkJyQjs7UUFDRCxDQUFDIiwiZmlsZSI6ImNvbXBvbmVudHMvQ2hvc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWZ9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7Q2hvc2V9IGZyb20gXCJATm95YXVGb25jdGlvbm5lbC9uZlwiO1xyXG5cclxuY29uc3QgaHRtbFRlbXBsYXRlID0gYFxyXG5cdDxkaXYgY2xhc3M9XCJ2aWV3XCI+XHJcblx0XHQ8aW5wdXQgXHRjbGFzc1x0XHRcdD0gXCJ0b2dnbGVcIiBcclxuXHRcdFx0XHR0eXBlXHRcdFx0PSBcImNoZWNrYm94XCIgXHJcblx0XHRcdFx0bmFtZVx0XHRcdD0gXCJmYWl0XCJcclxuXHRcdFx0XHRbbmdNb2RlbF0gICAgICAgPSBcIm5mLmZhaXRcIlxyXG5cdFx0XHRcdChuZ01vZGVsQ2hhbmdlKSA9IFwiZmFpdChpbnB1dEZhaXQuY2hlY2tlZClcIlxyXG5cdFx0XHRcdCNpbnB1dEZhaXQvPlxyXG5cdFx0PGxhYmVsIFtjbGFzc109XCJuZi5jb2xvclwiIChkYmxjbGljayk9XCJlZGl0KClcIj57e25mLnRleHRlfX1cclxuICAgICAgICAgICAgPGEgZGF0YS1mYW5jeWJveCBjbGFzcz1cImZhbmN5Ym94XCIgaHJlZj1cInt7bmYucGF0aH19XCIgdGl0bGU9XCJ7e25mLnRleHRlfX1cIj5cclxuXHRcdCAgICAgICAgPGRpdiBbaW5uZXJIVE1MXT1cImh0bWxTdHIoKVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcblx0XHQ8L2xhYmVsPlxyXG5cdFx0PGJ1dHRvbiBjbGFzcz1cImRlc3Ryb3lcIiAoY2xpY2spPVwiZGlzcG9zZSgpXCI+PC9idXR0b24+XHJcblx0PC9kaXY+XHJcblx0PGZvcm0gKHN1Ym1pdCk9XCJzZXRUZXh0ZShuZXdUZXh0LnZhbHVlKVwiICpuZ0lmPVwiZWRpdGluZ1wiPlxyXG5cdFx0PGlucHV0IGNsYXNzPVwiZWRpdFwiIFt2YWx1ZV09XCJuZi50ZXh0ZVwiIChibHVyKT1cInNldFRleHRlKG5ld1RleHQudmFsdWUpXCIgI25ld1RleHQvPlxyXG5cdDwvZm9ybT5cclxuYDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yXHRcdDogXCJpdGVtLWNob3NlXCIsXHJcbiAgdGVtcGxhdGVcdFx0OiBodG1sVGVtcGxhdGVcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBJdGVtQ2hvc2Uge1xyXG4gICAgQElucHV0IChcIm5mXCIgKSBuZiAgIDogQ2hvc2U7XHJcblx0QFZpZXdDaGlsZChcIm5ld1RleHRcIikgbmV3VGV4dElucHV0IDogRWxlbWVudFJlZjtcclxuXHRlZGl0aW5nXHRcdFx0ICAgIDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5uZi5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmFpdChmOmJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLm5mLkZhaXQoZik7XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdCgpIHtcclxuICAgICAgICB0aGlzLmVkaXRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7dGhpcy5uZXdUZXh0SW5wdXQubmF0aXZlRWxlbWVudC5mb2N1cygpO30pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRleHRlKHM6c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lZGl0aW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5uZi5UZXh0ZShzKTtcclxuICAgIH1cclxuXHJcbiAgICBodG1sU3RyKCkge1xyXG4gICAgXHRpZih0aGlzLm5mLmFkZFR5cGUgPT09IFwiaW1nXCIgJiYgdGhpcy5uZi5wYXRoICE9PSBcIlwiKSAgIHJldHVybiBcIjxpbWcgc3JjPVxcXCIuLi8uLi9pbWcvaW1nLnBuZ1xcXCIgaGVpZ2h0PVxcXCIyMFxcXCIgd2lkdGg9XFxcIjIwXFxcIiAvPlwiO1xyXG4gICAgXHRpZih0aGlzLm5mLmFkZFR5cGUgPT09IFwic291bmRcIiAmJiB0aGlzLm5mLnBhdGggIT09IFwiXCIpIHJldHVybiBcIjxpbWcgc3JjPVxcXCIuLi8uLi9pbWcvc291bmQucG5nXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiB3aWR0aD1cXFwiMjBcXFwiIC8+XCI7XHJcbiAgICBcdGlmKHRoaXMubmYuYWRkVHlwZSA9PT0gXCJ2aWRlb1wiICYmIHRoaXMubmYucGF0aCAhPT0gXCJcIikgcmV0dXJuIFwiPGltZyBzcmM9XFxcIi4uLy4uL2ltZy92aWRlby5wbmdcXFwiIGhlaWdodD1cXFwiMjBcXFwiIHdpZHRoPVxcXCIyMFxcXCIgLz5cIjtcclxuICAgIFx0cmV0dXJuIFwiXCI7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
