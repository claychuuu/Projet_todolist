System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ComponentIHM;
    return {
        setters: [],
        execute: function () {
            ComponentIHM = class ComponentIHM {
                constructor(NF, root) {
                    this.NF = NF;
                    this.root = root;
                }
                dispose() {
                    this.root.parentNode.removeChild(this.root);
                    this.root.innerHTML = "";
                }
            };
            exports_1("ComponentIHM", ComponentIHM);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbnNGcmFtZXdvcmsvQ29tcG9uZW50SUhNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFBQSxlQUFBO2dCQUdJLFlBQVksRUFBRSxFQUFFLElBQWE7b0JBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUssRUFBRSxDQUFDO29CQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixDQUFDO2dCQUNELE9BQU87b0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFFLElBQUksQ0FBQyxJQUFJLENBQUUsQ0FBQztvQkFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO2dCQUM3QixDQUFDO2FBQ0osQ0FBQTs7UUFDRCxDQUFDIiwiZmlsZSI6InNhbnNGcmFtZXdvcmsvQ29tcG9uZW50SUhNLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvbXBvbmVudElITSB7XHJcbiAgICByb290OiBFbGVtZW50O1xyXG4gICAgTkYgIDogYW55O1xyXG4gICAgY29uc3RydWN0b3IoTkYsIHJvb3Q6IEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLk5GICAgPSBORjtcclxuICAgICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgfVxyXG4gICAgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLnJvb3QucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGhpcy5yb290ICk7XHJcbiAgICAgICAgdGhpcy5yb290LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
