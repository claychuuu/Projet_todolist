System.register(["@angular/core", "./nf"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, NF, nf, cbSaveData, choses, ListeChosesService;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (NF_1) {
                NF = NF_1;
            }
        ],
        execute: function () {
            nf = new NF.ListeChoses();
            cbSaveData = () => {
                let serialization = [];
                nf.choses.forEach(c => serialization.push({ texte: c.texte, addType: c.addType, choice: c.choice, path: c.path, url: c.url,
                    color: c.color, fait: c.fait, date: c.date.toString() }));
                localStorage.setItem("todoListMiage", JSON.stringify(serialization));
            };
            nf.on("update", (nf, eventName, eventValue) => {
                if (eventValue.append) {
                    let chose = eventValue.append;
                    chose.on("update", cbSaveData);
                }
                if (eventValue.remove) {
                    let chose = eventValue.remove;
                    chose.off("update", cbSaveData);
                }
                cbSaveData();
            });
            // Ajouter les choses déjà présentes dans le localStorage
            choses = JSON.parse(localStorage.getItem("todoListMiage") || "[]");
            choses.forEach(c => {
                nf.Ajouter(c.texte, c.addType, c.choice, c.path, c.url, c.color, c.fait, new Date(c.date));
            });
            ListeChosesService = class ListeChosesService {
                static getData() {
                    return Promise.resolve(nf);
                }
            };
            ListeChosesService = __decorate([
                core_1.Injectable()
            ], ListeChosesService);
            exports_1("ListeChosesService", ListeChosesService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5mL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDMUIsVUFBVSxHQUFHO2dCQUNiLElBQUksYUFBYSxHQUF5QixFQUFFLENBQUM7Z0JBQzdDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLENBQUMsSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFFLEVBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHO29CQUMzSCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxDQUFFLENBQUMsQ0FBQztnQkFDMUQsWUFBWSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBRSxDQUFDO1lBQzFFLENBQUMsQ0FBQztZQUVGLEVBQUUsQ0FBQyxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBa0IsRUFBRSxTQUFrQixFQUFFLFVBQWdDO2dCQUNyRixFQUFFLENBQUEsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDbkIsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztvQkFDOUIsS0FBSyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBQ0QsRUFBRSxDQUFBLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ25CLElBQUksS0FBSyxHQUFHLFVBQVUsQ0FBQyxNQUFNLENBQUM7b0JBQzlCLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO2dCQUNELFVBQVUsRUFBRSxDQUFDO1lBQ2pCLENBQUMsQ0FBRSxDQUFDO1lBRUoseURBQXlEO1lBQ3JELE1BQU0sR0FBOEMsSUFBSSxDQUFDLEtBQUssQ0FBRSxZQUFZLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxJQUFJLElBQUksQ0FBRSxDQUFDO1lBQ3BILE1BQU0sQ0FBQyxPQUFPLENBQUUsQ0FBQztnQkFDYixFQUFFLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDaEcsQ0FBQyxDQUFDLENBQUM7WUFLVSxrQkFBa0IsR0FBL0I7Z0JBQ0ksTUFBTSxDQUFDLE9BQU87b0JBQ1YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUUsRUFBRSxDQUFFLENBQUM7Z0JBQ2pDLENBQUM7YUFDSixDQUFBO1lBSlksa0JBQWtCO2dCQUQ5QixpQkFBVSxFQUFFO2VBQ0Esa0JBQWtCLENBSTlCOztRQUNELENBQUMiLCJmaWxlIjoibmYvc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgKiBhcyBORiBmcm9tIFwiLi9uZlwiO1xyXG5cclxuLy8gTG9hZCBmcm9tIGxvY2FsU3RvcmFnZVxyXG50eXBlIFNlcmlhbGlzYXRpb25DaG9zZXMgPSBBcnJheTx7dGV4dGU6IHN0cmluZywgYWRkVHlwZTogc3RyaW5nLCBjaG9pY2U6IHN0cmluZywgcGF0aDogc3RyaW5nLCB1cmw6c3RyaW5nLCBjb2xvcjogc3RyaW5nLFxyXG4gICAgZmFpdDogYm9vbGVhbiwgZGF0ZTogc3RyaW5nfT47XHJcbmxldCBuZiA9IG5ldyBORi5MaXN0ZUNob3NlcygpO1xyXG5sZXQgY2JTYXZlRGF0YSA9ICgpID0+IHtcclxuICAgIGxldCBzZXJpYWxpemF0aW9uIDogU2VyaWFsaXNhdGlvbkNob3NlcyA9IFtdO1xyXG4gICAgbmYuY2hvc2VzLmZvckVhY2goIGMgPT4gc2VyaWFsaXphdGlvbi5wdXNoKCB7dGV4dGU6IGMudGV4dGUsIGFkZFR5cGU6IGMuYWRkVHlwZSwgY2hvaWNlOiBjLmNob2ljZSwgcGF0aDogYy5wYXRoLCB1cmw6IGMudXJsLFxyXG4gICAgY29sb3I6IGMuY29sb3IsIGZhaXQ6IGMuZmFpdCwgZGF0ZTogYy5kYXRlLnRvU3RyaW5nKCl9ICkpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2RvTGlzdE1pYWdlXCIsIEpTT04uc3RyaW5naWZ5KHNlcmlhbGl6YXRpb24pICk7XHJcbn07XHJcblxyXG5uZi5vbihcInVwZGF0ZVwiLCAobmY6IE5GLkxpc3RlQ2hvc2VzLCBldmVudE5hbWUgOiBzdHJpbmcsIGV2ZW50VmFsdWUgOiBORi5FdmVudExpc3RlQ2hvc2VzKSA9PiB7XHJcbiAgICBpZihldmVudFZhbHVlLmFwcGVuZCkge1xyXG4gICAgICAgIGxldCBjaG9zZSA9IGV2ZW50VmFsdWUuYXBwZW5kO1xyXG4gICAgICAgIGNob3NlLm9uKFwidXBkYXRlXCIsIGNiU2F2ZURhdGEpO1xyXG4gICAgfVxyXG4gICAgaWYoZXZlbnRWYWx1ZS5yZW1vdmUpIHtcclxuICAgICAgICBsZXQgY2hvc2UgPSBldmVudFZhbHVlLnJlbW92ZTtcclxuICAgICAgICBjaG9zZS5vZmYoXCJ1cGRhdGVcIiwgY2JTYXZlRGF0YSk7XHJcbiAgICB9XHJcbiAgICBjYlNhdmVEYXRhKCk7XHJcbn0gKTtcclxuXHJcbi8vIEFqb3V0ZXIgbGVzIGNob3NlcyBkw6lqw6AgcHLDqXNlbnRlcyBkYW5zIGxlIGxvY2FsU3RvcmFnZVxyXG5sZXQgY2hvc2VzIDogU2VyaWFsaXNhdGlvbkNob3NlcyA9IDxTZXJpYWxpc2F0aW9uQ2hvc2VzPkpTT04ucGFyc2UoIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9kb0xpc3RNaWFnZVwiKSB8fCBcIltdXCIgKTtcclxuY2hvc2VzLmZvckVhY2goIGMgPT4ge1xyXG4gICAgbmYuQWpvdXRlciggYy50ZXh0ZSwgYy5hZGRUeXBlLCBjLmNob2ljZSwgYy5wYXRoLCBjLnVybCwgYy5jb2xvciwgYy5mYWl0LCBuZXcgRGF0ZShjLmRhdGUpKTtcclxufSk7XHJcblxyXG5cclxuLy8gRGVmaW5pdCBzZXJ2aWNlXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExpc3RlQ2hvc2VzU2VydmljZSB7XHJcbiAgICBzdGF0aWMgZ2V0RGF0YVx0KCkgOiBQcm9taXNlPE5GLkxpc3RlQ2hvc2VzPiB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSggbmYgKTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9
