/*
http://image.cdnvision.com/name/fetch/http://www.yourdomain.com/filepath/test.jpg?width=100
*/

import stringify from './stringify';
import isEmpty from 'lodash/isEmpty';

const IMAGE_HOST = 'image.cdnvision.com';

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
    const { protocol, name, path } = options;

    const query = !isEmpty(options)
      ? `?${stringify(options)}`
      : '';

    const base = `//${IMAGE_HOST}/${name}/${encodeURIComponent(path)}${query}`;
    if (protocol) {
      return `${protocol}:${base}`;
    }

    return base;
  }

  getImage(alt) {
    const img = new window.Image();
    img.src = this.getURL();

    return img;
  }
}
