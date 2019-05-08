// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:tinder_web/Data/data.dart';
import 'package:tinder_web/SwipeAnimation/gesture_card_deck.dart';
import 'package:flutter_web/material.dart';

void main() {
  runApp(
    new MaterialApp(
      title: 'Flutter Demo',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        body: Center(child: new Example1()),
      ),
    ),
  );
}

class Example1 extends StatefulWidget {
  @override
  _Example1State createState() => _Example1State();
}

class _Example1State extends State<Example1> {
  @override
  Widget build(BuildContext context) {
    // return Text(
    //
    // textDirection: TextDirection.ltr,   "lol",
    //   textDirection: TextDirection.ltr,
    // );

    return new GestureCardDeck1(
      isButtonFixed: false,
      data: imageData,
      animationTime: Duration(milliseconds: 500),
      showAsDeck: true,
      velocityToSwipe: 1200,
      leftSwipeButton: Container(
        height: 50,
        width: 150,
        decoration: BoxDecoration(
            color: Color.fromRGBO(61, 135, 160, 1),
            borderRadius: BorderRadius.all(
              Radius.circular(8),
            )),
        child: Center(
            child: Text("NOPE",
                textDirection: TextDirection.ltr,
                style: TextStyle(color: Colors.white, fontSize: 16))),
      ),
      rightSwipeButton: Container(
        height: 50,
        width: 150,
        decoration: BoxDecoration(
            color: Color.fromRGBO(95, 169, 194, 1),
            borderRadius: BorderRadius.all(
              Radius.circular(8),
            )),
        child: Center(
            child: Text("YEAH",
                textDirection: TextDirection.ltr,
                style: TextStyle(color: Colors.white, fontSize: 16))),
      ),
      onSwipeLeft: (index) {
        print("on swipe left");
        print(index);
      },
      onSwipeRight: (index) {
        print("on swipe right");
        print(index);
      },
      onCardTap: (index) {
        print("on card tap");
        print(index);
      },
      leftPosition: 50,
      topPosition: 90,
      leftSwipeBanner: Padding(
        padding: const EdgeInsets.all(32.0),
        child: Transform.rotate(
          angle: 0.5,
          child: Container(
            decoration: BoxDecoration(
                border: Border.all(color: Colors.red, width: 2.0),
                borderRadius: BorderRadius.all(Radius.circular(8))),
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text("NOPE",
                  textDirection: TextDirection.ltr,
                  style: TextStyle(
                      fontSize: 24,
                      color: Colors.red,
                      fontWeight: FontWeight.bold)),
            ),
          ),
        ),
      ),
      rightSwipeBanner: Padding(
        padding: const EdgeInsets.all(32.0),
        child: Transform.rotate(
          angle: -0.5,
          child: Container(
            decoration: BoxDecoration(
                border: Border.all(color: Colors.green, width: 2.0),
                borderRadius: BorderRadius.all(Radius.circular(8))),
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Text("YEAH",
                  textDirection: TextDirection.ltr,
                  style: TextStyle(
                      color: Colors.green,
                      fontSize: 24,
                      fontWeight: FontWeight.bold)),
            ),
          ),
        ),
      ),
    );
  }
}
