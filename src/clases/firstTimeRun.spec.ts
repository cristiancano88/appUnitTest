import { FirstTimeRun } from './firstTimeRun';

describe('probar clase contador', () => {
    it('setea contador', () => {
        expect(FirstTimeRun.contar()).toBe(0);
    });

    // tslint:disable-next-line:no-unused-expression
    it('setea sumar'), () => {
        FirstTimeRun.addTime();
        expect(FirstTimeRun.contar()).toBe(1);
    };

    // afterEach(() => {
    //     FirstTimeRun.resetContador();
    // });
});
