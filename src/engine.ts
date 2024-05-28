enum Move {
    Left = 0,
    Right = 1
}

export interface EngineRound {
    path: number[],
    bucket: number,
    timestamp: number
}

export class Engine {

    some(): string {
        return "Hey there!"
    }

    run(): EngineRound {
        const path = this.buildPath()
        return {
            path: path,
            bucket: this.outcome(path),
            timestamp: Date.now(),
        }
    }

    private buildPath(path: Move[] = []): Move[] {
        if(path.length == 8) return path;
        path.push(Math.random() > 0.5 ? Move.Right : Move.Left)
        return this.buildPath(path);
    }

    private outcome(path: Move[]): number {
        return path.reduce((acc, el) => el == Move.Right ? acc + 0.5 : acc - 0.5, 0)
    }
}