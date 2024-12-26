import {
  findClosestIonContent,
  scrollToTop
} from "./chunk-ALOK74QR.js";
import "./chunk-7LRYXUKF.js";
import {
  readTask,
  writeTask
} from "./chunk-VMW4IG5E.js";
import {
  componentOnReady
} from "./chunk-QZNYZEIB.js";
import {
  __async
} from "./chunk-3JGBPQET.js";

// node_modules/@ionic/core/components/status-tap.js
var startStatusTap = () => {
  const win = window;
  win.addEventListener("statusTap", () => {
    readTask(() => {
      const width = win.innerWidth;
      const height = win.innerHeight;
      const el = document.elementFromPoint(width / 2, height / 2);
      if (!el) {
        return;
      }
      const contentEl = findClosestIonContent(el);
      if (contentEl) {
        new Promise((resolve) => componentOnReady(contentEl, resolve)).then(() => {
          writeTask(() => __async(void 0, null, function* () {
            contentEl.style.setProperty("--overflow", "hidden");
            yield scrollToTop(contentEl, 300);
            contentEl.style.removeProperty("--overflow");
          }));
        });
      }
    });
  });
};
export {
  startStatusTap
};
