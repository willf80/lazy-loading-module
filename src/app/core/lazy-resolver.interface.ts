import { ComponentFactory } from "@angular/core";

export interface LazyResolverInterface {
  resolveComponent(): ComponentFactory<any>;
}
