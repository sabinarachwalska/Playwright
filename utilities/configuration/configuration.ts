import * as fs from 'fs';

import { UserNames } from './user-names';

/**
 * Represents general configurable properties.
 */
export type ConfigType = {
  /**
   * Base URL of an environment to use for testing.
   */
  readonly baseURL: string;
  /**
   * Base API gateway port.
   */
  /**
   * Collection of { UserName => UserPassword } tuples.
   */
  readonly userPasswords: Record<UserNames, string>;
};

function load(): ConfigType {
  const userNames = new Set<string>(Object.values(UserNames));
  const file = fs.readFileSync('./assets/config.json', { encoding: 'utf-8' });

  // NOTE:
  // config file must contain a valid JSON with the following schema:
  // {
  //   "baseURL": "<url>",
  //   "apiPort": "<port>",
  //   "userPasswords": {
  //     "<user-name-1>": "<user-password-1>"
  //     "<user-name-2>": "<user-password-2>"
  //     ...
  //     "<user-name-N>": "<user-password-N>"
  //   }
  // }
  // where <user-name-X> must be defined in the UserNames enum

  const obj = JSON.parse(file);
  validateUserPasswords(obj, userNames);
  return obj;
}

function validateUserPasswords(obj: any, userNames: Set<string>): void {
  if (
    typeof obj !== 'object' ||
    obj === null ||
    typeof obj.baseURL !== 'string' ||
    typeof obj.userPasswords !== 'object' ||
    obj.userPasswords === null ||
    Object.keys(obj.userPasswords).some(k => !userNames.has(k) || typeof obj.userPasswords[k] !== 'string')
  ) {
    throw new Error("'assets/config.json' file has invalid contents");
  }
}

let value: ConfigType | null = null;

/**
 * Contains functionalities related to general configuration.
 */
export namespace Configuration {
  /**
   * Returns a shared instance of a general configuration object.
   * @returns General configuration.
   */
  export function instance(): ConfigType {
    if (value === null) {
      value = load();
    }
    return value;
  }
}