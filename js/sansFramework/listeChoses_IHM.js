System.register(["./ComponentIHM", "./Chose_IHM"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM_1, Chose_IHM_1, htmlTemplate, ListeChosesIHM;
    return {
        setters: [
            function (ComponentIHM_1_1) {
                ComponentIHM_1 = ComponentIHM_1_1;
            },
            function (Chose_IHM_1_1) {
                Chose_IHM_1 = Chose_IHM_1_1;
            }
        ],
        execute: function () {
            htmlTemplate = `
	<section>
		<form action="#/">
			<input placeholder="Que faire?">
		</form>
		<ul></ul>
	</section>
`;
            // Classe à compléter...
            ListeChosesIHM = class ListeChosesIHM extends ComponentIHM_1.ComponentIHM {
                constructor(NF, rootSelector) {
                    super(NF, document.querySelector(rootSelector));
                    this.NF = NF;
                    this.mapNfIhm = new Map();
                    this.root.innerHTML = htmlTemplate;
                    // Get references and initialize from NF
                    this.ul = this.root.querySelector(`ul`);
                    this.form = this.root.querySelector(`form`);
                    this.input = this.root.querySelector(`input`);
                    this.initalizeFromNF();
                    // HTML -> NF
                    this.form.addEventListener("submit", evt => {
                        evt.preventDefault();
                        //this.NF.Ajouter( this.input.value );
                        this.input.value = "";
                    });
                    // NF -> HTML
                    this.NF.on("update", (nf, eN, eV) => this.updateFromNF(eV));
                }
                initalizeFromNF() {
                    this.NF.choses.forEach(c => this.updateFromNF({ append: c }));
                }
                updateFromNF(evt) {
                    if (evt.append) {
                        let chose = evt.append;
                        let li = document.createElement("li");
                        this.ul.appendChild(li);
                        this.mapNfIhm.set(chose, new Chose_IHM_1.ChoseIHM(chose, li));
                    }
                    if (evt.remove) {
                        let chose = evt.remove;
                        let choseIHM = this.mapNfIhm.get(chose);
                        if (choseIHM) {
                            choseIHM.dispose();
                        }
                        this.mapNfIhm.delete(chose);
                    }
                }
            };
            exports_1("ListeChosesIHM", ListeChosesIHM);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbnNGcmFtZXdvcmsvbGlzdGVDaG9zZXNfSUhNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O1lBSU0sWUFBWSxHQUFHOzs7Ozs7O0NBT3BCLENBQUM7WUFFRix3QkFBd0I7WUFDeEIsaUJBQUEsb0JBQTRCLFNBQVEsMkJBQVk7Z0JBSy9DLFlBQW1CLEVBQWUsRUFBRSxZQUFZO29CQUMvQyxLQUFLLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUUsWUFBWSxDQUFFLENBQUMsQ0FBQztvQkFEaEMsT0FBRSxHQUFGLEVBQUUsQ0FBYTtvQkFEL0IsYUFBUSxHQUF5QixJQUFJLEdBQUcsRUFBRSxDQUFDO29CQUd2QyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUM7b0JBRW5DLHdDQUF3QztvQkFDeEMsSUFBSSxDQUFDLEVBQUUsR0FBeUIsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFFLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxJQUFJLEdBQXVCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFFLE1BQU0sQ0FBRSxDQUFDO29CQUNsRSxJQUFJLENBQUMsS0FBSyxHQUFzQixJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBRSxPQUFPLENBQUUsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUV2QixhQUFhO29CQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLEdBQUc7d0JBQ3BDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDckIsc0NBQXNDO3dCQUN0QyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQzFCLENBQUMsQ0FBQyxDQUFDO29CQUVILGFBQWE7b0JBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEtBQUssSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO2dCQUNsRSxDQUFDO2dCQUNELGVBQWU7b0JBQ1gsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLENBQUMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFFLEVBQUMsTUFBTSxFQUFFLENBQUMsRUFBQyxDQUFFLENBQUUsQ0FBQztnQkFDcEUsQ0FBQztnQkFDRCxZQUFZLENBQUMsR0FBcUI7b0JBQzlCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNaLElBQUksS0FBSyxHQUFLLEdBQUcsQ0FBQyxNQUFNLENBQUM7d0JBQ3pCLElBQUksRUFBRSxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUUsSUFBSSxDQUFFLENBQUM7d0JBQzdDLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFFLEVBQUUsQ0FBRSxDQUFDO3dCQUMxQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxvQkFBUSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN0RCxDQUFDO29CQUNELEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO3dCQUNaLElBQUksS0FBSyxHQUFTLEdBQUcsQ0FBQyxNQUFNLENBQUM7d0JBQzdCLElBQUksUUFBUSxHQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUMzQyxFQUFFLENBQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDOzRCQUFBLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQzt3QkFBQSxDQUFDO3dCQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDaEMsQ0FBQztnQkFDTCxDQUFDO2FBQ0osQ0FBQTs7UUFFRCxDQUFDIiwiZmlsZSI6InNhbnNGcmFtZXdvcmsvbGlzdGVDaG9zZXNfSUhNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaG9zZSwgTGlzdGVDaG9zZXMsIEV2ZW50TGlzdGVDaG9zZXN9IFx0XHRcdGZyb20gXCJATm95YXVGb25jdGlvbm5lbC9uZlwiO1xyXG5pbXBvcnQge0NvbXBvbmVudElITX0gXHRmcm9tIFwiLi9Db21wb25lbnRJSE1cIjtcclxuaW1wb3J0IHtDaG9zZUlITX1cdFx0ZnJvbSBcIi4vQ2hvc2VfSUhNXCI7XHJcblxyXG5jb25zdCBodG1sVGVtcGxhdGUgPSBgXHJcblx0PHNlY3Rpb24+XHJcblx0XHQ8Zm9ybSBhY3Rpb249XCIjL1wiPlxyXG5cdFx0XHQ8aW5wdXQgcGxhY2Vob2xkZXI9XCJRdWUgZmFpcmU/XCI+XHJcblx0XHQ8L2Zvcm0+XHJcblx0XHQ8dWw+PC91bD5cclxuXHQ8L3NlY3Rpb24+XHJcbmA7XHJcblxyXG4vLyBDbGFzc2Ugw6AgY29tcGzDqXRlci4uLlxyXG5leHBvcnQgY2xhc3MgTGlzdGVDaG9zZXNJSE0gZXh0ZW5kcyBDb21wb25lbnRJSE0ge1xyXG5cdHVsXHQgICAgOiBIVE1MVUxpc3RFbGVtZW50O1xyXG5cdGZvcm0gICAgOiBIVE1MRm9ybUVsZW1lbnQ7XHJcblx0aW5wdXQgICA6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBtYXBOZklobTogTWFwPENob3NlLCBDaG9zZUlITT4gPSBuZXcgTWFwKCk7XHJcblx0Y29uc3RydWN0b3IocHVibGljIE5GOiBMaXN0ZUNob3Nlcywgcm9vdFNlbGVjdG9yKSB7XHJcblx0XHRzdXBlcihORiwgZG9jdW1lbnQucXVlcnlTZWxlY3Rvciggcm9vdFNlbGVjdG9yICkpO1xyXG4gICAgICAgIHRoaXMucm9vdC5pbm5lckhUTUwgPSBodG1sVGVtcGxhdGU7XHJcblxyXG4gICAgICAgIC8vIEdldCByZWZlcmVuY2VzIGFuZCBpbml0aWFsaXplIGZyb20gTkZcclxuICAgICAgICB0aGlzLnVsXHQgICAgPSA8SFRNTFVMaXN0RWxlbWVudD50aGlzLnJvb3QucXVlcnlTZWxlY3RvciggYHVsYCApO1xyXG4gICAgICAgIHRoaXMuZm9ybSAgID0gPEhUTUxGb3JtRWxlbWVudCA+dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoIGBmb3JtYCApO1xyXG4gICAgICAgIHRoaXMuaW5wdXQgID0gPEhUTUxJbnB1dEVsZW1lbnQ+dGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoIGBpbnB1dGAgKTtcclxuICAgICAgICB0aGlzLmluaXRhbGl6ZUZyb21ORigpO1xyXG5cclxuICAgICAgICAvLyBIVE1MIC0+IE5GXHJcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZXZ0ID0+IHtcclxuICAgICAgICAgICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5ORi5Bam91dGVyKCB0aGlzLmlucHV0LnZhbHVlICk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBORiAtPiBIVE1MXHJcbiAgICAgICAgdGhpcy5ORi5vbiggXCJ1cGRhdGVcIiwgKG5mLCBlTiwgZVYpID0+IHRoaXMudXBkYXRlRnJvbU5GKGVWKSApO1xyXG4gICAgfVxyXG4gICAgaW5pdGFsaXplRnJvbU5GKCkge1xyXG4gICAgICAgIHRoaXMuTkYuY2hvc2VzLmZvckVhY2goIGMgPT4gdGhpcy51cGRhdGVGcm9tTkYoIHthcHBlbmQ6IGN9ICkgKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUZyb21ORihldnQ6IEV2ZW50TGlzdGVDaG9zZXMpIHtcclxuICAgICAgICBpZihldnQuYXBwZW5kKSB7XHJcbiAgICAgICAgICAgIGxldCBjaG9zZSAgID0gZXZ0LmFwcGVuZDtcclxuICAgICAgICAgICAgbGV0IGxpICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImxpXCIgKTtcclxuICAgICAgICAgICAgdGhpcy51bC5hcHBlbmRDaGlsZCggbGkgKTtcclxuICAgICAgICAgICAgdGhpcy5tYXBOZklobS5zZXQoY2hvc2UsIG5ldyBDaG9zZUlITShjaG9zZSwgbGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXZ0LnJlbW92ZSkge1xyXG4gICAgICAgICAgICBsZXQgY2hvc2UgICAgICAgPSBldnQucmVtb3ZlO1xyXG4gICAgICAgICAgICBsZXQgY2hvc2VJSE0gICAgPSB0aGlzLm1hcE5mSWhtLmdldChjaG9zZSk7XHJcbiAgICAgICAgICAgIGlmKGNob3NlSUhNKSB7Y2hvc2VJSE0uZGlzcG9zZSgpO31cclxuICAgICAgICAgICAgdGhpcy5tYXBOZklobS5kZWxldGUoY2hvc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
