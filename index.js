function receivesAFunction(callback) {
    callback();
    return;
}
function returnsANamedFunction() {
    return function fn() {

    }
}
function returnsAnAnonymousFunction() {
    return () => { }
}