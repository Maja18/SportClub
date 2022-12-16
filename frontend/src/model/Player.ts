import Skill from "./Skill";

interface Player{
    id: number,
    playerName: string,
    salary: string,
    playerSkills: Skill[],
    image: string
}

export default Player;