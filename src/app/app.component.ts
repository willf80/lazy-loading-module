import {
  Component,
  Compiler,
  Injector,
  VERSION,
  ViewContainerRef,
  ViewChild,
  OnInit
} from "@angular/core";
import { LazyResolverInterface } from "./core/lazy-resolver.interface";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  name = "Angular " + VERSION.major;
  @ViewChild("root", { read: ViewContainerRef }) root: ViewContainerRef;
  envValue = 1;

  constructor(private compiler: Compiler, private injector: Injector) {}

  ngOnInit() {
    if (this.envValue) {
      this.loadWin1();
    } else {
      this.loadWin2();
    }
  }

  private async loadWin1() {
    const { Window1Module } = await import("./window1/window1.module");
    this.compile(Window1Module);
  }

  private async loadWin2() {
    const { Window2Module } = await import("./window2/window2.module");
    this.compile(Window2Module);
  }

  private async compile(module: any) {
    const factory = await this.compiler.compileModuleAsync<
      LazyResolverInterface
    >(module);
    const ref = factory.create(this.injector);
    const componentFactory = ref.instance.resolveComponent();
    const component = this.root.createComponent<any>(
      componentFactory,
      null,
      ref.injector
    );
    component.instance.ngOnChanges();
  }
}
