/*

  Lecture 08.126: Using the 'extends' keyword to build our
  class-based prototype chain--

  Instructor challenge: Create a prototype chain of 3 with
  the object Prototype of User at the top of the chain using
  prototypal inheritance and constructors.

  Author: Robert Hieger
  Date:   2026-06-27

  Below is my attempt.

*/

import * as theme from './theme/theme.js';

console.log(
  theme.header(
    'DEMONSTRATE CREATING PROTOTYPE CHAIN OF '          +
    '3 OBJECTS:\n'                                      +
    '----------------------------------------'          +
    '---------\n'
  )
);

setTimeout( () => {
  console.log(
    theme.message(
      'Creating object prototype User...\n'
    )
  );  
}, 2000);

setTimeout( () => {
  console.log(
    theme.func('function ') + theme.objIdent('User')      +
    theme.mainDelim('(\n')                                +
    theme.keyParam('  lastName') + theme.comma(',\n')     +
    theme.keyParam('  firstName') + theme.comma(',\n')    +
    theme.keyParam('  title') + theme.comma(',\n')        +
    theme.keyParam('  age') + theme.comma(',\n')          +
    theme.keyParam('  lastName\n')                        +
    theme.mainDelim(')  {\n')                             +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('lastName = ')                       +
    theme.valueParam('lastName') + theme.semicolon(';\n') +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('firstName = ')                      +
    theme.valueParam('firstName')                         +
    theme.semicolon(';\n')                                +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('title = ')                          +
    theme.valueParam('title') + theme.semicolon(';\n')    +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('age = ')                            +
    theme.valueParam('age') + theme.semicolon(';\n')      +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('admin = ')                          +
    theme.trueIdent('false') + theme.semicolon(';\n')     +
    theme.mainDelim('}\n\n')
  );
}, 4000);

function User(
  lastName,
  firstName,
  title,
  age
)  {
  this.lastName = lastName;
  this.firstName = firstName;
  this.title = title;
  this.age = age;
}

setTimeout( () => {
  console.log(
    theme.message(
      'Adding admin property to User prototyppe...\n'
    )
  )
}, 9000);

setTimeout( () => {
  theme.objIdent('User') + theme.dot('.')               +
  theme.protoIdent('prototype')                         +
  theme.identifier('admin = ')                          +
  theme.boolValue('false') + theme.semicolon(';\n\n')
}, 11_000);

User.prototype.admin = false;

setTimeout( () => {
  console.log(
    theme.message(
      'Creating object prototype VerifiedMember...\n'
    )
  );  
}, 9000);

setTimeout( () => {
  console.log(
    theme.func('function ')                               +
    theme.objIdent('VerifiedMember')                      +
    theme.mainDelim('(\n')                                +
    theme.keyParam('  lastName') + theme.comma(',\n')     +
    theme.keyParam('  firstName') + theme.comma(',\n')    +
    theme.keyParam('  title') + theme.comma(',\n')        +
    theme.keyParam('  age\n')                             +
    theme.mainDelim(')  {\n')                             +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('lastName = ')                       +
    theme.valueParam('lastName') + theme.semicolon(';\n') +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('firstName = ')                      +
    theme.valueParam('firstName')                         +
    theme.semicolon(';\n')                                +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('title = ')                          +
    theme.valueParam('title') + theme.semicolon(';\n')    +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('age = ')                            +
    theme.valueParam('age') + theme.semicolon(';\n')      +
    theme.mainDelim('}\n\n')
  );  
}, 11_000);

function VerifiedMember(
  lastName,
  firstName,
  title,
  age
)  {
  this.lastName = lastName;
  this.firstName = firstName;
  this.title = title;
  this.age = age;
}

setTimeout( () => {
  console.log(
    theme.message(
      'Adding property \'verified\' to '                  +
      'VerifiedMember...\n'
    )
  );  
}, 16_000);

setTimeout( () => {
  console.log(
    theme.objIdent('VerifiedMember') + theme.dot('.')     +
    theme.protoIdent('prototype') + theme.dot('.')        +
    theme.identifier('verified = ')                       +
    theme.boolValue('true') + theme.semicolon(';\n\n')
  );  
}, 18_000);

VerifiedMember.prototype.verified = true;

setTimeout( () => {
  console.log(
    theme.message(
      'Setting prototype of VerifiedMember to User...\n'
    )
  );  
}, 21_000);

setTimeout(() => {
  console.log(
    theme.objIdent('Object')                              +
    theme.dot('.') + theme.funcIdent('setPrototypeOf')    +
    theme.mainDelim('(\n')                                +
    theme.objIdent('VerifiedMember') + theme.dot('.')     +
    theme.protoIdent('prototype') + theme.comma(', ')     +
    theme.objIdent('User') + theme.dot('.')               +
    theme.protoIdent('prototype') + theme.mainDelim(')')  +
    theme.semicolon(';\n\n')
  );  
}, 23_000);

Object.setPrototypeOf(
  VerifiedMember.prototype, User.prototype
);

setTimeout( () => {
  console.log(
    theme.message(
      'Creating object prototype Doctor...\n'
    )
  );  
}, 26_000);

setTimeout( () => {
  console.log(
    theme.func('function ') + theme.objIdent('Doctor')    +
    theme.mainDelim('(\n')                                +
    theme.keyParam('  lastName') + theme.comma(',\n')     +
    theme.keyParam('  firstName') + theme.comma(',\n')    +
    theme.keyParam('  title') + theme.comma(',\n')        +
    theme.keyParam('  age') + theme.comma(',\n')          +
    theme.keyParam('  expertise\n')                       +
    theme.mainDelim(')  {\n')                             +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('lastName = ')                       +
    theme.valueParam('lastName') + theme.semicolon(';\n') +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('firstName = ')                      +
    theme.valueParam('firstName')                         +
    theme.semicolon(';\n')                                +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('title = ')                          +
    theme.valueParam('title') + theme.semicolon(';\n')    +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('age = ')                            +
    theme.valueParam('age') + theme.semicolon(';\n')      +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.valueParam('expertise')                         +
    theme.semicolon(';\n')                                +
    theme.thisIdent('  this') + theme.dot('.')            +
    theme.identifier('admin = ')                          +
    theme.trueIdent('true') + theme.semicolon(';\n')      +
    theme.mainDelim('}\n\n')
  );  
}, 28_000);

function Doctor(
  lastName,
  firstName,
  title,
  age,
  expertise
)  {
  this.lastName = lastName;
  this.firstName = firstName;
  this.title = title;
  this.age = age;
  this.expertise = expertise;
  this.admin = true;
}

setTimeout( () => {
  console.log(
    theme.message(
      'Creating introduceSelf Method and Assigning '    +
      'it to\nDoctor prototype...\n'
    )
  );  
}, 33_000);

setTimeout( () => {
  console.log(
    theme.objIdent('Doctor') + theme.dot('.')             +
    theme.protoIdent('prototype') + theme.dot('.')        +
    theme.funcIdent('introduceSelf')                      +
    theme.equals(' = ') + theme.func('function')          +
    theme.mainDelim('()  {\n')                            +
    theme.consoleIdent('  console') + theme.dot('.')      +
    theme.logIdent('log') + theme.delim2('(\n')           +
    theme.strLiteral('    `I am ')                        +
    theme.tempLiteral('${') + theme.thisIdent('this')     +
    theme.dot('.') + theme.identifier('title')            +
    theme.tempLiteral(') ${') + theme.thisIdent('this')   +
    theme.dot('.') + theme.identifier('firstName')        +
    theme.tempLiteral('}') + theme.strLiteral(' `')       +
    theme.plus('           +\n')                          +
    theme.strLiteral('    `') + theme.tempLiteral('${')   +
    theme.thisIdent('this') + theme.dot('.')              +
    theme.identifier('lastName') + theme.strLiteral(', ') +
    theme.tempLiteral('${') + theme.thisIdent('this')     +
    theme.dot('.') + theme.identifier('age')              +
    theme.tempLiteral('}')                                +
    theme.strLiteral(' years old, and `')                 +
    theme.plus('    +\n')                                 +
    theme.strLiteral('    `I can help you with')          +
    theme.lineBreak('\\n') + theme.tempLiteral('${')      +
    theme.thisIdent('this') + theme.dot('.')              +
    theme.identifier('expertise')                         +
    theme.tempLiteral('} ') + theme.strLiteral('`')       +
    theme.plus('         +\n')                            +
    theme.strLiteral('    `related issues.')              +
    theme.lineBreak('\\n') + theme.strLiteral('`\n')      +
    theme.delim2('  )') + theme.semicolon(';\n')          +
    theme.mainDelim('}\n\n')
  );  
}, 35_000);

Doctor.prototype.introduceSelf = function()  {
  console.log(
    `I am ${this.title} ${this.firstName} `           +
    `${this.lastName}, ${this.age} years old, and `   +
    `I can help you with\n${this.expertise} `         +
    `related issues.\n`
  );
}

setTimeout( () => {
  console.log(
    theme.message(
      'Setting prototype of Doctor to VerifiedMember...\n'
    )
  );  
}, 40_000);

setTimeout( () => {
  console.log(
    theme.objIdent('Object') + theme.dot('.')             +
    theme.funcIdent('setPrototypeOf')                     +
    theme.mainDelim('(\n')                                +
    theme.objIdent('  Doctor')                            +
    theme.protoIdent('prototype') + theme.comma(', ')     +
    theme.objIdent('VerifiedMember')  + theme.dot('.')    +
    theme.protoIdent('prototype') + theme.mainDelim(')')  +
    theme.semicolon(';\n\n')
  );  
}, 42_000);

Object.setPrototypeOf(
  Doctor.prototype, VerifiedMember.prototype
);

setTimeout( () => {
  console.log(
    theme.message(
      'Instantiating pcpDoctor of type Doctor...\n'
    )
  );  
}, 45_000);

setTimeout( () => {
  console.log(
    theme.declare('const ') + theme.blueObj('pcpDoctor') +
    theme.equals(' = ') + theme.newIdent('new ')         +
    theme.objIdent('Doctor') + theme.mainDelim('(\n')    +
    theme.strLiteral('  \'Skidaddle\'')                  +
    theme.comma(',\n')                                   +
    theme.strLiteral('  \'Chris\'')                      +
    theme.comma(',\n')                                   +
    theme.strLiteral('  \'Dr.\'')                        +
    theme.comma(',\n')                                   +
    theme.numLiteral('  36')                             +
    theme.comma(',\n')                                   +
    theme.strLiteral('  \'Endocrinology\'\n')            +
    theme.mainDelim(')') + theme.semicolon(';\n\n')
  );  
}, 47_000);

const pcpDoctor = new Doctor(
  'Skidaddle',
  'Chris',
  'Dr.',
  36,
  'Endocrinology'
);

setTimeout( () => {
  console.log(
    theme.message(
      'Calling introduceSelf() on pcpDoctor...\n'
    )
  );  
}, 52_000);

setTimeout( () => {
  pcpDoctor.introduceSelf();  
}, 54_000);

setTimeout( () => {
  console.log(
    theme.message(
      '\nTHE PROTOTYPE CHAIN:\n'  +
      '-------------------\n'
    )
  );  
}, 59_000);

setTimeout( () => {
  console.log(
    theme.header(
      'pcpDoctor Object Type:\n'    +
      '---------------------'
    )
  );  
}, 61_000);

setTimeout( () => {
  console.log(pcpDoctor, '\n\n');  
}, 63_000);

setTimeout( () => {
  console.log(
    theme.header(
      'Constructor of pcpDoctor:\n'   +
      '------------------------'
    )
  );  
}, 68_000);

setTimeout( () => {
  console.log(pcpDoctor.constructor, '\n\n');  
}, 70_000);

setTimeout( () => {
  console.log(
    theme.header(
      'Prototype of Doctor:\n'    +
      '-------------------'
    )
  );  
}, 73_000);

setTimeout( () => {
  console.log(
    Doctor.prototype, '\n\n'
  );  
}, 75_000);

setTimeout( () => {
  console.log(
    theme.header(
      'Prototype of VerifiedMember:\n'    +
      '---------------------------'
    )
  );  
}, 78_000);

setTimeout( () => {
  console.log(
    VerifiedMember.prototype, '\n\n'
  );  
}, 80_000);

setTimeout( () => {
  console.log(
    theme.header(
      'Prototype of Object:\n'    +
      '-------------------'
    )
  );  
}, 83_000);

setTimeout( () => {
  console.log(Object.prototype, '\n');  
}, 85_000);
