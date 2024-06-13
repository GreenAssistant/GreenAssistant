import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import * as React from 'react'
import { useEffect } from 'react'
import Tooltip from "@mui/material/Tooltip";


interface NotifyItem {
    type: 'error' | 'success' | 'info' | 'warning'
    title: string
    message: string[] | string
    timeout: NodeJS.Timeout
    auto: boolean
}

export class Notify {
    private _addMessage = null

    register(addMessage: (type: string, title: string, message: string[] | string) => void): void {
        // @ts-ignore
        this._addMessage = addMessage
    }

    unregister(): void {
        this._addMessage = null
    }

    success (message: string[] | string): void {
        if (this._addMessage) {
            // @ts-ignore
            this._addMessage('success', 'Erfolg', message)
        }
    }

    error (message: string[] | string): void {
        if (this._addMessage) {
            // @ts-ignore
            this._addMessage('error', 'Fehler', message)
        }
    }

    warning (message: string[] | string): void {
        if (this._addMessage) {
            // @ts-ignore
            this._addMessage('warning', 'Hinweis', message)
        }
    }

    info (message: string[] | string): void {
        if (this._addMessage) {
            // @ts-ignore
            this._addMessage('info', 'Info', message)
        }
    }
}

export const notify: Notify = new Notify()


interface NotificationProps {
    variant?: 'standard' | 'filled' | 'outlined',
    spacing?: number,
    spacingBottom?: number,
    spacingRight?: number,
    tooltip?: string
}

export const Notification: React.FC<NotificationProps> = (props: NotificationProps) => {
    const [items, setItems] = React.useState<NotifyItem[]>([])

    useEffect(() => {
        notify.register(addMessage)
        return (): void => {
            notify.unregister()
        }
    }, )

    const addMessage = (type: string, title: string, message: string | string[]): void => {
        const item: NotifyItem = {
            // @ts-ignore
            type: type,
            title: title,
            message: message,
            // @ts-ignore
            timeout: null,
            auto: false
        }

        if (type !== 'error') {
            item.auto = true
            autoRemove(item)
        }

        setItems(prevState => {
            prevState.splice(0, 0, item)
            return [...prevState]})
    }

    const remove = (item: NotifyItem): void => {
        setItems(prevState => {
            if (item.timeout) clearTimeout(item.timeout)

            const index: number = prevState.indexOf(item)

            if (index !== -1) {
                prevState.splice(index, 1)
            }

            return [...prevState]
        })
    }

    const autoRemove = (item: NotifyItem): void => {
        if (item.auto) {
            item.timeout = setTimeout((): void => {
                remove(item)
            }, 5000)
        }
    }

    const stopTimer = (item: NotifyItem): void => {
        if (item.timeout) clearTimeout(item.timeout)
        // @ts-ignore
        item.timeout = null
    }

    return (
        <Stack
            style={{
                position:'fixed',
                bottom: props.spacingBottom ? props.spacingBottom : 20,
                right: props.spacingRight ? props.spacingRight: 20,
        }}
            spacing={props.spacing ? props.spacing : 2}>
            {items.map((item: NotifyItem, index: number) => {
                return (
                    <Tooltip key={index} title={props.tooltip ? props.tooltip : item.type} arrow>
                        <Alert
                            key={index}
                            style={{ borderRadius: '10px', cursor: 'pointer'}}
                            variant={props.variant ? props.variant : 'standard'}
                            severity={item.type}
                            onClick={() => remove(item)}
                            onMouseEnter={() => stopTimer(item)}
                            onMouseLeave={() => autoRemove(item)}>
                            <div>
                                {typeof item.message === 'string' &&
                                    <>
                                        {item.message}
                                    </>
                                }
                                {typeof item.message === 'object' &&
                                    <ul>
                                        {item.message.map((msg: string, index: number) => (
                                            <li key={index}>
                                                {msg}
                                            </li>
                                        ))}
                                    </ul>
                                }
                            </div>
                        </Alert>
                    </Tooltip>
                )
            })}
        </Stack>
    )
}
