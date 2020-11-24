import {
  ComponentFactory,
  ComponentFactoryResolver,
  NgModule
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Window1Component } from "./window1.component";
import { Sub1Component } from "./sub1/sub1.component";
import { LazyResolverInterface } from "../core/lazy-resolver.interface";

@NgModule({
  imports: [CommonModule],
  declarations: [Window1Component, Sub1Component]
})
export class Window1Module implements LazyResolverInterface {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public resolveComponent(): ComponentFactory<Window1Component> {
    return this.componentFactoryResolver.resolveComponentFactory(
      Window1Component
    );
  }
}
