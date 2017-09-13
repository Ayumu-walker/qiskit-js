/*
  Copyright IBM Corp. 2017. All Rights Reserved.

  This code may only be used under the Apache 2.0 license found at
  http://www.apache.org/licenses/LICENSE-2.0.txt.

  Authors:
  - Jesús Pérez <jesusper@us.ibm.com>
*/

'use strict';

const qasm = require('qiskit-qasm');

const parse = qasm.parse;
// const QasmError = qasm.QasmError;


module.exports = (circuitQasm) => {
  const parsed = parse(circuitQasm);


  // TODO FROM HERE


  return parsed;
};