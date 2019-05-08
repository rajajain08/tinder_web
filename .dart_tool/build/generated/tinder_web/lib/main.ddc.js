define(['dart_sdk', 'packages/flutter_web/animation', 'packages/tinder_web/SwipeAnimation/gesture_card_deck', 'packages/tinder_web/Data/data', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material'], function(dart_sdk, animation, gesture_card_deck, data, ui, animation$, material) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__widgets__binding = animation.src__widgets__binding;
  const SwipeAnimation__gesture_card_deck = gesture_card_deck.SwipeAnimation__gesture_card_deck;
  const Data__data = data.Data__data;
  const ui$ = ui.ui;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__material__colors = material.src__material__colors;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__scaffold = material.src__material__scaffold;
  const main = Object.create(dart.library);
  let dynamicToNull = () => (dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))();
  main.Example1 = class Example1 extends src__widgets__framework.StatefulWidget {
    createState() {
      return new main._Example1State.new();
    }
  };
  (main.Example1.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.Example1.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.Example1.prototype;
  dart.addTypeTests(main.Example1);
  dart.setMethodSignature(main.Example1, () => ({
    __proto__: dart.getMethods(main.Example1.__proto__),
    createState: dart.fnType(main._Example1State, [])
  }));
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  main._Example1State = class _Example1State extends src__widgets__framework.State$(main.Example1) {
    build(context) {
      return new SwipeAnimation__gesture_card_deck.GestureCardDeck1.new({isButtonFixed: false, data: Data__data.imageData, animationTime: new core.Duration.new({milliseconds: 500}), showAsDeck: true, velocityToSwipe: 1200.0, leftSwipeButton: new src__widgets__container.Container.new({height: 50.0, width: 150.0, decoration: new src__painting__box_decoration.BoxDecoration.new({color: new ui$.Color.fromRGBO(61, 135, 160, 1.0), borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(8.0))}), child: new src__widgets__basic.Center.new({child: new src__widgets__text.Text.new("NOPE", {textDirection: ui$.TextDirection.ltr, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 20, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 25, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 17, name: "textDirection"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 17, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 16, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 24, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 9, name: "height"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 9, name: "width"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 9, name: "decoration"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), rightSwipeButton: new src__widgets__container.Container.new({height: 50.0, width: 150.0, decoration: new src__painting__box_decoration.BoxDecoration.new({color: new ui$.Color.fromRGBO(95, 169, 194, 1.0), borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(8.0))}), child: new src__widgets__basic.Center.new({child: new src__widgets__text.Text.new("YEAH", {textDirection: ui$.TextDirection.ltr, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.white, fontSize: 16.0}), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 20, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 25, name: "data"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 17, name: "textDirection"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 17, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 16, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 25, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 9, name: "height"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 9, name: "width"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 9, name: "decoration"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), onSwipeLeft: dart.fn(index => {
          core.print("on swipe left");
          core.print(index);
        }, dynamicToNull()), onSwipeRight: dart.fn(index => {
          core.print("on swipe right");
          core.print(index);
        }, dynamicToNull()), onCardTap: dart.fn(index => {
          core.print("on card tap");
          core.print(index);
        }, dynamicToNull()), leftPosition: 50.0, topPosition: 90.0, leftSwipeBanner: new src__widgets__basic.Padding.new({padding: const$27 || (const$27 = dart.const(new src__painting__edge_insets.EdgeInsets.all(32.0))), child: new src__widgets__basic.Transform.rotate({angle: 0.5, child: new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({border: src__painting__box_border.Border.all({color: src__material__colors.Colors.red, width: 2.0}), borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(8.0))}), child: new src__widgets__basic.Padding.new({padding: const$28 || (const$28 = dart.const(new src__painting__edge_insets.EdgeInsets.all(8.0))), child: new src__widgets__text.Text.new("NOPE", {textDirection: ui$.TextDirection.ltr, style: new src__painting__text_style.TextStyle.new({fontSize: 24.0, color: src__material__colors.Colors.red, fontWeight: ui$.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 22, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 27, name: "data"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 94, column: 19, name: "textDirection"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 20, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$36 || (const$36 = dart.constList([const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 92, column: 15, name: "padding"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 93, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 18, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$40 || (const$40 = dart.constList([const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 13, name: "decoration"}))), const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 26, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 11, name: "angle"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 24, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$48 || (const$48 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 9, name: "padding"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), rightSwipeBanner: new src__widgets__basic.Padding.new({padding: const$50 || (const$50 = dart.const(new src__painting__edge_insets.EdgeInsets.all(32.0))), child: new src__widgets__basic.Transform.rotate({angle: -0.5, child: new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({border: src__painting__box_border.Border.all({color: src__material__colors.Colors.green, width: 2.0}), borderRadius: new src__painting__border_radius.BorderRadius.all(new ui$.Radius.circular(8.0))}), child: new src__widgets__basic.Padding.new({padding: const$51 || (const$51 = dart.const(new src__painting__edge_insets.EdgeInsets.all(8.0))), child: new src__widgets__text.Text.new("YEAH", {textDirection: ui$.TextDirection.ltr, style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.green, fontSize: 24.0, fontWeight: ui$.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 113, column: 22, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$55 || (const$55 = dart.constList([const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 113, column: 27, name: "data"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 19, name: "textDirection"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 115, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 111, column: 20, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$59 || (const$59 = dart.constList([const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 112, column: 15, name: "padding"}))), const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 113, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 18, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$63 || (const$63 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 13, name: "decoration"}))), const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 111, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 26, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$67 || (const$67 = dart.constList([const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 11, name: "angle"}))), const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 25, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$71 || (const$71 = dart.constList([const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 9, name: "padding"}))), const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 16, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$87 || (const$87 = dart.constList([const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 7, name: "isButtonFixed"}))), const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 7, name: "data"}))), const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 7, name: "animationTime"}))), const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 7, name: "showAsDeck"}))), const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 7, name: "velocityToSwipe"}))), const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 7, name: "leftSwipeButton"}))), const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 7, name: "rightSwipeButton"}))), const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 7, name: "onSwipeLeft"}))), const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 7, name: "onSwipeRight"}))), const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 7, name: "onCardTap"}))), const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 7, name: "leftPosition"}))), const$84 || (const$84 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 7, name: "topPosition"}))), const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 7, name: "leftSwipeBanner"}))), const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 7, name: "rightSwipeBanner"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (main._Example1State.new = function() {
    main._Example1State.__proto__.new.call(this);
    ;
  }).prototype = main._Example1State.prototype;
  dart.addTypeTests(main._Example1State);
  dart.setMethodSignature(main._Example1State, () => ({
    __proto__: dart.getMethods(main._Example1State.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  let const$100;
  let const$101;
  main.main = function() {
    src__widgets__binding.runApp(new src__material__app.MaterialApp.new({title: "Flutter Demo", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.blue}), home: new src__material__scaffold.Scaffold.new({body: new src__widgets__basic.Center.new({child: new main.Example1.new({$creationLocationd_0dea112b090073317d4: const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 33, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$89 || (const$89 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 15, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$92 || (const$92 = dart.constList([const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 22, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 13, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$95 || (const$95 = dart.constList([const$94 || (const$94 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 9, name: "body"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 9, file: "org-dartlang-app:///packages/tinder_web/main.dart", parameterLocations: const$100 || (const$100 = dart.constList([const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 7, name: "title"}))), const$98 || (const$98 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "theme"}))), const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 7, name: "home"})))], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/tinder_web/main", {
    "package:tinder_web/main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tinder_web/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;AAwBkC;IAAgB;;;;;;EAClD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AAOxB,YAAW,4EACM,aACT,qCACS,qCAAuB,mBAC1B,uBACK,yBACA,mDACP,aACD,mBACK,4DACK,uBAAS,IAAI,KAAK,KAAK,oBACT,kDAClB,wBAAS,gBAEf,2CACI,gCAAK,wBACqB,8BACtB,oDAAwB,8CAAiB,k7DAExC,mDACR,aACD,mBACK,4DACK,uBAAS,IAAI,KAAK,KAAK,oBACT,kDAClB,wBAAS,gBAEf,2CACI,gCAAK,wBACqB,8BACtB,oDAAwB,8CAAiB,q8DAE7C,QAAC;UACZ,WAAM;UACN,WAAM,KAAK;2CAEC,QAAC;UACb,WAAM;UACN,WAAM,KAAK;wCAEF,QAAC;UACV,WAAM;UACN,WAAM,KAAK;2CAEC,mBACD,uBACI,8CACA,iFAAe,gBACb,iDACR,YACA,uDACO,6DACO,6CAAkB,yCAAY,qBAClB,kDAAW,wBAAS,gBAC5C,8CACU,iFAAe,eACvB,gCAAK,wBACqB,8BACtB,uDACO,aACI,8CACS,k9FAKrB,8CACD,iFAAe,gBACb,iDACR,CAAC,YACD,uDACO,6DACO,6CAAkB,2CAAc,qBACpB,kDAAW,wBAAS,gBAC5C,8CACU,iFAAe,eACvB,gCAAK,wBACqB,8BACtB,oDACW,8CACJ,kBACa;IAM3C;;;;;EACF;;;;;;;;;;;;;;;;;;;;IAnHE,6BACM,+CACK,uBACI,wDACa,2CAElB,gDACE,2CAAkB;EAIhC","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
