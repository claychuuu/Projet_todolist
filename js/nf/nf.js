System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NF, Chose, ListeChoses;
    return {
        setters: [],
        execute: function () {
            NF = class NF {
                constructor() {
                    this.cbList = new Map();
                }
                emit(eventName, value) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.forEach(cb => cb(this, eventName, value));
                    }
                    return this;
                }
                on(eventName, cb) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.push(cb);
                    }
                    else {
                        this.cbList.set(eventName, [cb]);
                    }
                    return this;
                }
                off(eventName, cb) {
                    if (this.cbList.has(eventName)) {
                        let array = this.cbList.get(eventName);
                        array.splice(array.indexOf(cb), 1);
                    }
                    return this;
                }
            };
            Chose = class Chose extends NF {
                constructor(texte, addType, choice, path, url, color, liste, fait = false, date = null) {
                    super();
                    this.texte = texte;
                    this.addType = addType;
                    this.choice = choice;
                    this.path = path;
                    this.url = url;
                    this.color = color;
                    this.date = date || new Date(Date.now());
                    this.fait = fait || false;
                    this.liste = liste;
                    if (this.choice === "url")
                        this.path = url;
                }
                dispose() {
                    this.liste.Retirer(this);
                }
                Texte(texte) {
                    this.texte = texte;
                    this.emit("update", { texte: texte });
                    return this;
                }
                Fait(fait) {
                    this.fait = fait;
                    this.emit("update", { fait: fait });
                    return this;
                }
                on(eventName, cb) {
                    return super.on(eventName, cb);
                }
                off(eventName, cb) {
                    return super.off(eventName, cb);
                }
            };
            exports_1("Chose", Chose);
            ListeChoses = class ListeChoses extends NF {
                constructor() {
                    super();
                    this.choses = [];
                }
                Ajouter(texte, addType, choice, path, url, color, fait = false, date = null) {
                    let chose = new Chose(texte, addType, choice, path, url, color, this, fait, date);
                    this.choses.push(chose);
                    this.emit("update", { append: chose });
                    return this;
                }
                Retirer(chose) {
                    this.choses.splice(this.choses.indexOf(chose), 1);
                    this.emit("update", { remove: chose });
                    return this;
                }
                on(eventName, cb) {
                    return super.on(eventName, cb);
                }
                off(eventName, cb) {
                    return super.off(eventName, cb);
                }
            };
            exports_1("ListeChoses", ListeChoses);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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R0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNsRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztvQkFDckMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDYixDQUFDO2dCQUNELE9BQU8sQ0FBRyxLQUFZO29CQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztvQkFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztvQkFDckMsTUFBTSxDQUFDLElBQUksQ0FBQztnQkFDYixDQUFDO2dCQUNELEVBQUUsQ0FBQyxTQUFtQixFQUFFLEVBQTBCO29CQUNqRCxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBQ0QsR0FBRyxDQUFDLFNBQW1CLEVBQUUsRUFBMEI7b0JBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDakMsQ0FBQzthQUNELENBQUE7O1FBQ0QsQ0FBQyIsImZpbGUiOiJuZi9uZi5qcyIsInNvdXJjZXNDb250ZW50IjpbInR5cGUgTkZfQ2FsbEJhY2sgPSAobmY6IE5GLCBldmVudE5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgPT4gdm9pZDtcclxuY2xhc3MgTkYge1xyXG5cdHByaXZhdGUgY2JMaXN0IDogTWFwPHN0cmluZywgTkZfQ2FsbEJhY2tbXT47XHJcblx0Y29uc3RydWN0b3IoKSB7XHJcblx0XHR0aGlzLmNiTGlzdCA9IG5ldyBNYXA8c3RyaW5nLCBORl9DYWxsQmFja1tdPigpO1xyXG5cclxuXHR9XHJcblx0ZW1pdChldmVudE5hbWU6IHN0cmluZywgdmFsdWU6IGFueSkgOiB0aGlzIHtcclxuXHRcdGlmKCB0aGlzLmNiTGlzdC5oYXMoZXZlbnROYW1lKSApIHtcclxuXHRcdFx0bGV0IGFycmF5ID0gdGhpcy5jYkxpc3QuZ2V0KGV2ZW50TmFtZSk7XHJcblx0XHRcdGFycmF5LmZvckVhY2goIGNiID0+IGNiKHRoaXMsIGV2ZW50TmFtZSwgdmFsdWUpICk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblx0b24oZXZlbnROYW1lOiBzdHJpbmcsIGNiOiBORl9DYWxsQmFjaykgOiB0aGlzIHtcclxuXHRcdGlmKCB0aGlzLmNiTGlzdC5oYXMoZXZlbnROYW1lKSApIHtcclxuXHRcdFx0bGV0IGFycmF5IDogTkZfQ2FsbEJhY2tbXSA9IHRoaXMuY2JMaXN0LmdldChldmVudE5hbWUpO1xyXG5cdFx0XHRhcnJheS5wdXNoKGNiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuY2JMaXN0LnNldChldmVudE5hbWUsIFtjYl0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdG9mZihldmVudE5hbWU6IHN0cmluZywgY2I6IE5GX0NhbGxCYWNrKSA6IHRoaXMge1xyXG5cdFx0aWYoIHRoaXMuY2JMaXN0LmhhcyhldmVudE5hbWUpICkge1xyXG5cdFx0XHRsZXQgYXJyYXkgPSB0aGlzLmNiTGlzdC5nZXQoZXZlbnROYW1lKTtcclxuXHRcdFx0YXJyYXkuc3BsaWNlKCBhcnJheS5pbmRleE9mKGNiKSwgMSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEV2ZW50Q2hvc2UgPSB7XHJcblx0ZmFpdD9cdDogYm9vbGVhbixcclxuXHR0ZXh0ZT9cdDogc3RyaW5nLFxyXG5cdGFkZFR5cGU/OiBzdHJpbmcsXHJcblx0Y2hvaWNlPyA6IHN0cmluZyxcclxuXHRwYXRoP1x0OiBzdHJpbmcsXHJcblx0dXJsP1x0OiBzdHJpbmcsXHJcblx0Y29sb3I/ICA6IHN0cmluZ1xyXG59O1xyXG5leHBvcnQgdHlwZSBORl9DaG9zZV9DYWxsQmFjayA9IChuZjogQ2hvc2UsIGV2ZW50TmFtZTogc3RyaW5nLCB2YWx1ZTogRXZlbnRDaG9zZSkgPT4gdm9pZDtcclxuZXhwb3J0IGNsYXNzIENob3NlIGV4dGVuZHMgTkYge1xyXG5cdHJlYWRvbmx5IGxpc3RlXHRcdDogTGlzdGVDaG9zZXM7XHJcblx0cmVhZG9ubHkgZGF0ZSBcdFx0OiBEYXRlO1xyXG5cdHRleHRlXHRcdFx0XHQ6IHN0cmluZztcclxuXHRhZGRUeXBlXHRcdFx0XHQ6IHN0cmluZztcclxuXHRjaG9pY2VcdFx0XHRcdDogc3RyaW5nO1xyXG5cdHBhdGhcdFx0XHRcdDogc3RyaW5nO1xyXG5cdHVybFx0XHRcdFx0XHQ6IHN0cmluZztcclxuXHRjb2xvclx0XHRcdFx0OiBzdHJpbmc7XHJcblx0ZmFpdCBcdFx0XHRcdDogYm9vbGVhbjtcclxuXHJcblx0Y29uc3RydWN0b3JcdCh0ZXh0ZTogc3RyaW5nLCBhZGRUeXBlOiBzdHJpbmcsIGNob2ljZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nLCBjb2xvcjogc3RyaW5nLCBsaXN0ZTogTGlzdGVDaG9zZXMsXHJcblx0XHRmYWl0OiBib29sZWFuID0gZmFsc2UsIGRhdGU6IERhdGUgPSBudWxsLCApIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLnRleHRlICA9IHRleHRlO1xyXG5cdFx0dGhpcy5hZGRUeXBlPSBhZGRUeXBlO1xyXG5cdFx0dGhpcy5jaG9pY2UgPSBjaG9pY2U7XHJcblx0XHR0aGlzLnBhdGhcdD0gcGF0aDtcclxuXHRcdHRoaXMudXJsIFx0PSB1cmw7XHJcblx0XHR0aGlzLmNvbG9yICA9IGNvbG9yO1xyXG5cdFx0dGhpcy5kYXRlXHQ9IGRhdGUgfHwgbmV3IERhdGUoIERhdGUubm93KCkgKTtcclxuXHRcdHRoaXMuZmFpdFx0PSBmYWl0IHx8IGZhbHNlO1xyXG5cdFx0dGhpcy5saXN0ZVx0PSBsaXN0ZTtcclxuXHRcdGlmKHRoaXMuY2hvaWNlID09PSBcInVybFwiKSB0aGlzLnBhdGggPSB1cmw7XHJcblx0fVxyXG5cdGRpc3Bvc2VcdFx0KCkge1xyXG5cdFx0dGhpcy5saXN0ZS5SZXRpcmVyKHRoaXMpO1xyXG5cdH1cclxuXHRUZXh0ZSh0ZXh0ZTogc3RyaW5nKSB7XHJcblx0XHR0aGlzLnRleHRlID0gdGV4dGU7XHJcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge3RleHRlOiB0ZXh0ZX0pO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdEZhaXQoZmFpdDogYm9vbGVhbikge1xyXG5cdFx0dGhpcy5mYWl0ID0gZmFpdDtcclxuXHRcdHRoaXMuZW1pdChcInVwZGF0ZVwiLCB7ZmFpdDogZmFpdH0pO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cdG9uKGV2ZW50TmFtZTogXCJ1cGRhdGVcIiwgY2I6IE5GX0Nob3NlX0NhbGxCYWNrKSA6IHRoaXMge1xyXG5cdFx0cmV0dXJuIHN1cGVyLm9uKGV2ZW50TmFtZSwgY2IpO1xyXG5cdH1cclxuXHRvZmYoZXZlbnROYW1lOiBcInVwZGF0ZVwiLCBjYjogTkZfQ2hvc2VfQ2FsbEJhY2spIDogdGhpcyB7XHJcblx0XHRyZXR1cm4gc3VwZXIub2ZmKGV2ZW50TmFtZSwgY2IpO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgRXZlbnRMaXN0ZUNob3NlcyA9IHthcHBlbmQ/OiBDaG9zZSwgcmVtb3ZlPzpDaG9zZX07XHJcbmV4cG9ydCB0eXBlIE5GX0xpc3RlQ2hvc2VfQ2FsbEJhY2sgPSAobmY6IExpc3RlQ2hvc2VzLCBldmVudE5hbWU6IHN0cmluZywgdmFsdWU6IEV2ZW50TGlzdGVDaG9zZXMpID0+IHZvaWQ7XHJcbmV4cG9ydCBjbGFzcyBMaXN0ZUNob3NlcyBleHRlbmRzIE5GIHtcclxuXHRjaG9zZXMgXHQ6IENob3NlW107XHJcblx0Y29uc3RydWN0b3JcdCgpIHtcclxuXHRcdHN1cGVyKCk7XHJcblx0XHR0aGlzLmNob3NlcyA9IFtdO1xyXG5cdH1cclxuXHRBam91dGVyXHRcdCh0ZXh0ZTogc3RyaW5nLCBhZGRUeXBlOiBzdHJpbmcsIGNob2ljZTogc3RyaW5nLCBwYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nLCBjb2xvcjogc3RyaW5nLFxyXG5cdFx0ZmFpdDogYm9vbGVhbiA9IGZhbHNlLCBkYXRlOiBEYXRlID0gbnVsbCkgOiB0aGlzIHtcclxuXHRcdGxldCBjaG9zZSA9IG5ldyBDaG9zZSh0ZXh0ZSwgYWRkVHlwZSwgY2hvaWNlLCBwYXRoLCB1cmwsIGNvbG9yLCB0aGlzLCBmYWl0LCBkYXRlKTtcclxuXHRcdHRoaXMuY2hvc2VzLnB1c2goIGNob3NlICk7XHJcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge2FwcGVuZDogY2hvc2V9KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRSZXRpcmVyXHRcdChjaG9zZTogQ2hvc2UpIDogdGhpcyB7XHJcblx0XHR0aGlzLmNob3Nlcy5zcGxpY2UoIHRoaXMuY2hvc2VzLmluZGV4T2YoY2hvc2UpLCAxICk7XHJcblx0XHR0aGlzLmVtaXQoXCJ1cGRhdGVcIiwge3JlbW92ZTogY2hvc2V9KTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHRvbihldmVudE5hbWU6IFwidXBkYXRlXCIsIGNiOiBORl9MaXN0ZUNob3NlX0NhbGxCYWNrKSA6IHRoaXMge1xyXG5cdFx0cmV0dXJuIHN1cGVyLm9uKGV2ZW50TmFtZSwgY2IpO1xyXG5cdH1cclxuXHRvZmYoZXZlbnROYW1lOiBcInVwZGF0ZVwiLCBjYjogTkZfTGlzdGVDaG9zZV9DYWxsQmFjaykgOiB0aGlzIHtcclxuXHRcdHJldHVybiBzdXBlci5vZmYoZXZlbnROYW1lLCBjYik7XHJcblx0fVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
