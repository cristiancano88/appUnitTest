export class FirstTimeRun {
    private static contador = 0;

    static addTime(): void {
        this.contador++;
    }

    static contar(): number {
        return this.contador;
    }

    static resetContador(): void {
        this.contador = 0;
    }
}
