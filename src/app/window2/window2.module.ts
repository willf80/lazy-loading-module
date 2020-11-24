import {
  ComponentFactory,
  ComponentFactoryResolver,
  NgModule
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { Window2Component } from "./window2.component";
import { LazyResolverInterface } from "../core/lazy-resolver.interface";

@NgModule({
  imports: [CommonModule],
  declarations: [Window2Component]
})
export class Window2Module implements LazyResolverInterface {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  public resolveComponent(): ComponentFactory<Window2Component> {
    return this.componentFactoryResolver.resolveComponentFactory(
      Window2Component
    );
  }
}
