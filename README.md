# CDN Vision

Resize, crop, and process images in the cloud, simply by changing their URLs.

[![NPM version][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/cdnvision.svg?style=flat-square
[npm-url]: https://www.npmjs.com/cdnvision
[github-url]: https://github.com/CherryProjects/cdnvision


## Install
```sh
npm install cdnvision
```

# Support us

Star this project on [GitHub][github-url].


## Usage

### Basic example

````js
import CDNVision from 'cdnvision';

const client = new CDNVision({
  name: 'your-name',
});

const url = client.getImageURL({
  path: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Cirrus_sky_panorama.jpg',
  width: 300,
});

/* equals http://image.cdnvision.com/your-name/https://upload.wikimedia.org/wikipedia/commons/3/36/Cirrus_sky_panorama.jpg?width=300
*/
```
