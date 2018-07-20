/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule idx
 */

'use strict';

/* eslint-disable */

function idx<Ti, Tv>(input: Ti, accessor: (input: Ti) => Tv): ?Tv {
  try {
    return accessor(input);
  } catch (error) {
    if (error instanceof TypeError) {
      if (isNullPropertyAccessError(error)) {
        return null;
      } else if (isUndefinedPropertyAccessError(error)) {
        return undefined;
      }
    }
    throw error;
  }
}

let nullPattern: ?RegExp;
function isNullPropertyAccessError({ message }: TypeError): boolean {
  if (!nullPattern) {
    nullPattern = getInvalidPropertyAccessErrorPattern(null);
  }
  return nullPattern.test(message);
}

let undefinedPattern: ?RegExp;
function isUndefinedPropertyAccessError({ message }: TypeError): boolean {
  if (!undefinedPattern) {
    undefinedPattern = getInvalidPropertyAccessErrorPattern(undefined);
  }
  return undefinedPattern.test(message);
}

/**
 * Use `new Function(...)` to avoid minifying "$object$" and "$property$".
 */
// eslint-disable-next-line no-new-func, flowtype/no-weak-types
const getInvalidPropertyAccessErrorPattern: any = new Function(
  '$object$',
  `
  try {
    $object$.$property$;
  } catch (error) {
    return new RegExp(
      error.message
        .replace(/[-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]/g, '\\\\$&')
        .replace('\\\\$object\\\\$', '.+')
        .replace('\\\\$property\\\\$', '.+')
    );
  }
  throw new Error('Expected property access on ' + $object$ + ' to throw.');
`
);

export default idx;
