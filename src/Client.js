import Image from './Image';

export default class Client {
  constructor(options = {}) {
    if (!options.name) {
      throw new Error('Please use your name in options.');
    }

    this._options = {
      ...options,
    };
  }

  getName() {
    return this.getOptions().name;
  }

  getOptions() {
    return this._options;
  }

  image(options = {}) {
    return new Image({
      ...this.getOptions(),
      ...options,
    });
  }

  getImageURL(options) {
    const image = this.image(options);

    return image.getURL();
  }
}
