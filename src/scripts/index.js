import '../styles/index.scss';

import('./componentA').then(({ default: componentA }) => {
    componentA.hello();
});

import('@my-scope/package-foo').then(({ default: packageFoo }) => {
    packageFoo.hello();
});


console.log('webpack starterkit');
