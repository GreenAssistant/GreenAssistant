// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export class SessionManager {
    generate(sessionKey: string): void {
        if(!sessionStorage.getItem(sessionKey)) {
            const newClientID = uuidv4()
            sessionStorage.setItem(sessionKey, newClientID)
        }
    }
    get(sessionKey: string): string | null {
        if(sessionStorage.getItem(sessionKey)) {
            return sessionStorage.getItem(sessionKey)
        }
        return 'no Session found'
    }
}