import should from 'should';
import { getImageURL } from '../src';

describe('Image', () => {
  it('should be able to getImageURL', () => {
    const imageUrl = '//www.example.com/image.jpeg';
    const url = getImageURL('//www.example.com/image.jpeg', {
      name: 'myaccount',
      width: 300,
      height: 200,
    });

    url.should.equal(`//image.cdnvision.com/myaccount/${encodeURIComponent(imageUrl)}?width=300&height=200`);
  });
});
