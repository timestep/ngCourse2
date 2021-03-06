# Component Lifecycle

A Component has a lifecycle managed by Angular itself. Angular manages creation, rendering, data-bound properties etc. It also offers hooks that allow us to respond to key lifecycle events.

Here is the complete lifecycle hook interface inventory:

- `ngOnChanges` - called when an input or output binding value changes
- `ngOnInit` - after the first `ngOnChanges`
- `ngDoCheck` - developer's custom change detection
- `ngAfterContentInit` - after component content initialized
- `ngAfterContentChecked` - after every check of component content
- `ngAfterViewInit` - after component's view(s) are initialized
- `ngAfterViewChecked` - after every check of a component's view(s)
- `ngOnDestroy` - just before the component is destroyed.

📄 from [Component Lifecycle](https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html)

[View Example](http://plnkr.co/edit/0fuHvJn8SFm8sE0C33F0?p=preview)
