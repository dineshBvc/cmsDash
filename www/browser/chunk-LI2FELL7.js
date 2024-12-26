import {
  MachineService
} from "./chunk-KZDGHPJW.js";
import {
  IonSelect,
  IonSelectOption
} from "./chunk-WHRTMT5V.js";
import {
  CommonModule,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgModel,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-GXWPZK3Z.js";

// src/app/components/machinelist/machinelist.component.ts
function MachinelistComponent_ion_select_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const machine_r1 = ctx.$implicit;
    \u0275\u0275property("value", machine_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", machine_r1.name, " ");
  }
}
var _MachinelistComponent = class _MachinelistComponent {
  constructor(machineService) {
    this.machineService = machineService;
    this.type = "all";
    this.machines = [];
    this.machineService.GetAllMachines().then((values) => {
      if (this.type != "all") {
        values = values.filter((x) => x.appType == this.type.trim().toUpperCase());
      }
      this.machines = values.map((x) => {
        return { id: x.id, name: x.name };
      }).sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    });
  }
};
_MachinelistComponent.\u0275fac = function MachinelistComponent_Factory(t) {
  return new (t || _MachinelistComponent)(\u0275\u0275directiveInject(MachineService));
};
_MachinelistComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MachinelistComponent, selectors: [["app-machinelist"]], inputs: { type: "type" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 4, vars: 2, consts: [["label", "Machine", "placeholder", "Select", "fill", "solid", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["value", "all"], [3, "value"]], template: function MachinelistComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select", 0);
    \u0275\u0275twoWayListener("ngModelChange", function MachinelistComponent_Template_ion_select_ngModelChange_0_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selectedId, $event) || (ctx.selectedId = $event);
      return $event;
    });
    \u0275\u0275template(1, MachinelistComponent_ion_select_option_1_Template, 2, 2, "ion-select-option", 1);
    \u0275\u0275elementStart(2, "ion-select-option", 2);
    \u0275\u0275text(3, "All");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275twoWayProperty("ngModel", ctx.selectedId);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.machines);
  }
}, dependencies: [IonSelect, IonSelectOption, CommonModule, NgForOf, FormsModule, NgControlStatus, NgModel] });
var MachinelistComponent = _MachinelistComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MachinelistComponent, { className: "MachinelistComponent", filePath: "src/app/components/machinelist/machinelist.component.ts", lineNumber: 14 });
})();

export {
  MachinelistComponent
};
