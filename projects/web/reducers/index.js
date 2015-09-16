import homeRecuder from './home';
import productRecuder from './product';
import catalogRecuder from './catalog';
import userRecuder from './user';

export default function findReducers(moduleName) {

  if (!moduleName) {
    throw new Error('we must specific `moduleName` to construct corresponding final reducers');
  }
  switch (moduleName) {

    case 'home':
      return homeRecuder;

    case 'product':
      return productRecuder;

    case 'catalog':
      return catalogRecuder;

    case 'user':
      return userRecuder;

    default:
      throw new Error(`can not find '${moduleName}' final reducers`);

  }
}
