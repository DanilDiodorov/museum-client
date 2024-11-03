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
import { useCategoryUpdate } from '../../_hooks/use-category-update'
import { useCategoryAdd } from '../../_hooks/use-category-add'
import { MdDeleteOutline } from 'react-icons/md'
import { useCategoryDelete } from '../../_hooks/use-category-delete'
import { Confirm } from '@/components/Confirm'

interface Props {
    category?: CategoryDto
    openButtonText: React.ReactNode
    okButtonText: string
    modalTitle: string
    className?: string
}

export const CategoryForm: React.FC<Props> = ({
    category,
    openButtonText,
    okButtonText,
    modalTitle,
    className,
}) => {
    const [open, setOpen] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(category?.title || '')

    const { mutateAsync: updateMutate, isPending: updateIsPending } =
        useCategoryUpdate()
    const { mutateAsync: addMutate, isPending: addIsPending } = useCategoryAdd()
    const { mutateAsync: deleteMutate, isPending: deleteIsPending } =
        useCategoryDelete()

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

    const handleDelete = async () => {
        if (category) {
            deleteMutate(category.id)
            setOpen(false)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <div
                    onClick={(e) => {
                        setOpen(true)
                    }}
                    className={className}
                >
                    {openButtonText}
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{modalTitle}</DialogTitle>
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
                    {category && (
                        <Confirm onOk={handleDelete}>
                            <Button variant="destructive">
                                <MdDeleteOutline />
                            </Button>
                        </Confirm>
                    )}
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
