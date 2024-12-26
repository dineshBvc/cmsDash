import {
  addIcons,
  createOutline,
  trashOutline
} from "./chunk-SE6JE7YY.js";
import {
  ApiService
} from "./chunk-ZI2R32SU.js";
import {
  AlertService,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonIcon,
  IonImg,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonSearchbar,
  IonText,
  IonThumbnail,
  IonicModule,
  TextValueAccessorDirective
} from "./chunk-7FRACAAN.js";
import {
  ActivatedRoute,
  CommonModule,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  inject,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-GXWPZK3Z.js";
import "./chunk-F7B77NAZ.js";
import "./chunk-DGUGGTGJ.js";
import "./chunk-FIELU7AB.js";
import "./chunk-R4QHACMO.js";
import "./chunk-66NQU5P4.js";
import "./chunk-EZ7BZKXF.js";
import "./chunk-YFFHIQ2L.js";
import "./chunk-UCFYK5O2.js";
import "./chunk-3H2XENQN.js";
import "./chunk-2HSCIEP3.js";
import "./chunk-36T2BHYJ.js";
import "./chunk-YCY464VT.js";
import "./chunk-Q2LVCW5Y.js";
import "./chunk-K2HBFHW4.js";
import "./chunk-UNONYLPV.js";
import "./chunk-MIOLVGSM.js";
import "./chunk-5RZA5OD4.js";
import "./chunk-WTQ2A753.js";
import "./chunk-MP3VKTEY.js";
import "./chunk-22VAUMV7.js";
import "./chunk-F6IUCLRN.js";
import "./chunk-7LRYXUKF.js";
import "./chunk-RSZAZW36.js";
import "./chunk-2M4P3T54.js";
import "./chunk-VMW4IG5E.js";
import "./chunk-QZNYZEIB.js";
import "./chunk-GHFEINSK.js";
import "./chunk-OJO5RD3M.js";
import {
  __async
} from "./chunk-3JGBPQET.js";

// src/app/pages/category/category.page.ts
var _c0 = ["eleImages"];
var _forTrack0 = ($index, $item) => $item.id;
function CategoryPage_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 20)(1, "ion-button", 21);
    \u0275\u0275listener("click", function CategoryPage_Conditional_28_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.Reset());
    });
    \u0275\u0275text(2, " Cancel ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "ion-col", 20)(4, "ion-button", 22);
    \u0275\u0275text(5, " Update Category ");
    \u0275\u0275elementEnd()();
  }
}
function CategoryPage_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col")(1, "ion-button", 22);
    \u0275\u0275text(2, " Add Category ");
    \u0275\u0275elementEnd()();
  }
}
function CategoryPage_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-thumbnail", 23);
    \u0275\u0275element(2, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-buttons", 25)(6, "ion-button", 26);
    \u0275\u0275listener("click", function CategoryPage_For_37_Template_ion_button_click_6_listener() {
      const category_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.GetCategory(category_r6.id));
    });
    \u0275\u0275element(7, "ion-icon", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-button", 28);
    \u0275\u0275listener("click", function CategoryPage_For_37_Template_ion_button_click_8_listener() {
      const category_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.DeleteCategory(category_r6.id));
    });
    \u0275\u0275element(9, "ion-icon", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", category_r6.imgPath, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", category_r6.name, " ");
  }
}
function CategoryPage_ForEmpty_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275text(1, " Category Not found ");
    \u0275\u0275elementEnd();
  }
}
var _CategoryPage = class _CategoryPage {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.apiService = inject(ApiService);
    this.alertService = inject(AlertService);
    this.formBuilder = inject(FormBuilder);
    this.appType = "";
    this.rawcategories = [];
    this.categories = [...this.rawcategories];
    this.categoryId = "";
    this.imagePreview = null;
    this.validation_messages = {
      "name": [
        { type: "required", message: "Name is required" },
        { type: "minlength", message: "Minimum 3 characters required" },
        { type: "maxlength", message: "Exceeded the max length 50" }
      ],
      "productImage": [{ type: "required", message: "Image is required, Please select the Image" }]
    };
    this.appType = this.route.snapshot.paramMap.get("apptype");
    addIcons({ createOutline, trashOutline });
    this.initializeForm();
    this.GetCategories();
  }
  initializeForm() {
    this.newInputForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      productImage: ["", [Validators.required]]
    });
  }
  GetCategories() {
    this.apiService.GetCategories(this.appType).subscribe((data) => {
      this.rawcategories = data;
      this.categories = [...this.rawcategories];
    });
  }
  AddCategory() {
    if (this.categoryId.length > 0) {
      this.newInputForm.controls["productImage"].removeValidators([Validators.required]);
      this.newInputForm.controls["productImage"].updateValueAndValidity();
    }
    if (this.newInputForm.valid) {
      const formData = new FormData();
      formData.append("name", this.newInputForm.value.name);
      if (this.newInputForm.value.productImage != "") {
        formData.append("Image", this.newInputForm.value.productImage);
      }
      if (this.categoryId.length === 0) {
        this.apiService.AddCategory(formData, this.appType).subscribe((response) => {
          this.alertService.successToast(response.message);
          this.Reset();
        });
      } else {
        this.apiService.EditCategory(this.categoryId, formData, this.appType).subscribe((response) => {
          this.alertService.successToast(response.message);
          this.Reset();
        });
      }
    } else {
      this.newInputForm.markAllAsTouched();
    }
  }
  GetCategory(Id) {
    const category = this.rawcategories.find((x) => x.id == Id);
    if (category != null) {
      this.newInputForm.reset();
      this.categoryId = Id;
      this.newInputForm.get("name")?.patchValue(category?.name);
      this.imagePreview = category?.imgPath ?? "";
    }
  }
  DeleteCategory(Id) {
    const alertButtons = [
      {
        text: "NO",
        role: "cancel",
        handler: () => {
          console.log("Alert canceled");
        }
      },
      {
        text: "YES",
        role: "confirm",
        handler: () => {
          this.apiService.DeleteCategory(Id, this.appType).subscribe(() => {
            this.alertService.errorToast("Deleted Successfully");
            this.GetCategories();
          });
        }
      }
    ];
    this.alertService.showAlert("Do you want to delete this category?", "DELETE", alertButtons);
  }
  Reset() {
    this.categoryId = "";
    this.newInputForm.reset();
    this.imagePreview = null;
    this.input.nativeElement.value = "";
    this.newInputForm.controls["productImage"].setValidators([Validators.required]);
    this.newInputForm.controls["productImage"].updateValueAndValidity();
    this.GetPlaceholderImage();
    this.GetCategories();
  }
  findCategory(event) {
    const query = event.target.value.toLowerCase();
    this.categories = [...this.categories.filter((p) => p.name.toLowerCase().includes(query))];
  }
  GetPlaceholderImage() {
    this.apiService.GetPlaceholderImage().subscribe((data) => __async(this, null, function* () {
      const reader = new FileReader();
      const binaryString = reader.readAsDataURL(data);
      reader.onload = (event) => {
        this.imagePreview = event.target.result;
      };
    }));
  }
  onFileChange(event) {
    const fileInput = event.target;
    const file = fileInput.files?.[0];
    if (file) {
      this.newInputForm.patchValue({
        productImage: file
      });
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
  getErrorText(control) {
    const validations = this.validation_messages[control];
    for (let validation of validations) {
      if (this.newInputForm.get(control)?.touched && this.newInputForm.get(control)?.hasError(validation.type))
        return validation.message;
    }
    return "";
  }
};
_CategoryPage.\u0275fac = function CategoryPage_Factory(t) {
  return new (t || _CategoryPage)();
};
_CategoryPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryPage, selectors: [["app-category"]], viewQuery: function CategoryPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 39, vars: 8, consts: [["eleImages", ""], [1, "ion-margin-top"], ["size", "12", 1, "ion-text-center"], [1, "title"], [1, "ion-justify-content-center"], ["sizeXs", "12", "sizeLg", "5"], [1, "contentHeader"], [1, "contentHeight"], ["enctype", "multipart/form-data", 3, "ngSubmit", "formGroup"], ["size", "12"], ["label", "Name", "type", "text", "label-placement", "floating", "fill", "outline", "placeholder", "Enter Name", "formControlName", "name", 3, "errorText"], [1, "cardCenter"], [1, "imageCard"], ["alt", "", 1, "img-card", 3, "src"], ["expand", "block", 1, "ion-no-margin", 3, "click"], ["type", "file", "hidden", "true", "accept", "image/*", 3, "change"], ["color", "danger", 1, "ion-text-center", 2, "display", "block", "font-size", "0.75rem"], ["sizeXs", "12", "sizeLg", "5", "offsetLg", "1"], [3, "ionInput", "debounce"], ["lines", "none"], ["size", "6"], ["expand", "block", 3, "click"], ["expand", "block", "type", "submit"], ["slot", "start"], [3, "src"], ["slot", "end"], ["color", "primary", "fill", "solid", 3, "click"], ["slot", "icon-only", "name", "create-outline"], ["color", "danger", "fill", "solid", 3, "click"], ["slot", "icon-only", "name", "trash-outline"]], template: function CategoryPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-row", 1)(2, "ion-col", 2)(3, "ion-text", 3);
    \u0275\u0275text(4, " Category ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "ion-row", 4)(6, "ion-col", 5)(7, "ion-card")(8, "ion-card-header", 6)(9, "ion-card-title");
    \u0275\u0275text(10, "Create New Category");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-card-content", 7)(12, "form", 8);
    \u0275\u0275listener("ngSubmit", function CategoryPage_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.AddCategory());
    });
    \u0275\u0275elementStart(13, "ion-row")(14, "ion-col", 9);
    \u0275\u0275element(15, "ion-input", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-row", 1)(17, "ion-col", 9)(18, "div", 11)(19, "ion-card", 12);
    \u0275\u0275element(20, "ion-img", 13);
    \u0275\u0275elementStart(21, "ion-button", 14);
    \u0275\u0275listener("click", function CategoryPage_Template_ion_button_click_21_listener() {
      \u0275\u0275restoreView(_r1);
      const eleImages_r2 = \u0275\u0275reference(24);
      return \u0275\u0275resetView(eleImages_r2.click());
    });
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "input", 15, 0);
    \u0275\u0275listener("change", function CategoryPage_Template_input_change_23_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ion-text", 16);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "ion-row");
    \u0275\u0275template(28, CategoryPage_Conditional_28_Template, 6, 0)(29, CategoryPage_Conditional_29_Template, 3, 0);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(30, "ion-col", 17)(31, "ion-card")(32, "ion-card-header", 6)(33, "ion-searchbar", 18);
    \u0275\u0275listener("ionInput", function CategoryPage_Template_ion_searchbar_ionInput_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.findCategory($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "ion-card-content", 7)(35, "ion-list", 19);
    \u0275\u0275repeaterCreate(36, CategoryPage_For_37_Template, 10, 2, "ion-item", null, _forTrack0, false, CategoryPage_ForEmpty_38_Template, 2, 0, "ion-item");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const eleImages_r2 = \u0275\u0275reference(24);
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx.newInputForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("errorText", ctx.getErrorText("name"));
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx.imagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.categoryId.length > 0 ? "Change Image" : ((tmp_4_0 = eleImages_r2 == null ? null : eleImages_r2.files == null ? null : eleImages_r2.files.length) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : 0 > 0) ? "Change Image" : "Add Image", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.getErrorText("productImage"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(28, ctx.categoryId.length > 0 ? 28 : 29);
    \u0275\u0275advance(5);
    \u0275\u0275property("debounce", 500);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.categories);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonRow, IonSearchbar, IonText, IonThumbnail, TextValueAccessorDirective, CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.cardCenter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.imageCard[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.imageCard[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 0px;\n}\n.img-card[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 180px;\n  object-fit: fill;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n}\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  height: 10vh;\n  width: 10vh;\n}\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid var(--ion-color-light);\n  object-fit: fill;\n}\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .gst[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.7;\n}\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 5px;\n}\n@media (min-width: 990px) {\n  .contentHeight[_ngcontent-%COMP%] {\n    height: 680px;\n    overflow-y: auto;\n  }\n}\n.contentHeader[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"] });
var CategoryPage = _CategoryPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryPage, { className: "CategoryPage", filePath: "src/app/pages/category/category.page.ts", lineNumber: 19 });
})();
export {
  CategoryPage
};
