// Generated by BUCKLESCRIPT VERSION 4.0.18, PLEASE EDIT WITH CARE
'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Block = require("bs-platform/lib/js/block.js");
var Tennis$AgeOfReason = require("../src/tennis.bs.js");

describe("Test tennis transitions", (function () {
        Jest.test("Given deuce when player wins then score is correct", (function (param) {
                return Jest.Expect[/* toEqual */12](/* Advantage */Block.__(2, [/* PlayerOne */0]), Jest.Expect[/* expect */0](Tennis$AgeOfReason.scoreWhenDeuce(/* PlayerOne */0)));
              }));
        Jest.test("Given advantage when advantaged player wins then score is correct", (function (param) {
                return Jest.Expect[/* toEqual */12](/* Game */Block.__(3, [/* PlayerOne */0]), Jest.Expect[/* expect */0](Tennis$AgeOfReason.scoreWhenAdvantage(/* PlayerOne */0, /* PlayerOne */0)));
              }));
        Jest.test("Given advantage when the other player wins then score is Deuce", (function (param) {
                var winner = Tennis$AgeOfReason.other(/* PlayerOne */0);
                return Jest.Expect[/* toEqual */12](/* Deuce */0, Jest.Expect[/* expect */0](Tennis$AgeOfReason.scoreWhenAdvantage(/* PlayerOne */0, winner)));
              }));
        Jest.test("Given player: 40 when wins then score is Game for this player", (function (param) {
                return Jest.Expect[/* toEqual */12](/* Game */Block.__(3, [/* PlayerOne */0]), Jest.Expect[/* expect */0](Tennis$AgeOfReason.scoreWhenForty(/* record */[
                                    /* player : PlayerOne */0,
                                    /* otherPlayerPoint : Thirty */2
                                  ], /* PlayerOne */0)));
              }));
        Jest.test("Given player: 40 | other : 30 when other wins then score is Deuce", (function (param) {
                return Jest.Expect[/* toEqual */12](/* Deuce */0, Jest.Expect[/* expect */0](Tennis$AgeOfReason.scoreWhenForty(/* record */[
                                    /* player : PlayerOne */0,
                                    /* otherPlayerPoint : Thirty */2
                                  ], Tennis$AgeOfReason.other(/* PlayerOne */0))));
              }));
        Jest.test("Given player: 40 | other < 30 when other wins then score is Deuce", (function (param) {
                return Jest.Expect[/* toEqual */12](/* Forty */Block.__(1, [/* record */[
                                /* player : PlayerOne */0,
                                /* otherPlayerPoint : Fifteen */1
                              ]]), Jest.Expect[/* expect */0](Tennis$AgeOfReason.scoreWhenForty(/* record */[
                                    /* player : PlayerOne */0,
                                    /* otherPlayerPoint : Love */0
                                  ], Tennis$AgeOfReason.other(/* PlayerOne */0))));
              }));
        Jest.test("Given player: 15 | other : 15 when player wins then score is 30/15", (function (param) {
                return Jest.Expect[/* toEqual */12](/* Points */Block.__(0, [/* record */[
                                /* playerOne : Thirty */2,
                                /* playerTwo : Fifteen */1
                              ]]), Jest.Expect[/* expect */0](Tennis$AgeOfReason.scoreWhenPoints(/* record */[
                                    /* playerOne : Fifteen */1,
                                    /* playerTwo : Fifteen */1
                                  ], /* PlayerOne */0)));
              }));
        Jest.test("Given player: 0 | other : 15 when other wins then score is 0/30", (function (param) {
                return Jest.Expect[/* toEqual */12](/* Points */Block.__(0, [/* record */[
                                /* playerOne : Love */0,
                                /* playerTwo : Thirty */2
                              ]]), Jest.Expect[/* expect */0](Tennis$AgeOfReason.scoreWhenPoints(/* record */[
                                    /* playerOne : Love */0,
                                    /* playerTwo : Fifteen */1
                                  ], Tennis$AgeOfReason.other(/* PlayerOne */0))));
              }));
        return Jest.test("Given player: 30 | other : 15 when player wins then score is 40/15", (function (param) {
                      return Jest.Expect[/* toEqual */12](/* Forty */Block.__(1, [/* record */[
                                      /* player : PlayerOne */0,
                                      /* otherPlayerPoint : Fifteen */1
                                    ]]), Jest.Expect[/* expect */0](Tennis$AgeOfReason.scoreWhenPoints(/* record */[
                                          /* playerOne : Thirty */2,
                                          /* playerTwo : Fifteen */1
                                        ], /* PlayerOne */0)));
                    }));
      }));

/*  Not a pure module */
