enum Move {
    Left = 0,
    Right = 1
}

interface Round {
    path: number[],
    outcome: number,
    timestamp: number
}

export class Engine {

    some(): string {
        return "Hey there!"
    }

    run(): Round {
        const path = this.buildPath()
        return {
            path: path,
            outcome: this.outcome(path),
            timestamp: Date.now()
        }
    }

    private buildPath(path: Move[] = []): Move[] {
        // base cose complete
        if (path.length == 8)
            return path;

        // base case intial
        if (path.length == 0)
            return this.buildPath([Math.random() > 0.5 ? Move.Right : Move.Left ])

        const next = Math.random() > this.pHurdleRight(path) ? Move.Right : Move.Left
        return this.buildPath([...path, next])
    }

    private outcome(path: number[]): number {
        return path.reduce((acc, el) => el == Move.Right ? acc + 0.5 : acc - 0.5, 0)
    }

    /* Central tendency alorythm
        the more the puck goes away from the center 
        the higher the probability is for it to come back
    */
    private sum(arr: number[]): number { return arr.reduce((acc, el) => acc + el, 0) };
    private mean(arr: number[]): number { return this.sum(arr) / arr.length }
    private normalize(arr: number[]): number { return this.mean(arr) - 0.5 }
    private scale(arr: number[], factor: number): number { return factor * this.normalize(arr) }
    private pHurdleRight(arr: number[]): number { return 0.5 + this.scale(arr, 0.001) }
}