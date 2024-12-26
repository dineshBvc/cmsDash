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
  IonSelect,
  IonSelectOption,
  IonText,
  IonThumbnail,
  IonicModule,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective,
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
  NgForOf,
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

// src/app/pages/products/products.page.ts
var _c0 = ["eleImages"];
var _forTrack0 = ($index, $item) => $item.id;
function ProductsPage_ion_select_option_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-select-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    \u0275\u0275property("value", category_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2.name, " ");
  }
}
function ProductsPage_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 25)(1, "ion-button", 26);
    \u0275\u0275listener("click", function ProductsPage_Conditional_38_Template_ion_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.Reset());
    });
    \u0275\u0275text(2, " Cancel ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "ion-col", 25)(4, "ion-button", 27);
    \u0275\u0275text(5, " Update Product ");
    \u0275\u0275elementEnd()();
  }
}
function ProductsPage_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col")(1, "ion-button", 27);
    \u0275\u0275text(2, " Add Product ");
    \u0275\u0275elementEnd()();
  }
}
function ProductsPage_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-item")(1, "ion-thumbnail", 28);
    \u0275\u0275element(2, "img", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-label");
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 30);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "ion-buttons", 31)(10, "ion-button", 32);
    \u0275\u0275listener("click", function ProductsPage_For_47_Template_ion_button_click_10_listener() {
      const product_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.GetProduct(product_r7.id));
    });
    \u0275\u0275element(11, "ion-icon", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-button", 34);
    \u0275\u0275listener("click", function ProductsPage_For_47_Template_ion_button_click_12_listener() {
      const product_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.DeleteProduct(product_r7.id));
    });
    \u0275\u0275element(13, "ion-icon", 35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const product_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", product_r7.imgPath, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", product_r7.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Rs. ", product_r7.price, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", product_r7.gst, "% ");
  }
}
function ProductsPage_ForEmpty_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-item");
    \u0275\u0275text(1, " Products Not found ");
    \u0275\u0275elementEnd();
  }
}
var _ProductsPage = class _ProductsPage {
  constructor() {
    this.apiService = inject(ApiService);
    this.alertService = inject(AlertService);
    this.formBuilder = inject(FormBuilder);
    this.route = inject(ActivatedRoute);
    this.rawProducts = [];
    this.products = [...this.rawProducts];
    this.productId = "";
    this.imagePreview = null;
    this.categories = [];
    this.appType = "";
    this.validation_messages = {
      "name": [
        { type: "required", message: "Name is required" },
        { type: "minlength", message: "Minimum 3 characters required" },
        { type: "maxlength", message: "Exceeded the max length 50" }
      ],
      "price": [{ type: "required", message: "Price is required" }],
      "productImage": [{ type: "required", message: "Image is required, Please select the Image" }]
    };
    addIcons({ createOutline, trashOutline });
    this.appType = this.route.snapshot.paramMap.get("apptype");
    this.initializeForm();
    this.loadCategories();
    this.GetProducts();
    this.GetPlaceholderImage();
  }
  initializeForm() {
    this.newProductForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      price: [null, [Validators.required, Validators.min(0)]],
      gst: [""],
      category: [""],
      productImage: ["", [Validators.required]]
    });
  }
  loadCategories() {
    this.apiService.GetCategories(this.appType).subscribe((categories) => {
      this.categories = categories;
    });
  }
  GetProducts() {
    this.apiService.GetProducts(this.appType).subscribe((data) => {
      this.rawProducts = data;
      this.products = [...this.rawProducts];
    });
  }
  AddProduct() {
    if (this.productId.length > 0) {
      this.newProductForm.controls["productImage"].removeValidators([Validators.required]);
      this.newProductForm.controls["productImage"].updateValueAndValidity();
    }
    if (this.newProductForm.valid) {
      const formData = new FormData();
      formData.append("name", this.newProductForm.value.name);
      formData.append("price", this.newProductForm.value.price);
      formData.append("gst", this.newProductForm.value.gst == "" ? 0 : this.newProductForm.value.gst);
      formData.append("categoryId", this.newProductForm.value.category);
      if (this.newProductForm.value.productImage != "") {
        formData.append("productImage", this.newProductForm.value.productImage);
      }
      if (this.productId.length === 0) {
        this.apiService.AddProduct(formData, this.appType).subscribe((response) => {
          this.alertService.successToast(response.message);
          this.Reset();
        });
      } else {
        this.apiService.EditProduct(this.productId, formData, this.appType).subscribe((response) => {
          this.alertService.successToast(response.message);
          this.Reset();
        });
      }
    } else {
      this.newProductForm.markAllAsTouched();
    }
  }
  GetProduct(Id) {
    const product = this.rawProducts.find((x) => x.id == Id);
    if (product != null) {
      this.newProductForm.reset();
      this.productId = Id;
      this.newProductForm.get("name")?.patchValue(product?.name);
      this.newProductForm.get("price")?.patchValue(product?.price);
      this.newProductForm.get("gst")?.patchValue(product?.gst);
      this.newProductForm.get("category")?.patchValue(product?.categoryId);
      this.imagePreview = product?.imgPath ?? "";
    }
  }
  DeleteProduct(Id) {
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
          this.apiService.DeleteProduct(Id, this.appType).subscribe(() => {
            this.alertService.errorToast("Deleted Successfully");
            this.GetProducts();
          });
        }
      }
    ];
    this.alertService.showAlert("Do you want to delete this product?", "DELETE", alertButtons);
  }
  Reset() {
    this.productId = "";
    this.newProductForm.reset();
    this.imagePreview = null;
    this.input.nativeElement.value = "";
    this.newProductForm.controls["productImage"].setValidators([Validators.required]);
    this.newProductForm.controls["productImage"].updateValueAndValidity();
    this.GetPlaceholderImage();
    this.GetProducts();
  }
  findProducts(event) {
    const query = event.target.value.toLowerCase();
    this.products = [...this.rawProducts.filter((p) => p.name.toLowerCase().includes(query))];
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
      this.newProductForm.patchValue({
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
      if (this.newProductForm.get(control)?.touched && this.newProductForm.get(control)?.hasError(validation.type))
        return validation.message;
    }
    return "";
  }
};
_ProductsPage.\u0275fac = function ProductsPage_Factory(t) {
  return new (t || _ProductsPage)();
};
_ProductsPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductsPage, selectors: [["app-products"]], viewQuery: function ProductsPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.input = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 49, vars: 10, consts: [["eleImages", ""], [1, "ion-margin-top"], ["size", "12", 1, "ion-text-center"], [1, "title"], [1, "ion-justify-content-center"], ["sizeXs", "12", "sizeLg", "5"], [1, "contentHeader"], [1, "contentHeight"], ["enctype", "multipart/form-data", 3, "ngSubmit", "formGroup"], ["size", "12"], ["label", "Name", "type", "text", "label-placement", "floating", "fill", "outline", "placeholder", "Enter Name", "formControlName", "name", 3, "errorText"], ["label", "Price", "type", "number", "label-placement", "floating", "fill", "outline", "placeholder", "Enter Price", "formControlName", "price", 3, "errorText"], ["label", "GST", "type", "number", "label-placement", "floating", "fill", "outline", "placeholder", "Enter GST", "formControlName", "gst"], ["label", "Category", "label-placement", "floating", "fill", "outline", "formControlName", "category"], [3, "value", 4, "ngFor", "ngForOf"], [1, "cardCenter"], [1, "imageCard"], ["alt", "", 1, "img-card", 3, "src"], ["expand", "block", 1, "ion-no-margin", 3, "click"], ["type", "file", "hidden", "true", "accept", "image/*", 3, "change"], ["color", "danger", 1, "ion-text-center", 2, "display", "block", "font-size", "0.75rem"], ["sizeXs", "12", "sizeLg", "5", "offsetLg", "1"], [3, "ionInput", "debounce"], ["lines", "none"], [3, "value"], ["size", "6"], ["expand", "block", 3, "click"], ["expand", "block", "type", "submit"], ["slot", "start"], [3, "src"], [1, "gst"], ["slot", "end"], ["color", "primary", "fill", "solid", 3, "click"], ["slot", "icon-only", "name", "create-outline"], ["color", "danger", "fill", "solid", 3, "click"], ["slot", "icon-only", "name", "trash-outline"]], template: function ProductsPage_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-row", 1)(2, "ion-col", 2)(3, "ion-text", 3);
    \u0275\u0275text(4, " Products ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "ion-row", 4)(6, "ion-col", 5)(7, "ion-card")(8, "ion-card-header", 6)(9, "ion-card-title");
    \u0275\u0275text(10, "Create New Product");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-card-content", 7)(12, "form", 8);
    \u0275\u0275listener("ngSubmit", function ProductsPage_Template_form_ngSubmit_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.AddProduct());
    });
    \u0275\u0275elementStart(13, "ion-row")(14, "ion-col", 9);
    \u0275\u0275element(15, "ion-input", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "ion-row", 1)(17, "ion-col", 9);
    \u0275\u0275element(18, "ion-input", 11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "ion-row", 1)(20, "ion-col", 9);
    \u0275\u0275element(21, "ion-input", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ion-row", 1)(23, "ion-col", 9)(24, "ion-select", 13);
    \u0275\u0275template(25, ProductsPage_ion_select_option_25_Template, 2, 2, "ion-select-option", 14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(26, "ion-row", 1)(27, "ion-col", 9)(28, "div", 15)(29, "ion-card", 16);
    \u0275\u0275element(30, "ion-img", 17);
    \u0275\u0275elementStart(31, "ion-button", 18);
    \u0275\u0275listener("click", function ProductsPage_Template_ion_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const eleImages_r3 = \u0275\u0275reference(34);
      return \u0275\u0275resetView(eleImages_r3.click());
    });
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "input", 19, 0);
    \u0275\u0275listener("change", function ProductsPage_Template_input_change_33_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileChange($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "ion-text", 20);
    \u0275\u0275text(36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "ion-row");
    \u0275\u0275template(38, ProductsPage_Conditional_38_Template, 6, 0)(39, ProductsPage_Conditional_39_Template, 3, 0);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(40, "ion-col", 21)(41, "ion-card")(42, "ion-card-header", 6)(43, "ion-searchbar", 22);
    \u0275\u0275listener("ionInput", function ProductsPage_Template_ion_searchbar_ionInput_43_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.findProducts($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "ion-card-content", 7)(45, "ion-list", 23);
    \u0275\u0275repeaterCreate(46, ProductsPage_For_47_Template, 14, 4, "ion-item", null, _forTrack0, false, ProductsPage_ForEmpty_48_Template, 2, 0, "ion-item");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const eleImages_r3 = \u0275\u0275reference(34);
    \u0275\u0275advance(12);
    \u0275\u0275property("formGroup", ctx.newProductForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("errorText", ctx.getErrorText("name"));
    \u0275\u0275advance(3);
    \u0275\u0275property("errorText", ctx.getErrorText("price"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx.categories);
    \u0275\u0275advance(5);
    \u0275\u0275property("src", ctx.imagePreview);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.productId.length > 0 ? "Change Image" : ((tmp_6_0 = eleImages_r3 == null ? null : eleImages_r3.files == null ? null : eleImages_r3.files.length) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : 0 > 0) ? "Change Image" : "Add Image", " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.getErrorText("productImage"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(38, ctx.productId.length > 0 ? 38 : 39);
    \u0275\u0275advance(5);
    \u0275\u0275property("debounce", 500);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.products);
  }
}, dependencies: [IonicModule, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonRow, IonSearchbar, IonSelect, IonSelectOption, IonText, IonThumbnail, NumericValueAccessorDirective, SelectValueAccessorDirective, TextValueAccessorDirective, CommonModule, NgForOf, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ["\n\n.cardCenter[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.imageCard[_ngcontent-%COMP%] {\n  width: 180px;\n}\n.imageCard[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 0px;\n}\n.img-card[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 180px;\n  object-fit: fill;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 600;\n}\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  height: 10vh;\n  width: 8vh;\n}\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  border: 1px solid var(--ion-color-light);\n  object-fit: fill;\n}\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   .gst[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.7;\n}\nion-list[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%] {\n  --border-radius: 5px;\n}\n@media (min-width: 990px) {\n  .contentHeight[_ngcontent-%COMP%] {\n    height: 680px;\n    overflow-y: auto;\n  }\n}\n.contentHeader[_ngcontent-%COMP%] {\n  height: 90px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}"] });
var ProductsPage = _ProductsPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductsPage, { className: "ProductsPage", filePath: "src/app/pages/products/products.page.ts", lineNumber: 21 });
})();
export {
  ProductsPage
};
