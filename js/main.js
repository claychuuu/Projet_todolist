System.register(["@angular/core", "@angular/platform-browser", "./components/ListeChosesModule", "@angular/platform-browser-dynamic", "./sansFramework/listeChoses_IHM", "@NoyauFonctionnel/service"], function (exports_1, context_1) {
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
    var core_1, platform_browser_1, ListeChosesModule_1, platform_browser_dynamic_1, listeChoses_IHM_1, service_1, PromesseDocumentPret, CompDemoM2M, AppModule, platform;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (ListeChosesModule_1_1) {
                ListeChosesModule_1 = ListeChosesModule_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (listeChoses_IHM_1_1) {
                listeChoses_IHM_1 = listeChoses_IHM_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            }
        ],
        execute: function () {
            PromesseDocumentPret = new Promise((resolve) => {
                if (document.readyState === "complete") {
                    resolve();
                }
                else {
                    document.body.onload = () => resolve();
                }
            });
            CompDemoM2M = class CompDemoM2M {
            };
            CompDemoM2M = __decorate([
                core_1.Component({
                    selector: "demo-m2m",
                    template: `<liste-choses titre="LA Liste"></liste-choses>`
                })
            ], CompDemoM2M);
            AppModule = class AppModule {
                constructor() {
                    // Juste pour bien lier la version sans framework
                    let Pall = Promise.all([service_1.ListeChosesService.getData(), PromesseDocumentPret]);
                    Pall.then(([nf]) => {
                        new listeChoses_IHM_1.ListeChosesIHM(nf, "#sansFramework");
                    });
                }
            };
            AppModule = __decorate([
                core_1.NgModule({
                    imports: [platform_browser_1.BrowserModule, ListeChosesModule_1.ListeChosesModule],
                    declarations: [CompDemoM2M],
                    bootstrap: [CompDemoM2M]
                }),
                __metadata("design:paramtypes", [])
            ], AppModule);
            exports_1("AppModule", AppModule);
            platform = platform_browser_dynamic_1.platformBrowserDynamic();
            platform.bootstrapModule(AppModule);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFRSSxvQkFBb0IsR0FBRyxJQUFJLE9BQU8sQ0FBRSxDQUFDLE9BQU87Z0JBQzVDLEVBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztvQkFDcEMsT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLE9BQU8sRUFBRSxDQUFDO2dCQUMzQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7WUFNRyxXQUFXLEdBQWpCO2FBQW9CLENBQUE7WUFBZCxXQUFXO2dCQUpoQixnQkFBUyxDQUFDO29CQUNQLFFBQVEsRUFBSSxVQUFVO29CQUN0QixRQUFRLEVBQUksZ0RBQWdEO2lCQUMvRCxDQUFDO2VBQ0ksV0FBVyxDQUFHO1lBT1AsU0FBUyxHQUF0QjtnQkFDSTtvQkFDSSxpREFBaUQ7b0JBQ2pELElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyw0QkFBa0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7b0JBQzdFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDWixJQUFJLGdDQUFjLENBQUMsRUFBRSxFQUFFLGdCQUFnQixDQUFDLENBQUM7b0JBQzdDLENBQUMsQ0FBQyxDQUFDO2dCQUNQLENBQUM7YUFDSixDQUFBO1lBUlksU0FBUztnQkFMckIsZUFBUSxDQUFDO29CQUNOLE9BQU8sRUFBTyxDQUFFLGdDQUFhLEVBQUUscUNBQWlCLENBQUU7b0JBQ2xELFlBQVksRUFBRSxDQUFFLFdBQVcsQ0FBRTtvQkFDN0IsU0FBUyxFQUFLLENBQUUsV0FBVyxDQUFFO2lCQUNoQyxDQUFDOztlQUNXLFNBQVMsQ0FRckI7O1lBRUssUUFBUSxHQUFHLGlEQUFzQixFQUFFLENBQUM7WUFDMUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE5nTW9kdWxlIH0gICAgICBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gICAgICAgICAgICBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQgeyBMaXN0ZUNob3Nlc01vZHVsZSB9ICAgICAgICBmcm9tIFwiLi9jb21wb25lbnRzL0xpc3RlQ2hvc2VzTW9kdWxlXCI7XHJcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSAgIGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWNcIjtcclxuaW1wb3J0IHsgTGlzdGVDaG9zZXNJSE0gICAgIH0gZnJvbSBcIi4vc2Fuc0ZyYW1ld29yay9saXN0ZUNob3Nlc19JSE1cIjtcclxuaW1wb3J0IHsgTGlzdGVDaG9zZXNTZXJ2aWNlIH0gZnJvbSBcIkBOb3lhdUZvbmN0aW9ubmVsL3NlcnZpY2VcIjtcclxuXHJcblxyXG5sZXQgUHJvbWVzc2VEb2N1bWVudFByZXQgPSBuZXcgUHJvbWlzZSggKHJlc29sdmUpID0+IHtcclxuICAgIGlmKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xyXG4gICAgICAgIHJlc29sdmUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3Rvclx0XHQ6IFwiZGVtby1tMm1cIixcclxuICAgIHRlbXBsYXRlXHRcdDogYDxsaXN0ZS1jaG9zZXMgdGl0cmU9XCJMQSBMaXN0ZVwiPjwvbGlzdGUtY2hvc2VzPmBcclxufSlcclxuY2xhc3MgQ29tcERlbW9NMk0ge31cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiAgICAgIFsgQnJvd3Nlck1vZHVsZSwgTGlzdGVDaG9zZXNNb2R1bGUgXSxcclxuICAgIGRlY2xhcmF0aW9uczogWyBDb21wRGVtb00yTSBdLFxyXG4gICAgYm9vdHN0cmFwOiAgICBbIENvbXBEZW1vTTJNIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvLyBKdXN0ZSBwb3VyIGJpZW4gbGllciBsYSB2ZXJzaW9uIHNhbnMgZnJhbWV3b3JrXHJcbiAgICAgICAgbGV0IFBhbGwgPSBQcm9taXNlLmFsbChbTGlzdGVDaG9zZXNTZXJ2aWNlLmdldERhdGEoKSwgUHJvbWVzc2VEb2N1bWVudFByZXRdKTtcclxuICAgICAgICBQYWxsLnRoZW4oIChbbmZdKSA9PiB7XHJcbiAgICAgICAgICAgIG5ldyBMaXN0ZUNob3Nlc0lITShuZiwgXCIjc2Fuc0ZyYW1ld29ya1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgcGxhdGZvcm0gPSBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCk7XHJcbnBsYXRmb3JtLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9
