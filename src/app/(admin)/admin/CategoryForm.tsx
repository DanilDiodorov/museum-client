import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { CategoryDto } from '@/services/generated'
import React, { useState } from 'react'
import { useCategoryUpdate } from './_hooks/use-category-update'
import { useCategoryAdd } from './_hooks/use-category-add'

interface Props {
    category?: CategoryDto
    openButtonText: string
    okButtonText: string
}

export const CategoryForm: React.FC<Props> = ({
    category,
    openButtonText,
    okButtonText,
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(category?.title || '')

    const { mutateAsync: updateMutate, isPending: updateIsPending } =
        useCategoryUpdate()
    const { mutateAsync: addMutate, isPending: addIsPending } = useCategoryAdd()

    const handleClick = async () => {
        if (title && category) {
            await updateMutate({
                id: category.id,
                data: {
                    title,
                },
            })
            setOpen(false)
        } else if (title) {
            await addMutate({
                title,
            })
            setOpen(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)}>{openButtonText}</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{openButtonText}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Input
                        id="name"
                        className="col-span-3"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <DialogFooter>
                    <Button
                        onClick={handleClick}
                        disabled={updateIsPending || addIsPending}
                    >
                        {okButtonText}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
