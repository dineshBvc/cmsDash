// node_modules/ionicons/dist/esm-es5/utils-2c56d1c8.js
var CACHED_MAP;
var getIconMap = function() {
  if (typeof window === "undefined") {
    return /* @__PURE__ */ new Map();
  } else {
    if (!CACHED_MAP) {
      var t = window;
      t.Ionicons = t.Ionicons || {};
      CACHED_MAP = t.Ionicons.map = t.Ionicons.map || /* @__PURE__ */ new Map();
    }
    return CACHED_MAP;
  }
};
var addIcons = function(t) {
  Object.keys(t).forEach(function(e) {
    addToIconMap(e, t[e]);
    var r = e.replace(/([a-z0-9]|(?=[A-Z]))([A-Z0-9])/g, "$1-$2").toLowerCase();
    if (e !== r) {
      addToIconMap(r, t[e]);
    }
  });
};
var addToIconMap = function(t, e) {
  var r = getIconMap();
  var n = r.get(t);
  if (n === void 0) {
    r.set(t, e);
  } else if (n !== e) {
    console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(t, '". Ensure that multiple icons are not mapped to the same icon name.'));
  }
};

// node_modules/ionicons/icons/index.mjs
var arrowDown = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>";
var arrowUp = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 244l144-144 144 144M256 120v292' class='ionicon-fill-none'/></svg>";
var bookOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 160c16-63.16 76.43-95.41 208-96a15.94 15.94 0 0116 16v288a16 16 0 01-16 16c-128 0-177.45 25.81-208 64-30.37-38-80-64-208-64-9.88 0-16-8.05-16-17.93V80a15.94 15.94 0 0116-16c131.57.59 192 32.84 208 96zM256 160v288' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var calendarOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><rect stroke-linejoin='round' x='48' y='80' width='416' height='384' rx='48' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='296' cy='232' r='24'/><circle cx='376' cy='232' r='24'/><circle cx='296' cy='312' r='24'/><circle cx='376' cy='312' r='24'/><circle cx='136' cy='312' r='24'/><circle cx='216' cy='312' r='24'/><circle cx='136' cy='392' r='24'/><circle cx='216' cy='392' r='24'/><circle cx='296' cy='392' r='24'/><path stroke-linejoin='round' stroke-linecap='round' d='M128 48v32M384 48v32' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' d='M464 160H48' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var cardOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='48' y='96' width='416' height='320' rx='56' ry='56' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' stroke-width='60' d='M48 192h416M128 300h48v20h-48z' class='ionicon-fill-none'/></svg>";
var cashOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='32' y='80' width='448' height='256' rx='16' ry='16' transform='rotate(180 256 208)' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M64 384h384M96 432h320' class='ionicon-fill-none ionicon-stroke-width'/><circle cx='256' cy='208' r='80' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M480 160a80 80 0 01-80-80M32 160a80 80 0 0080-80M480 256a80 80 0 00-80 80M32 256a80 80 0 0180 80' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var checkmarkOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var chevronBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>";
var chevronForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>";
var createOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M384 224v184a40 40 0 01-40 40H104a40 40 0 01-40-40V168a40 40 0 0140-40h167.48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M459.94 53.25a16.06 16.06 0 00-23.22-.56L424.35 65a8 8 0 000 11.31l11.34 11.32a8 8 0 0011.34 0l12.06-12c6.1-6.09 6.67-16.01.85-22.38zM399.34 90L218.82 270.2a9 9 0 00-2.31 3.93L208.16 299a3.91 3.91 0 004.86 4.86l24.85-8.35a9 9 0 003.93-2.31L422 112.66a9 9 0 000-12.66l-9.95-10a9 9 0 00-12.71 0z'/></svg>";
var downloadOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M336 176h40a40 40 0 0140 40v208a40 40 0 01-40 40H136a40 40 0 01-40-40V216a40 40 0 0140-40h40' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M176 272l80 80 80-80M256 48v288' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var fileTrayStackedOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M48 336v96a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48v-96' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M48 336h144M320 336h144M192 336a64 64 0 00128 0' class='ionicon-fill-none ionicon-stroke-width'/><path d='M384 32H128c-26 0-43 14-48 40L48 192v96a48.14 48.14 0 0048 48h320a48.14 48.14 0 0048-48v-96L432 72c-5-27-23-40-48-40z' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-linejoin='round' d='M48 192h144M320 192h144M192 192a64 64 0 00128 0' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var homeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M80 212v236a16 16 0 0016 16h96V328a24 24 0 0124-24h80a24 24 0 0124 24v136h96a16 16 0 0016-16V212' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M480 256L266.89 52c-5-5.28-16.69-5.34-21.78 0L32 256M400 179V64h-48v69' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var logOutOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M304 336v40a40 40 0 01-40 40H104a40 40 0 01-40-40V136a40 40 0 0140-40h152c22.09 0 48 17.91 48 40v40M368 336l80-80-80-80M176 256h256' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var personOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var playBack = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M30.71 229.47l188.87-113a30.54 30.54 0 0131.09-.39 33.74 33.74 0 0116.76 29.47v79.05l180.72-108.16a30.54 30.54 0 0131.09-.39A33.74 33.74 0 01496 145.52v221A33.73 33.73 0 01479.24 396a30.54 30.54 0 01-31.09-.39L267.43 287.4v79.08A33.73 33.73 0 01250.67 396a30.54 30.54 0 01-31.09-.39l-188.87-113a31.27 31.27 0 010-53z'/></svg>";
var playForward = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M481.29 229.47l-188.87-113a30.54 30.54 0 00-31.09-.39 33.74 33.74 0 00-16.76 29.47v79.05L63.85 116.44a30.54 30.54 0 00-31.09-.39A33.74 33.74 0 0016 145.52v221A33.74 33.74 0 0032.76 396a30.54 30.54 0 0031.09-.39L244.57 287.4v79.08A33.74 33.74 0 00261.33 396a30.54 30.54 0 0031.09-.39l188.87-113a31.27 31.27 0 000-53z'/></svg>";
var qrCodeOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='336' y='336' width='80' height='80' rx='8' ry='8'/><rect x='272' y='272' width='64' height='64' rx='8' ry='8'/><rect x='416' y='416' width='64' height='64' rx='8' ry='8'/><rect x='432' y='272' width='48' height='48' rx='8' ry='8'/><rect x='272' y='432' width='48' height='48' rx='8' ry='8'/><rect x='336' y='96' width='80' height='80' rx='8' ry='8'/><rect x='288' y='48' width='176' height='176' rx='16' ry='16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='96' y='96' width='80' height='80' rx='8' ry='8'/><rect x='48' y='48' width='176' height='176' rx='16' ry='16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><rect x='96' y='336' width='80' height='80' rx='8' ry='8'/><rect x='48' y='288' width='176' height='176' rx='16' ry='16' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var radioOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256.02' r='32'/><path d='M184.25 192.25a96 96 0 000 127.52M327.77 319.77a96 96 0 000-127.52M133.28 141.28a168 168 0 000 229.44M378.72 370.72a168 168 0 000-229.44M435 416a240.34 240.34 0 000-320M77 96a240.34 240.34 0 000 320' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var search = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z'/></svg>";
var searchOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var todayOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' class='ionicon'><rect stroke-linejoin='round' x='48' y='80' width='416' height='384' rx='48' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' stroke-linecap='round' d='M128 48v32M384 48v32' class='ionicon-fill-none ionicon-stroke-width'/><rect stroke-linejoin='round' stroke-linecap='round' x='112' y='224' width='96' height='96' rx='13' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linejoin='round' stroke-linecap='round' d='M464 160H48' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var trashOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M80 112h352' class='ionicon-stroke-width'/><path d='M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>";
var walletOutline = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><rect x='48' y='144' width='416' height='288' rx='48' ry='48' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M411.36 144v-30A50 50 0 00352 64.9L88.64 109.85A50 50 0 0048 159v49' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/><path d='M368 320a32 32 0 1132-32 32 32 0 01-32 32z'/></svg>";

export {
  addIcons,
  arrowDown,
  arrowUp,
  bookOutline,
  calendarOutline,
  cardOutline,
  cashOutline,
  checkmarkOutline,
  chevronBack,
  chevronForward,
  createOutline,
  downloadOutline,
  fileTrayStackedOutline,
  homeOutline,
  logOutOutline,
  personOutline,
  playBack,
  playForward,
  qrCodeOutline,
  radioOutline,
  search,
  searchOutline,
  todayOutline,
  trashOutline,
  walletOutline
};
