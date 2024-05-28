import { Engine, EngineRound } from "./engine";

export interface GameRound {
    path: number[],
    bucket: number,
    timestamp: number,
    reward: number,
}

export class Game {

    private points: number;
    readonly rounds: GameRound[];
    private engine: Engine;
    private roundPrice: number;
    private rewards: number[]

    constructor(intialPoints: number, roundPrice: number, rewards: number[]){
        this.points = intialPoints;
        this.roundPrice = roundPrice;
        this.engine = new Engine();
        this.rounds = []
        this.rewards = rewards
    }

    play() {
        const engineRound: EngineRound = this.engine.run();
        const gameRound: GameRound = this.toGameRound(engineRound)
        this.rounds.push(gameRound)
        this.points -= this.roundPrice;
        this.points += this.getReward(gameRound.bucket)
    }

    getPoints(){
        return this.points
    }

    private getReward(bucket: number): number {
        return this.rewards[(Math.abs(bucket))];
    }

    private toGameRound(engineRound: EngineRound): GameRound {
        return {
            ...engineRound,
            reward: this.getReward(engineRound.bucket)
        }
    }
}