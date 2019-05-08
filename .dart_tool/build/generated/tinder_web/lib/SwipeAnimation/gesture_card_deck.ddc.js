define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/src/animation/animation', 'packages/tinder_web/SwipeAnimation/current_deck_card'], function(dart_sdk, animation, ui, assertions, animation$, current_deck_card) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const ui$ = ui.ui;
  const src__foundation__key = assertions.src__foundation__key;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__animation__animation = animation$.src__animation__animation;
  const SwipeAnimation__current_deck_card = current_deck_card.SwipeAnimation__current_deck_card;
  const SwipeAnimation__gesture_card_deck = Object.create(dart.library);
  const $take = dartx.take;
  const $toList = dartx.toList;
  const $_get = dartx._get;
  const $indexOf = dartx.indexOf;
  const $removeAt = dartx.removeAt;
  const $length = dartx.length;
  const $add = dartx.add;
  const $toString = dartx.toString;
  const $reversed = dartx.reversed;
  const $map = dartx.map;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let ValueKeyOfString = () => (ValueKeyOfString = dart.constFn(src__foundation__key.ValueKey$(core.String)))();
  let dynamicToCurrentDeckCard = () => (dynamicToCurrentDeckCard = dart.constFn(dart.fnType(SwipeAnimation__current_deck_card.CurrentDeckCard, [dart.dynamic])))();
  let const$;
  SwipeAnimation__gesture_card_deck.GestureCardDeck1 = class GestureCardDeck1 extends src__widgets__framework.StatefulWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get onSwipeRight() {
      return this[onSwipeRight$];
    }
    set onSwipeRight(value) {
      super.onSwipeRight = value;
    }
    get onSwipeLeft() {
      return this[onSwipeLeft$];
    }
    set onSwipeLeft(value) {
      super.onSwipeLeft = value;
    }
    get onCardTap() {
      return this[onCardTap$];
    }
    set onCardTap(value) {
      super.onCardTap = value;
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
    get leftPosition() {
      return this[leftPosition$];
    }
    set leftPosition(value) {
      super.leftPosition = value;
    }
    get topPosition() {
      return this[topPosition$];
    }
    set topPosition(value) {
      super.topPosition = value;
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
    get showAsDeck() {
      return this[showAsDeck$];
    }
    set showAsDeck(value) {
      super.showAsDeck = value;
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
    get showDiagoinaly() {
      return this[showDiagoinaly$];
    }
    set showDiagoinaly(value) {
      super.showDiagoinaly = value;
    }
    createState() {
      return new SwipeAnimation__gesture_card_deck.GestureCardDeck1State.new();
    }
  };
  (SwipeAnimation__gesture_card_deck.GestureCardDeck1.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let velocityToSwipe = opts && 'velocityToSwipe' in opts ? opts.velocityToSwipe : 1000.0;
    let animationTime = opts && 'animationTime' in opts ? opts.animationTime : const$ || (const$ = dart.const(new core.Duration.new({milliseconds: 100})));
    let leftPosition = opts && 'leftPosition' in opts ? opts.leftPosition : 0.0;
    let topPosition = opts && 'topPosition' in opts ? opts.topPosition : 0.0;
    let rightSwipeButton = opts && 'rightSwipeButton' in opts ? opts.rightSwipeButton : null;
    let leftSwipeButton = opts && 'leftSwipeButton' in opts ? opts.leftSwipeButton : null;
    let leftSwipeBanner = opts && 'leftSwipeBanner' in opts ? opts.leftSwipeBanner : null;
    let rightSwipeBanner = opts && 'rightSwipeBanner' in opts ? opts.rightSwipeBanner : null;
    let showAsDeck = opts && 'showAsDeck' in opts ? opts.showAsDeck : true;
    let isButtonFixed = opts && 'isButtonFixed' in opts ? opts.isButtonFixed : false;
    let fixedButtonPosition = opts && 'fixedButtonPosition' in opts ? opts.fixedButtonPosition : null;
    let showDiagoinaly = opts && 'showDiagoinaly' in opts ? opts.showDiagoinaly : false;
    let onCardTap = opts && 'onCardTap' in opts ? opts.onCardTap : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let onSwipeRight = opts && 'onSwipeRight' in opts ? opts.onSwipeRight : null;
    let onSwipeLeft = opts && 'onSwipeLeft' in opts ? opts.onSwipeLeft : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[velocityToSwipe$] = velocityToSwipe;
    this[animationTime$] = animationTime;
    this[leftPosition$] = leftPosition;
    this[topPosition$] = topPosition;
    this[rightSwipeButton$] = rightSwipeButton;
    this[leftSwipeButton$] = leftSwipeButton;
    this[leftSwipeBanner$] = leftSwipeBanner;
    this[rightSwipeBanner$] = rightSwipeBanner;
    this[showAsDeck$] = showAsDeck;
    this[isButtonFixed$] = isButtonFixed;
    this[fixedButtonPosition$] = fixedButtonPosition;
    this[showDiagoinaly$] = showDiagoinaly;
    this[onCardTap$] = onCardTap;
    this[data$] = data;
    this[onSwipeRight$] = onSwipeRight;
    this[onSwipeLeft$] = onSwipeLeft;
    SwipeAnimation__gesture_card_deck.GestureCardDeck1.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = SwipeAnimation__gesture_card_deck.GestureCardDeck1.prototype;
  dart.addTypeTests(SwipeAnimation__gesture_card_deck.GestureCardDeck1);
  const data$ = Symbol("GestureCardDeck1.data");
  const onSwipeRight$ = Symbol("GestureCardDeck1.onSwipeRight");
  const onSwipeLeft$ = Symbol("GestureCardDeck1.onSwipeLeft");
  const onCardTap$ = Symbol("GestureCardDeck1.onCardTap");
  const velocityToSwipe$ = Symbol("GestureCardDeck1.velocityToSwipe");
  const animationTime$ = Symbol("GestureCardDeck1.animationTime");
  const leftPosition$ = Symbol("GestureCardDeck1.leftPosition");
  const topPosition$ = Symbol("GestureCardDeck1.topPosition");
  const leftSwipeButton$ = Symbol("GestureCardDeck1.leftSwipeButton");
  const rightSwipeButton$ = Symbol("GestureCardDeck1.rightSwipeButton");
  const leftSwipeBanner$ = Symbol("GestureCardDeck1.leftSwipeBanner");
  const rightSwipeBanner$ = Symbol("GestureCardDeck1.rightSwipeBanner");
  const showAsDeck$ = Symbol("GestureCardDeck1.showAsDeck");
  const isButtonFixed$ = Symbol("GestureCardDeck1.isButtonFixed");
  const fixedButtonPosition$ = Symbol("GestureCardDeck1.fixedButtonPosition");
  const showDiagoinaly$ = Symbol("GestureCardDeck1.showDiagoinaly");
  dart.setMethodSignature(SwipeAnimation__gesture_card_deck.GestureCardDeck1, () => ({
    __proto__: dart.getMethods(SwipeAnimation__gesture_card_deck.GestureCardDeck1.__proto__),
    createState: dart.fnType(SwipeAnimation__gesture_card_deck.GestureCardDeck1State, [])
  }));
  dart.setFieldSignature(SwipeAnimation__gesture_card_deck.GestureCardDeck1, () => ({
    __proto__: dart.getFields(SwipeAnimation__gesture_card_deck.GestureCardDeck1.__proto__),
    data: dart.finalFieldType(core.List),
    onSwipeRight: dart.finalFieldType(core.Function),
    onSwipeLeft: dart.finalFieldType(core.Function),
    onCardTap: dart.finalFieldType(core.Function),
    velocityToSwipe: dart.finalFieldType(core.double),
    animationTime: dart.finalFieldType(core.Duration),
    leftPosition: dart.finalFieldType(core.double),
    topPosition: dart.finalFieldType(core.double),
    leftSwipeButton: dart.finalFieldType(src__widgets__framework.Widget),
    rightSwipeButton: dart.finalFieldType(src__widgets__framework.Widget),
    leftSwipeBanner: dart.finalFieldType(src__widgets__framework.Widget),
    rightSwipeBanner: dart.finalFieldType(src__widgets__framework.Widget),
    showAsDeck: dart.finalFieldType(core.bool),
    isButtonFixed: dart.finalFieldType(core.bool),
    fixedButtonPosition: dart.finalFieldType(ui$.Offset),
    showDiagoinaly: dart.finalFieldType(core.bool)
  }));
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
  const State_TickerProviderStateMixin$ = class State_TickerProviderStateMixin extends src__widgets__framework.State$(SwipeAnimation__gesture_card_deck.GestureCardDeck1) {};
  (State_TickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.TickerProviderStateMixin$(SwipeAnimation__gesture_card_deck.GestureCardDeck1)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$, src__widgets__ticker_provider.TickerProviderStateMixin$(SwipeAnimation__gesture_card_deck.GestureCardDeck1));
  SwipeAnimation__gesture_card_deck.GestureCardDeck1State = class GestureCardDeck1State extends State_TickerProviderStateMixin$ {
    get rotate() {
      return this[rotate];
    }
    set rotate(value) {
      this[rotate] = value;
    }
    get right() {
      return this[right];
    }
    set right(value) {
      this[right] = value;
    }
    get bottom() {
      return this[bottom];
    }
    set bottom(value) {
      this[bottom] = value;
    }
    get width() {
      return this[width];
    }
    set width(value) {
      this[width] = value;
    }
    get flag() {
      return this[flag];
    }
    set flag(value) {
      this[flag] = value;
    }
    get data() {
      return this[data];
    }
    set data(value) {
      this[data] = value;
    }
    get showData() {
      return this[showData];
    }
    set showData(value) {
      this[showData] = value;
    }
    get selectedData() {
      return this[selectedData];
    }
    set selectedData(value) {
      this[selectedData] = value;
    }
    initState() {
      super.initState();
      this.data = this.widget.data;
      this.showData = this.data[$take](5)[$toList]();
    }
    onGestureSwipeLeft() {
      this.setState(dart.fn(() => {
        dart.dsend(this.widget, 'onSwipeLeft', [this.data[$indexOf](this.showData[$_get](0))]);
        this.showData[$removeAt](0);
        SwipeAnimation__gesture_card_deck.GestureCardDeck1State.i = dart.notNull(SwipeAnimation__gesture_card_deck.GestureCardDeck1State.i) + 1;
      }, VoidToNull()));
      if (this.showData[$length] !== 0) if (dart.notNull(this.data[$length]) >= 5 + dart.notNull(this.data[$indexOf](this.showData[$_get](0)))) {
        let j = this.data[$_get](4 + dart.notNull(this.data[$indexOf](this.showData[$_get](0))));
        this.showData[$add](j);
      }
    }
    onGestureSwipeRight() {
      this.setState(dart.fn(() => {
        dart.dsend(this.widget, 'onSwipeRight', [this.data[$indexOf](this.showData[$_get](0))]);
        this.showData[$removeAt](0);
        SwipeAnimation__gesture_card_deck.GestureCardDeck1State.i = dart.notNull(SwipeAnimation__gesture_card_deck.GestureCardDeck1State.i) + 1;
      }, VoidToNull()));
      if (this.showData[$length] !== 0) if (dart.notNull(this.data[$length]) >= 5 + dart.notNull(this.data[$indexOf](this.showData[$_get](0)))) {
        let j = this.data[$_get](4 + dart.notNull(this.data[$indexOf](this.showData[$_get](0))));
        this.showData[$add](j);
      }
    }
    onCardTap() {
      dart.dsend(this.widget, 'onCardTap', [this.data[$indexOf](this.showData[$_get](0))]);
    }
    build(context) {
      let key = dart.toString(math.Random.new().nextDouble());
      let backCardPosition = this.widget.topPosition;
      let backCardLeftPosition = this.widget.leftPosition;
      let backCardWidth = -10.0;
      return new src__widgets__basic.Stack.new({key: new (ValueKeyOfString()).new(key), alignment: src__painting__alignment.AlignmentDirectional.center, children: this.showData[$reversed][$map](SwipeAnimation__current_deck_card.CurrentDeckCard, dart.fn(item => {
          if (this.showData[$indexOf](item) === 0) {
            return new SwipeAnimation__current_deck_card.CurrentDeckCard.new({isActive: true, initialPosition: new ui$.Offset.new(dart.test(this.widget.showDiagoinaly) ? dart.notNull(this.widget.leftPosition) + dart.notNull(this.showData[$length]) * 10 : this.widget.leftPosition, dart.test(this.widget.showAsDeck) ? dart.notNull(backCardPosition) + 10 : backCardPosition), singleData: src__widgets__framework.Widget._check(item), cardWidth: backCardWidth + 10, context: context, onGestureSwipeLeft: dart.bind(this, 'onGestureSwipeLeft'), onGestureSwipeRight: dart.bind(this, 'onGestureSwipeRight'), onCardTap: dart.bind(this, 'onCardTap'), velocityToSwipe: this.widget.velocityToSwipe, animationTime: this.widget.animationTime, leftSwipeButton: this.widget.leftSwipeButton, rightSwipeButton: this.widget.rightSwipeButton, leftSwipeBanner: this.widget.leftSwipeBanner, rightSwipeBanner: this.widget.rightSwipeBanner, fixedButtonPosition: this.widget.fixedButtonPosition, isButtonFixed: this.widget.isButtonFixed, $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 18, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card_deck.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 13, name: "isActive"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 13, name: "initialPosition"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 112, column: 13, name: "singleData"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 113, column: 13, name: "cardWidth"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 13, name: "context"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 115, column: 13, name: "onGestureSwipeLeft"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 13, name: "onGestureSwipeRight"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 13, name: "onCardTap"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 13, name: "velocityToSwipe"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 119, column: 13, name: "animationTime"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 120, column: 13, name: "leftSwipeButton"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 13, name: "rightSwipeButton"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 13, name: "leftSwipeBanner"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 13, name: "rightSwipeBanner"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 124, column: 13, name: "fixedButtonPosition"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 13, name: "isButtonFixed"})))], src__widgets__widget_inspector._Location))})))});
          } else {
            if (dart.test(this.widget.showAsDeck)) {
              backCardPosition = dart.notNull(backCardPosition) + 10;
              if (dart.test(this.widget.showDiagoinaly)) backCardLeftPosition = dart.notNull(backCardLeftPosition) + 10;
            }
            if (dart.test(this.widget.showAsDeck)) return new SwipeAnimation__current_deck_card.CurrentDeckCard.new({isActive: false, fixedButtonPosition: this.widget.fixedButtonPosition, initialPosition: new ui$.Offset.new(backCardLeftPosition, backCardPosition), singleData: src__widgets__framework.Widget._check(item), cardWidth: backCardWidth, context: context, onGestureSwipeLeft: dart.bind(this, 'onGestureSwipeLeft'), onGestureSwipeRight: dart.bind(this, 'onGestureSwipeRight'), onCardTap: this.widget.onCardTap, leftSwipeButton: this.widget.leftSwipeButton, rightSwipeButton: this.widget.rightSwipeButton, isButtonFixed: this.widget.isButtonFixed, $creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 20, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card_deck.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 136, column: 15, name: "isActive"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 15, name: "fixedButtonPosition"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 138, column: 15, name: "initialPosition"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 139, column: 15, name: "singleData"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 140, column: 15, name: "cardWidth"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 141, column: 15, name: "context"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 15, name: "onGestureSwipeLeft"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 15, name: "onGestureSwipeRight"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 15, name: "onCardTap"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 15, name: "leftSwipeButton"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 146, column: 15, name: "rightSwipeButton"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 147, column: 15, name: "isButtonFixed"})))], src__widgets__widget_inspector._Location))})))});
          }
        }, dynamicToCurrentDeckCard()))[$toList](), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 16, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card_deck.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 7, name: "key"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 7, name: "alignment"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (SwipeAnimation__gesture_card_deck.GestureCardDeck1State.new = function() {
    this[rotate] = null;
    this[right] = null;
    this[bottom] = null;
    this[width] = null;
    this[flag] = 0;
    this[data] = null;
    this[showData] = null;
    this[selectedData] = [];
    SwipeAnimation__gesture_card_deck.GestureCardDeck1State.__proto__.new.call(this);
    ;
  }).prototype = SwipeAnimation__gesture_card_deck.GestureCardDeck1State.prototype;
  dart.addTypeTests(SwipeAnimation__gesture_card_deck.GestureCardDeck1State);
  const rotate = Symbol("GestureCardDeck1State.rotate");
  const right = Symbol("GestureCardDeck1State.right");
  const bottom = Symbol("GestureCardDeck1State.bottom");
  const width = Symbol("GestureCardDeck1State.width");
  const flag = Symbol("GestureCardDeck1State.flag");
  const data = Symbol("GestureCardDeck1State.data");
  const showData = Symbol("GestureCardDeck1State.showData");
  const selectedData = Symbol("GestureCardDeck1State.selectedData");
  dart.setMethodSignature(SwipeAnimation__gesture_card_deck.GestureCardDeck1State, () => ({
    __proto__: dart.getMethods(SwipeAnimation__gesture_card_deck.GestureCardDeck1State.__proto__),
    onGestureSwipeLeft: dart.fnType(dart.dynamic, []),
    onGestureSwipeRight: dart.fnType(dart.dynamic, []),
    onCardTap: dart.fnType(dart.dynamic, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(SwipeAnimation__gesture_card_deck.GestureCardDeck1State, () => ({
    __proto__: dart.getFields(SwipeAnimation__gesture_card_deck.GestureCardDeck1State.__proto__),
    rotate: dart.fieldType(src__animation__animation.Animation$(core.double)),
    right: dart.fieldType(src__animation__animation.Animation$(core.double)),
    bottom: dart.fieldType(src__animation__animation.Animation$(core.double)),
    width: dart.fieldType(src__animation__animation.Animation$(core.double)),
    flag: dart.fieldType(core.int),
    data: dart.fieldType(core.List),
    showData: dart.fieldType(core.List),
    selectedData: dart.fieldType(core.List)
  }));
  dart.defineLazy(SwipeAnimation__gesture_card_deck.GestureCardDeck1State, {
    /*SwipeAnimation__gesture_card_deck.GestureCardDeck1State.i*/get i() {
      return 0;
    },
    set i(_) {}
  });
  dart.trackLibraries("packages/tinder_web/SwipeAnimation/gesture_card_deck", {
    "package:tinder_web/SwipeAnimation/gesture_card_deck.dart": SwipeAnimation__gesture_card_deck
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card_deck.dart"],"names":[],"mappings":"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","file":"gesture_card_deck.ddc.js"}');
  // Exports:
  return {
    SwipeAnimation__gesture_card_deck: SwipeAnimation__gesture_card_deck
  };
});

//# sourceMappingURL=gesture_card_deck.ddc.js.map
