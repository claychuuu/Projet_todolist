System.register(["protractor"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var protractor_1;
    return {
        setters: [
            function (protractor_1_1) {
                protractor_1 = protractor_1_1;
            }
        ],
        execute: function () {
            describe('Premiers tests', () => {
                let inputNewTodo;
                let toggleAll;
                let itemInputsCheck;
                let items;
                let SF_inputNew = protractor_1.element(protractor_1.by.css("#sansFramework > section > form > input"));
                let SF_items;
                let SF_InputChecks;
                let computeElements = () => {
                    protractor_1.browser.get('');
                    inputNewTodo = protractor_1.element(protractor_1.by.css('input.new-todo'));
                    toggleAll = protractor_1.element(protractor_1.by.css("section.main > input.toggle-all"));
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                    items = protractor_1.element.all(protractor_1.by.css("item-chose"));
                    SF_items = protractor_1.element.all(protractor_1.by.css("#sansFramework > section > ul .chose"));
                    SF_InputChecks = protractor_1.element.all(protractor_1.by.css("#sansFramework > section > ul .chose > input[type=checkbox]"));
                };
                beforeEach(computeElements);
                it('should add 3 new item', () => {
                    inputNewTodo.sendKeys("toto");
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                    inputNewTodo.sendKeys("titi");
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                    SF_inputNew.sendKeys("tata");
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                    items = protractor_1.element.all(protractor_1.by.css("item-chose"));
                    expect(items.count()).toEqual(3);
                    itemInputsCheck.each(c => {
                        expect(c.isSelected()).toBe(false);
                    });
                    // MVP version
                    computeElements();
                    expect(SF_items.count()).toEqual(3);
                    SF_InputChecks.each(c => {
                        expect(c.isSelected()).toBe(false);
                    });
                });
                it('toggleAll click=> all items are checked', () => {
                    toggleAll.click();
                    itemInputsCheck.each(c => {
                        expect(c.isSelected()).toBe(true);
                    });
                    SF_InputChecks.each(c => {
                        expect(c.isSelected()).toBe(true);
                    });
                });
                it('item 0 click => toggleAll becomes unchecked', () => {
                    itemInputsCheck.first().click();
                    expect(toggleAll.isSelected()).toBe(false);
                });
                it('toggleAll click=> all items are checked', () => {
                    toggleAll.click();
                    itemInputsCheck.each(c => {
                        expect(c.isSelected()).toBe(true);
                    });
                    SF_InputChecks.each(c => {
                        expect(c.isSelected()).toBe(true);
                    });
                });
                it('The li root of checked items have the class "completed"', () => {
                    let lis = protractor_1.element.all(protractor_1.by.css("ul.todo-list > li.completed"));
                    expect(lis.count()).toEqual(3);
                });
                it('item 0 click => toggleAll becomes unchecked', () => {
                    itemInputsCheck.first().click();
                    expect(toggleAll.isSelected()).toBe(false);
                });
                it('item 0 click => toggleAll becomes checked', () => {
                    itemInputsCheck.first().click();
                    expect(toggleAll.isSelected()).toBe(true);
                });
            });
            describe("Edition d'items", () => {
                let labelFirstItem;
                let inputNewTodo;
                let items;
                beforeEach(() => {
                    protractor_1.browser.get('');
                    labelFirstItem = protractor_1.element(protractor_1.by.css(`item-chose .view label`));
                    inputNewTodo = protractor_1.element(protractor_1.by.css('input.new-todo'));
                    items = protractor_1.element.all(protractor_1.by.css("item-chose"));
                });
                it('click on label should make input appears and text should be kept.', () => {
                    let txtLabel = labelFirstItem.getText();
                    protractor_1.browser.actions().doubleClick(labelFirstItem).perform();
                    let input = protractor_1.element(protractor_1.by.css(`item-chose form input`));
                    expect(input.getAttribute("value")).toEqual(txtLabel);
                    input.sendKeys(" Bob");
                    let strInput = input.getAttribute("value");
                    protractor_1.browser.actions().sendKeys(protractor_1.protractor.Key.ENTER).perform();
                    labelFirstItem = protractor_1.element(protractor_1.by.css(`item-chose .view label`));
                    expect(labelFirstItem.getText()).toEqual(strInput);
                });
            });
            // Filters
            describe("Filters are OK", () => {
                let labelFirstItem;
                let inputNewTodo;
                let items;
                let itemInputsCheck;
                beforeEach(() => {
                    protractor_1.browser.get('');
                    labelFirstItem = protractor_1.element(protractor_1.by.css(`item-chose .view label`));
                    inputNewTodo = protractor_1.element(protractor_1.by.css('input.new-todo'));
                    items = protractor_1.element.all(protractor_1.by.css("item-chose"));
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                });
                it("check first element as done, so 1/3 are done", () => {
                    itemInputsCheck.first().click();
                    let nbDone = itemInputsCheck.reduce((acc, input) => acc + input.isSelected() ? 1 : 0, 0);
                    expect(nbDone).toBe(1);
                    expect(itemInputsCheck.count()).toBe(3);
                });
                it("Filter all is selected", () => {
                    let filterAll = protractor_1.element(protractor_1.by.css("ul.filters a.filterAll"));
                    expect(filterAll.getAttribute("class").then((strClass) => {
                        expect(strClass.split(" ").indexOf("selected") >= 0).toBe(true);
                    }));
                });
                it("Filter actives => 1 visible", () => {
                    let filterActives = protractor_1.element(protractor_1.by.css("ul.filters a.filterActives"));
                    filterActives.click();
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                    expect(itemInputsCheck.count()).toBe(1);
                });
                it("Filter completed => 2 visibles", () => {
                    let filterCompleted = protractor_1.element(protractor_1.by.css("ul.filters a.filterCompleted"));
                    filterCompleted.click();
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                    expect(itemInputsCheck.count()).toBe(2);
                });
                it("Select filter All and delete completed item => 1 remains", () => {
                    let filterAll = protractor_1.element(protractor_1.by.css("ul.filters a.filterAll"));
                    filterAll.click();
                    let clearCompleted = protractor_1.element(protractor_1.by.css("button.clear-completed"));
                    clearCompleted.click();
                    itemInputsCheck = protractor_1.element.all(protractor_1.by.css("item-chose input.toggle"));
                    expect(itemInputsCheck.count()).toBe(1);
                });
            });
            // Suppress checked items...
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2UyZS9MaXN0ZUNob3Nlcy5lMmUtc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUVBLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDdkIsSUFBSSxZQUErQixDQUFDO2dCQUNwQyxJQUFJLFNBQStCLENBQUM7Z0JBQ3BDLElBQUksZUFBb0MsQ0FBQztnQkFDekMsSUFBSSxLQUFvQyxDQUFDO2dCQUN6QyxJQUFJLFdBQVcsR0FBTyxvQkFBTyxDQUFFLGVBQUUsQ0FBQyxHQUFHLENBQUMseUNBQXlDLENBQUMsQ0FBRSxDQUFDO2dCQUNuRixJQUFJLFFBQW9DLENBQUM7Z0JBQ3pDLElBQUksY0FBb0MsQ0FBQztnQkFDekMsSUFBSSxlQUFlLEdBQUc7b0JBQ2xCLG9CQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUNoQixZQUFZLEdBQU0sb0JBQU8sQ0FBRSxlQUFFLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUUsQ0FBQztvQkFDdEQsU0FBUyxHQUFTLG9CQUFPLENBQUUsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFFLENBQUM7b0JBQ3ZFLGVBQWUsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBRSxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUUsQ0FBQztvQkFDbkUsS0FBSyxHQUFhLG9CQUFPLENBQUMsR0FBRyxDQUFFLGVBQUUsQ0FBQyxHQUFHLENBQUUsWUFBWSxDQUFFLENBQUUsQ0FBQztvQkFDeEQsUUFBUSxHQUFVLG9CQUFPLENBQUMsR0FBRyxDQUFFLGVBQUUsQ0FBQyxHQUFHLENBQUUsc0NBQXNDLENBQUUsQ0FBRSxDQUFDO29CQUNsRixjQUFjLEdBQUksb0JBQU8sQ0FBQyxHQUFHLENBQUUsZUFBRSxDQUFDLEdBQUcsQ0FBRSw2REFBNkQsQ0FBRSxDQUFFLENBQUM7Z0JBQzdHLENBQUMsQ0FBQztnQkFFRixVQUFVLENBQUUsZUFBZSxDQUFFLENB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RyxvQkFBTyxDQUFFLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBRSxDQUFDO29CQUM1RCxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ2xCLElBQUksY0FBYyxHQUFHLG9CQUFPLENBQUUsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFFLENBQUM7b0JBQ2pFLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDdkIsZUFBZSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFFLGVBQUUsQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBRSxDQUFDO29CQUNuRSxNQUFNLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1lBRUgsNEJBQTRCO1FBQzVCLENBQUMiLCJmaWxlIjoiLi4vZTJlL0xpc3RlQ2hvc2VzLmUyZS1zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHticm93c2VyLCBlbGVtZW50LCBieSwgcHJvdHJhY3RvciwgRWxlbWVudEFycmF5RmluZGVyLCBFbGVtZW50RmluZGVyfSBmcm9tIFwicHJvdHJhY3RvclwiO1xyXG5cclxuZGVzY3JpYmUoJ1ByZW1pZXJzIHRlc3RzJywgKCkgPT4ge1xyXG4gICAgbGV0IGlucHV0TmV3VG9kbyAgICA6IEVsZW1lbnRGaW5kZXI7XHJcbiAgICBsZXQgdG9nZ2xlQWxsICAgICAgIDogRWxlbWVudEZpbmRlcjtcclxuICAgIGxldCBpdGVtSW5wdXRzQ2hlY2sgOiBFbGVtZW50QXJyYXlGaW5kZXI7XHJcbiAgICBsZXQgaXRlbXMgICAgICAgICAgIDogRWxlbWVudEFycmF5RmluZGVyO1xyXG4gICAgbGV0IFNGX2lucHV0TmV3ICAgICA9IGVsZW1lbnQoIGJ5LmNzcyhcIiNzYW5zRnJhbWV3b3JrID4gc2VjdGlvbiA+IGZvcm0gPiBpbnB1dFwiKSApO1xyXG4gICAgbGV0IFNGX2l0ZW1zICAgICAgICA6IEVsZW1lbnRBcnJheUZpbmRlcjtcclxuICAgIGxldCBTRl9JbnB1dENoZWNrcyAgOiBFbGVtZW50QXJyYXlGaW5kZXI7XHJcbiAgICBsZXQgY29tcHV0ZUVsZW1lbnRzID0gKCkgPT4ge1xyXG4gICAgICAgIGJyb3dzZXIuZ2V0KCcnKTtcclxuICAgICAgICBpbnB1dE5ld1RvZG8gICAgPSBlbGVtZW50KCBieS5jc3MoJ2lucHV0Lm5ldy10b2RvJykgKTtcclxuICAgICAgICB0b2dnbGVBbGwgICAgICAgPSBlbGVtZW50KCBieS5jc3MoXCJzZWN0aW9uLm1haW4gPiBpbnB1dC50b2dnbGUtYWxsXCIpICk7XHJcbiAgICAgICAgaXRlbUlucHV0c0NoZWNrID0gZWxlbWVudC5hbGwoIGJ5LmNzcyhcIml0ZW0tY2hvc2UgaW5wdXQudG9nZ2xlXCIpICk7XHJcbiAgICAgICAgaXRlbXMgICAgICAgICAgID0gZWxlbWVudC5hbGwoIGJ5LmNzcyggXCJpdGVtLWNob3NlXCIgKSApO1xyXG4gICAgICAgIFNGX2l0ZW1zICAgICAgICA9IGVsZW1lbnQuYWxsKCBieS5jc3MoIFwiI3NhbnNGcmFtZXdvcmsgPiBzZWN0aW9uID4gdWwgLmNob3NlXCIgKSApO1xyXG4gICAgICAgIFNGX0lucHV0Q2hlY2tzICA9IGVsZW1lbnQuYWxsKCBieS5jc3MoIFwiI3NhbnNGcmFtZXdvcmsgPiBzZWN0aW9uID4gdWwgLmNob3NlID4gaW5wdXRbdHlwZT1jaGVja2JveF1cIiApICk7XHJcbiAgICB9O1xyXG5cclxuICAgIGJlZm9yZUVhY2goIGNvbXB1dGVFbGVtZW50cyApO1xyXG5cclxuICAgIGl0KCdzaG91bGQgYWRkIDMgbmV3IGl0ZW0nLCAoKSA9PiB7XHJcbiAgICAgICAgaW5wdXROZXdUb2RvLnNlbmRLZXlzKCBcInRvdG9cIiApO1xyXG4gICAgICAgIGJyb3dzZXIuYWN0aW9ucygpLnNlbmRLZXlzKCBwcm90cmFjdG9yLktleS5FTlRFUiApLnBlcmZvcm0oKTtcclxuICAgICAgICBpbnB1dE5ld1RvZG8uc2VuZEtleXMoIFwidGl0aVwiICk7XHJcbiAgICAgICAgYnJvd3Nlci5hY3Rpb25zKCkuc2VuZEtleXMoIHByb3RyYWN0b3IuS2V5LkVOVEVSICkucGVyZm9ybSgpO1xyXG5cclxuICAgICAgICBTRl9pbnB1dE5ldy5zZW5kS2V5cyggXCJ0YXRhXCIgKTtcclxuICAgICAgICBicm93c2VyLmFjdGlvbnMoKS5zZW5kS2V5cyggcHJvdHJhY3Rvci5LZXkuRU5URVIgKS5wZXJmb3JtKCk7XHJcblxyXG4gICAgICAgIGl0ZW1JbnB1dHNDaGVjayA9IGVsZW1lbnQuYWxsKCBieS5jc3MoXCJpdGVtLWNob3NlIGlucHV0LnRvZ2dsZVwiKSApO1xyXG4gICAgICAgIGl0ZW1zICAgICAgICAgICA9IGVsZW1lbnQuYWxsKCBieS5jc3MoIFwiaXRlbS1jaG9zZVwiICkgKTtcclxuXHJcbiAgICAgICAgZXhwZWN0KGl0ZW1zLmNvdW50KCkpLnRvRXF1YWwoMyk7XHJcbiAgICAgICAgaXRlbUlucHV0c0NoZWNrLmVhY2goIGMgPT4ge1xyXG4gICAgICAgICAgICBleHBlY3QoIGMuaXNTZWxlY3RlZCgpICkudG9CZSggZmFsc2UgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gTVZQIHZlcnNpb25cclxuICAgICAgICBjb21wdXRlRWxlbWVudHMoKTtcclxuICAgICAgICBleHBlY3QoU0ZfaXRlbXMuY291bnQoKSkudG9FcXVhbCgzKTtcclxuICAgICAgICBTRl9JbnB1dENoZWNrcy5lYWNoKCBjID0+IHtcclxuICAgICAgICAgICAgZXhwZWN0KCBjLmlzU2VsZWN0ZWQoKSApLnRvQmUoIGZhbHNlICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICAgIGl0KCd0b2dnbGVBbGwgY2xpY2s9PiBhbGwgaXRlbXMgYXJlIGNoZWNrZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgdG9nZ2xlQWxsLmNsaWNrKCk7XHJcbiAgICAgICAgaXRlbUlucHV0c0NoZWNrLmVhY2goIGMgPT4ge1xyXG4gICAgICAgICAgICBleHBlY3QoIGMuaXNTZWxlY3RlZCgpICkudG9CZSggdHJ1ZSApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFNGX0lucHV0Q2hlY2tzLmVhY2goIGMgPT4ge1xyXG4gICAgICAgICAgICBleHBlY3QoIGMuaXNTZWxlY3RlZCgpICkudG9CZSggdHJ1ZSApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBpdCgnaXRlbSAwIGNsaWNrID0+IHRvZ2dsZUFsbCBiZWNvbWVzIHVuY2hlY2tlZCcsICgpID0+IHtcclxuICAgICAgICBpdGVtSW5wdXRzQ2hlY2suZmlyc3QoKS5jbGljaygpO1xyXG4gICAgICAgIGV4cGVjdCggdG9nZ2xlQWxsLmlzU2VsZWN0ZWQoKSApLnRvQmUoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICBpdCgndG9nZ2xlQWxsIGNsaWNrPT4gYWxsIGl0ZW1zIGFyZSBjaGVja2VkJywgKCkgPT4ge1xyXG4gICAgICAgIHRvZ2dsZUFsbC5jbGljaygpO1xyXG4gICAgICAgIGl0ZW1JbnB1dHNDaGVjay5lYWNoKCBjID0+IHtcclxuICAgICAgICAgICAgZXhwZWN0KCBjLmlzU2VsZWN0ZWQoKSApLnRvQmUoIHRydWUgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBTRl9JbnB1dENoZWNrcy5lYWNoKCBjID0+IHtcclxuICAgICAgICAgICAgZXhwZWN0KCBjLmlzU2VsZWN0ZWQoKSApLnRvQmUoIHRydWUgKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgaXQoJ1RoZSBsaSByb290IG9mIGNoZWNrZWQgaXRlbXMgaGF2ZSB0aGUgY2xhc3MgXCJjb21wbGV0ZWRcIicsICgpID0+IHtcclxuICAgICAgICBsZXQgbGlzID0gZWxlbWVudC5hbGwoIGJ5LmNzcyhcInVsLnRvZG8tbGlzdCA+IGxpLmNvbXBsZXRlZFwiKSApO1xyXG4gICAgICAgIGV4cGVjdCggbGlzLmNvdW50KCkgKS50b0VxdWFsKDMpO1xyXG4gICAgfSk7XHJcbiAgICBpdCgnaXRlbSAwIGNsaWNrID0+IHRvZ2dsZUFsbCBiZWNvbWVzIHVuY2hlY2tlZCcsICgpID0+IHtcclxuICAgICAgICBpdGVtSW5wdXRzQ2hlY2suZmlyc3QoKS5jbGljaygpO1xyXG4gICAgICAgIGV4cGVjdCggdG9nZ2xlQWxsLmlzU2VsZWN0ZWQoKSApLnRvQmUoZmFsc2UpO1xyXG4gICAgfSk7XHJcbiAgICBpdCgnaXRlbSAwIGNsaWNrID0+IHRvZ2dsZUFsbCBiZWNvbWVzIGNoZWNrZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgaXRlbUlucHV0c0NoZWNrLmZpcnN0KCkuY2xpY2soKTtcclxuICAgICAgICBleHBlY3QoIHRvZ2dsZUFsbC5pc1NlbGVjdGVkKCkgKS50b0JlKHRydWUpO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuZGVzY3JpYmUoXCJFZGl0aW9uIGQnaXRlbXNcIiwgKCkgPT4ge1xyXG4gICAgbGV0IGxhYmVsRmlyc3RJdGVtOiBFbGVtZW50RmluZGVyO1xyXG4gICAgbGV0IGlucHV0TmV3VG9kbyAgICA6IEVsZW1lbnRGaW5kZXI7XHJcbiAgICBsZXQgaXRlbXMgICAgICAgICAgIDogRWxlbWVudEFycmF5RmluZGVyO1xyXG5cclxuICAgIGJlZm9yZUVhY2goICgpID0+IHtcclxuICAgICAgICBicm93c2VyLmdldCgnJyk7XHJcbiAgICAgICAgbGFiZWxGaXJzdEl0ZW0gID0gZWxlbWVudCggYnkuY3NzKGBpdGVtLWNob3NlIC52aWV3IGxhYmVsYCkgKTtcclxuICAgICAgICBpbnB1dE5ld1RvZG8gICAgPSBlbGVtZW50KCBieS5jc3MoJ2lucHV0Lm5ldy10b2RvJykgKTtcclxuICAgICAgICBpdGVtcyAgICAgICAgICAgPSBlbGVtZW50LmFsbCggYnkuY3NzKCBcIml0ZW0tY2hvc2VcIiApICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdCgnY2xpY2sgb24gbGFiZWwgc2hvdWxkIG1ha2UgaW5wdXQgYXBwZWFycyBhbmQgdGV4dCBzaG91bGQgYmUga2VwdC4nLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHR4dExhYmVsID0gbGFiZWxGaXJzdEl0ZW0uZ2V0VGV4dCgpO1xyXG4gICAgICAgIGJyb3dzZXIuYWN0aW9ucygpLmRvdWJsZUNsaWNrKCBsYWJlbEZpcnN0SXRlbSApLnBlcmZvcm0oKTtcclxuXHJcbiAgICAgICAgbGV0IGlucHV0ID0gZWxlbWVudCggYnkuY3NzKGBpdGVtLWNob3NlIGZvcm0gaW5wdXRgKSApO1xyXG4gICAgICAgIGV4cGVjdCggaW5wdXQuZ2V0QXR0cmlidXRlKFwidmFsdWVcIikgKS50b0VxdWFsKCB0eHRMYWJlbCApO1xyXG5cclxuICAgICAgICBpbnB1dC5zZW5kS2V5cyggXCIgQm9iXCIgKTtcclxuICAgICAgICBsZXQgc3RySW5wdXQgPSBpbnB1dC5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApO1xyXG5cclxuICAgICAgICBicm93c2VyLmFjdGlvbnMoKS5zZW5kS2V5cyggcHJvdHJhY3Rvci5LZXkuRU5URVIgKS5wZXJmb3JtKCk7XHJcblxyXG4gICAgICAgIGxhYmVsRmlyc3RJdGVtICA9IGVsZW1lbnQoIGJ5LmNzcyhgaXRlbS1jaG9zZSAudmlldyBsYWJlbGApICk7XHJcbiAgICAgICAgZXhwZWN0KCBsYWJlbEZpcnN0SXRlbS5nZXRUZXh0KCkgKS50b0VxdWFsKCBzdHJJbnB1dCApO1xyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuLy8gRmlsdGVyc1xyXG5kZXNjcmliZShcIkZpbHRlcnMgYXJlIE9LXCIsICgpID0+IHtcclxuICAgIGxldCBsYWJlbEZpcnN0SXRlbTogRWxlbWVudEZpbmRlcjtcclxuICAgIGxldCBpbnB1dE5ld1RvZG8gICAgOiBFbGVtZW50RmluZGVyO1xyXG4gICAgbGV0IGl0ZW1zICAgICAgICAgICA6IEVsZW1lbnRBcnJheUZpbmRlcjtcclxuICAgIGxldCBpdGVtSW5wdXRzQ2hlY2sgOiBFbGVtZW50QXJyYXlGaW5kZXI7XHJcblxyXG4gICAgYmVmb3JlRWFjaCggKCkgPT4ge1xyXG4gICAgICAgIGJyb3dzZXIuZ2V0KCcnKTtcclxuICAgICAgICBsYWJlbEZpcnN0SXRlbSAgPSBlbGVtZW50KCBieS5jc3MoYGl0ZW0tY2hvc2UgLnZpZXcgbGFiZWxgKSApO1xyXG4gICAgICAgIGlucHV0TmV3VG9kbyAgICA9IGVsZW1lbnQoIGJ5LmNzcygnaW5wdXQubmV3LXRvZG8nKSApO1xyXG4gICAgICAgIGl0ZW1zICAgICAgICAgICA9IGVsZW1lbnQuYWxsKCBieS5jc3MoIFwiaXRlbS1jaG9zZVwiICkgKTtcclxuICAgICAgICBpdGVtSW5wdXRzQ2hlY2sgPSBlbGVtZW50LmFsbCggYnkuY3NzKFwiaXRlbS1jaG9zZSBpbnB1dC50b2dnbGVcIikgKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiY2hlY2sgZmlyc3QgZWxlbWVudCBhcyBkb25lLCBzbyAxLzMgYXJlIGRvbmVcIiwgKCkgPT4ge1xyXG4gICAgICAgIGl0ZW1JbnB1dHNDaGVjay5maXJzdCgpLmNsaWNrKCk7XHJcbiAgICAgICAgbGV0IG5iRG9uZSA9IGl0ZW1JbnB1dHNDaGVjay5yZWR1Y2UoIChhY2MsaW5wdXQpID0+IGFjYyArIGlucHV0LmlzU2VsZWN0ZWQoKT8xOjAsIDAgKTtcclxuICAgICAgICBleHBlY3QobmJEb25lKS50b0JlKDEpO1xyXG4gICAgICAgIGV4cGVjdChpdGVtSW5wdXRzQ2hlY2suY291bnQoKSkudG9CZSgzKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGl0KFwiRmlsdGVyIGFsbCBpcyBzZWxlY3RlZFwiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpbHRlckFsbCA9IGVsZW1lbnQoIGJ5LmNzcyhcInVsLmZpbHRlcnMgYS5maWx0ZXJBbGxcIikgKTtcclxuICAgICAgICBleHBlY3QoZmlsdGVyQWxsLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpLnRoZW4oIChzdHJDbGFzczogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGV4cGVjdCggc3RyQ2xhc3Muc3BsaXQoXCIgXCIpLmluZGV4T2YoXCJzZWxlY3RlZFwiKSA+PSAwICkudG9CZSh0cnVlKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcIkZpbHRlciBhY3RpdmVzID0+IDEgdmlzaWJsZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpbHRlckFjdGl2ZXMgPSBlbGVtZW50KCBieS5jc3MoXCJ1bC5maWx0ZXJzIGEuZmlsdGVyQWN0aXZlc1wiKSApO1xyXG4gICAgICAgIGZpbHRlckFjdGl2ZXMuY2xpY2soKTtcclxuICAgICAgICBpdGVtSW5wdXRzQ2hlY2sgPSBlbGVtZW50LmFsbCggYnkuY3NzKFwiaXRlbS1jaG9zZSBpbnB1dC50b2dnbGVcIikgKTtcclxuICAgICAgICBleHBlY3QoaXRlbUlucHV0c0NoZWNrLmNvdW50KCkpLnRvQmUoMSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcIkZpbHRlciBjb21wbGV0ZWQgPT4gMiB2aXNpYmxlc1wiLCAoKSA9PiB7XHJcbiAgICAgICAgbGV0IGZpbHRlckNvbXBsZXRlZCA9IGVsZW1lbnQoIGJ5LmNzcyhcInVsLmZpbHRlcnMgYS5maWx0ZXJDb21wbGV0ZWRcIikgKTtcclxuICAgICAgICBmaWx0ZXJDb21wbGV0ZWQuY2xpY2soKTtcclxuICAgICAgICBpdGVtSW5wdXRzQ2hlY2sgPSBlbGVtZW50LmFsbCggYnkuY3NzKFwiaXRlbS1jaG9zZSBpbnB1dC50b2dnbGVcIikgKTtcclxuICAgICAgICBleHBlY3QoaXRlbUlucHV0c0NoZWNrLmNvdW50KCkpLnRvQmUoMik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcIlNlbGVjdCBmaWx0ZXIgQWxsIGFuZCBkZWxldGUgY29tcGxldGVkIGl0ZW0gPT4gMSByZW1haW5zXCIsICgpID0+IHtcclxuICAgICAgICBsZXQgZmlsdGVyQWxsID0gZWxlbWVudCggYnkuY3NzKFwidWwuZmlsdGVycyBhLmZpbHRlckFsbFwiKSApO1xyXG4gICAgICAgIGZpbHRlckFsbC5jbGljaygpO1xyXG4gICAgICAgIGxldCBjbGVhckNvbXBsZXRlZCA9IGVsZW1lbnQoIGJ5LmNzcyhcImJ1dHRvbi5jbGVhci1jb21wbGV0ZWRcIikgKTtcclxuICAgICAgICBjbGVhckNvbXBsZXRlZC5jbGljaygpO1xyXG4gICAgICAgIGl0ZW1JbnB1dHNDaGVjayA9IGVsZW1lbnQuYWxsKCBieS5jc3MoXCJpdGVtLWNob3NlIGlucHV0LnRvZ2dsZVwiKSApO1xyXG4gICAgICAgIGV4cGVjdChpdGVtSW5wdXRzQ2hlY2suY291bnQoKSkudG9CZSgxKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbi8vIFN1cHByZXNzIGNoZWNrZWQgaXRlbXMuLi5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==
