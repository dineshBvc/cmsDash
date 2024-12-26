import {
  APP_INITIALIZER,
  ActivatedRoute,
  AngularDelegate,
  Attribute,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Config,
  ConfigToken,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  Directive,
  ElementRef,
  EnvironmentInjector,
  HostListener,
  Injectable,
  Injector,
  IonBackButton,
  IonModal,
  IonNav,
  IonPopover,
  IonRouterOutlet,
  IonTabs,
  Location,
  MaxValidator,
  MenuController,
  MinValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NavController,
  NgIf,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Optional,
  OverlayBaseController,
  Router,
  RouterLinkDelegateDirective,
  RouterLinkWithHrefDelegateDirective,
  SkipSelf,
  ValueAccessor,
  ViewChild,
  ViewContainerRef,
  __decorate,
  forwardRef,
  fromEvent,
  inject,
  provideComponentInputBinding,
  raf,
  setClassMetadata,
  setIonicClasses,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-GXWPZK3Z.js";
import {
  menuController
} from "./chunk-FIELU7AB.js";
import {
  setupConfig
} from "./chunk-R4QHACMO.js";
import {
  getTimeGivenProgression
} from "./chunk-EZ7BZKXF.js";
import {
  actionSheetController,
  alertController,
  loadingController,
  modalController,
  pickerController,
  popoverController,
  toastController
} from "./chunk-YFFHIQ2L.js";
import {
  createAnimation
} from "./chunk-UCFYK5O2.js";
import {
  createGesture
} from "./chunk-Q2LVCW5Y.js";
import {
  initialize
} from "./chunk-5RZA5OD4.js";
import {
  bootstrapLazy
} from "./chunk-WTQ2A753.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-3JGBPQET.js";

// src/environments/environment.ts
var environment = {
  production: true,
  //  apiURL: 'https://billbuddy.co.in'
  apiURL: "https://cms.foodiegoodie.in"
};

// node_modules/@ionic/core/dist/esm/polyfills/index.js
function applyPolyfills() {
  var promises = [];
  if (typeof window !== "undefined") {
    var win = window;
    if (!win.customElements || win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove || !win.Element.prototype.getRootNode)) {
      promises.push(import(
        /* webpackChunkName: "polyfills-dom" */
        "./chunk-XKWMJ5ZV.js"
      ));
    }
    var checkIfURLIsSupported = function() {
      try {
        var u = new URL("b", "http://a");
        u.pathname = "c%20d";
        return u.href === "http://a/c%20d" && u.searchParams;
      } catch (e) {
        return false;
      }
    };
    if ("function" !== typeof Object.assign || !Object.entries || !Array.prototype.find || !Array.prototype.includes || !String.prototype.startsWith || !String.prototype.endsWith || win.NodeList && !win.NodeList.prototype.forEach || !win.fetch || !checkIfURLIsSupported() || typeof WeakMap == "undefined") {
      promises.push(import(
        /* webpackChunkName: "polyfills-core-js" */
        "./chunk-BIS6AETB.js"
      ));
    }
  }
  return Promise.all(promises);
}

// node_modules/@ionic/core/dist/esm/app-globals-232dc3ed.js
var globalScripts = initialize;

// node_modules/@ionic/core/dist/esm/loader.js
var defineCustomElements = (win, options) => __async(void 0, null, function* () {
  if (typeof window === "undefined")
    return void 0;
  yield globalScripts();
  return bootstrapLazy(JSON.parse('[["ion-menu_3",[[33,"ion-menu-button",{"color":[513],"disabled":[4],"menu":[1],"autoHide":[4,"auto-hide"],"type":[1],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]],[33,"ion-menu",{"contentId":[513,"content-id"],"menuId":[513,"menu-id"],"type":[1025],"disabled":[1028],"side":[513],"swipeGesture":[4,"swipe-gesture"],"maxEdgeStart":[2,"max-edge-start"],"isPaneVisible":[32],"isEndSide":[32],"isOpen":[64],"isActive":[64],"open":[64],"close":[64],"toggle":[64],"setOpen":[64]},[[16,"ionSplitPaneVisible","onSplitPaneChanged"],[2,"click","onBackdropClick"]],{"type":["typeChanged"],"disabled":["disabledChanged"],"side":["sideChanged"],"swipeGesture":["swipeGestureChanged"]}],[1,"ion-menu-toggle",{"menu":[1],"autoHide":[4,"auto-hide"],"visible":[32]},[[16,"ionMenuChange","visibilityChanged"],[16,"ionSplitPaneVisible","visibilityChanged"]]]]],["ion-input-password-toggle",[[33,"ion-input-password-toggle",{"color":[513],"showIcon":[1,"show-icon"],"hideIcon":[1,"hide-icon"],"type":[1025]},null,{"type":["onTypeChange"]}]]],["ion-fab_3",[[33,"ion-fab-button",{"color":[513],"activated":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1],"show":[4],"translucent":[4],"type":[1],"size":[1],"closeIcon":[1,"close-icon"]}],[1,"ion-fab",{"horizontal":[1],"vertical":[1],"edge":[4],"activated":[1028],"close":[64],"toggle":[64]},null,{"activated":["activatedChanged"]}],[1,"ion-fab-list",{"activated":[4],"side":[1]},null,{"activated":["activatedChanged"]}]]],["ion-refresher_2",[[0,"ion-refresher-content",{"pullingIcon":[1025,"pulling-icon"],"pullingText":[1,"pulling-text"],"refreshingSpinner":[1025,"refreshing-spinner"],"refreshingText":[1,"refreshing-text"]}],[32,"ion-refresher",{"pullMin":[2,"pull-min"],"pullMax":[2,"pull-max"],"closeDuration":[1,"close-duration"],"snapbackDuration":[1,"snapback-duration"],"pullFactor":[2,"pull-factor"],"disabled":[4],"nativeRefresher":[32],"state":[32],"complete":[64],"cancel":[64],"getProgress":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-back-button",[[33,"ion-back-button",{"color":[513],"defaultHref":[1025,"default-href"],"disabled":[516],"icon":[1],"text":[1],"type":[1],"routerAnimation":[16]}]]],["ion-toast",[[33,"ion-toast",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"color":[513],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"duration":[2],"header":[1],"layout":[1],"message":[1],"keyboardClose":[4,"keyboard-close"],"position":[1],"positionAnchor":[1,"position-anchor"],"buttons":[16],"translucent":[4],"animated":[4],"icon":[1],"htmlAttributes":[16],"swipeGesture":[1,"swipe-gesture"],"isOpen":[4,"is-open"],"trigger":[1],"revealContentToScreenReader":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"swipeGesture":["swipeGestureChanged"],"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-card_5",[[33,"ion-card",{"color":[513],"button":[4],"type":[1],"disabled":[4],"download":[1],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}],[32,"ion-card-content"],[33,"ion-card-header",{"color":[513],"translucent":[4]}],[33,"ion-card-subtitle",{"color":[513]}],[33,"ion-card-title",{"color":[513]}]]],["ion-item-option_3",[[33,"ion-item-option",{"color":[513],"disabled":[4],"download":[1],"expandable":[4],"href":[1],"rel":[1],"target":[1],"type":[1]}],[32,"ion-item-options",{"side":[1],"fireSwipeEvent":[64]}],[0,"ion-item-sliding",{"disabled":[4],"state":[32],"getOpenAmount":[64],"getSlidingRatio":[64],"open":[64],"close":[64],"closeOpened":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-accordion_2",[[49,"ion-accordion",{"value":[1],"disabled":[4],"readonly":[4],"toggleIcon":[1,"toggle-icon"],"toggleIconSlot":[1,"toggle-icon-slot"],"state":[32],"isNext":[32],"isPrevious":[32]},null,{"value":["valueChanged"]}],[33,"ion-accordion-group",{"animated":[4],"multiple":[4],"value":[1025],"disabled":[4],"readonly":[4],"expand":[1],"requestAccordionToggle":[64],"getAccordions":[64]},[[0,"keydown","onKeydown"]],{"value":["valueChanged"],"disabled":["disabledChanged"],"readonly":["readonlyChanged"]}]]],["ion-infinite-scroll_2",[[32,"ion-infinite-scroll-content",{"loadingSpinner":[1025,"loading-spinner"],"loadingText":[1,"loading-text"]}],[0,"ion-infinite-scroll",{"threshold":[1],"disabled":[4],"position":[1],"isLoading":[32],"complete":[64]},null,{"threshold":["thresholdChanged"],"disabled":["disabledChanged"]}]]],["ion-reorder_2",[[33,"ion-reorder",null,[[2,"click","onClick"]]],[0,"ion-reorder-group",{"disabled":[4],"state":[32],"complete":[64]},null,{"disabled":["disabledChanged"]}]]],["ion-segment_2",[[33,"ion-segment-button",{"disabled":[1028],"layout":[1],"type":[1],"value":[8],"checked":[32],"setFocus":[64]},null,{"value":["valueChanged"]}],[33,"ion-segment",{"color":[513],"disabled":[4],"scrollable":[4],"swipeGesture":[4,"swipe-gesture"],"value":[1032],"selectOnFocus":[4,"select-on-focus"],"activated":[32]},[[0,"keydown","onKeyDown"]],{"color":["colorChanged"],"swipeGesture":["swipeGestureChanged"],"value":["valueChanged"],"disabled":["disabledChanged"]}]]],["ion-tab-bar_2",[[33,"ion-tab-button",{"disabled":[4],"download":[1],"href":[1],"rel":[1],"layout":[1025],"selected":[1028],"tab":[1],"target":[1]},[[8,"ionTabBarChanged","onTabBarChanged"]]],[33,"ion-tab-bar",{"color":[513],"selectedTab":[1,"selected-tab"],"translucent":[4],"keyboardVisible":[32]},null,{"selectedTab":["selectedTabChanged"]}]]],["ion-chip",[[33,"ion-chip",{"color":[513],"outline":[4],"disabled":[4]}]]],["ion-datetime-button",[[33,"ion-datetime-button",{"color":[513],"disabled":[516],"datetime":[1],"datetimePresentation":[32],"dateText":[32],"timeText":[32],"datetimeActive":[32],"selectedButton":[32]}]]],["ion-input",[[38,"ion-input",{"color":[513],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"autofocus":[4],"clearInput":[4,"clear-input"],"clearInputIcon":[1,"clear-input-icon"],"clearOnEdit":[4,"clear-on-edit"],"counter":[4],"counterFormatter":[16],"debounce":[2],"disabled":[516],"enterkeyhint":[1],"errorText":[1,"error-text"],"fill":[1],"inputmode":[1],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"max":[8],"maxlength":[2],"min":[8],"minlength":[2],"multiple":[4],"name":[1],"pattern":[1],"placeholder":[1],"readonly":[516],"required":[4],"shape":[1],"spellcheck":[4],"step":[1],"type":[1],"value":[1032],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},null,{"debounce":["debounceChanged"],"type":["onTypeChange"],"value":["valueChanged"]}]]],["ion-searchbar",[[34,"ion-searchbar",{"color":[513],"animated":[4],"autocapitalize":[1],"autocomplete":[1],"autocorrect":[1],"cancelButtonIcon":[1,"cancel-button-icon"],"cancelButtonText":[1,"cancel-button-text"],"clearIcon":[1,"clear-icon"],"debounce":[2],"disabled":[4],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"searchIcon":[1,"search-icon"],"showCancelButton":[1,"show-cancel-button"],"showClearButton":[1,"show-clear-button"],"spellcheck":[4],"type":[1],"value":[1025],"focused":[32],"noAnimate":[32],"setFocus":[64],"getInputElement":[64]},null,{"lang":["onLangChanged"],"dir":["onDirChanged"],"debounce":["debounceChanged"],"value":["valueChanged"],"showCancelButton":["showCancelButtonChanged"]}]]],["ion-toggle",[[33,"ion-toggle",{"color":[513],"name":[1],"checked":[1028],"disabled":[4],"value":[1],"enableOnOffLabels":[4,"enable-on-off-labels"],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"activated":[32]},null,{"disabled":["disabledChanged"]}]]],["ion-nav_2",[[1,"ion-nav",{"delegate":[16],"swipeGesture":[1028,"swipe-gesture"],"animated":[4],"animation":[16],"rootParams":[16],"root":[1],"push":[64],"insert":[64],"insertPages":[64],"pop":[64],"popTo":[64],"popToRoot":[64],"removeIndex":[64],"setRoot":[64],"setPages":[64],"setRouteId":[64],"getRouteId":[64],"getActive":[64],"getByIndex":[64],"canGoBack":[64],"getPrevious":[64],"getLength":[64]},null,{"swipeGesture":["swipeGestureChanged"],"root":["rootChanged"]}],[0,"ion-nav-link",{"component":[1],"componentProps":[16],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}]]],["ion-textarea",[[38,"ion-textarea",{"color":[513],"autocapitalize":[1],"autofocus":[4],"clearOnEdit":[4,"clear-on-edit"],"debounce":[2],"disabled":[4],"fill":[1],"inputmode":[1],"enterkeyhint":[1],"maxlength":[2],"minlength":[2],"name":[1],"placeholder":[1],"readonly":[4],"required":[4],"spellcheck":[4],"cols":[514],"rows":[2],"wrap":[1],"autoGrow":[516,"auto-grow"],"value":[1025],"counter":[4],"counterFormatter":[16],"errorText":[1,"error-text"],"helperText":[1,"helper-text"],"label":[1],"labelPlacement":[1,"label-placement"],"shape":[1],"hasFocus":[32],"setFocus":[64],"getInputElement":[64]},null,{"debounce":["debounceChanged"],"value":["valueChanged"]}]]],["ion-backdrop",[[33,"ion-backdrop",{"visible":[4],"tappable":[4],"stopPropagation":[4,"stop-propagation"]},[[2,"click","onMouseDown"]]]]],["ion-loading",[[34,"ion-loading",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"message":[1],"cssClass":[1,"css-class"],"duration":[2],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"spinner":[1025],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-breadcrumb_2",[[33,"ion-breadcrumb",{"collapsed":[4],"last":[4],"showCollapsedIndicator":[4,"show-collapsed-indicator"],"color":[1],"active":[4],"disabled":[4],"download":[1],"href":[1],"rel":[1],"separator":[4],"target":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16]}],[33,"ion-breadcrumbs",{"color":[513],"maxItems":[2,"max-items"],"itemsBeforeCollapse":[2,"items-before-collapse"],"itemsAfterCollapse":[2,"items-after-collapse"],"collapsed":[32],"activeChanged":[32]},[[0,"collapsedClick","onCollapsedClick"]],{"maxItems":["maxItemsChanged"],"itemsBeforeCollapse":["maxItemsChanged"],"itemsAfterCollapse":["maxItemsChanged"]}]]],["ion-modal",[[33,"ion-modal",{"hasController":[4,"has-controller"],"overlayIndex":[2,"overlay-index"],"delegate":[16],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"breakpoints":[16],"initialBreakpoint":[2,"initial-breakpoint"],"backdropBreakpoint":[2,"backdrop-breakpoint"],"handle":[4],"handleBehavior":[1,"handle-behavior"],"component":[1],"componentProps":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"showBackdrop":[4,"show-backdrop"],"animated":[4],"presentingElement":[16],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"keepContentsMounted":[4,"keep-contents-mounted"],"focusTrap":[4,"focus-trap"],"canDismiss":[4,"can-dismiss"],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"setCurrentBreakpoint":[64],"getCurrentBreakpoint":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-route_4",[[0,"ion-route",{"url":[1],"component":[1],"componentProps":[16],"beforeLeave":[16],"beforeEnter":[16]},null,{"url":["onUpdate"],"component":["onUpdate"],"componentProps":["onComponentProps"]}],[0,"ion-route-redirect",{"from":[1],"to":[1]},null,{"from":["propDidChange"],"to":["propDidChange"]}],[0,"ion-router",{"root":[1],"useHash":[4,"use-hash"],"canTransition":[64],"push":[64],"back":[64],"printDebug":[64],"navChanged":[64]},[[8,"popstate","onPopState"],[4,"ionBackButton","onBackButton"]]],[1,"ion-router-link",{"color":[513],"href":[1],"rel":[1],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"target":[1]}]]],["ion-avatar_3",[[33,"ion-avatar"],[33,"ion-badge",{"color":[513]}],[1,"ion-thumbnail"]]],["ion-col_3",[[1,"ion-col",{"offset":[1],"offsetXs":[1,"offset-xs"],"offsetSm":[1,"offset-sm"],"offsetMd":[1,"offset-md"],"offsetLg":[1,"offset-lg"],"offsetXl":[1,"offset-xl"],"pull":[1],"pullXs":[1,"pull-xs"],"pullSm":[1,"pull-sm"],"pullMd":[1,"pull-md"],"pullLg":[1,"pull-lg"],"pullXl":[1,"pull-xl"],"push":[1],"pushXs":[1,"push-xs"],"pushSm":[1,"push-sm"],"pushMd":[1,"push-md"],"pushLg":[1,"push-lg"],"pushXl":[1,"push-xl"],"size":[1],"sizeXs":[1,"size-xs"],"sizeSm":[1,"size-sm"],"sizeMd":[1,"size-md"],"sizeLg":[1,"size-lg"],"sizeXl":[1,"size-xl"]},[[9,"resize","onResize"]]],[1,"ion-grid",{"fixed":[4]}],[1,"ion-row"]]],["ion-tab_2",[[1,"ion-tab",{"active":[1028],"delegate":[16],"tab":[1],"component":[1],"setActive":[64]},null,{"active":["changeActive"]}],[1,"ion-tabs",{"useRouter":[1028,"use-router"],"selectedTab":[32],"select":[64],"getTab":[64],"getSelected":[64],"setRouteId":[64],"getRouteId":[64]}]]],["ion-img",[[1,"ion-img",{"alt":[1],"src":[1],"loadSrc":[32],"loadError":[32]},null,{"src":["srcChanged"]}]]],["ion-progress-bar",[[33,"ion-progress-bar",{"type":[1],"reversed":[4],"value":[2],"buffer":[2],"color":[513]}]]],["ion-range",[[33,"ion-range",{"color":[513],"debounce":[2],"name":[1],"label":[1],"dualKnobs":[4,"dual-knobs"],"min":[2],"max":[2],"pin":[4],"pinFormatter":[16],"snaps":[4],"step":[2],"ticks":[4],"activeBarStart":[1026,"active-bar-start"],"disabled":[4],"value":[1026],"labelPlacement":[1,"label-placement"],"ratioA":[32],"ratioB":[32],"pressedKnob":[32]},null,{"debounce":["debounceChanged"],"min":["minChanged"],"max":["maxChanged"],"activeBarStart":["activeBarStartChanged"],"disabled":["disabledChanged"],"value":["valueChanged"]}]]],["ion-split-pane",[[33,"ion-split-pane",{"contentId":[513,"content-id"],"disabled":[4],"when":[8],"visible":[32],"isVisible":[64]},null,{"visible":["visibleChanged"],"disabled":["updateState"],"when":["updateState"]}]]],["ion-text",[[1,"ion-text",{"color":[513]}]]],["ion-select_3",[[33,"ion-select",{"cancelText":[1,"cancel-text"],"color":[513],"compareWith":[1,"compare-with"],"disabled":[4],"fill":[1],"interface":[1],"interfaceOptions":[8,"interface-options"],"justify":[1],"label":[1],"labelPlacement":[1,"label-placement"],"multiple":[4],"name":[1],"okText":[1,"ok-text"],"placeholder":[1],"selectedText":[1,"selected-text"],"toggleIcon":[1,"toggle-icon"],"expandedIcon":[1,"expanded-icon"],"shape":[1],"value":[1032],"isExpanded":[32],"open":[64]},null,{"disabled":["styleChanged"],"isExpanded":["styleChanged"],"placeholder":["styleChanged"],"value":["styleChanged"]}],[1,"ion-select-option",{"disabled":[4],"value":[8]}],[34,"ion-select-popover",{"header":[1],"subHeader":[1,"sub-header"],"message":[1],"multiple":[4],"options":[16]}]]],["ion-picker",[[33,"ion-picker",{"exitInputMode":[64]},[[1,"touchstart","preventTouchStartPropagation"]]]]],["ion-picker-column",[[1,"ion-picker-column",{"disabled":[4],"value":[1032],"color":[513],"numericInput":[4,"numeric-input"],"ariaLabel":[32],"isActive":[32],"scrollActiveItemIntoView":[64],"setValue":[64],"setFocus":[64]},null,{"aria-label":["ariaLabelChanged"],"value":["valueChange"]}]]],["ion-datetime_3",[[33,"ion-datetime",{"color":[1],"name":[1],"disabled":[4],"formatOptions":[16],"readonly":[4],"isDateEnabled":[16],"min":[1025],"max":[1025],"presentation":[1],"cancelText":[1,"cancel-text"],"doneText":[1,"done-text"],"clearText":[1,"clear-text"],"yearValues":[8,"year-values"],"monthValues":[8,"month-values"],"dayValues":[8,"day-values"],"hourValues":[8,"hour-values"],"minuteValues":[8,"minute-values"],"locale":[1],"firstDayOfWeek":[2,"first-day-of-week"],"titleSelectedDatesFormatter":[16],"multiple":[4],"highlightedDates":[16],"value":[1025],"showDefaultTitle":[4,"show-default-title"],"showDefaultButtons":[4,"show-default-buttons"],"showClearButton":[4,"show-clear-button"],"showDefaultTimeLabel":[4,"show-default-time-label"],"hourCycle":[1,"hour-cycle"],"size":[1],"preferWheel":[4,"prefer-wheel"],"showMonthAndYear":[32],"activeParts":[32],"workingParts":[32],"isTimePopoverOpen":[32],"forceRenderDate":[32],"confirm":[64],"reset":[64],"cancel":[64]},null,{"formatOptions":["formatOptionsChanged"],"disabled":["disabledChanged"],"min":["minChanged"],"max":["maxChanged"],"presentation":["presentationChanged"],"yearValues":["yearValuesChanged"],"monthValues":["monthValuesChanged"],"dayValues":["dayValuesChanged"],"hourValues":["hourValuesChanged"],"minuteValues":["minuteValuesChanged"],"value":["valueChanged"]}],[34,"ion-picker-legacy",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"columns":[16],"cssClass":[1,"css-class"],"duration":[2],"showBackdrop":[4,"show-backdrop"],"backdropDismiss":[4,"backdrop-dismiss"],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"presented":[32],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64],"getColumn":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}],[32,"ion-picker-legacy-column",{"col":[16]},null,{"col":["colChanged"]}]]],["ion-radio_2",[[33,"ion-radio",{"color":[513],"name":[1],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1],"checked":[32],"buttonTabindex":[32],"setFocus":[64],"setButtonTabindex":[64]},null,{"value":["valueChanged"]}],[0,"ion-radio-group",{"allowEmptySelection":[4,"allow-empty-selection"],"compareWith":[1,"compare-with"],"name":[1],"value":[1032]},[[4,"keydown","onKeydown"]],{"value":["valueChanged"]}]]],["ion-ripple-effect",[[1,"ion-ripple-effect",{"type":[1],"addRipple":[64]}]]],["ion-button_2",[[33,"ion-button",{"color":[513],"buttonType":[1025,"button-type"],"disabled":[516],"expand":[513],"fill":[1537],"routerDirection":[1,"router-direction"],"routerAnimation":[16],"download":[1],"href":[1],"rel":[1],"shape":[513],"size":[513],"strong":[4],"target":[1],"type":[1],"form":[1],"isCircle":[32]},null,{"disabled":["disabledChanged"]}],[1,"ion-icon",{"mode":[1025],"color":[1],"ios":[1],"md":[1],"flipRtl":[4,"flip-rtl"],"name":[513],"src":[1],"icon":[8],"size":[1],"lazy":[4],"sanitize":[4],"svgContent":[32],"isVisible":[32]},null,{"name":["loadIcon"],"src":["loadIcon"],"icon":["loadIcon"],"ios":["loadIcon"],"md":["loadIcon"]}]]],["ion-action-sheet",[[34,"ion-action-sheet",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"buttons":[16],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"header":[1],"subHeader":[1,"sub-header"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"]}]]],["ion-alert",[[34,"ion-alert",{"overlayIndex":[2,"overlay-index"],"delegate":[16],"hasController":[4,"has-controller"],"keyboardClose":[4,"keyboard-close"],"enterAnimation":[16],"leaveAnimation":[16],"cssClass":[1,"css-class"],"header":[1],"subHeader":[1,"sub-header"],"message":[1],"buttons":[16],"inputs":[1040],"backdropDismiss":[4,"backdrop-dismiss"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"isOpen":[4,"is-open"],"trigger":[1],"present":[64],"dismiss":[64],"onDidDismiss":[64],"onWillDismiss":[64]},[[4,"keydown","onKeydown"]],{"isOpen":["onIsOpenChange"],"trigger":["triggerChanged"],"buttons":["buttonsChanged"],"inputs":["inputsChanged"]}]]],["ion-app_8",[[0,"ion-app",{"setFocus":[64]}],[1,"ion-content",{"color":[513],"fullscreen":[4],"fixedSlotPlacement":[1,"fixed-slot-placement"],"forceOverscroll":[1028,"force-overscroll"],"scrollX":[4,"scroll-x"],"scrollY":[4,"scroll-y"],"scrollEvents":[4,"scroll-events"],"getScrollElement":[64],"getBackgroundElement":[64],"scrollToTop":[64],"scrollToBottom":[64],"scrollByPoint":[64],"scrollToPoint":[64]},[[9,"resize","onResize"]]],[36,"ion-footer",{"collapse":[1],"translucent":[4],"keyboardVisible":[32]}],[36,"ion-header",{"collapse":[1],"translucent":[4]}],[1,"ion-router-outlet",{"mode":[1025],"delegate":[16],"animated":[4],"animation":[16],"swipeHandler":[16],"commit":[64],"setRouteId":[64],"getRouteId":[64]},null,{"swipeHandler":["swipeHandlerChanged"]}],[33,"ion-title",{"color":[513],"size":[1]},null,{"size":["sizeChanged"]}],[33,"ion-toolbar",{"color":[513]},[[0,"ionStyle","childrenStyle"]]],[38,"ion-buttons",{"collapse":[4]}]]],["ion-picker-column-option",[[33,"ion-picker-column-option",{"disabled":[4],"value":[8],"color":[513],"ariaLabel":[32]},null,{"aria-label":["onAriaLabelChange"]}]]],["ion-popover",[[33,"ion-popover",{"hasController":[4,"has-controller"],"delegate":[16],"overlayIndex":[2,"overlay-index"],"enterAnimation":[16],"leaveAnimation":[16],"component":[1],"componentProps":[16],"keyboardClose":[4,"keyboard-close"],"cssClass":[1,"css-class"],"backdropDismiss":[4,"backdrop-dismiss"],"event":[8],"showBackdrop":[4,"show-backdrop"],"translucent":[4],"animated":[4],"htmlAttributes":[16],"triggerAction":[1,"trigger-action"],"trigger":[1],"size":[1],"dismissOnSelect":[4,"dismiss-on-select"],"reference":[1],"side":[1],"alignment":[1025],"arrow":[4],"isOpen":[4,"is-open"],"keyboardEvents":[4,"keyboard-events"],"focusTrap":[4,"focus-trap"],"keepContentsMounted":[4,"keep-contents-mounted"],"presented":[32],"presentFromTrigger":[64],"present":[64],"dismiss":[64],"getParentPopover":[64],"onDidDismiss":[64],"onWillDismiss":[64]},null,{"trigger":["onTriggerChange"],"triggerAction":["onTriggerChange"],"isOpen":["onIsOpenChange"]}]]],["ion-checkbox",[[33,"ion-checkbox",{"color":[513],"name":[1],"checked":[1028],"indeterminate":[1028],"disabled":[4],"value":[8],"labelPlacement":[1,"label-placement"],"justify":[1],"alignment":[1]}]]],["ion-spinner",[[1,"ion-spinner",{"color":[513],"duration":[2],"name":[1],"paused":[4]}]]],["ion-item_8",[[33,"ion-item-divider",{"color":[513],"sticky":[4]}],[32,"ion-item-group"],[33,"ion-note",{"color":[513]}],[1,"ion-skeleton-text",{"animated":[4]}],[33,"ion-item",{"color":[513],"button":[4],"detail":[4],"detailIcon":[1,"detail-icon"],"disabled":[4],"download":[1],"href":[1],"rel":[1],"lines":[1],"routerAnimation":[16],"routerDirection":[1,"router-direction"],"target":[1],"type":[1],"multipleInputs":[32],"focusable":[32]},[[0,"ionColor","labelColorChanged"],[0,"ionStyle","itemStyle"]],{"button":["buttonChanged"]}],[38,"ion-label",{"color":[513],"position":[1],"noAnimate":[32]},null,{"color":["colorChanged"],"position":["positionChanged"]}],[32,"ion-list",{"lines":[1],"inset":[4],"closeSlidingItems":[64]}],[33,"ion-list-header",{"color":[513],"lines":[1]}]]]]'), options);
});

// node_modules/@ionic/angular/fesm2022/ionic-angular.mjs
var _c0 = ["*"];
var _c1 = ["outletContent"];
var _c2 = ["outlet"];
var _c3 = [[["", "slot", "top"]], "*"];
var _c4 = ["[slot=top]", "*"];
function IonModal_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275elementContainer(1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template);
  }
}
function IonPopover_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.template);
  }
}
var BooleanValueAccessorDirective = class _BooleanValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  writeValue(value) {
    this.elementRef.nativeElement.checked = this.lastValue = value;
    setIonicClasses(this.elementRef);
  }
  _handleIonChange(el) {
    this.handleValueChange(el, el.checked);
  }
  /** @nocollapse */
  static \u0275fac = function BooleanValueAccessorDirective_Factory(t) {
    return new (t || _BooleanValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BooleanValueAccessorDirective,
    selectors: [["ion-checkbox"], ["ion-toggle"]],
    hostBindings: function BooleanValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("ionChange", function BooleanValueAccessorDirective_ionChange_HostBindingHandler($event) {
          return ctx._handleIonChange($event.target);
        });
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _BooleanValueAccessorDirective,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BooleanValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-checkbox,ion-toggle",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: BooleanValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleIonChange: [{
      type: HostListener,
      args: ["ionChange", ["$event.target"]]
    }]
  });
})();
var NumericValueAccessorDirective = class _NumericValueAccessorDirective extends ValueAccessor {
  el;
  constructor(injector, el) {
    super(injector, el);
    this.el = el;
  }
  handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
  registerOnChange(fn) {
    if (this.el.nativeElement.tagName === "ION-INPUT") {
      super.registerOnChange((value) => {
        fn(value === "" ? null : parseFloat(value));
      });
    } else {
      super.registerOnChange(fn);
    }
  }
  /** @nocollapse */
  static \u0275fac = function NumericValueAccessorDirective_Factory(t) {
    return new (t || _NumericValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NumericValueAccessorDirective,
    selectors: [["ion-input", "type", "number"], ["ion-range"]],
    hostBindings: function NumericValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("ionInput", function NumericValueAccessorDirective_ionInput_HostBindingHandler($event) {
          return ctx.handleInputEvent($event.target);
        });
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _NumericValueAccessorDirective,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NumericValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number],ion-range",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: NumericValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event.target"]]
    }]
  });
})();
var SelectValueAccessorDirective = class _SelectValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleChangeEvent(el) {
    this.handleValueChange(el, el.value);
  }
  /** @nocollapse */
  static \u0275fac = function SelectValueAccessorDirective_Factory(t) {
    return new (t || _SelectValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _SelectValueAccessorDirective,
    selectors: [["ion-select"], ["ion-radio-group"], ["ion-segment"], ["ion-datetime"]],
    hostBindings: function SelectValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("ionChange", function SelectValueAccessorDirective_ionChange_HostBindingHandler($event) {
          return ctx._handleChangeEvent($event.target);
        });
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _SelectValueAccessorDirective,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectValueAccessorDirective, [{
    type: Directive,
    args: [{
      /* tslint:disable-next-line:directive-selector */
      selector: "ion-select, ion-radio-group, ion-segment, ion-datetime",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: SelectValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleChangeEvent: [{
      type: HostListener,
      args: ["ionChange", ["$event.target"]]
    }]
  });
})();
var TextValueAccessorDirective = class _TextValueAccessorDirective extends ValueAccessor {
  constructor(injector, el) {
    super(injector, el);
  }
  _handleInputEvent(el) {
    this.handleValueChange(el, el.value);
  }
  /** @nocollapse */
  static \u0275fac = function TextValueAccessorDirective_Factory(t) {
    return new (t || _TextValueAccessorDirective)(\u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(ElementRef));
  };
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _TextValueAccessorDirective,
    selectors: [["ion-input", 3, "type", "number"], ["ion-textarea"], ["ion-searchbar"]],
    hostBindings: function TextValueAccessorDirective_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("ionInput", function TextValueAccessorDirective_ionInput_HostBindingHandler($event) {
          return ctx._handleInputEvent($event.target);
        });
      }
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: _TextValueAccessorDirective,
      multi: true
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextValueAccessorDirective, [{
    type: Directive,
    args: [{
      selector: "ion-input:not([type=number]),ion-textarea,ion-searchbar",
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: TextValueAccessorDirective,
        multi: true
      }]
    }]
  }], function() {
    return [{
      type: Injector
    }, {
      type: ElementRef
    }];
  }, {
    _handleInputEvent: [{
      type: HostListener,
      args: ["ionInput", ["$event.target"]]
    }]
  });
})();
var proxyInputs = (Cmp, inputs) => {
  const Prototype = Cmp.prototype;
  inputs.forEach((item) => {
    Object.defineProperty(Prototype, item, {
      get() {
        return this.el[item];
      },
      set(val) {
        this.z.runOutsideAngular(() => this.el[item] = val);
      },
      /**
       * In the event that proxyInputs is called
       * multiple times re-defining these inputs
       * will cause an error to be thrown. As a result
       * we set configurable: true to indicate these
       * properties can be changed.
       */
      configurable: true
    });
  });
};
var proxyMethods = (Cmp, methods) => {
  const Prototype = Cmp.prototype;
  methods.forEach((methodName) => {
    Prototype[methodName] = function() {
      const args = arguments;
      return this.z.runOutsideAngular(() => this.el[methodName].apply(this.el, args));
    };
  });
};
var proxyOutputs = (instance, el, events) => {
  events.forEach((eventName) => instance[eventName] = fromEvent(el, eventName));
};
function ProxyCmp(opts) {
  const decorator = function(cls) {
    const {
      defineCustomElementFn,
      inputs,
      methods
    } = opts;
    if (defineCustomElementFn !== void 0) {
      defineCustomElementFn();
    }
    if (inputs) {
      proxyInputs(cls, inputs);
    }
    if (methods) {
      proxyMethods(cls, methods);
    }
    return cls;
  };
  return decorator;
}
var IonAccordion = class IonAccordion2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonAccordion_Factory(t) {
    return new (t || IonAccordion2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonAccordion2,
    selectors: [["ion-accordion"]],
    inputs: {
      disabled: "disabled",
      mode: "mode",
      readonly: "readonly",
      toggleIcon: "toggleIcon",
      toggleIconSlot: "toggleIconSlot",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAccordion_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAccordion = __decorate([ProxyCmp({
  inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
})], IonAccordion);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordion, [{
    type: Component,
    args: [{
      selector: "ion-accordion",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "mode", "readonly", "toggleIcon", "toggleIconSlot", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonAccordionGroup = class IonAccordionGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonAccordionGroup_Factory(t) {
    return new (t || IonAccordionGroup2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonAccordionGroup2,
    selectors: [["ion-accordion-group"]],
    inputs: {
      animated: "animated",
      disabled: "disabled",
      expand: "expand",
      mode: "mode",
      multiple: "multiple",
      readonly: "readonly",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAccordionGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAccordionGroup = __decorate([ProxyCmp({
  inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
})], IonAccordionGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAccordionGroup, [{
    type: Component,
    args: [{
      selector: "ion-accordion-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "disabled", "expand", "mode", "multiple", "readonly", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonActionSheet = class IonActionSheet2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionActionSheetDidPresent", "ionActionSheetWillPresent", "ionActionSheetWillDismiss", "ionActionSheetDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonActionSheet_Factory(t) {
    return new (t || IonActionSheet2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonActionSheet2,
    selectors: [["ion-action-sheet"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      subHeader: "subHeader",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonActionSheet_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonActionSheet = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonActionSheet);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonActionSheet, [{
    type: Component,
    args: [{
      selector: "ion-action-sheet",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "subHeader", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonAlert = class IonAlert2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionAlertDidPresent", "ionAlertWillPresent", "ionAlertWillDismiss", "ionAlertDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonAlert_Factory(t) {
    return new (t || IonAlert2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonAlert2,
    selectors: [["ion-alert"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      cssClass: "cssClass",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      inputs: "inputs",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      subHeader: "subHeader",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAlert_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAlert = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonAlert);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAlert, [{
    type: Component,
    args: [{
      selector: "ion-alert",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "cssClass", "enterAnimation", "header", "htmlAttributes", "inputs", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "subHeader", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonApp = class IonApp2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonApp_Factory(t) {
    return new (t || IonApp2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonApp2,
    selectors: [["ion-app"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonApp_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonApp = __decorate([ProxyCmp({})], IonApp);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonApp, [{
    type: Component,
    args: [{
      selector: "ion-app",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonAvatar = class IonAvatar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonAvatar_Factory(t) {
    return new (t || IonAvatar2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonAvatar2,
    selectors: [["ion-avatar"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonAvatar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonAvatar = __decorate([ProxyCmp({})], IonAvatar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonAvatar, [{
    type: Component,
    args: [{
      selector: "ion-avatar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBackdrop = class IonBackdrop2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionBackdropTap"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonBackdrop_Factory(t) {
    return new (t || IonBackdrop2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonBackdrop2,
    selectors: [["ion-backdrop"]],
    inputs: {
      stopPropagation: "stopPropagation",
      tappable: "tappable",
      visible: "visible"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBackdrop_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBackdrop = __decorate([ProxyCmp({
  inputs: ["stopPropagation", "tappable", "visible"]
})], IonBackdrop);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackdrop, [{
    type: Component,
    args: [{
      selector: "ion-backdrop",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["stopPropagation", "tappable", "visible"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBadge = class IonBadge2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonBadge_Factory(t) {
    return new (t || IonBadge2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonBadge2,
    selectors: [["ion-badge"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBadge_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBadge = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonBadge);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBadge, [{
    type: Component,
    args: [{
      selector: "ion-badge",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBreadcrumb = class IonBreadcrumb2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonBreadcrumb_Factory(t) {
    return new (t || IonBreadcrumb2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonBreadcrumb2,
    selectors: [["ion-breadcrumb"]],
    inputs: {
      active: "active",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      separator: "separator",
      target: "target"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBreadcrumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBreadcrumb = __decorate([ProxyCmp({
  inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"]
})], IonBreadcrumb);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumb, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumb",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["active", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "separator", "target"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonBreadcrumbs = class IonBreadcrumbs2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionCollapsedClick"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonBreadcrumbs_Factory(t) {
    return new (t || IonBreadcrumbs2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonBreadcrumbs2,
    selectors: [["ion-breadcrumbs"]],
    inputs: {
      color: "color",
      itemsAfterCollapse: "itemsAfterCollapse",
      itemsBeforeCollapse: "itemsBeforeCollapse",
      maxItems: "maxItems",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBreadcrumbs_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonBreadcrumbs = __decorate([ProxyCmp({
  inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"]
})], IonBreadcrumbs);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBreadcrumbs, [{
    type: Component,
    args: [{
      selector: "ion-breadcrumbs",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "itemsAfterCollapse", "itemsBeforeCollapse", "maxItems", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonButton = class IonButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonButton_Factory(t) {
    return new (t || IonButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonButton2,
    selectors: [["ion-button"]],
    inputs: {
      buttonType: "buttonType",
      color: "color",
      disabled: "disabled",
      download: "download",
      expand: "expand",
      fill: "fill",
      form: "form",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      shape: "shape",
      size: "size",
      strong: "strong",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonButton = __decorate([ProxyCmp({
  inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
})], IonButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButton, [{
    type: Component,
    args: [{
      selector: "ion-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buttonType", "color", "disabled", "download", "expand", "fill", "form", "href", "mode", "rel", "routerAnimation", "routerDirection", "shape", "size", "strong", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonButtons = class IonButtons2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonButtons_Factory(t) {
    return new (t || IonButtons2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonButtons2,
    selectors: [["ion-buttons"]],
    inputs: {
      collapse: "collapse"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonButtons_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonButtons = __decorate([ProxyCmp({
  inputs: ["collapse"]
})], IonButtons);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonButtons, [{
    type: Component,
    args: [{
      selector: "ion-buttons",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCard = class IonCard2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCard_Factory(t) {
    return new (t || IonCard2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCard2,
    selectors: [["ion-card"]],
    inputs: {
      button: "button",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCard_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCard = __decorate([ProxyCmp({
  inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
})], IonCard);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCard, [{
    type: Component,
    args: [{
      selector: "ion-card",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardContent = class IonCardContent2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCardContent_Factory(t) {
    return new (t || IonCardContent2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCardContent2,
    selectors: [["ion-card-content"]],
    inputs: {
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardContent = __decorate([ProxyCmp({
  inputs: ["mode"]
})], IonCardContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardContent, [{
    type: Component,
    args: [{
      selector: "ion-card-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardHeader = class IonCardHeader2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCardHeader_Factory(t) {
    return new (t || IonCardHeader2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCardHeader2,
    selectors: [["ion-card-header"]],
    inputs: {
      color: "color",
      mode: "mode",
      translucent: "translucent"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardHeader = __decorate([ProxyCmp({
  inputs: ["color", "mode", "translucent"]
})], IonCardHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardHeader, [{
    type: Component,
    args: [{
      selector: "ion-card-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardSubtitle = class IonCardSubtitle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCardSubtitle_Factory(t) {
    return new (t || IonCardSubtitle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCardSubtitle2,
    selectors: [["ion-card-subtitle"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardSubtitle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardSubtitle = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonCardSubtitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardSubtitle, [{
    type: Component,
    args: [{
      selector: "ion-card-subtitle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCardTitle = class IonCardTitle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCardTitle_Factory(t) {
    return new (t || IonCardTitle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCardTitle2,
    selectors: [["ion-card-title"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCardTitle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCardTitle = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonCardTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCardTitle, [{
    type: Component,
    args: [{
      selector: "ion-card-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCheckbox = class IonCheckbox2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonCheckbox_Factory(t) {
    return new (t || IonCheckbox2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCheckbox2,
    selectors: [["ion-checkbox"]],
    inputs: {
      alignment: "alignment",
      checked: "checked",
      color: "color",
      disabled: "disabled",
      indeterminate: "indeterminate",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCheckbox = __decorate([ProxyCmp({
  inputs: ["alignment", "checked", "color", "disabled", "indeterminate", "justify", "labelPlacement", "mode", "name", "value"]
})], IonCheckbox);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCheckbox, [{
    type: Component,
    args: [{
      selector: "ion-checkbox",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "indeterminate", "justify", "labelPlacement", "mode", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonChip = class IonChip2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonChip_Factory(t) {
    return new (t || IonChip2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonChip2,
    selectors: [["ion-chip"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      outline: "outline"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonChip_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonChip = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "mode", "outline"]
})], IonChip);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonChip, [{
    type: Component,
    args: [{
      selector: "ion-chip",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "outline"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonCol = class IonCol2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonCol_Factory(t) {
    return new (t || IonCol2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonCol2,
    selectors: [["ion-col"]],
    inputs: {
      offset: "offset",
      offsetLg: "offsetLg",
      offsetMd: "offsetMd",
      offsetSm: "offsetSm",
      offsetXl: "offsetXl",
      offsetXs: "offsetXs",
      pull: "pull",
      pullLg: "pullLg",
      pullMd: "pullMd",
      pullSm: "pullSm",
      pullXl: "pullXl",
      pullXs: "pullXs",
      push: "push",
      pushLg: "pushLg",
      pushMd: "pushMd",
      pushSm: "pushSm",
      pushXl: "pushXl",
      pushXs: "pushXs",
      size: "size",
      sizeLg: "sizeLg",
      sizeMd: "sizeMd",
      sizeSm: "sizeSm",
      sizeXl: "sizeXl",
      sizeXs: "sizeXs"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonCol_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonCol = __decorate([ProxyCmp({
  inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"]
})], IonCol);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonCol, [{
    type: Component,
    args: [{
      selector: "ion-col",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["offset", "offsetLg", "offsetMd", "offsetSm", "offsetXl", "offsetXs", "pull", "pullLg", "pullMd", "pullSm", "pullXl", "pullXs", "push", "pushLg", "pushMd", "pushSm", "pushXl", "pushXs", "size", "sizeLg", "sizeMd", "sizeSm", "sizeXl", "sizeXs"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonContent = class IonContent2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionScrollStart", "ionScroll", "ionScrollEnd"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonContent_Factory(t) {
    return new (t || IonContent2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonContent2,
    selectors: [["ion-content"]],
    inputs: {
      color: "color",
      fixedSlotPlacement: "fixedSlotPlacement",
      forceOverscroll: "forceOverscroll",
      fullscreen: "fullscreen",
      scrollEvents: "scrollEvents",
      scrollX: "scrollX",
      scrollY: "scrollY"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonContent = __decorate([ProxyCmp({
  inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"],
  methods: ["getScrollElement", "scrollToTop", "scrollToBottom", "scrollByPoint", "scrollToPoint"]
})], IonContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonContent, [{
    type: Component,
    args: [{
      selector: "ion-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "fixedSlotPlacement", "forceOverscroll", "fullscreen", "scrollEvents", "scrollX", "scrollY"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonDatetime = class IonDatetime2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionCancel", "ionChange", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonDatetime_Factory(t) {
    return new (t || IonDatetime2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonDatetime2,
    selectors: [["ion-datetime"]],
    inputs: {
      cancelText: "cancelText",
      clearText: "clearText",
      color: "color",
      dayValues: "dayValues",
      disabled: "disabled",
      doneText: "doneText",
      firstDayOfWeek: "firstDayOfWeek",
      formatOptions: "formatOptions",
      highlightedDates: "highlightedDates",
      hourCycle: "hourCycle",
      hourValues: "hourValues",
      isDateEnabled: "isDateEnabled",
      locale: "locale",
      max: "max",
      min: "min",
      minuteValues: "minuteValues",
      mode: "mode",
      monthValues: "monthValues",
      multiple: "multiple",
      name: "name",
      preferWheel: "preferWheel",
      presentation: "presentation",
      readonly: "readonly",
      showClearButton: "showClearButton",
      showDefaultButtons: "showDefaultButtons",
      showDefaultTimeLabel: "showDefaultTimeLabel",
      showDefaultTitle: "showDefaultTitle",
      size: "size",
      titleSelectedDatesFormatter: "titleSelectedDatesFormatter",
      value: "value",
      yearValues: "yearValues"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonDatetime_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonDatetime = __decorate([ProxyCmp({
  inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "formatOptions", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"],
  methods: ["confirm", "reset", "cancel"]
})], IonDatetime);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetime, [{
    type: Component,
    args: [{
      selector: "ion-datetime",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "clearText", "color", "dayValues", "disabled", "doneText", "firstDayOfWeek", "formatOptions", "highlightedDates", "hourCycle", "hourValues", "isDateEnabled", "locale", "max", "min", "minuteValues", "mode", "monthValues", "multiple", "name", "preferWheel", "presentation", "readonly", "showClearButton", "showDefaultButtons", "showDefaultTimeLabel", "showDefaultTitle", "size", "titleSelectedDatesFormatter", "value", "yearValues"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonDatetimeButton = class IonDatetimeButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonDatetimeButton_Factory(t) {
    return new (t || IonDatetimeButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonDatetimeButton2,
    selectors: [["ion-datetime-button"]],
    inputs: {
      color: "color",
      datetime: "datetime",
      disabled: "disabled",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonDatetimeButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonDatetimeButton = __decorate([ProxyCmp({
  inputs: ["color", "datetime", "disabled", "mode"]
})], IonDatetimeButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonDatetimeButton, [{
    type: Component,
    args: [{
      selector: "ion-datetime-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "datetime", "disabled", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFab = class IonFab2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonFab_Factory(t) {
    return new (t || IonFab2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonFab2,
    selectors: [["ion-fab"]],
    inputs: {
      activated: "activated",
      edge: "edge",
      horizontal: "horizontal",
      vertical: "vertical"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFab_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFab = __decorate([ProxyCmp({
  inputs: ["activated", "edge", "horizontal", "vertical"],
  methods: ["close"]
})], IonFab);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFab, [{
    type: Component,
    args: [{
      selector: "ion-fab",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "edge", "horizontal", "vertical"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFabButton = class IonFabButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonFabButton_Factory(t) {
    return new (t || IonFabButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonFabButton2,
    selectors: [["ion-fab-button"]],
    inputs: {
      activated: "activated",
      closeIcon: "closeIcon",
      color: "color",
      disabled: "disabled",
      download: "download",
      href: "href",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      show: "show",
      size: "size",
      target: "target",
      translucent: "translucent",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFabButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFabButton = __decorate([ProxyCmp({
  inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
})], IonFabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabButton, [{
    type: Component,
    args: [{
      selector: "ion-fab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "closeIcon", "color", "disabled", "download", "href", "mode", "rel", "routerAnimation", "routerDirection", "show", "size", "target", "translucent", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFabList = class IonFabList2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonFabList_Factory(t) {
    return new (t || IonFabList2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonFabList2,
    selectors: [["ion-fab-list"]],
    inputs: {
      activated: "activated",
      side: "side"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFabList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFabList = __decorate([ProxyCmp({
  inputs: ["activated", "side"]
})], IonFabList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFabList, [{
    type: Component,
    args: [{
      selector: "ion-fab-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activated", "side"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonFooter = class IonFooter2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonFooter_Factory(t) {
    return new (t || IonFooter2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonFooter2,
    selectors: [["ion-footer"]],
    inputs: {
      collapse: "collapse",
      mode: "mode",
      translucent: "translucent"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonFooter_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonFooter = __decorate([ProxyCmp({
  inputs: ["collapse", "mode", "translucent"]
})], IonFooter);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonFooter, [{
    type: Component,
    args: [{
      selector: "ion-footer",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonGrid = class IonGrid2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonGrid_Factory(t) {
    return new (t || IonGrid2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonGrid2,
    selectors: [["ion-grid"]],
    inputs: {
      fixed: "fixed"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonGrid_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonGrid = __decorate([ProxyCmp({
  inputs: ["fixed"]
})], IonGrid);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonGrid, [{
    type: Component,
    args: [{
      selector: "ion-grid",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["fixed"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonHeader = class IonHeader2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonHeader_Factory(t) {
    return new (t || IonHeader2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonHeader2,
    selectors: [["ion-header"]],
    inputs: {
      collapse: "collapse",
      mode: "mode",
      translucent: "translucent"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonHeader = __decorate([ProxyCmp({
  inputs: ["collapse", "mode", "translucent"]
})], IonHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonHeader, [{
    type: Component,
    args: [{
      selector: "ion-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["collapse", "mode", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonIcon = class IonIcon2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonIcon_Factory(t) {
    return new (t || IonIcon2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonIcon2,
    selectors: [["ion-icon"]],
    inputs: {
      color: "color",
      flipRtl: "flipRtl",
      icon: "icon",
      ios: "ios",
      lazy: "lazy",
      md: "md",
      mode: "mode",
      name: "name",
      sanitize: "sanitize",
      size: "size",
      src: "src"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonIcon = __decorate([ProxyCmp({
  inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
})], IonIcon);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonIcon, [{
    type: Component,
    args: [{
      selector: "ion-icon",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonImg = class IonImg2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionImgWillLoad", "ionImgDidLoad", "ionError"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonImg_Factory(t) {
    return new (t || IonImg2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonImg2,
    selectors: [["ion-img"]],
    inputs: {
      alt: "alt",
      src: "src"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonImg_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonImg = __decorate([ProxyCmp({
  inputs: ["alt", "src"]
})], IonImg);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonImg, [{
    type: Component,
    args: [{
      selector: "ion-img",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alt", "src"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInfiniteScroll = class IonInfiniteScroll2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInfinite"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonInfiniteScroll_Factory(t) {
    return new (t || IonInfiniteScroll2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonInfiniteScroll2,
    selectors: [["ion-infinite-scroll"]],
    inputs: {
      disabled: "disabled",
      position: "position",
      threshold: "threshold"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInfiniteScroll_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInfiniteScroll = __decorate([ProxyCmp({
  inputs: ["disabled", "position", "threshold"],
  methods: ["complete"]
})], IonInfiniteScroll);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScroll, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "position", "threshold"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInfiniteScrollContent = class IonInfiniteScrollContent2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonInfiniteScrollContent_Factory(t) {
    return new (t || IonInfiniteScrollContent2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonInfiniteScrollContent2,
    selectors: [["ion-infinite-scroll-content"]],
    inputs: {
      loadingSpinner: "loadingSpinner",
      loadingText: "loadingText"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInfiniteScrollContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInfiniteScrollContent = __decorate([ProxyCmp({
  inputs: ["loadingSpinner", "loadingText"]
})], IonInfiniteScrollContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInfiniteScrollContent, [{
    type: Component,
    args: [{
      selector: "ion-infinite-scroll-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["loadingSpinner", "loadingText"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInput = class IonInput2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionBlur", "ionFocus"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonInput_Factory(t) {
    return new (t || IonInput2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonInput2,
    selectors: [["ion-input"]],
    inputs: {
      autocapitalize: "autocapitalize",
      autocomplete: "autocomplete",
      autocorrect: "autocorrect",
      autofocus: "autofocus",
      clearInput: "clearInput",
      clearInputIcon: "clearInputIcon",
      clearOnEdit: "clearOnEdit",
      color: "color",
      counter: "counter",
      counterFormatter: "counterFormatter",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      errorText: "errorText",
      fill: "fill",
      helperText: "helperText",
      inputmode: "inputmode",
      label: "label",
      labelPlacement: "labelPlacement",
      max: "max",
      maxlength: "maxlength",
      min: "min",
      minlength: "minlength",
      mode: "mode",
      multiple: "multiple",
      name: "name",
      pattern: "pattern",
      placeholder: "placeholder",
      readonly: "readonly",
      required: "required",
      shape: "shape",
      spellcheck: "spellcheck",
      step: "step",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInput_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInput = __decorate([ProxyCmp({
  inputs: ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearInputIcon", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "spellcheck", "step", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonInput);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInput, [{
    type: Component,
    args: [{
      selector: "ion-input",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autocapitalize", "autocomplete", "autocorrect", "autofocus", "clearInput", "clearInputIcon", "clearOnEdit", "color", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "max", "maxlength", "min", "minlength", "mode", "multiple", "name", "pattern", "placeholder", "readonly", "required", "shape", "spellcheck", "step", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonInputPasswordToggle = class IonInputPasswordToggle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonInputPasswordToggle_Factory(t) {
    return new (t || IonInputPasswordToggle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonInputPasswordToggle2,
    selectors: [["ion-input-password-toggle"]],
    inputs: {
      color: "color",
      hideIcon: "hideIcon",
      mode: "mode",
      showIcon: "showIcon"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonInputPasswordToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonInputPasswordToggle = __decorate([ProxyCmp({
  inputs: ["color", "hideIcon", "mode", "showIcon"]
})], IonInputPasswordToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonInputPasswordToggle, [{
    type: Component,
    args: [{
      selector: "ion-input-password-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "hideIcon", "mode", "showIcon"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItem = class IonItem2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonItem_Factory(t) {
    return new (t || IonItem2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItem2,
    selectors: [["ion-item"]],
    inputs: {
      button: "button",
      color: "color",
      detail: "detail",
      detailIcon: "detailIcon",
      disabled: "disabled",
      download: "download",
      href: "href",
      lines: "lines",
      mode: "mode",
      rel: "rel",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItem_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItem = __decorate([ProxyCmp({
  inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
})], IonItem);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItem, [{
    type: Component,
    args: [{
      selector: "ion-item",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["button", "color", "detail", "detailIcon", "disabled", "download", "href", "lines", "mode", "rel", "routerAnimation", "routerDirection", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemDivider = class IonItemDivider2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonItemDivider_Factory(t) {
    return new (t || IonItemDivider2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItemDivider2,
    selectors: [["ion-item-divider"]],
    inputs: {
      color: "color",
      mode: "mode",
      sticky: "sticky"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemDivider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemDivider = __decorate([ProxyCmp({
  inputs: ["color", "mode", "sticky"]
})], IonItemDivider);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemDivider, [{
    type: Component,
    args: [{
      selector: "ion-item-divider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "sticky"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemGroup = class IonItemGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonItemGroup_Factory(t) {
    return new (t || IonItemGroup2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItemGroup2,
    selectors: [["ion-item-group"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemGroup = __decorate([ProxyCmp({})], IonItemGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemGroup, [{
    type: Component,
    args: [{
      selector: "ion-item-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemOption = class IonItemOption2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonItemOption_Factory(t) {
    return new (t || IonItemOption2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItemOption2,
    selectors: [["ion-item-option"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      download: "download",
      expandable: "expandable",
      href: "href",
      mode: "mode",
      rel: "rel",
      target: "target",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemOption = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"]
})], IonItemOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOption, [{
    type: Component,
    args: [{
      selector: "ion-item-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "download", "expandable", "href", "mode", "rel", "target", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemOptions = class IonItemOptions2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSwipe"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonItemOptions_Factory(t) {
    return new (t || IonItemOptions2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItemOptions2,
    selectors: [["ion-item-options"]],
    inputs: {
      side: "side"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemOptions_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemOptions = __decorate([ProxyCmp({
  inputs: ["side"]
})], IonItemOptions);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemOptions, [{
    type: Component,
    args: [{
      selector: "ion-item-options",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["side"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonItemSliding = class IonItemSliding2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionDrag"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonItemSliding_Factory(t) {
    return new (t || IonItemSliding2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonItemSliding2,
    selectors: [["ion-item-sliding"]],
    inputs: {
      disabled: "disabled"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonItemSliding_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonItemSliding = __decorate([ProxyCmp({
  inputs: ["disabled"],
  methods: ["getOpenAmount", "getSlidingRatio", "open", "close", "closeOpened"]
})], IonItemSliding);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonItemSliding, [{
    type: Component,
    args: [{
      selector: "ion-item-sliding",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonLabel = class IonLabel2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonLabel_Factory(t) {
    return new (t || IonLabel2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonLabel2,
    selectors: [["ion-label"]],
    inputs: {
      color: "color",
      mode: "mode",
      position: "position"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonLabel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonLabel = __decorate([ProxyCmp({
  inputs: ["color", "mode", "position"]
})], IonLabel);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLabel, [{
    type: Component,
    args: [{
      selector: "ion-label",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "position"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonList = class IonList2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonList_Factory(t) {
    return new (t || IonList2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonList2,
    selectors: [["ion-list"]],
    inputs: {
      inset: "inset",
      lines: "lines",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonList_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonList = __decorate([ProxyCmp({
  inputs: ["inset", "lines", "mode"],
  methods: ["closeSlidingItems"]
})], IonList);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonList, [{
    type: Component,
    args: [{
      selector: "ion-list",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["inset", "lines", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonListHeader = class IonListHeader2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonListHeader_Factory(t) {
    return new (t || IonListHeader2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonListHeader2,
    selectors: [["ion-list-header"]],
    inputs: {
      color: "color",
      lines: "lines",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonListHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonListHeader = __decorate([ProxyCmp({
  inputs: ["color", "lines", "mode"]
})], IonListHeader);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonListHeader, [{
    type: Component,
    args: [{
      selector: "ion-list-header",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "lines", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonLoading = class IonLoading2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionLoadingDidPresent", "ionLoadingWillPresent", "ionLoadingWillDismiss", "ionLoadingDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonLoading_Factory(t) {
    return new (t || IonLoading2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonLoading2,
    selectors: [["ion-loading"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      showBackdrop: "showBackdrop",
      spinner: "spinner",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonLoading_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonLoading = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonLoading);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonLoading, [{
    type: Component,
    args: [{
      selector: "ion-loading",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "message", "mode", "showBackdrop", "spinner", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonMenu = class IonMenu2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionWillOpen", "ionWillClose", "ionDidOpen", "ionDidClose"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonMenu_Factory(t) {
    return new (t || IonMenu2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonMenu2,
    selectors: [["ion-menu"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      maxEdgeStart: "maxEdgeStart",
      menuId: "menuId",
      side: "side",
      swipeGesture: "swipeGesture",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonMenu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenu = __decorate([ProxyCmp({
  inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"],
  methods: ["isOpen", "isActive", "open", "close", "toggle", "setOpen"]
})], IonMenu);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenu, [{
    type: Component,
    args: [{
      selector: "ion-menu",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "maxEdgeStart", "menuId", "side", "swipeGesture", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonMenuButton = class IonMenuButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonMenuButton_Factory(t) {
    return new (t || IonMenuButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonMenuButton2,
    selectors: [["ion-menu-button"]],
    inputs: {
      autoHide: "autoHide",
      color: "color",
      disabled: "disabled",
      menu: "menu",
      mode: "mode",
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonMenuButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenuButton = __decorate([ProxyCmp({
  inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
})], IonMenuButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuButton, [{
    type: Component,
    args: [{
      selector: "ion-menu-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "color", "disabled", "menu", "mode", "type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonMenuToggle = class IonMenuToggle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonMenuToggle_Factory(t) {
    return new (t || IonMenuToggle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonMenuToggle2,
    selectors: [["ion-menu-toggle"]],
    inputs: {
      autoHide: "autoHide",
      menu: "menu"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonMenuToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonMenuToggle = __decorate([ProxyCmp({
  inputs: ["autoHide", "menu"]
})], IonMenuToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMenuToggle, [{
    type: Component,
    args: [{
      selector: "ion-menu-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoHide", "menu"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonNavLink = class IonNavLink2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonNavLink_Factory(t) {
    return new (t || IonNavLink2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonNavLink2,
    selectors: [["ion-nav-link"]],
    inputs: {
      component: "component",
      componentProps: "componentProps",
      routerAnimation: "routerAnimation",
      routerDirection: "routerDirection"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonNavLink_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonNavLink = __decorate([ProxyCmp({
  inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
})], IonNavLink);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNavLink, [{
    type: Component,
    args: [{
      selector: "ion-nav-link",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["component", "componentProps", "routerAnimation", "routerDirection"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonNote = class IonNote2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonNote_Factory(t) {
    return new (t || IonNote2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonNote2,
    selectors: [["ion-note"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonNote_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonNote = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonNote);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNote, [{
    type: Component,
    args: [{
      selector: "ion-note",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPicker = class IonPicker2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonPicker_Factory(t) {
    return new (t || IonPicker2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonPicker2,
    selectors: [["ion-picker"]],
    inputs: {
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPicker_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPicker = __decorate([ProxyCmp({
  inputs: ["mode"]
})], IonPicker);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPicker, [{
    type: Component,
    args: [{
      selector: "ion-picker",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPickerColumn = class IonPickerColumn2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonPickerColumn_Factory(t) {
    return new (t || IonPickerColumn2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonPickerColumn2,
    selectors: [["ion-picker-column"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPickerColumn_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerColumn = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "mode", "value"],
  methods: ["setFocus"]
})], IonPickerColumn);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumn, [{
    type: Component,
    args: [{
      selector: "ion-picker-column",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPickerColumnOption = class IonPickerColumnOption2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonPickerColumnOption_Factory(t) {
    return new (t || IonPickerColumnOption2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonPickerColumnOption2,
    selectors: [["ion-picker-column-option"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPickerColumnOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerColumnOption = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "value"]
})], IonPickerColumnOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerColumnOption, [{
    type: Component,
    args: [{
      selector: "ion-picker-column-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonPickerLegacy = class IonPickerLegacy2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionPickerDidPresent", "ionPickerWillPresent", "ionPickerWillDismiss", "ionPickerDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonPickerLegacy_Factory(t) {
    return new (t || IonPickerLegacy2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonPickerLegacy2,
    selectors: [["ion-picker-legacy"]],
    inputs: {
      animated: "animated",
      backdropDismiss: "backdropDismiss",
      buttons: "buttons",
      columns: "columns",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      htmlAttributes: "htmlAttributes",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      leaveAnimation: "leaveAnimation",
      mode: "mode",
      showBackdrop: "showBackdrop",
      trigger: "trigger"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonPickerLegacy_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonPickerLegacy = __decorate([ProxyCmp({
  inputs: ["animated", "backdropDismiss", "buttons", "columns", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss", "getColumn"]
})], IonPickerLegacy);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPickerLegacy, [{
    type: Component,
    args: [{
      selector: "ion-picker-legacy",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "backdropDismiss", "buttons", "columns", "cssClass", "duration", "enterAnimation", "htmlAttributes", "isOpen", "keyboardClose", "leaveAnimation", "mode", "showBackdrop", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonProgressBar = class IonProgressBar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonProgressBar_Factory(t) {
    return new (t || IonProgressBar2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonProgressBar2,
    selectors: [["ion-progress-bar"]],
    inputs: {
      buffer: "buffer",
      color: "color",
      mode: "mode",
      reversed: "reversed",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonProgressBar = __decorate([ProxyCmp({
  inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
})], IonProgressBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonProgressBar, [{
    type: Component,
    args: [{
      selector: "ion-progress-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["buffer", "color", "mode", "reversed", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRadio = class IonRadio2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonRadio_Factory(t) {
    return new (t || IonRadio2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRadio2,
    selectors: [["ion-radio"]],
    inputs: {
      alignment: "alignment",
      color: "color",
      disabled: "disabled",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRadio_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRadio = __decorate([ProxyCmp({
  inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "mode", "name", "value"]
})], IonRadio);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadio, [{
    type: Component,
    args: [{
      selector: "ion-radio",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "color", "disabled", "justify", "labelPlacement", "mode", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRadioGroup = class IonRadioGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonRadioGroup_Factory(t) {
    return new (t || IonRadioGroup2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRadioGroup2,
    selectors: [["ion-radio-group"]],
    inputs: {
      allowEmptySelection: "allowEmptySelection",
      compareWith: "compareWith",
      name: "name",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRadioGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRadioGroup = __decorate([ProxyCmp({
  inputs: ["allowEmptySelection", "compareWith", "name", "value"]
})], IonRadioGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRadioGroup, [{
    type: Component,
    args: [{
      selector: "ion-radio-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["allowEmptySelection", "compareWith", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRange = class IonRange2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionFocus", "ionBlur", "ionKnobMoveStart", "ionKnobMoveEnd"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonRange_Factory(t) {
    return new (t || IonRange2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRange2,
    selectors: [["ion-range"]],
    inputs: {
      activeBarStart: "activeBarStart",
      color: "color",
      debounce: "debounce",
      disabled: "disabled",
      dualKnobs: "dualKnobs",
      label: "label",
      labelPlacement: "labelPlacement",
      max: "max",
      min: "min",
      mode: "mode",
      name: "name",
      pin: "pin",
      pinFormatter: "pinFormatter",
      snaps: "snaps",
      step: "step",
      ticks: "ticks",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRange_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRange = __decorate([ProxyCmp({
  inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"]
})], IonRange);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRange, [{
    type: Component,
    args: [{
      selector: "ion-range",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["activeBarStart", "color", "debounce", "disabled", "dualKnobs", "label", "labelPlacement", "max", "min", "mode", "name", "pin", "pinFormatter", "snaps", "step", "ticks", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRefresher = class IonRefresher2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionRefresh", "ionPull", "ionStart"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonRefresher_Factory(t) {
    return new (t || IonRefresher2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRefresher2,
    selectors: [["ion-refresher"]],
    inputs: {
      closeDuration: "closeDuration",
      disabled: "disabled",
      mode: "mode",
      pullFactor: "pullFactor",
      pullMax: "pullMax",
      pullMin: "pullMin",
      snapbackDuration: "snapbackDuration"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRefresher_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRefresher = __decorate([ProxyCmp({
  inputs: ["closeDuration", "disabled", "mode", "pullFactor", "pullMax", "pullMin", "snapbackDuration"],
  methods: ["complete", "cancel", "getProgress"]
})], IonRefresher);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresher, [{
    type: Component,
    args: [{
      selector: "ion-refresher",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["closeDuration", "disabled", "mode", "pullFactor", "pullMax", "pullMin", "snapbackDuration"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRefresherContent = class IonRefresherContent2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonRefresherContent_Factory(t) {
    return new (t || IonRefresherContent2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRefresherContent2,
    selectors: [["ion-refresher-content"]],
    inputs: {
      pullingIcon: "pullingIcon",
      pullingText: "pullingText",
      refreshingSpinner: "refreshingSpinner",
      refreshingText: "refreshingText"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRefresherContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRefresherContent = __decorate([ProxyCmp({
  inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"]
})], IonRefresherContent);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRefresherContent, [{
    type: Component,
    args: [{
      selector: "ion-refresher-content",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["pullingIcon", "pullingText", "refreshingSpinner", "refreshingText"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonReorder = class IonReorder2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonReorder_Factory(t) {
    return new (t || IonReorder2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonReorder2,
    selectors: [["ion-reorder"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonReorder_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonReorder = __decorate([ProxyCmp({})], IonReorder);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorder, [{
    type: Component,
    args: [{
      selector: "ion-reorder",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonReorderGroup = class IonReorderGroup2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionItemReorder"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonReorderGroup_Factory(t) {
    return new (t || IonReorderGroup2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonReorderGroup2,
    selectors: [["ion-reorder-group"]],
    inputs: {
      disabled: "disabled"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonReorderGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonReorderGroup = __decorate([ProxyCmp({
  inputs: ["disabled"],
  methods: ["complete"]
})], IonReorderGroup);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonReorderGroup, [{
    type: Component,
    args: [{
      selector: "ion-reorder-group",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRippleEffect = class IonRippleEffect2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonRippleEffect_Factory(t) {
    return new (t || IonRippleEffect2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRippleEffect2,
    selectors: [["ion-ripple-effect"]],
    inputs: {
      type: "type"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRippleEffect_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRippleEffect = __decorate([ProxyCmp({
  inputs: ["type"],
  methods: ["addRipple"]
})], IonRippleEffect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRippleEffect, [{
    type: Component,
    args: [{
      selector: "ion-ripple-effect",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["type"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRow = class IonRow2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonRow_Factory(t) {
    return new (t || IonRow2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonRow2,
    selectors: [["ion-row"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonRow = __decorate([ProxyCmp({})], IonRow);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRow, [{
    type: Component,
    args: [{
      selector: "ion-row",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSearchbar = class IonSearchbar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionInput", "ionChange", "ionCancel", "ionClear", "ionBlur", "ionFocus"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonSearchbar_Factory(t) {
    return new (t || IonSearchbar2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSearchbar2,
    selectors: [["ion-searchbar"]],
    inputs: {
      animated: "animated",
      autocapitalize: "autocapitalize",
      autocomplete: "autocomplete",
      autocorrect: "autocorrect",
      cancelButtonIcon: "cancelButtonIcon",
      cancelButtonText: "cancelButtonText",
      clearIcon: "clearIcon",
      color: "color",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      inputmode: "inputmode",
      maxlength: "maxlength",
      minlength: "minlength",
      mode: "mode",
      name: "name",
      placeholder: "placeholder",
      searchIcon: "searchIcon",
      showCancelButton: "showCancelButton",
      showClearButton: "showClearButton",
      spellcheck: "spellcheck",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSearchbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSearchbar = __decorate([ProxyCmp({
  inputs: ["animated", "autocapitalize", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"],
  methods: ["setFocus", "getInputElement"]
})], IonSearchbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSearchbar, [{
    type: Component,
    args: [{
      selector: "ion-searchbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "autocapitalize", "autocomplete", "autocorrect", "cancelButtonIcon", "cancelButtonText", "clearIcon", "color", "debounce", "disabled", "enterkeyhint", "inputmode", "maxlength", "minlength", "mode", "name", "placeholder", "searchIcon", "showCancelButton", "showClearButton", "spellcheck", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSegment = class IonSegment2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonSegment_Factory(t) {
    return new (t || IonSegment2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSegment2,
    selectors: [["ion-segment"]],
    inputs: {
      color: "color",
      disabled: "disabled",
      mode: "mode",
      scrollable: "scrollable",
      selectOnFocus: "selectOnFocus",
      swipeGesture: "swipeGesture",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSegment_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegment = __decorate([ProxyCmp({
  inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"]
})], IonSegment);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegment, [{
    type: Component,
    args: [{
      selector: "ion-segment",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "disabled", "mode", "scrollable", "selectOnFocus", "swipeGesture", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSegmentButton = class IonSegmentButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonSegmentButton_Factory(t) {
    return new (t || IonSegmentButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSegmentButton2,
    selectors: [["ion-segment-button"]],
    inputs: {
      disabled: "disabled",
      layout: "layout",
      mode: "mode",
      type: "type",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSegmentButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSegmentButton = __decorate([ProxyCmp({
  inputs: ["disabled", "layout", "mode", "type", "value"]
})], IonSegmentButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSegmentButton, [{
    type: Component,
    args: [{
      selector: "ion-segment-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "layout", "mode", "type", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSelect = class IonSelect2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionCancel", "ionDismiss", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonSelect_Factory(t) {
    return new (t || IonSelect2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSelect2,
    selectors: [["ion-select"]],
    inputs: {
      cancelText: "cancelText",
      color: "color",
      compareWith: "compareWith",
      disabled: "disabled",
      expandedIcon: "expandedIcon",
      fill: "fill",
      interface: "interface",
      interfaceOptions: "interfaceOptions",
      justify: "justify",
      label: "label",
      labelPlacement: "labelPlacement",
      mode: "mode",
      multiple: "multiple",
      name: "name",
      okText: "okText",
      placeholder: "placeholder",
      selectedText: "selectedText",
      shape: "shape",
      toggleIcon: "toggleIcon",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSelect_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSelect = __decorate([ProxyCmp({
  inputs: ["cancelText", "color", "compareWith", "disabled", "expandedIcon", "fill", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "shape", "toggleIcon", "value"],
  methods: ["open"]
})], IonSelect);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelect, [{
    type: Component,
    args: [{
      selector: "ion-select",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["cancelText", "color", "compareWith", "disabled", "expandedIcon", "fill", "interface", "interfaceOptions", "justify", "label", "labelPlacement", "mode", "multiple", "name", "okText", "placeholder", "selectedText", "shape", "toggleIcon", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSelectOption = class IonSelectOption2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonSelectOption_Factory(t) {
    return new (t || IonSelectOption2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSelectOption2,
    selectors: [["ion-select-option"]],
    inputs: {
      disabled: "disabled",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSelectOption_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSelectOption = __decorate([ProxyCmp({
  inputs: ["disabled", "value"]
})], IonSelectOption);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSelectOption, [{
    type: Component,
    args: [{
      selector: "ion-select-option",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSkeletonText = class IonSkeletonText2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonSkeletonText_Factory(t) {
    return new (t || IonSkeletonText2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSkeletonText2,
    selectors: [["ion-skeleton-text"]],
    inputs: {
      animated: "animated"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSkeletonText_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSkeletonText = __decorate([ProxyCmp({
  inputs: ["animated"]
})], IonSkeletonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSkeletonText, [{
    type: Component,
    args: [{
      selector: "ion-skeleton-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSpinner = class IonSpinner2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonSpinner_Factory(t) {
    return new (t || IonSpinner2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSpinner2,
    selectors: [["ion-spinner"]],
    inputs: {
      color: "color",
      duration: "duration",
      name: "name",
      paused: "paused"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSpinner = __decorate([ProxyCmp({
  inputs: ["color", "duration", "name", "paused"]
})], IonSpinner);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSpinner, [{
    type: Component,
    args: [{
      selector: "ion-spinner",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "duration", "name", "paused"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonSplitPane = class IonSplitPane2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionSplitPaneVisible"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonSplitPane_Factory(t) {
    return new (t || IonSplitPane2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonSplitPane2,
    selectors: [["ion-split-pane"]],
    inputs: {
      contentId: "contentId",
      disabled: "disabled",
      when: "when"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonSplitPane_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonSplitPane = __decorate([ProxyCmp({
  inputs: ["contentId", "disabled", "when"]
})], IonSplitPane);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonSplitPane, [{
    type: Component,
    args: [{
      selector: "ion-split-pane",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["contentId", "disabled", "when"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTabBar = class IonTabBar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonTabBar_Factory(t) {
    return new (t || IonTabBar2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonTabBar2,
    selectors: [["ion-tab-bar"]],
    inputs: {
      color: "color",
      mode: "mode",
      selectedTab: "selectedTab",
      translucent: "translucent"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTabBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTabBar = __decorate([ProxyCmp({
  inputs: ["color", "mode", "selectedTab", "translucent"]
})], IonTabBar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabBar, [{
    type: Component,
    args: [{
      selector: "ion-tab-bar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode", "selectedTab", "translucent"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTabButton = class IonTabButton2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonTabButton_Factory(t) {
    return new (t || IonTabButton2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonTabButton2,
    selectors: [["ion-tab-button"]],
    inputs: {
      disabled: "disabled",
      download: "download",
      href: "href",
      layout: "layout",
      mode: "mode",
      rel: "rel",
      selected: "selected",
      tab: "tab",
      target: "target"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTabButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTabButton = __decorate([ProxyCmp({
  inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
})], IonTabButton);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabButton, [{
    type: Component,
    args: [{
      selector: "ion-tab-button",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["disabled", "download", "href", "layout", "mode", "rel", "selected", "tab", "target"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonText = class IonText2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonText_Factory(t) {
    return new (t || IonText2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonText2,
    selectors: [["ion-text"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonText_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonText = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonText);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonText, [{
    type: Component,
    args: [{
      selector: "ion-text",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTextarea = class IonTextarea2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionInput", "ionBlur", "ionFocus"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonTextarea_Factory(t) {
    return new (t || IonTextarea2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonTextarea2,
    selectors: [["ion-textarea"]],
    inputs: {
      autoGrow: "autoGrow",
      autocapitalize: "autocapitalize",
      autofocus: "autofocus",
      clearOnEdit: "clearOnEdit",
      color: "color",
      cols: "cols",
      counter: "counter",
      counterFormatter: "counterFormatter",
      debounce: "debounce",
      disabled: "disabled",
      enterkeyhint: "enterkeyhint",
      errorText: "errorText",
      fill: "fill",
      helperText: "helperText",
      inputmode: "inputmode",
      label: "label",
      labelPlacement: "labelPlacement",
      maxlength: "maxlength",
      minlength: "minlength",
      mode: "mode",
      name: "name",
      placeholder: "placeholder",
      readonly: "readonly",
      required: "required",
      rows: "rows",
      shape: "shape",
      spellcheck: "spellcheck",
      value: "value",
      wrap: "wrap"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTextarea_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTextarea = __decorate([ProxyCmp({
  inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"],
  methods: ["setFocus", "getInputElement"]
})], IonTextarea);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTextarea, [{
    type: Component,
    args: [{
      selector: "ion-textarea",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["autoGrow", "autocapitalize", "autofocus", "clearOnEdit", "color", "cols", "counter", "counterFormatter", "debounce", "disabled", "enterkeyhint", "errorText", "fill", "helperText", "inputmode", "label", "labelPlacement", "maxlength", "minlength", "mode", "name", "placeholder", "readonly", "required", "rows", "shape", "spellcheck", "value", "wrap"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonThumbnail = class IonThumbnail2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonThumbnail_Factory(t) {
    return new (t || IonThumbnail2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonThumbnail2,
    selectors: [["ion-thumbnail"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonThumbnail_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonThumbnail = __decorate([ProxyCmp({})], IonThumbnail);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonThumbnail, [{
    type: Component,
    args: [{
      selector: "ion-thumbnail",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: []
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonTitle = class IonTitle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonTitle_Factory(t) {
    return new (t || IonTitle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonTitle2,
    selectors: [["ion-title"]],
    inputs: {
      color: "color",
      size: "size"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonTitle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonTitle = __decorate([ProxyCmp({
  inputs: ["color", "size"]
})], IonTitle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTitle, [{
    type: Component,
    args: [{
      selector: "ion-title",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "size"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonToast = class IonToast2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionToastDidPresent", "ionToastWillPresent", "ionToastWillDismiss", "ionToastDidDismiss", "didPresent", "willPresent", "willDismiss", "didDismiss"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonToast_Factory(t) {
    return new (t || IonToast2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonToast2,
    selectors: [["ion-toast"]],
    inputs: {
      animated: "animated",
      buttons: "buttons",
      color: "color",
      cssClass: "cssClass",
      duration: "duration",
      enterAnimation: "enterAnimation",
      header: "header",
      htmlAttributes: "htmlAttributes",
      icon: "icon",
      isOpen: "isOpen",
      keyboardClose: "keyboardClose",
      layout: "layout",
      leaveAnimation: "leaveAnimation",
      message: "message",
      mode: "mode",
      position: "position",
      positionAnchor: "positionAnchor",
      swipeGesture: "swipeGesture",
      translucent: "translucent",
      trigger: "trigger"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonToast_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToast = __decorate([ProxyCmp({
  inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"],
  methods: ["present", "dismiss", "onDidDismiss", "onWillDismiss"]
})], IonToast);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToast, [{
    type: Component,
    args: [{
      selector: "ion-toast",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["animated", "buttons", "color", "cssClass", "duration", "enterAnimation", "header", "htmlAttributes", "icon", "isOpen", "keyboardClose", "layout", "leaveAnimation", "message", "mode", "position", "positionAnchor", "swipeGesture", "translucent", "trigger"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonToggle = class IonToggle2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ["ionChange", "ionFocus", "ionBlur"]);
  }
  /** @nocollapse */
  static \u0275fac = function IonToggle_Factory(t) {
    return new (t || IonToggle2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonToggle2,
    selectors: [["ion-toggle"]],
    inputs: {
      alignment: "alignment",
      checked: "checked",
      color: "color",
      disabled: "disabled",
      enableOnOffLabels: "enableOnOffLabels",
      justify: "justify",
      labelPlacement: "labelPlacement",
      mode: "mode",
      name: "name",
      value: "value"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToggle = __decorate([ProxyCmp({
  inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "justify", "labelPlacement", "mode", "name", "value"]
})], IonToggle);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToggle, [{
    type: Component,
    args: [{
      selector: "ion-toggle",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["alignment", "checked", "color", "disabled", "enableOnOffLabels", "justify", "labelPlacement", "mode", "name", "value"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonToolbar = class IonToolbar2 {
  z;
  el;
  constructor(c, r, z) {
    this.z = z;
    c.detach();
    this.el = r.nativeElement;
  }
  /** @nocollapse */
  static \u0275fac = function IonToolbar_Factory(t) {
    return new (t || IonToolbar2)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: IonToolbar2,
    selectors: [["ion-toolbar"]],
    inputs: {
      color: "color",
      mode: "mode"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonToolbar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
IonToolbar = __decorate([ProxyCmp({
  inputs: ["color", "mode"]
})], IonToolbar);
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonToolbar, [{
    type: Component,
    args: [{
      selector: "ion-toolbar",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: "<ng-content></ng-content>",
      // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
      inputs: ["color", "mode"]
    }]
  }], function() {
    return [{
      type: ChangeDetectorRef
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }];
  }, null);
})();
var IonRouterOutlet2 = class _IonRouterOutlet extends IonRouterOutlet {
  parentOutlet;
  /**
   * `static: true` must be set so the query results are resolved
   * before change detection runs. Otherwise, the view container
   * ref will be ion-router-outlet instead of ng-container, and
   * the first view will be added as a sibling of ion-router-outlet
   * instead of a child.
   */
  outletContent;
  /**
   * We need to pass in the correct instance of IonRouterOutlet
   * otherwise parentOutlet will be null in a nested outlet context.
   * This results in APIs such as NavController.pop not working
   * in nested outlets because the parent outlet cannot be found.
   */
  constructor(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet) {
    super(name, tabs, commonLocation, elementRef, router, zone, activatedRoute, parentOutlet);
    this.parentOutlet = parentOutlet;
  }
  /** @nocollapse */
  static \u0275fac = function IonRouterOutlet_Factory(t) {
    return new (t || _IonRouterOutlet)(\u0275\u0275injectAttribute("name"), \u0275\u0275injectAttribute("tabs"), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(_IonRouterOutlet, 12));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonRouterOutlet,
    selectors: [["ion-router-outlet"]],
    viewQuery: function IonRouterOutlet_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 7, ViewContainerRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.outletContent = _t.first);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 3,
    vars: 0,
    consts: [["outletContent", ""]],
    template: function IonRouterOutlet_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementContainerStart(0, null, 0);
        \u0275\u0275projection(2);
        \u0275\u0275elementContainerEnd();
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonRouterOutlet2, [{
    type: Component,
    args: [{
      selector: "ion-router-outlet",
      template: "<ng-container #outletContent><ng-content></ng-content></ng-container>"
    }]
  }], function() {
    return [{
      type: void 0,
      decorators: [{
        type: Attribute,
        args: ["name"]
      }]
    }, {
      type: void 0,
      decorators: [{
        type: Optional
      }, {
        type: Attribute,
        args: ["tabs"]
      }]
    }, {
      type: Location
    }, {
      type: ElementRef
    }, {
      type: Router
    }, {
      type: NgZone
    }, {
      type: ActivatedRoute
    }, {
      type: IonRouterOutlet2,
      decorators: [{
        type: SkipSelf
      }, {
        type: Optional
      }]
    }];
  }, {
    outletContent: [{
      type: ViewChild,
      args: ["outletContent", {
        read: ViewContainerRef,
        static: true
      }]
    }]
  });
})();
var IonTabs2 = class _IonTabs extends IonTabs {
  outlet;
  tabBar;
  tabBars;
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IonTabs_BaseFactory;
    return function IonTabs_Factory(t) {
      return (\u0275IonTabs_BaseFactory || (\u0275IonTabs_BaseFactory = \u0275\u0275getInheritedFactory(_IonTabs)))(t || _IonTabs);
    };
  })();
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonTabs,
    selectors: [["ion-tabs"]],
    contentQueries: function IonTabs_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, IonTabBar, 5);
        \u0275\u0275contentQuery(dirIndex, IonTabBar, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabBar = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabBars = _t);
      }
    },
    viewQuery: function IonTabs_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5, IonRouterOutlet2);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.outlet = _t.first);
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c4,
    decls: 6,
    vars: 0,
    consts: [["tabsInner", ""], ["outlet", ""], [1, "tabs-inner"], ["tabs", "true", 3, "stackWillChange", "stackDidChange"]],
    template: function IonTabs_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275projectionDef(_c3);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2, 0)(3, "ion-router-outlet", 3, 1);
        \u0275\u0275listener("stackWillChange", function IonTabs_Template_ion_router_outlet_stackWillChange_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onStackWillChange($event));
        })("stackDidChange", function IonTabs_Template_ion_router_outlet_stackDidChange_3_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onStackDidChange($event));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275projection(5, 1);
      }
    },
    dependencies: [IonRouterOutlet2],
    styles: ["[_nghost-%COMP%]{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner[_ngcontent-%COMP%]{position:relative;flex:1;contain:layout size style}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonTabs2, [{
    type: Component,
    args: [{
      selector: "ion-tabs",
      template: `
    <ng-content select="[slot=top]"></ng-content>
    <div class="tabs-inner" #tabsInner>
      <ion-router-outlet
        #outlet
        tabs="true"
        (stackWillChange)="onStackWillChange($event)"
        (stackDidChange)="onStackDidChange($event)"
      ></ion-router-outlet>
    </div>
    <ng-content></ng-content>
  `,
      styles: [":host{display:flex;position:absolute;inset:0;flex-direction:column;width:100%;height:100%;contain:layout size style}.tabs-inner{position:relative;flex:1;contain:layout size style}\n"]
    }]
  }], null, {
    outlet: [{
      type: ViewChild,
      args: ["outlet", {
        read: IonRouterOutlet2,
        static: false
      }]
    }],
    tabBar: [{
      type: ContentChild,
      args: [IonTabBar, {
        static: false
      }]
    }],
    tabBars: [{
      type: ContentChildren,
      args: [IonTabBar]
    }]
  });
})();
var IonBackButton2 = class _IonBackButton extends IonBackButton {
  constructor(routerOutlet, navCtrl, config, r, z, c) {
    super(routerOutlet, navCtrl, config, r, z, c);
  }
  /** @nocollapse */
  static \u0275fac = function IonBackButton_Factory(t) {
    return new (t || _IonBackButton)(\u0275\u0275directiveInject(IonRouterOutlet2, 8), \u0275\u0275directiveInject(NavController), \u0275\u0275directiveInject(Config), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonBackButton,
    selectors: [["ion-back-button"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonBackButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonBackButton2, [{
    type: Component,
    args: [{
      selector: "ion-back-button",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: IonRouterOutlet2,
      decorators: [{
        type: Optional
      }]
    }, {
      type: NavController
    }, {
      type: Config
    }, {
      type: ElementRef
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var IonNav2 = class _IonNav extends IonNav {
  constructor(ref, environmentInjector, injector, angularDelegate, z, c) {
    super(ref, environmentInjector, injector, angularDelegate, z, c);
  }
  /** @nocollapse */
  static \u0275fac = function IonNav_Factory(t) {
    return new (t || _IonNav)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(EnvironmentInjector), \u0275\u0275directiveInject(Injector), \u0275\u0275directiveInject(AngularDelegate), \u0275\u0275directiveInject(NgZone), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonNav,
    selectors: [["ion-nav"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function IonNav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonNav2, [{
    type: Component,
    args: [{
      selector: "ion-nav",
      template: "<ng-content></ng-content>",
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: EnvironmentInjector
    }, {
      type: Injector
    }, {
      type: AngularDelegate
    }, {
      type: NgZone
    }, {
      type: ChangeDetectorRef
    }];
  }, null);
})();
var RouterLinkDelegateDirective2 = class _RouterLinkDelegateDirective extends RouterLinkDelegateDirective {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RouterLinkDelegateDirective_BaseFactory;
    return function RouterLinkDelegateDirective_Factory(t) {
      return (\u0275RouterLinkDelegateDirective_BaseFactory || (\u0275RouterLinkDelegateDirective_BaseFactory = \u0275\u0275getInheritedFactory(_RouterLinkDelegateDirective)))(t || _RouterLinkDelegateDirective);
    };
  })();
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLinkDelegateDirective,
    selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkDelegateDirective2, [{
    type: Directive,
    args: [{
      selector: ":not(a):not(area)[routerLink]"
    }]
  }], null, null);
})();
var RouterLinkWithHrefDelegateDirective2 = class _RouterLinkWithHrefDelegateDirective extends RouterLinkWithHrefDelegateDirective {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RouterLinkWithHrefDelegateDirective_BaseFactory;
    return function RouterLinkWithHrefDelegateDirective_Factory(t) {
      return (\u0275RouterLinkWithHrefDelegateDirective_BaseFactory || (\u0275RouterLinkWithHrefDelegateDirective_BaseFactory = \u0275\u0275getInheritedFactory(_RouterLinkWithHrefDelegateDirective)))(t || _RouterLinkWithHrefDelegateDirective);
    };
  })();
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _RouterLinkWithHrefDelegateDirective,
    selectors: [["a", "routerLink", ""], ["area", "routerLink", ""]],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RouterLinkWithHrefDelegateDirective2, [{
    type: Directive,
    args: [{
      selector: "a[routerLink],area[routerLink]"
    }]
  }], null, null);
})();
var IonModal2 = class _IonModal extends IonModal {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IonModal_BaseFactory;
    return function IonModal_Factory(t) {
      return (\u0275IonModal_BaseFactory || (\u0275IonModal_BaseFactory = \u0275\u0275getInheritedFactory(_IonModal)))(t || _IonModal);
    };
  })();
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonModal,
    selectors: [["ion-modal"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["class", "ion-delegate-host ion-page", 4, "ngIf"], [1, "ion-delegate-host", "ion-page"], [3, "ngTemplateOutlet"]],
    template: function IonModal_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, IonModal_div_0_Template, 2, 1, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonModal2, [{
    type: Component,
    args: [{
      selector: "ion-modal",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div class="ion-delegate-host ion-page" *ngIf="isCmpOpen || keepContentsMounted">
    <ng-container [ngTemplateOutlet]="template"></ng-container>
  </div>`
    }]
  }], null, null);
})();
var IonPopover2 = class _IonPopover extends IonPopover {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IonPopover_BaseFactory;
    return function IonPopover_Factory(t) {
      return (\u0275IonPopover_BaseFactory || (\u0275IonPopover_BaseFactory = \u0275\u0275getInheritedFactory(_IonPopover)))(t || _IonPopover);
    };
  })();
  /** @nocollapse */
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _IonPopover,
    selectors: [["ion-popover"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [[3, "ngTemplateOutlet", 4, "ngIf"], [3, "ngTemplateOutlet"]],
    template: function IonPopover_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, IonPopover_ng_container_0_Template, 1, 1, "ng-container", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.isCmpOpen || ctx.keepContentsMounted);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonPopover2, [{
    type: Component,
    args: [{
      selector: "ion-popover",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<ng-container [ngTemplateOutlet]="template" *ngIf="isCmpOpen || keepContentsMounted"></ng-container>`
    }]
  }], null, null);
})();
var ION_MAX_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMaxValidator),
  multi: true
};
var IonMaxValidator = class _IonMaxValidator extends MaxValidator {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IonMaxValidator_BaseFactory;
    return function IonMaxValidator_Factory(t) {
      return (\u0275IonMaxValidator_BaseFactory || (\u0275IonMaxValidator_BaseFactory = \u0275\u0275getInheritedFactory(_IonMaxValidator)))(t || _IonMaxValidator);
    };
  })();
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _IonMaxValidator,
    selectors: [["ion-input", "type", "number", "max", "", "formControlName", ""], ["ion-input", "type", "number", "max", "", "formControl", ""], ["ion-input", "type", "number", "max", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function IonMaxValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("max", ctx._enabled ? ctx.max : null);
      }
    },
    features: [\u0275\u0275ProvidersFeature([ION_MAX_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMaxValidator, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number][max][formControlName],ion-input[type=number][max][formControl],ion-input[type=number][max][ngModel]",
      providers: [ION_MAX_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.max]": "_enabled ? max : null"
      }
    }]
  }], null, null);
})();
var ION_MIN_VALIDATOR = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IonMinValidator),
  multi: true
};
var IonMinValidator = class _IonMinValidator extends MinValidator {
  /** @nocollapse */
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275IonMinValidator_BaseFactory;
    return function IonMinValidator_Factory(t) {
      return (\u0275IonMinValidator_BaseFactory || (\u0275IonMinValidator_BaseFactory = \u0275\u0275getInheritedFactory(_IonMinValidator)))(t || _IonMinValidator);
    };
  })();
  /** @nocollapse */
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _IonMinValidator,
    selectors: [["ion-input", "type", "number", "min", "", "formControlName", ""], ["ion-input", "type", "number", "min", "", "formControl", ""], ["ion-input", "type", "number", "min", "", "ngModel", ""]],
    hostVars: 1,
    hostBindings: function IonMinValidator_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("min", ctx._enabled ? ctx.min : null);
      }
    },
    features: [\u0275\u0275ProvidersFeature([ION_MIN_VALIDATOR]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonMinValidator, [{
    type: Directive,
    args: [{
      selector: "ion-input[type=number][min][formControlName],ion-input[type=number][min][formControl],ion-input[type=number][min][ngModel]",
      providers: [ION_MIN_VALIDATOR],
      // eslint-disable-next-line @angular-eslint/no-host-metadata-property
      host: {
        "[attr.min]": "_enabled ? min : null"
      }
    }]
  }], null, null);
})();
var AlertController = class _AlertController extends OverlayBaseController {
  constructor() {
    super(alertController);
  }
  /** @nocollapse */
  static \u0275fac = function AlertController_Factory(t) {
    return new (t || _AlertController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AlertController,
    factory: _AlertController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AlertController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var AnimationController = class _AnimationController {
  /**
   * Create a new animation
   */
  create(animationId) {
    return createAnimation(animationId);
  }
  /**
   * EXPERIMENTAL
   *
   * Given a progression and a cubic bezier function,
   * this utility returns the time value(s) at which the
   * cubic bezier reaches the given time progression.
   *
   * If the cubic bezier never reaches the progression
   * the result will be an empty array.
   *
   * This is most useful for switching between easing curves
   * when doing a gesture animation (i.e. going from linear easing
   * during a drag, to another easing when `progressEnd` is called)
   */
  easingTime(p0, p1, p2, p3, progression) {
    return getTimeGivenProgression(p0, p1, p2, p3, progression);
  }
  /** @nocollapse */
  static \u0275fac = function AnimationController_Factory(t) {
    return new (t || _AnimationController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AnimationController,
    factory: _AnimationController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnimationController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ActionSheetController = class _ActionSheetController extends OverlayBaseController {
  constructor() {
    super(actionSheetController);
  }
  /** @nocollapse */
  static \u0275fac = function ActionSheetController_Factory(t) {
    return new (t || _ActionSheetController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ActionSheetController,
    factory: _ActionSheetController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ActionSheetController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var GestureController = class _GestureController {
  zone;
  constructor(zone) {
    this.zone = zone;
  }
  /**
   * Create a new gesture
   */
  create(opts, runInsideAngularZone = false) {
    if (runInsideAngularZone) {
      Object.getOwnPropertyNames(opts).forEach((key) => {
        if (typeof opts[key] === "function") {
          const fn = opts[key];
          opts[key] = (...props) => this.zone.run(() => fn(...props));
        }
      });
    }
    return createGesture(opts);
  }
  /** @nocollapse */
  static \u0275fac = function GestureController_Factory(t) {
    return new (t || _GestureController)(\u0275\u0275inject(NgZone));
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _GestureController,
    factory: _GestureController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GestureController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [{
      type: NgZone
    }];
  }, null);
})();
var LoadingController = class _LoadingController extends OverlayBaseController {
  constructor() {
    super(loadingController);
  }
  /** @nocollapse */
  static \u0275fac = function LoadingController_Factory(t) {
    return new (t || _LoadingController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _LoadingController,
    factory: _LoadingController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoadingController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var MenuController2 = class _MenuController extends MenuController {
  constructor() {
    super(menuController);
  }
  /** @nocollapse */
  static \u0275fac = function MenuController_Factory(t) {
    return new (t || _MenuController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MenuController,
    factory: _MenuController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuController2, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var ModalController = class _ModalController extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(modalController);
  }
  create(opts) {
    return super.create(__spreadProps(__spreadValues({}, opts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "modal")
    }));
  }
  /** @nocollapse */
  static \u0275fac = function ModalController_Factory(t) {
    return new (t || _ModalController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ModalController,
    factory: _ModalController.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModalController, [{
    type: Injectable
  }], function() {
    return [];
  }, null);
})();
var PickerController = class _PickerController extends OverlayBaseController {
  constructor() {
    super(pickerController);
  }
  /** @nocollapse */
  static \u0275fac = function PickerController_Factory(t) {
    return new (t || _PickerController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _PickerController,
    factory: _PickerController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PickerController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var PopoverController = class extends OverlayBaseController {
  angularDelegate = inject(AngularDelegate);
  injector = inject(Injector);
  environmentInjector = inject(EnvironmentInjector);
  constructor() {
    super(popoverController);
  }
  create(opts) {
    return super.create(__spreadProps(__spreadValues({}, opts), {
      delegate: this.angularDelegate.create(this.environmentInjector, this.injector, "popover")
    }));
  }
};
var ToastController = class _ToastController extends OverlayBaseController {
  constructor() {
    super(toastController);
  }
  /** @nocollapse */
  static \u0275fac = function ToastController_Factory(t) {
    return new (t || _ToastController)();
  };
  /** @nocollapse */
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToastController,
    factory: _ToastController.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToastController, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function() {
    return [];
  }, null);
})();
var appInitialize = (config, doc, zone) => {
  return () => {
    const win = doc.defaultView;
    if (win && typeof window !== "undefined") {
      setupConfig(__spreadProps(__spreadValues({}, config), {
        _zoneGate: (h) => zone.run(h)
      }));
      const aelFn = "__zone_symbol__addEventListener" in doc.body ? "__zone_symbol__addEventListener" : "addEventListener";
      return applyPolyfills().then(() => {
        return defineCustomElements(win, {
          exclude: ["ion-tabs", "ion-tab"],
          syncQueue: true,
          raf,
          jmp: (h) => zone.runOutsideAngular(h),
          ael(elm, eventName, cb, opts) {
            elm[aelFn](eventName, cb, opts);
          },
          rel(elm, eventName, cb, opts) {
            elm.removeEventListener(eventName, cb, opts);
          }
        });
      });
    }
  };
};
var DIRECTIVES = [IonAccordion, IonAccordionGroup, IonActionSheet, IonAlert, IonApp, IonAvatar, IonBackdrop, IonBadge, IonBreadcrumb, IonBreadcrumbs, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCheckbox, IonChip, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonFab, IonFabButton, IonFabList, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonInput, IonInputPasswordToggle, IonItem, IonItemDivider, IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonLoading, IonMenu, IonMenuButton, IonMenuToggle, IonNavLink, IonNote, IonPicker, IonPickerColumn, IonPickerColumnOption, IonPickerLegacy, IonProgressBar, IonRadio, IonRadioGroup, IonRange, IonRefresher, IonRefresherContent, IonReorder, IonReorderGroup, IonRippleEffect, IonRow, IonSearchbar, IonSegment, IonSegmentButton, IonSelect, IonSelectOption, IonSkeletonText, IonSpinner, IonSplitPane, IonTabBar, IonTabButton, IonText, IonTextarea, IonThumbnail, IonTitle, IonToast, IonToggle, IonToolbar];
var DECLARATIONS = [
  // generated proxies
  ...DIRECTIVES,
  // manual proxies
  IonModal2,
  IonPopover2,
  // ngModel accessors
  BooleanValueAccessorDirective,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  // navigation
  IonTabs2,
  IonRouterOutlet2,
  IonBackButton2,
  IonNav2,
  RouterLinkDelegateDirective2,
  RouterLinkWithHrefDelegateDirective2,
  // validators
  IonMinValidator,
  IonMaxValidator
];
var IonicModule = class _IonicModule {
  static forRoot(config = {}) {
    return {
      ngModule: _IonicModule,
      providers: [{
        provide: ConfigToken,
        useValue: config
      }, {
        provide: APP_INITIALIZER,
        useFactory: appInitialize,
        multi: true,
        deps: [ConfigToken, DOCUMENT, NgZone]
      }, AngularDelegate, provideComponentInputBinding()]
    };
  }
  /** @nocollapse */
  static \u0275fac = function IonicModule_Factory(t) {
    return new (t || _IonicModule)();
  };
  /** @nocollapse */
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _IonicModule
  });
  /** @nocollapse */
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [ModalController, PopoverController],
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IonicModule, [{
    type: NgModule,
    args: [{
      declarations: DECLARATIONS,
      exports: DECLARATIONS,
      providers: [ModalController, PopoverController],
      imports: [CommonModule]
    }]
  }], null, null);
})();

// src/app/services/alert.service.ts
var _AlertService = class _AlertService {
  constructor(alertCtrl, toastCtrl, loadingCtrl) {
    this.alertCtrl = alertCtrl;
    this.toastCtrl = toastCtrl;
    this.loadingCtrl = loadingCtrl;
    this.isLoading = false;
  }
  setLoader() {
    this.isLoading = !this.isLoading;
  }
  showAlert(message, header, buttonArray, inputs) {
    if (this.isLoading)
      this.hideLoader();
    this.alertCtrl.create({
      header: header ? header : "ALERT",
      message,
      inputs: inputs ? inputs : [],
      buttons: buttonArray ? buttonArray : ["Ok"]
    }).then((alertEle) => alertEle.present());
  }
  showToast(message, color, position, duration = 3e3) {
    return __async(this, null, function* () {
      const toast = yield this.toastCtrl.create({
        message,
        duration,
        color,
        position
      });
      toast.present();
    });
  }
  errorToast(message, duration = 3e3) {
    this.showToast(message ? message : "No Internet Connection", "danger", "bottom", duration);
  }
  successToast(message) {
    this.showToast(message, "success", "bottom");
  }
  showLoader(msg, spinner) {
    if (!this.isLoading)
      this.setLoader();
    return this.loadingCtrl.create({
      message: msg,
      spinner: spinner ? spinner : "bubbles"
    }).then((res) => {
      res.present().then(() => {
        if (!this.isLoading) {
          res.dismiss().then(() => {
          });
        }
      });
    }).catch((e) => {
    });
  }
  hideLoader() {
    if (this.isLoading)
      this.setLoader();
    return this.loadingCtrl.dismiss();
  }
};
_AlertService.\u0275fac = function AlertService_Factory(t) {
  return new (t || _AlertService)(\u0275\u0275inject(AlertController), \u0275\u0275inject(ToastController), \u0275\u0275inject(LoadingController));
};
_AlertService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AlertService, factory: _AlertService.\u0275fac, providedIn: "root" });
var AlertService = _AlertService;

export {
  environment,
  BooleanValueAccessorDirective,
  NumericValueAccessorDirective,
  SelectValueAccessorDirective,
  TextValueAccessorDirective,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
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
  IonToggle,
  IonicModule,
  AlertService
};
