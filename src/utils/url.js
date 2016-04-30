import stringify from './stringify';
import isEmpty from 'lodash/isEmpty';
import Host from '../constants/Host';

export function build(type, options = {}) {
  const { protocol, name, path } = options;
  if (!name) {
    throw new Error('Name is not defined');
  }

  const host = Host[type];
  if (!host) {
    throw new Error(`Host for type: ${type} does not exists`);
  }

  const parts = [host, name];
  if (path) {
    parts.push(encodeURIComponent(path));
  }

  const finallOptions = {
    ...options,
    name: void 0,
    path: void 0,
  };

  const query = !isEmpty(finallOptions)
    ? `?${stringify(finallOptions)}`
    : '';

  const base = `//${parts.join('/')}${query}`;
  if (protocol) {
    return `${protocol}:${base}`;
  }

  return base;
}
