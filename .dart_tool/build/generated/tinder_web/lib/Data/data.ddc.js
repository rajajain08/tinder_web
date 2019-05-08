define(['dart_sdk', 'packages/tinder_web/Data/styles'], function(dart_sdk, styles) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const Data__styles = styles.Data__styles;
  const Data__data = Object.create(dart.library);
  dart.defineLazy(Data__data, {
    /*Data__data.imageData*/get imageData() {
      return [Data__styles.image1, Data__styles.image2, Data__styles.image3, Data__styles.image4, Data__styles.image5, Data__styles.image6, Data__styles.image7, Data__styles.image8, Data__styles.image9, Data__styles.image10];
    },
    set imageData(_) {}
  });
  dart.trackLibraries("packages/tinder_web/Data/data", {
    "package:tinder_web/Data/data.dart": Data__data
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tinder_web/Data/data.dart"],"names":[],"mappings":";;;;;;;;MAEK,oBAAS;YAAG,EACf,qBACA,qBACA,qBACA,qBACA,qBACA,qBACA,qBACA,qBACA,qBACA","file":"data.ddc.js"}');
  // Exports:
  return {
    Data__data: Data__data
  };
});

//# sourceMappingURL=data.ddc.js.map
