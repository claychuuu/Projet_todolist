System.register(["@angular/core", "@angular/forms", "@angular/common", "@NoyauFonctionnel/service", "./Chose", "./ListeChoses"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, common_1, service_1, Chose_1, ListeChoses_1, ListeChosesModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (service_1_1) {
                service_1 = service_1_1;
            },
            function (Chose_1_1) {
                Chose_1 = Chose_1_1;
            },
            function (ListeChoses_1_1) {
                ListeChoses_1 = ListeChoses_1_1;
            }
        ],
        execute: function () {
            ListeChosesModule = class ListeChosesModule {
            };
            ListeChosesModule = __decorate([
                core_1.NgModule({
                    imports: [common_1.CommonModule, forms_1.FormsModule],
                    exports: [ListeChoses_1.ListeChoses],
                    declarations: [ListeChoses_1.ListeChoses, Chose_1.ItemChose],
                    providers: [service_1.ListeChosesService],
                })
            ], ListeChosesModule);
            exports_1("ListeChosesModule", ListeChosesModule);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTGlzdGVDaG9zZXNNb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlYSxpQkFBaUIsR0FBOUI7YUFBa0MsQ0FBQTtZQUFyQixpQkFBaUI7Z0JBUDdCLGVBQVEsQ0FBQztvQkFDTixPQUFPLEVBQU8sQ0FBRSxxQkFBWSxFQUFFLG1CQUFXLENBQUU7b0JBQzNDLE9BQU8sRUFBTyxDQUFFLHlCQUFXLENBQUU7b0JBQzdCLFlBQVksRUFBRSxDQUFFLHlCQUFXLEVBQUUsaUJBQVMsQ0FBRTtvQkFDeEMsU0FBUyxFQUFLLENBQUUsNEJBQWtCLENBQUU7aUJBRXZDLENBQUM7ZUFDVyxpQkFBaUIsQ0FBSTs7UUFDbEMsQ0FBQyIsImZpbGUiOiJjb21wb25lbnRzL0xpc3RlQ2hvc2VzTW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgICAgIGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gICAgICBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgIGZyb20gXCJAYW5ndWxhci9jb21tb25cIjtcclxuaW1wb3J0IHtMaXN0ZUNob3Nlc1NlcnZpY2V9IGZyb20gXCJATm95YXVGb25jdGlvbm5lbC9zZXJ2aWNlXCI7XHJcbmltcG9ydCB7SXRlbUNob3NlfSAgICAgICAgICBmcm9tIFwiLi9DaG9zZVwiO1xyXG5pbXBvcnQge0xpc3RlQ2hvc2VzfSAgICAgICAgZnJvbSBcIi4vTGlzdGVDaG9zZXNcIjtcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0cyAgICAgOiBbIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUgXSxcclxuICAgIGV4cG9ydHMgICAgIDogWyBMaXN0ZUNob3NlcyBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbIExpc3RlQ2hvc2VzLCBJdGVtQ2hvc2UgXSxcclxuICAgIHByb3ZpZGVycyAgIDogWyBMaXN0ZUNob3Nlc1NlcnZpY2UgXSxcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0ZUNob3Nlc01vZHVsZSB7IH1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
