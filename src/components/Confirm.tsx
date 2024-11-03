import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './ui/dialog'
import { Button } from './ui/button'

interface Props {
    children: React.ReactNode
    onOk: () => Promise<void>
    text?: string
}

export const Confirm: React.FC<Props> = ({ onOk, text, children }) => {
    text ??= 'Данны будут удалены навсегда'

    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const handleOk = async () => {
        setLoading(true)
        await onOk()
        setLoading(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>{children}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Вы уверены?</DialogTitle>
                    <DialogDescription>{text}</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <div className="flex gap-3">
                        <Button
                            onClick={() => setOpen(false)}
                            disabled={loading}
                            variant="ghost"
                        >
                            Отмена
                        </Button>
                        <Button disabled={loading} onClick={handleOk}>
                            Ок
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
