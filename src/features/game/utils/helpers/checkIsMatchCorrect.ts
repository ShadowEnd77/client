import { GameMatchPair } from "../../../../types/entities";

export const checkIsMatchCorrect = (pairs: GameMatchPair[], answers: Array<string | null> ) => {
    return pairs.every((item, index) => {
        return item.v == answers[index]
    })
}