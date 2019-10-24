
import('./componentB').then(({ default: componentB }) => {
    componentB.hello();
});

function hello() {
    console.log('Hello from componentA');
}

export default {
    hello,
};
