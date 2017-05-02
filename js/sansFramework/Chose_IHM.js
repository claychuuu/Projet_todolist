System.register(["./ComponentIHM"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM_1, htmlTemplate, ChoseIHM;
    return {
        setters: [
            function (ComponentIHM_1_1) {
                ComponentIHM_1 = ComponentIHM_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
	<section class="chose">
		<input type="checkbox"/>
		<input type="text"    />
		<input type="button" value="Delete"/>
	</section>
`;
            // Classe à compléter...
            ChoseIHM = class ChoseIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, root) {
                    super(NF, root);
                    this.NF = NF;
                    this.root = root;
                    this.root.innerHTML = htmlTemplate;
                    // Get references and initialize from NF
                    this.inputFait = this.root.querySelector(`input[type="checkbox"]`);
                    this.inputText = this.root.querySelector(`input[type="text"]`);
                    this.buttonDelete = this.root.querySelector(`input[type="button"]`);
                    this.updateFromNF();
                    // HTML -> NF
                    this.inputFait.addEventListener("change", () => this.NF.Fait(this.inputFait.checked));
                    this.inputText.addEventListener("keyup", () => this.NF.Texte(this.inputText.value));
                    this.buttonDelete.addEventListener("click", () => this.NF.dispose());
                    // NF -> HTML
                    this.NF.on("update", () => this.updateFromNF());
                }
                updateFromNF() {
                    this.inputFait.checked = this.NF.fait;
                    this.inputText.value = this.NF.texte;
                }
            };
            exports_1("ChoseIHM", ChoseIHM);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbnNGcmFtZXdvcmsvQ2hvc2VfSUhNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBR00sWUFBWSxHQUFHOzs7Ozs7Q0FNcEIsQ0FBQztZQUVGLHdCQUF3QjtZQUN4QixXQUFBLGNBQXNCLFNBQVEsMkJBQVk7Z0JBSXpDLFlBQW1CLEVBQVMsRUFBUyxJQUFhO29CQUNqRCxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQURFLE9BQUUsR0FBRixFQUFFLENBQU87b0JBQVMsU0FBSSxHQUFKLElBQUksQ0FBUztvQkFFakQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO29CQUVuQyx3Q0FBd0M7b0JBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLHdCQUF3QixDQUFFLENBQUM7b0JBQzNGLElBQUksQ0FBQyxTQUFTLEdBQXlCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLG9CQUFvQixDQUFFLENBQUM7b0JBQ3ZGLElBQUksQ0FBQyxZQUFZLEdBQXVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLHNCQUFzQixDQUFFLENBQUM7b0JBQzFGLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFFcEIsYUFBYTtvQkFDYixJQUFJLENBQUMsU0FBUyxDQUFJLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUUsQ0FBQztvQkFDM0YsSUFBSSxDQUFDLFNBQVMsQ0FBSSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUcsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBRyxDQUFFLENBQUM7b0JBQzNGLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFHLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBRSxDQUFDO29CQUV2RSxhQUFhO29CQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFFLFFBQVEsRUFBRSxNQUFNLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBRSxDQUFDO2dCQUN6RCxDQUFDO2dCQUNELFlBQVk7b0JBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEdBQUksSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQ3ZDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUM1QyxDQUFDO2FBQ0osQ0FBQTs7UUFDRCxDQUFDIiwiZmlsZSI6InNhbnNGcmFtZXdvcmsvQ2hvc2VfSUhNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaG9zZX0gXHRcdFx0ZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL25mXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50SUhNfSBcdGZyb20gXCIuL0NvbXBvbmVudElITVwiO1xyXG5cclxuY29uc3QgaHRtbFRlbXBsYXRlID0gYFxyXG5cdDxzZWN0aW9uIGNsYXNzPVwiY2hvc2VcIj5cclxuXHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIi8+XHJcblx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiAgICAvPlxyXG5cdFx0PGlucHV0IHR5cGU9XCJidXR0b25cIiB2YWx1ZT1cIkRlbGV0ZVwiLz5cclxuXHQ8L3NlY3Rpb24+XHJcbmA7XHJcblxyXG4vLyBDbGFzc2Ugw6AgY29tcGzDqXRlci4uLlxyXG5leHBvcnQgY2xhc3MgQ2hvc2VJSE0gZXh0ZW5kcyBDb21wb25lbnRJSE0ge1xyXG5cdGlucHV0RmFpdFx0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cdGlucHV0VGV4dFx0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cdGJ1dHRvbkRlbGV0ZTogSFRNTElucHV0RWxlbWVudDtcclxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgTkY6IENob3NlLCBwdWJsaWMgcm9vdDogRWxlbWVudCkge1xyXG5cdFx0c3VwZXIoTkYsIHJvb3QpO1xyXG5cdFx0dGhpcy5yb290LmlubmVySFRNTCA9IGh0bWxUZW1wbGF0ZTtcclxuXHJcblx0XHQvLyBHZXQgcmVmZXJlbmNlcyBhbmQgaW5pdGlhbGl6ZSBmcm9tIE5GXHJcbiAgICAgICAgdGhpcy5pbnB1dEZhaXRcdCAgICA9IDxIVE1MSW5wdXRFbGVtZW50PnRoaXMucm9vdC5xdWVyeVNlbGVjdG9yKCBgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdYCApO1xyXG4gICAgICAgIHRoaXMuaW5wdXRUZXh0XHQgICAgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnJvb3QucXVlcnlTZWxlY3RvciggYGlucHV0W3R5cGU9XCJ0ZXh0XCJdYCApO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRGVsZXRlICAgPSA8SFRNTElucHV0RWxlbWVudD50aGlzLnJvb3QucXVlcnlTZWxlY3RvciggYGlucHV0W3R5cGU9XCJidXR0b25cIl1gICk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGcm9tTkYoKTtcclxuXHJcbiAgICAgICAgLy8gSFRNTCAtPiBORlxyXG4gICAgICAgIHRoaXMuaW5wdXRGYWl0ICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4gdGhpcy5ORi5GYWl0ICh0aGlzLmlucHV0RmFpdC5jaGVja2VkKSApO1xyXG4gICAgICAgIHRoaXMuaW5wdXRUZXh0ICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiICwgKCkgPT4gdGhpcy5ORi5UZXh0ZSh0aGlzLmlucHV0VGV4dC52YWx1ZSAgKSApO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiICwgKCkgPT4gdGhpcy5ORi5kaXNwb3NlKCkgKTtcclxuXHJcbiAgICAgICAgLy8gTkYgLT4gSFRNTFxyXG4gICAgICAgIHRoaXMuTkYub24oIFwidXBkYXRlXCIsICgpID0+IHRoaXMudXBkYXRlRnJvbU5GKCkgKTtcclxuXHR9XHJcblx0dXBkYXRlRnJvbU5GKCkge1xyXG4gICAgICAgIHRoaXMuaW5wdXRGYWl0LmNoZWNrZWQgID0gdGhpcy5ORi5mYWl0O1xyXG4gICAgICAgIHRoaXMuaW5wdXRUZXh0LnZhbHVlICAgID0gdGhpcy5ORi50ZXh0ZTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
