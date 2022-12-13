import Skill from "./Skill";

interface Player{
    id: number,
    playerName: string,
    salary: number,
    skills: Skill[],
    image: string
}

export default Player;