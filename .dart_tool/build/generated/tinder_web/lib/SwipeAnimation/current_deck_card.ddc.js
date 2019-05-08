define(['dart_sdk', 'packages/tinder_web/SwipeAnimation/gesture_card', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui'], function(dart_sdk, gesture_card, animation, material, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const SwipeAnimation__gesture_card = gesture_card.SwipeAnimation__gesture_card;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__material__card = material.src__material__card;
  const src__material__colors = material.src__material__colors;
  const ui$ = ui.ui;
  const SwipeAnimation__current_deck_card = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
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
  SwipeAnimation__current_deck_card.CurrentDeckCard = class CurrentDeckCard extends src__widgets__framework.StatelessWidget {
    get singleData() {
      return this[singleData$];
    }
    set singleData(value) {
      super.singleData = value;
    }
    get cardWidth() {
      return this[cardWidth$];
    }
    set cardWidth(value) {
      super.cardWidth = value;
    }
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get onGestureSwipeLeft() {
      return this[onGestureSwipeLeft$];
    }
    set onGestureSwipeLeft(value) {
      super.onGestureSwipeLeft = value;
    }
    get onGestureSwipeRight() {
      return this[onGestureSwipeRight$];
    }
    set onGestureSwipeRight(value) {
      super.onGestureSwipeRight = value;
    }
    get onCardTap() {
      return this[onCardTap$];
    }
    set onCardTap(value) {
      super.onCardTap = value;
    }
    get initialPosition() {
      return this[initialPosition$];
    }
    set initialPosition(value) {
      super.initialPosition = value;
    }
    get isActive() {
      return this[isActive$];
    }
    set isActive(value) {
      super.isActive = value;
    }
    get velocityToSwipe() {
      return this[velocityToSwipe$];
    }
    set velocityToSwipe(value) {
      super.velocityToSwipe = value;
    }
    get animationTime() {
      return this[animationTime$];
    }
    set animationTime(value) {
      super.animationTime = value;
    }
    get leftSwipeButton() {
      return this[leftSwipeButton$];
    }
    set leftSwipeButton(value) {
      super.leftSwipeButton = value;
    }
    get rightSwipeButton() {
      return this[rightSwipeButton$];
    }
    set rightSwipeButton(value) {
      super.rightSwipeButton = value;
    }
    get leftSwipeBanner() {
      return this[leftSwipeBanner$];
    }
    set leftSwipeBanner(value) {
      super.leftSwipeBanner = value;
    }
    get rightSwipeBanner() {
      return this[rightSwipeBanner$];
    }
    set rightSwipeBanner(value) {
      super.rightSwipeBanner = value;
    }
    get isButtonFixed() {
      return this[isButtonFixed$];
    }
    set isButtonFixed(value) {
      super.isButtonFixed = value;
    }
    get fixedButtonPosition() {
      return this[fixedButtonPosition$];
    }
    set fixedButtonPosition(value) {
      super.fixedButtonPosition = value;
    }
    build(context) {
      return new SwipeAnimation__gesture_card.GestureCard.new({isActive: this.isActive, initialPosition: this.initialPosition, animationTime: this.animationTime, velocityToSwipe: this.velocityToSwipe, leftSwipeButton: this.leftSwipeButton, rightSwipeButton: this.rightSwipeButton, leftSwipeBanner: this.leftSwipeBanner, rightSwipeBanner: this.rightSwipeBanner, fixedButtonPosition: this.fixedButtonPosition, isButtonFixed: this.isButtonFixed, onTap: this.onCardTap, swipeLeft: dart.fn(() => {
          dart.dsend(this, 'onGestureSwipeLeft', []);
        }, VoidToNull()), swipeRight: dart.fn(() => {
          dart.dsend(this, 'onGestureSwipeRight', []);
        }, VoidToNull()), child: new src__widgets__basic.Center.new({child: new src__material__card.Card.new({color: src__material__colors.Colors.transparent, child: new src__widgets__container.Container.new({child: this.singleData, $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 18, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/current_deck_card.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 28, name: "child"})))], src__widgets__widget_inspector._Location))})))}), elevation: 4.0, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 20, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/current_deck_card.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 11, name: "color"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 11, name: "child"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 11, name: "elevation"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 14, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/current_deck_card.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 16, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/current_deck_card.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 7, name: "isActive"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 7, name: "initialPosition"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 7, name: "animationTime"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 7, name: "velocityToSwipe"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 7, name: "leftSwipeButton"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 7, name: "rightSwipeButton"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 7, name: "leftSwipeBanner"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 7, name: "rightSwipeBanner"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 7, name: "fixedButtonPosition"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 7, name: "isButtonFixed"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 7, name: "onTap"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 7, name: "swipeLeft"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 7, name: "swipeRight"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (SwipeAnimation__current_deck_card.CurrentDeckCard.new = function(opts) {
    let isActive = opts && 'isActive' in opts ? opts.isActive : true;
    let singleData = opts && 'singleData' in opts ? opts.singleData : null;
    let cardWidth = opts && 'cardWidth' in opts ? opts.cardWidth : null;
    let context = opts && 'context' in opts ? opts.context : null;
    let onGestureSwipeLeft = opts && 'onGestureSwipeLeft' in opts ? opts.onGestureSwipeLeft : null;
    let onGestureSwipeRight = opts && 'onGestureSwipeRight' in opts ? opts.onGestureSwipeRight : null;
    let onCardTap = opts && 'onCardTap' in opts ? opts.onCardTap : null;
    let initialPosition = opts && 'initialPosition' in opts ? opts.initialPosition : null;
    let velocityToSwipe = opts && 'velocityToSwipe' in opts ? opts.velocityToSwipe : null;
    let animationTime = opts && 'animationTime' in opts ? opts.animationTime : null;
    let leftSwipeButton = opts && 'leftSwipeButton' in opts ? opts.leftSwipeButton : null;
    let rightSwipeButton = opts && 'rightSwipeButton' in opts ? opts.rightSwipeButton : null;
    let leftSwipeBanner = opts && 'leftSwipeBanner' in opts ? opts.leftSwipeBanner : null;
    let rightSwipeBanner = opts && 'rightSwipeBanner' in opts ? opts.rightSwipeBanner : null;
    let fixedButtonPosition = opts && 'fixedButtonPosition' in opts ? opts.fixedButtonPosition : null;
    let isButtonFixed = opts && 'isButtonFixed' in opts ? opts.isButtonFixed : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[isActive$] = isActive;
    this[singleData$] = singleData;
    this[cardWidth$] = cardWidth;
    this[context$] = context;
    this[onGestureSwipeLeft$] = onGestureSwipeLeft;
    this[onGestureSwipeRight$] = onGestureSwipeRight;
    this[onCardTap$] = onCardTap;
    this[initialPosition$] = initialPosition;
    this[velocityToSwipe$] = velocityToSwipe;
    this[animationTime$] = animationTime;
    this[leftSwipeButton$] = leftSwipeButton;
    this[rightSwipeButton$] = rightSwipeButton;
    this[leftSwipeBanner$] = leftSwipeBanner;
    this[rightSwipeBanner$] = rightSwipeBanner;
    this[fixedButtonPosition$] = fixedButtonPosition;
    this[isButtonFixed$] = isButtonFixed;
    SwipeAnimation__current_deck_card.CurrentDeckCard.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = SwipeAnimation__current_deck_card.CurrentDeckCard.prototype;
  dart.addTypeTests(SwipeAnimation__current_deck_card.CurrentDeckCard);
  const singleData$ = Symbol("CurrentDeckCard.singleData");
  const cardWidth$ = Symbol("CurrentDeckCard.cardWidth");
  const context$ = Symbol("CurrentDeckCard.context");
  const onGestureSwipeLeft$ = Symbol("CurrentDeckCard.onGestureSwipeLeft");
  const onGestureSwipeRight$ = Symbol("CurrentDeckCard.onGestureSwipeRight");
  const onCardTap$ = Symbol("CurrentDeckCard.onCardTap");
  const initialPosition$ = Symbol("CurrentDeckCard.initialPosition");
  const isActive$ = Symbol("CurrentDeckCard.isActive");
  const velocityToSwipe$ = Symbol("CurrentDeckCard.velocityToSwipe");
  const animationTime$ = Symbol("CurrentDeckCard.animationTime");
  const leftSwipeButton$ = Symbol("CurrentDeckCard.leftSwipeButton");
  const rightSwipeButton$ = Symbol("CurrentDeckCard.rightSwipeButton");
  const leftSwipeBanner$ = Symbol("CurrentDeckCard.leftSwipeBanner");
  const rightSwipeBanner$ = Symbol("CurrentDeckCard.rightSwipeBanner");
  const isButtonFixed$ = Symbol("CurrentDeckCard.isButtonFixed");
  const fixedButtonPosition$ = Symbol("CurrentDeckCard.fixedButtonPosition");
  dart.setMethodSignature(SwipeAnimation__current_deck_card.CurrentDeckCard, () => ({
    __proto__: dart.getMethods(SwipeAnimation__current_deck_card.CurrentDeckCard.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(SwipeAnimation__current_deck_card.CurrentDeckCard, () => ({
    __proto__: dart.getFields(SwipeAnimation__current_deck_card.CurrentDeckCard.__proto__),
    singleData: dart.finalFieldType(src__widgets__framework.Widget),
    cardWidth: dart.finalFieldType(core.double),
    context: dart.finalFieldType(src__widgets__framework.BuildContext),
    onGestureSwipeLeft: dart.finalFieldType(core.Function),
    onGestureSwipeRight: dart.finalFieldType(core.Function),
    onCardTap: dart.finalFieldType(core.Function),
    initialPosition: dart.finalFieldType(ui$.Offset),
    isActive: dart.finalFieldType(core.bool),
    velocityToSwipe: dart.finalFieldType(core.double),
    animationTime: dart.finalFieldType(core.Duration),
    leftSwipeButton: dart.finalFieldType(src__widgets__framework.Widget),
    rightSwipeButton: dart.finalFieldType(src__widgets__framework.Widget),
    leftSwipeBanner: dart.finalFieldType(src__widgets__framework.Widget),
    rightSwipeBanner: dart.finalFieldType(src__widgets__framework.Widget),
    isButtonFixed: dart.finalFieldType(core.bool),
    fixedButtonPosition: dart.finalFieldType(ui$.Offset)
  }));
  dart.trackLibraries("packages/tinder_web/SwipeAnimation/current_deck_card", {
    "package:tinder_web/SwipeAnimation/current_deck_card.dart": SwipeAnimation__current_deck_card
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tinder_web/SwipeAnimation/current_deck_card.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKe;;;;;;IACA;;;;;;IACM;;;;;;IACJ;;;;;;IACA;;;;;;IACA;;;;;;IACF;;;;;;IACF;;;;;;IACE;;;;;;IACE;;;;;;IACF;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACF;;;;;;IACE;;;;;;UAqBa;AACxB,YAAW,6DACC,gCACO,qCACF,qCACE,uCACA,wCACC,wCACD,wCACC,4CACG,yCACN,2BACR,2BACI;UACT;sCAEU;UACV;iCAEK,2CACM,yCACK,iDACP,kDAAiB,2eACb;IAInB;;;QA9CO,wDAAW;QACX;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;;IAfA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;AAhBP;;EAiBE","file":"current_deck_card.ddc.js"}');
  // Exports:
  return {
    SwipeAnimation__current_deck_card: SwipeAnimation__current_deck_card
  };
});

//# sourceMappingURL=current_deck_card.ddc.js.map
