/*
http://image.cdnvision.com/name/http://www.yourdomain.com/filepath/test.jpg?width=100
*/

import Type from './constants/Type';
import { build } from './utils/url';
import isPlainObject from 'lodash/isPlainObject';

export function getImageURL(path, options = {}) {
  if (isPlainObject(path)) {
    return getImageURL(null, path);
  } else if (typeof path === 'string') {
    return getImageURL(null, {
      ...options,
      path,
    });
  }

  return build(Type.IMAGE, options);
}

export default class Image {
  constructor(options = {}) {
    if (!options.name) {
      throw new Error('Name is undefined');
    }

    if (!options.path) {
      throw new Error('Path is undefined');
    }

    this._options = {
      ...options,
    };
  }

  getOptions() {
    return this._options;
  }

  setOption(key, value) {
    this._options[key] = value;
  }

  setOptions(options, extend) {
    this._options = extend
      ? {
        ...this._options,
        ...options,
      }
      : options;
  }

  setWidth(value) {
    return this.setOption('width', value);
  }

  setHeight(value) {
    return this.setOption('height', value);
  }

  getURL() {
    const options = this.getOptions();

    return getImageURL(options);
  }

  getImage(alt) {
    const img = new window.Image();
    img.src = this.getURL();
    img.alt = alt;

    return img;
  }
}
