/*

  Lecture 08.126: Using the 'extends' keyword to build our
  class-based prototype chain

  theme.js

  Author: Robert Hieger
  Date:   2026-06-27

  Color-coded theme for output to terminal window.

*/

import chalk from 'chalk';

const header = chalk.yellowBright.bold,
      mainDelim = chalk.yellowBright.bold,
      paramDelim = chalk.yellowBright.bold,
      tempLiteral = chalk.yellowBright.bold;

const note = chalk.yellowBright;

const message = chalk.magentaBright.bold,
      delim2 = chalk.magentaBright.bold,
      arrayDelim = chalk.magentaBright.bold;

//  Pewter
const comment = chalk.hex('#899499');

//  Silver
const undefIdent = chalk.hex('#c0c0c0');

const declare = chalk.redBright.bold,
      func = chalk.redBright.bold,
      classDeclare = chalk.redBright.bold,
      constructIdent = chalk.redBright.bold;

const identifier = chalk.whiteBright,
      semicolon = chalk.whiteBright,
      comma = chalk.whiteBright,
      dot = chalk.whiteBright,
      plus = chalk.whiteBright,
      param = chalk.whiteBright,
      property = chalk.whiteBright,
      equals = chalk.whiteBright,
      isEqualTo = chalk.whiteBright;

//  Atomic Tangerine
const lineBreak = chalk.hex('#ffa368');

const funcIdent = chalk.magentaBright,
      logIdent = chalk.magentaBright,
      propDefine = chalk.magentaBright,
      setProtoMethod = chalk.magentaBright,
      forLoop = chalk.magentaBright,
      ifStatement = chalk.magentaBright,
      ownProperty = chalk.magentaBright,
      objKeys = chalk.magentaBright,
      objValues = chalk.magentaBright,
      entryIdent = chalk.magentaBright,
      forIdent = chalk.magentaBright,
      returnIdent = chalk.magentaBright,
      propDelim = chalk.magentaBright;

const colon = chalk.cyan,
      ownPropParam = chalk.cyan;

//  Bright Orange
const orangeColon = chalk.hex('#ff991c'),
      orangeSemi = chalk.hex('#ff991c'),
      orangeDot = chalk.hex('#ff991c'),
      orangeComma = chalk.hex('#ff991c');

const consoleIdent = chalk.cyanBright,
      instanceIdent = chalk.cyanBright;
      
//  Cornflower blue
const objProperty = chalk.hex('#6495ed'),
      funcDelim = chalk.hex('#6495ed'),
      blueObj = chalk.hex('#6495ed'),
      method = chalk.hex('#6495ed');

const objIdent = chalk.greenBright.bold,
      classIdent = chalk.greenBright.bold;

const logDelim = chalk.blueBright.bold,
      thisIdent = chalk.blueBright.bold;

const ofIdent = chalk.blueBright,
      boolValue = chalk.blueBright,
      forParam = chalk.blueBright,
      ownPropDelim = chalk.blueBright,
      objEntry = chalk.blueBright,
      protoIdent = chalk.blueBright,
      extendsIdent = chalk.blueBright,
      newIdent = chalk.blueBright,
      trueIdent = chalk.blueBright;

const strLiteral = chalk.cyanBright;

//  Yellow green shade for number literals
const numLiteral = chalk.hex('#9acd32');

//  Bright Orange
const keyParam = chalk.hex('#ff991c').bold,
      valueParam = chalk.hex('#ff991c').bold;

//  Bright Orange
const arrow = chalk.hex('#ff991c'),
      funcParam = chalk.hex('#ff991c');

//  Light Blue
const arrayItem = chalk.hex('#add8e6');

export {
  header, mainDelim,
  paramDelim, tempLiteral,
  note, message,
  delim2, arrayDelim,
  comment, undefIdent,
  declare, func,
  classDeclare, constructIdent,
  identifier, semicolon,
  comma, dot,
  plus, param,
  property, equals,
  isEqualTo, lineBreak,
  funcIdent, logIdent,
  propDefine, setProtoMethod,
  forLoop, ifStatement,
  ownProperty, objKeys,
  objValues, entryIdent,
  forIdent, returnIdent,
  propDelim, colon,
  ownPropParam, orangeColon,
  orangeSemi, orangeDot,
  orangeComma, consoleIdent,
  instanceIdent, objProperty,
  funcDelim, blueObj,
  method, objIdent,
  classIdent, logDelim,
  thisIdent, ofIdent,
  boolValue, forParam,
  ownPropDelim, objEntry,
  protoIdent, extendsIdent,
  newIdent, trueIdent,
  strLiteral, numLiteral,
  keyParam, valueParam,
  arrow, funcParam,
  arrayItem
}
