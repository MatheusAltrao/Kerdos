'use client'
import { Button } from "@/components/ui/button";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";

const AddTransaction = () => {

    const [open, setOpen] = useState(false)
    const [value, setValue] = useState("")

    const frameworks = [
        {
            value: "next.js",
            label: "Next.js",
        },
        {
            value: "sveltekit",
            label: "SvelteKit",
        },
        {
            value: "nuxt.js",
            label: "Nuxt.js",
        },
        {
            value: "remix",
            label: "Remix",
        },
        {
            value: "astro",
            label: "Astro",
        },
    ]


    return (
        <DialogPortal>
            <DialogOverlay className="DialogOverlay" >
                <DialogContent className="z-20" >
                    <div className="space-y-4" >

                        <div className="space-y-1" >
                            <h2 className="text-lg font-bold" >Adicione uma nova transacao</h2>
                            <p className="text-muted-foreground text-sm" >Aqui voce ira cadastrar uma nova transacao, informe todos os campos.</p>
                        </div>

                        <div className="space-y-1" >
                            <p className="text-sm" >Método de pagamento</p>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a fruit" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Apple</SelectItem>
                                        <SelectItem value="banana">Banana</SelectItem>
                                        <SelectItem value="blueberry">Blueberry</SelectItem>
                                        <SelectItem value="grapes">Grapes</SelectItem>
                                        <SelectItem value="pineapple">Pineapple</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                    </div>
                </DialogContent>
            </DialogOverlay>
        </DialogPortal>
    );
}

export default AddTransaction;