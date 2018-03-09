import { FirstTimeRun } from './firstTimeRun';

describe('probar clase contador 2', () => {
    beforeEach(() => {
        FirstTimeRun.resetContador();
    });

    it('setea contador 2', () => {
        expect(FirstTimeRun.contar()).toBe(0);
    });

    // tslint:disable-next-line:no-unused-expression
    it('setea sumar 2'), () => {
        FirstTimeRun.addTime();
        expect(FirstTimeRun.contar()).toBe(1);
    };
});
