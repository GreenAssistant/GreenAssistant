import idle from '../gifs/character/idle.gif';
import idleBlinking from '../gifs/character/idleBlinking.gif';
import thinking from '../gifs/character/thinking.gif';
import idea from '../gifs/character/idea.gif';


export class CharacterManager {

    behave(behave: string): string {
        switch (behave){
            case 'idle':
                return idle
            case 'idleBlinking':
                return idleBlinking
            case 'thinking':
                return thinking
            case  'idea':
                return idea
        }
        return 'error'
    }
}
