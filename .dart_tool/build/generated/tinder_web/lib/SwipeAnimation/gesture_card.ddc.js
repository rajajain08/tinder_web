define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/gestures/arena', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, ui, arena, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__animation__animation_controller = animation.src__animation__animation_controller;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__gesture_detector = animation.src__widgets__gesture_detector;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const ui$ = ui.ui;
  const src__gestures__drag_details = arena.src__gestures__drag_details;
  const src__animation__tween = animation$.src__animation__tween;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__animation__animation = animation$.src__animation__animation;
  const SwipeAnimation__gesture_card = Object.create(dart.library);
  const $abs = dartx.abs;
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(src__animation__tween.Tween$(core.double)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let DragStartDetailsToNull = () => (DragStartDetailsToNull = dart.constFn(dart.fnType(core.Null, [src__gestures__drag_details.DragStartDetails])))();
  let DragUpdateDetailsToNull = () => (DragUpdateDetailsToNull = dart.constFn(dart.fnType(core.Null, [src__gestures__drag_details.DragUpdateDetails])))();
  let DragEndDetailsToFutureOfNull = () => (DragEndDetailsToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [src__gestures__drag_details.DragEndDetails])))();
  SwipeAnimation__gesture_card.GestureCard = class GestureCard extends src__widgets__framework.StatefulWidget {
    get initialPosition() {
      return this[initialPosition$];
    }
    set initialPosition(value) {
      super.initialPosition = value;
    }
    get swipeRight() {
      return this[swipeRight$];
    }
    set swipeRight(value) {
      super.swipeRight = value;
    }
    get swipeLeft() {
      return this[swipeLeft$];
    }
    set swipeLeft(value) {
      super.swipeLeft = value;
    }
    get velocityToSwipe() {
      return this[velocityToSwipe$];
    }
    set velocityToSwipe(value) {
      super.velocityToSwipe = value;
    }
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    get isActive() {
      return this[isActive$];
    }
    set isActive(value) {
      super.isActive = value;
    }
    get rightSwipeButton() {
      return this[rightSwipeButton$];
    }
    set rightSwipeButton(value) {
      super.rightSwipeButton = value;
    }
    get leftSwipeButton() {
      return this[leftSwipeButton$];
    }
    set leftSwipeButton(value) {
      super.leftSwipeButton = value;
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
    get animationTime() {
      return this[animationTime$];
    }
    set animationTime(value) {
      super.animationTime = value;
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
    get onTap() {
      return this[onTap$];
    }
    set onTap(value) {
      super.onTap = value;
    }
    createState() {
      return new SwipeAnimation__gesture_card.GestureCardState.new();
    }
  };
  (SwipeAnimation__gesture_card.GestureCard.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let isActive = opts && 'isActive' in opts ? opts.isActive : null;
    let isButtonFixed = opts && 'isButtonFixed' in opts ? opts.isButtonFixed : null;
    let initialPosition = opts && 'initialPosition' in opts ? opts.initialPosition : null;
    let leftSwipeButton = opts && 'leftSwipeButton' in opts ? opts.leftSwipeButton : null;
    let rightSwipeButton = opts && 'rightSwipeButton' in opts ? opts.rightSwipeButton : null;
    let velocityToSwipe = opts && 'velocityToSwipe' in opts ? opts.velocityToSwipe : null;
    let animationTime = opts && 'animationTime' in opts ? opts.animationTime : null;
    let leftSwipeBanner = opts && 'leftSwipeBanner' in opts ? opts.leftSwipeBanner : null;
    let rightSwipeBanner = opts && 'rightSwipeBanner' in opts ? opts.rightSwipeBanner : null;
    let fixedButtonPosition = opts && 'fixedButtonPosition' in opts ? opts.fixedButtonPosition : null;
    let onTap = opts && 'onTap' in opts ? opts.onTap : null;
    let swipeRight = opts && 'swipeRight' in opts ? opts.swipeRight : null;
    let swipeLeft = opts && 'swipeLeft' in opts ? opts.swipeLeft : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[isActive$] = isActive;
    this[isButtonFixed$] = isButtonFixed;
    this[initialPosition$] = initialPosition;
    this[leftSwipeButton$] = leftSwipeButton;
    this[rightSwipeButton$] = rightSwipeButton;
    this[velocityToSwipe$] = velocityToSwipe;
    this[animationTime$] = animationTime;
    this[leftSwipeBanner$] = leftSwipeBanner;
    this[rightSwipeBanner$] = rightSwipeBanner;
    this[fixedButtonPosition$] = fixedButtonPosition;
    this[onTap$] = onTap;
    this[swipeRight$] = swipeRight;
    this[swipeLeft$] = swipeLeft;
    this[child$] = child;
    SwipeAnimation__gesture_card.GestureCard.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = SwipeAnimation__gesture_card.GestureCard.prototype;
  dart.addTypeTests(SwipeAnimation__gesture_card.GestureCard);
  const initialPosition$ = Symbol("GestureCard.initialPosition");
  const swipeRight$ = Symbol("GestureCard.swipeRight");
  const swipeLeft$ = Symbol("GestureCard.swipeLeft");
  const velocityToSwipe$ = Symbol("GestureCard.velocityToSwipe");
  const child$ = Symbol("GestureCard.child");
  const isActive$ = Symbol("GestureCard.isActive");
  const rightSwipeButton$ = Symbol("GestureCard.rightSwipeButton");
  const leftSwipeButton$ = Symbol("GestureCard.leftSwipeButton");
  const leftSwipeBanner$ = Symbol("GestureCard.leftSwipeBanner");
  const rightSwipeBanner$ = Symbol("GestureCard.rightSwipeBanner");
  const animationTime$ = Symbol("GestureCard.animationTime");
  const isButtonFixed$ = Symbol("GestureCard.isButtonFixed");
  const fixedButtonPosition$ = Symbol("GestureCard.fixedButtonPosition");
  const onTap$ = Symbol("GestureCard.onTap");
  dart.setMethodSignature(SwipeAnimation__gesture_card.GestureCard, () => ({
    __proto__: dart.getMethods(SwipeAnimation__gesture_card.GestureCard.__proto__),
    createState: dart.fnType(SwipeAnimation__gesture_card.GestureCardState, [])
  }));
  dart.setFieldSignature(SwipeAnimation__gesture_card.GestureCard, () => ({
    __proto__: dart.getFields(SwipeAnimation__gesture_card.GestureCard.__proto__),
    initialPosition: dart.finalFieldType(ui$.Offset),
    swipeRight: dart.finalFieldType(core.Function),
    swipeLeft: dart.finalFieldType(core.Function),
    velocityToSwipe: dart.finalFieldType(core.double),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    isActive: dart.finalFieldType(core.bool),
    rightSwipeButton: dart.finalFieldType(src__widgets__framework.Widget),
    leftSwipeButton: dart.finalFieldType(src__widgets__framework.Widget),
    leftSwipeBanner: dart.finalFieldType(src__widgets__framework.Widget),
    rightSwipeBanner: dart.finalFieldType(src__widgets__framework.Widget),
    animationTime: dart.finalFieldType(core.Duration),
    isButtonFixed: dart.finalFieldType(dart.dynamic),
    fixedButtonPosition: dart.finalFieldType(dart.dynamic),
    onTap: dart.finalFieldType(core.Function)
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
  const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(SwipeAnimation__gesture_card.GestureCard) {};
  (State_SingleTickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.SingleTickerProviderStateMixin$(SwipeAnimation__gesture_card.GestureCard)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(SwipeAnimation__gesture_card.GestureCard));
  SwipeAnimation__gesture_card.GestureCardState = class GestureCardState extends State_SingleTickerProviderStateMixin$ {
    get controller() {
      return this[controller];
    }
    set controller(value) {
      this[controller] = value;
    }
    get animation() {
      return this[animation$0];
    }
    set animation(value) {
      this[animation$0] = value;
    }
    get previousOffset() {
      return this[previousOffset];
    }
    set previousOffset(value) {
      this[previousOffset] = value;
    }
    get currentOffset() {
      return this[currentOffset];
    }
    set currentOffset(value) {
      this[currentOffset] = value;
    }
    get position() {
      return this[position];
    }
    set position(value) {
      this[position] = value;
    }
    get flag() {
      return this[flag];
    }
    set flag(value) {
      this[flag] = value;
    }
    get top() {
      return this[top];
    }
    set top(value) {
      this[top] = value;
    }
    get left() {
      return this[left];
    }
    set left(value) {
      this[left] = value;
    }
    get angle() {
      return this[angle];
    }
    set angle(value) {
      this[angle] = value;
    }
    initState() {
      this.controller = new src__animation__animation_controller.AnimationController.new({duration: this.widget.animationTime, vsync: this});
      this.previousOffset = this.widget.initialPosition;
      this.currentOffset = this.widget.initialPosition;
      this.top = this.widget.initialPosition.dy;
      this.left = this.widget.initialPosition.dx;
      this.position = new src__gestures__drag_details.DragUpdateDetails.new({globalPosition: this.widget.initialPosition});
      super.initState();
    }
    build(context) {
      return new src__widgets__basic.Positioned.new({child: new src__widgets__basic.Stack.new({children: JSArrayOfWidget().of([dart.dtest(this.widget.isButtonFixed) ? new src__widgets__basic.Positioned.new({top: core.double._check(dart.dload(this.widget.fixedButtonPosition, 'dy')), left: core.double._check(dart.dload(this.widget.fixedButtonPosition, 'dx')), child: this.widget.leftSwipeButton != null ? new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__gesture_detector.GestureDetector.new({onTap: dart.test(this.widget.isActive) ? dart.fn(() => async.async(core.Null, (function*() {
                      let t0;
                      this.animation = (t0 = new (TweenOfdouble()).new({begin: -dart.notNull(this.angle), end: 1.0}).animate(this.controller), t0.addListener(dart.fn(() => {
                        this.setState(dart.fn(() => {
                          this.top = dart.notNull(this.top) - 80 * dart.notNull(this.animation.value);
                          this.left = dart.notNull(this.left) - 120 * dart.notNull(this.animation.value);
                        }, VoidToNull()));
                      }, VoidToNull())), t0);
                      this.setState(dart.fn(() => {
                        this.flag = -1;
                      }, VoidToNull()));
                      yield this.controller.forward();
                      dart.dsend(this.widget, 'swipeLeft', []);
                    }).bind(this)), VoidToFutureOfNull()) : dart.fn(() => {
                      core.print("inActive Card");
                    }, VoidToNull()), child: this.widget.leftSwipeButton, $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 29, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 33, name: "onTap"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__gesture_detector.GestureDetector.new({onTap: dart.test(this.widget.isActive) ? dart.fn(() => async.async(core.Null, (function*() {
                      let t0;
                      this.animation = (t0 = new (TweenOfdouble()).new({begin: this.angle, end: 1.0}).animate(this.controller), t0.addListener(dart.fn(() => {
                        this.setState(dart.fn(() => {
                          this.top = dart.notNull(this.top) - 80 * dart.notNull(this.animation.value);
                          this.left = dart.notNull(this.left) + 120 * dart.notNull(this.animation.value);
                        }, VoidToNull()));
                      }, VoidToNull())), t0);
                      this.setState(dart.fn(() => {
                        this.flag = 1;
                      }, VoidToNull()));
                      yield this.controller.forward();
                      dart.dsend(this.widget, 'swipeRight', []);
                    }).bind(this)), VoidToFutureOfNull()) : dart.fn(() => {
                      core.print("inActiveCard");
                    }, VoidToNull()), child: this.widget.rightSwipeButton, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 29, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 31, name: "onTap"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 31, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 25, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 27, name: "children"})))], src__widgets__widget_inspector._Location))})))}) : new src__widgets__basic.SizedBox.new({height: 0.0, width: 0.0, $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 132, column: 25, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 133, column: 27, name: "height"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 134, column: 27, name: "width"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 17, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 19, name: "top"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 19, name: "left"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}) : new src__widgets__basic.Positioned.new({top: 0.0, bottom: 0.0, child: new src__widgets__basic.SizedBox.new({height: 0.0, width: 0.0, $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 140, column: 26, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 141, column: 21, name: "height"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 21, name: "width"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 137, column: 17, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$26 || (const$26 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 138, column: 19, name: "top"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 139, column: 19, name: "bottom"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 140, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({top: this.top, left: this.left, child: new src__widgets__gesture_detector.GestureDetector.new({onTap: dart.fn(() => {
                  dart.dsend(this.widget, 'onTap', []);
                }, VoidToNull()), onPanStart: dart.fn(details => {
                  if (dart.test(this.widget.isActive)) this.currentOffset = new ui$.Offset.new(details.globalPosition.dx, details.globalPosition.dy);
                }, DragStartDetailsToNull()), onPanUpdate: dart.fn(details => {
                  if (dart.test(this.widget.isActive)) {
                    this.setState(dart.fn(() => {
                      this.position = details;
                    }, VoidToNull()));
                    this.top = dart.notNull(this.position.globalPosition.dy) - (dart.notNull(this.currentOffset.dy) - dart.notNull(this.previousOffset.dy));
                    this.left = dart.notNull(this.position.globalPosition.dx) - (dart.notNull(this.currentOffset.dx) - dart.notNull(this.previousOffset.dx));
                    this.angle = (dart.notNull(this.position.globalPosition.dx) - dart.notNull(this.currentOffset.dx)) / 360;
                  }
                }, DragUpdateDetailsToNull()), onPanEnd: dart.fn(details => async.async(core.Null, (function*() {
                  let t0, t0$;
                  if (dart.test(this.widget.isActive)) {
                    if (dart.notNull(this.angle) > 0.5 || dart.notNull(details.velocity.pixelsPerSecond.dx) > dart.notNull(this.widget.velocityToSwipe)) {
                      this.animation = (t0 = new (TweenOfdouble()).new({begin: this.angle, end: 1.0}).animate(this.controller), t0.addListener(dart.fn(() => {
                        this.setState(dart.fn(() => {
                          this.top = dart.notNull(this.top) - 80 * dart.notNull(this.animation.value);
                          this.left = dart.notNull(this.left) + 120 * dart.notNull(this.animation.value);
                        }, VoidToNull()));
                      }, VoidToNull())), t0);
                      this.setState(dart.fn(() => {
                        this.flag = 1;
                      }, VoidToNull()));
                      yield this.controller.forward();
                      yield dart.dsend(this.widget, 'swipeRight', []);
                    } else if (dart.notNull(this.angle) < -0.5 || dart.notNull(details.velocity.pixelsPerSecond.dx) < -dart.notNull(this.widget.velocityToSwipe)) {
                      this.animation = (t0$ = new (TweenOfdouble()).new({begin: -dart.notNull(this.angle), end: 1.0}).animate(this.controller), t0$.addListener(dart.fn(() => {
                        this.setState(dart.fn(() => {
                          this.top = dart.notNull(this.top) - 80 * dart.notNull(this.animation.value);
                          this.left = dart.notNull(this.left) - 120 * dart.notNull(this.animation.value);
                        }, VoidToNull()));
                      }, VoidToNull())), t0$);
                      this.setState(dart.fn(() => {
                        this.flag = -1;
                      }, VoidToNull()));
                      yield this.controller.forward();
                      dart.dsend(this.widget, 'swipeLeft', []);
                    } else
                      this.setState(dart.fn(() => {
                        this.angle = 0.0;
                        this.previousOffset = new ui$.Offset.new(this.widget.initialPosition.dx, this.widget.initialPosition.dy);
                        this.currentOffset = new ui$.Offset.new(this.widget.initialPosition.dx, this.widget.initialPosition.dy);
                        this.top = this.widget.initialPosition.dy;
                        this.left = this.widget.initialPosition.dx;
                      }, VoidToNull()));
                  }
                }).bind(this)), DragEndDetailsToFutureOfNull()), child: new src__widgets__basic.Transform.rotate({angle: this.flag === 0 ? this.angle : this.flag === 1 ? this.animation.value : -dart.notNull(this.animation.value), child: new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__widgets__basic.Stack.new({alignment: dart.notNull(this.angle) < 0 ? new src__painting__alignment.Alignment.new(1.0, -1.0) : new src__painting__alignment.Alignment.new(-1.0, -1.0), children: JSArrayOfWidget().of([this.widget.child, this.flag === -1 || dart.notNull(this.angle) < 0 ? new src__widgets__basic.Opacity.new({child: this.widget.leftSwipeBanner == null ? null : this.widget.leftSwipeBanner, opacity: this.flag === 0 ? this.angle[$abs]() * 2 > 1 ? 1.0 : this.angle[$abs]() * 2 : this.animation.value, $creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 228, column: 31, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 229, column: 33, name: "child"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 232, column: 33, name: "opacity"})))], src__widgets__widget_inspector._Location))})))}) : new src__widgets__basic.Opacity.new({child: this.widget.rightSwipeBanner == null ? null : this.widget.rightSwipeBanner, opacity: this.flag === 0 ? this.angle[$abs]() * 2 > 1 ? 1.0 : this.angle[$abs]() * 2 : this.animation.value, $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 238, column: 31, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 239, column: 33, name: "child"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 242, column: 33, name: "opacity"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 221, column: 21, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 222, column: 23, name: "alignment"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 225, column: 23, name: "children"})))], src__widgets__widget_inspector._Location))})))}), this.widget.leftSwipeButton != null && !dart.dtest(this.widget.isButtonFixed) ? new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__gesture_detector.GestureDetector.new({onTap: dart.test(this.widget.isActive) ? dart.fn(() => async.async(core.Null, (function*() {
                              let t0;
                              this.animation = (t0 = new (TweenOfdouble()).new({begin: -dart.notNull(this.angle), end: 1.0}).animate(this.controller), t0.addListener(dart.fn(() => {
                                this.setState(dart.fn(() => {
                                  this.top = dart.notNull(this.top) - 80 * dart.notNull(this.animation.value);
                                  this.left = dart.notNull(this.left) - 120 * dart.notNull(this.animation.value);
                                }, VoidToNull()));
                              }, VoidToNull())), t0);
                              this.setState(dart.fn(() => {
                                this.flag = -1;
                              }, VoidToNull()));
                              yield this.controller.forward();
                              dart.dsend(this.widget, 'swipeLeft', []);
                            }).bind(this)), VoidToFutureOfNull()) : dart.fn(() => {
                              core.print("inActive Card");
                            }, VoidToNull()), child: this.widget.leftSwipeButton, $creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 253, column: 31, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 254, column: 35, name: "onTap"}))), const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 276, column: 35, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__gesture_detector.GestureDetector.new({onTap: dart.test(this.widget.isActive) ? dart.fn(() => async.async(core.Null, (function*() {
                              let t0;
                              this.animation = (t0 = new (TweenOfdouble()).new({begin: this.angle, end: 1.0}).animate(this.controller), t0.addListener(dart.fn(() => {
                                this.setState(dart.fn(() => {
                                  this.top = dart.notNull(this.top) - 80 * dart.notNull(this.animation.value);
                                  this.left = dart.notNull(this.left) + 120 * dart.notNull(this.animation.value);
                                }, VoidToNull()));
                              }, VoidToNull())), t0);
                              this.setState(dart.fn(() => {
                                this.flag = 1;
                              }, VoidToNull()));
                              yield this.controller.forward();
                              dart.dsend(this.widget, 'swipeRight', []);
                            }).bind(this)), VoidToFutureOfNull()) : dart.fn(() => {
                              core.print("inActiveCard");
                            }, VoidToNull()), child: this.widget.rightSwipeButton, $creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 277, column: 31, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 278, column: 33, name: "onTap"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 301, column: 33, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 251, column: 27, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 252, column: 29, name: "children"})))], src__widgets__widget_inspector._Location))})))}) : new src__widgets__basic.SizedBox.new({height: 0.0, width: 0.0, $creationLocationd_0dea112b090073317d4: const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 305, column: 27, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$53 || (const$53 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 306, column: 29, name: "height"}))), const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 307, column: 29, name: "width"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 219, column: 24, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$56 || (const$56 = dart.constList([const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 220, column: 19, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 215, column: 32, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$60 || (const$60 = dart.constList([const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 216, column: 17, name: "angle"}))), const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 219, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 147, column: 20, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$67 || (const$67 = dart.constList([const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 148, column: 15, name: "onTap"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 151, column: 15, name: "onPanStart"}))), const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 156, column: 15, name: "onPanUpdate"}))), const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 15, name: "onPanEnd"}))), const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 215, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 11, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$72 || (const$72 = dart.constList([const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 13, name: "top"}))), const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 146, column: 13, name: "left"}))), const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 147, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 14, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$75 || (const$75 = dart.constList([const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 12, file: "org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart", parameterLocations: const$78 || (const$78 = dart.constList([const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (SwipeAnimation__gesture_card.GestureCardState.new = function() {
    this[controller] = null;
    this[animation$0] = null;
    this[previousOffset] = null;
    this[currentOffset] = null;
    this[position] = null;
    this[flag] = 0;
    this[top] = 0.0;
    this[left] = 0.0;
    this[angle] = 0.0;
    SwipeAnimation__gesture_card.GestureCardState.__proto__.new.call(this);
    ;
  }).prototype = SwipeAnimation__gesture_card.GestureCardState.prototype;
  dart.addTypeTests(SwipeAnimation__gesture_card.GestureCardState);
  const controller = Symbol("GestureCardState.controller");
  const animation$0 = Symbol("GestureCardState.animation");
  const previousOffset = Symbol("GestureCardState.previousOffset");
  const currentOffset = Symbol("GestureCardState.currentOffset");
  const position = Symbol("GestureCardState.position");
  const flag = Symbol("GestureCardState.flag");
  const top = Symbol("GestureCardState.top");
  const left = Symbol("GestureCardState.left");
  const angle = Symbol("GestureCardState.angle");
  dart.setMethodSignature(SwipeAnimation__gesture_card.GestureCardState, () => ({
    __proto__: dart.getMethods(SwipeAnimation__gesture_card.GestureCardState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(SwipeAnimation__gesture_card.GestureCardState, () => ({
    __proto__: dart.getFields(SwipeAnimation__gesture_card.GestureCardState.__proto__),
    controller: dart.fieldType(src__animation__animation_controller.AnimationController),
    animation: dart.fieldType(src__animation__animation.Animation$(core.double)),
    previousOffset: dart.fieldType(ui$.Offset),
    currentOffset: dart.fieldType(ui$.Offset),
    position: dart.fieldType(src__gestures__drag_details.DragUpdateDetails),
    flag: dart.fieldType(core.int),
    top: dart.fieldType(core.double),
    left: dart.fieldType(core.double),
    angle: dart.fieldType(core.double)
  }));
  dart.trackLibraries("packages/tinder_web/SwipeAnimation/gesture_card", {
    "package:tinder_web/SwipeAnimation/gesture_card.dart": SwipeAnimation__gesture_card
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/tinder_web/SwipeAnimation/gesture_card.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;IACE;;;;;;IACA;;;;;;IACF;;;;;;IACA;;;;;;IACF;;;;;;IACE;;;;;;IACA;;;;;;IACA;;;;;;IACA;;;;;;IACE;;;;;;IACT;;;;;;IACA;;;;;;IACS;;;;;;;AAsBb,YAAW;IACb;;;QApBM;QACC;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACU;QACA;QACA;;IAbV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACU;IACA;IACA;AACZ,4EAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAUA;;;;;;IACF;;;;;;IACX;;;;;;IACA;;;;;;IACW;;;;;;IACd;;;;;;IACG;;;;;;IACA;;;;;;IACA;;;;;;;MAGL,kBAAiB,4EACL,AAAO,kCACV;MAET,sBAAiB,AAAO;MACxB,qBAAgB,AAAO;MACvB,WAAM,AAAO,AAAgB;MAC7B,YAAO,AAAO,AAAgB;MAC9B,gBAAW,uEAAkC,AAAO;MAC9C;IACR;UAG0B;AACxB,YAAO,gDACE,6CACa,iCAChB,AAAO,6BACD,gEACkC,WAA3B,AAAO,kEACqB,WAA3B,AAAO,gDACL,AAAO,AACX,+BAD8B,OAC5B,2CACoB,sBAChB,yEACW,AAAO,wBACR;;sBACE,uBAAgB,AAEX,kCADU,cAAC,kBAAY,cACf,kBACL,eAAY;wBACZ,cAAS;0BACP,WAAU,aAAJ,YACF,AAAG,kBAAE,AAAU;0BACnB,YAAY,aAAL,aACH,AAAI,mBAAE,AAAU;;;sBAG9B,cAAS;wBACP,YAAO,CAAC;;sBAEV,MAAM,AAAW;sBACV,WAAP;oBAEJ,wCAAE;sBACE,WAAM;6CAEP,AAAO,omBAClB,yEACS,AAAO,wBACR;;sBACE,uBAAgB,AAEX,kCADU,iBAAY,cACd,kBACL,eAAY;wBACZ,cAAS;0BACP,WACQ,aAAJ,YAAM,AAAG,kBAAE,AAAU;0BACzB,YAAY,aAAL,aACH,AAAI,mBAAE,AAAU;;;sBAI9B,cAAS;wBACP,YAAO;;sBAET,MAAM,AAAW;sBACV,WAAP;oBAEJ,wCAAE;sBACE,WAAM;6CAEP,AAAO,2jCAIpB,8CACU,YACD,qyCAGjB,6CACO,aACG,YACD,8CACG,YACD,0yCAEjB,6CACO,gBACC,kBACC,+DACE;kBACE,WAAP;8CAEU,QAAkB;AAC5B,gCAAI,AAAO,uBACT,qBAAgB,mBACZ,AAAQ,AAAe,OAAhB,oBAAoB,AAAQ,AAAe,OAAhB;2DAE7B,QAAmB;AAC9B,gCAAI,AAAO;oBACT,cAAS;sBACP,gBAAW,OAAO;;oBAEpB,WAAiC,aAA3B,AAAS,AAAe,oCACR,aAAjB,AAAc,sCAAK,AAAe;oBACvC,YAAmC,aAA3B,AAAS,AAAe,oCACV,aAAjB,AAAc,sCAAK,AAAe;oBACvC,aAAwD,CAApB,aAA3B,AAAS,AAAe,gDAAK,AAAc,0BAAM;;yDAGpD,QAAgB;;AACxB,gCAAI,AAAO;AACT,wBAAU,aAAN,cAAQ,OAC4B,aAApC,AAAQ,AAAS,AAAgB,OAA1B,6CACH,AAAO;sBACb,uBAAgB,AACX,kCADgC,iBAAY,cACpC,kBACL,eAAY;wBACZ,cAAS;0BACP,WAAU,aAAJ,YAAM,AAAG,kBAAE,AAAU;0BAC3B,YAAY,aAAL,aAAO,AAAI,mBAAE,AAAU;;;sBAIxC,cAAS;wBACP,YAAO;;sBAET,MAAM,AAAW;sBACjB,MAAa,WAAP;0BACD,KAAU,aAAN,cAAQ,CAAC,OACoB,aAApC,AAAQ,AAAS,AAAgB,OAA1B,gCACH,cAAC,AAAO;sBACd,wBAAgB,AACX,kCADgC,cAAC,kBAAY,cACrC,kBACL,gBAAY;wBACZ,cAAS;0BACP,WAAU,aAAJ,YAAM,AAAG,kBAAE,AAAU;0BAC3B,YAAY,aAAL,aAAO,AAAI,mBAAE,AAAU;;;sBAGxC,cAAS;wBACP,YAAO,CAAC;;sBAEV,MAAM,AAAW;sBACV,WAAP;;sBAEA,cAAS;wBACP,aAAQ;wBACR,sBAAiB,mBACb,AAAO,AAAgB,gCAAI,AAAO,AAAgB;wBACtD,qBAAgB,mBACZ,AAAO,AAAgB,gCAAI,AAAO,AAAgB;wBACtD,WAAM,AAAO,AAAgB;wBAC7B,YAAO,AAAO,AAAgB;;;gBAGrC,wDACgB,iDACP,AAAK,cAAG,IACV,aACC,AAAK,cAAG,IAAI,AAAU,uBAAQ,cAAC,AAAU,8BACzC,8CACa,sBAChB,8CACmB,aAAN,cAAQ,IACb,2CAAU,KAAK,CAAC,OAChB,2CAAU,CAAC,KAAK,CAAC,gBACL,sBAChB,AAAO,mBACN,AAAK,AAAM,cAAH,CAAC,KAAW,aAAN,cAAQ,IACjB,4CACS,AAAO,AAAgB,+BAAG,OAC3B,OACA,AAAO,sCACH,AAAK,cAAG,IACX,AAAM,AAAM,AAAK,qBAAH,IAAK,IAChB,MACA,AAAM,AAAM,qBAAE,IAClB,AAAU,4mBAElB,4CACS,AAAO,AAAiB,gCAAG,OAC5B,OACA,AAAO,uCACH,AAAK,cAAG,IACX,AAAM,AAAM,AAAK,qBAAH,IAAK,IAChB,MACA,AAAM,AAAM,qBAAE,IAClB,AAAU,usCAI3B,AAAO,AAAwB,+BAAL,oBAAS,AAAO,6BACrC,2CACoB,sBAChB,yEACW,AAAO,wBACR;;8BACE,uBAAgB,AAEX,kCADU,cAAC,kBAAY,cACf,kBACL,eAAY;gCACZ,cAAS;kCACP,WAAU,aAAJ,YACF,AAAG,kBAAE,AAAU;kCACnB,YAAY,aAAL,aACH,AAAI,mBAAE,AAAU;;;8BAG9B,cAAS;gCACP,YAAO,CAAC;;8BAEV,MAAM,AAAW;8BACV,WAAP;4BAEJ,wCAAE;8BACE,WAAM;qDAEP,AAAO,gnBAClB,yEACS,AAAO,wBACR;;8BACE,uBAAgB,AAEX,kCADU,iBAAY,cACd,kBACL,eAAY;gCACZ,cAAS;kCACP,WAAU,aAAJ,YACF,AAAG,kBAAE,AAAU;kCACnB,YAAY,aAAL,aACH,AAAI,mBAAE,AAAU;;;8BAI9B,cAAS;gCACP,YAAO;;8BAET,MAAM,AAAW;8BACV,WAAP;4BAEJ,wCAAE;8BACE,WAAM;qDAEP,AAAO,2kCAIpB,8CACU,YACD;IAUjC;;;IAhRoB;IACF;IACX;IACA;IACW;IACd,aAAO;IACJ,YAAM;IACN,aAAO;IACP,cAAQ;;;EAyQjB","file":"gesture_card.ddc.js"}');
  // Exports:
  return {
    SwipeAnimation__gesture_card: SwipeAnimation__gesture_card
  };
});

//# sourceMappingURL=gesture_card.ddc.js.map
