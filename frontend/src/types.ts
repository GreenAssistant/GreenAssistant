

export const drawerWidth: number = 240;

// Backend Server
// Deployment = 'https://greenassistant.ai.tha.de:7000'
export const baseURL = 'http://127.0.0.1:8000/'

// Types
export type Prompt = {
    question: string,
    answer: string
}

export type Scale = {
    height: number,
    width: number,
}