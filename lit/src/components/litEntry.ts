if (process.env.NODE_ENV === "development") {
    window.sharedInterfacesUrl = "http://localhost:3001";
} else {
    window.sharedInterfacesUrl = `${location.origin}/shared`;
}

import("./accordion/accordion");
import("./backface-carousel/backfaceCarousel");
import("./menu-carousel/menuCarousel");
import("./autocomplete-list/autocompleteList");
import("./ciphering-text/cipheringText");
import("./color-picker/colorPicker");
import("./range-input/rangeInput");
import("./countdown/countdown");
import("./custom-select/customSelect");
import("./custom-video/customVideo");
import("./floating-panel/floatingPanel");
import("./gallery-carousel/galleryCarousel");
import("./image-comparator/imageComparator");
import("./magnifier/magnifier");
import("./one-page-scroll/onePageScroll");
import("./parallax/parallax");
import("./perspective-carousel/perspectiveCarousel");
import("./popup/popup");
import("./rebuilding-text/rebuildingText");
import("./sticky-header/stickyHeader");
import("./table-filtering/tableFiltering");
import("./tabs/tabs");
import("./toast/toast");
import("./typing-text/typingText");
import("./scrolling-ad/scrollingAd");
import("./zooming-image/zoomingImage");

import("../docs/lit/sidebar");
import("../docs/lit/header");
