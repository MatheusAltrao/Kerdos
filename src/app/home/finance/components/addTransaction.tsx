'use client'
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { DropdownMenu } from "@/components/ui/dropdown-menu";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { CalendarIcon, Plus, X } from "lucide-react";
import { useState } from "react";



const AddTransaction = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    return (
        <DialogPortal>
            <DialogOverlay className="DialogOverlay" >
                <DialogContent className="z-20 w-full max-w-[700px]" >
                    <form className="space-y-8" >
                        <div className="space-y-4" >

                            <div className="space-y-1" >
                                <h2 className="text-lg font-bold" >Adicione uma nova transação</h2>
                                <p className="text-muted-foreground text-sm" >Aqui voce irá cadastrar uma nova transação, informe todos os campos.</p>
                            </div>

                            <div className="space-y-1" >
                                <p className="text-sm" >Nome</p>
                                <input placeholder="Mercado" className="border-border border rounded w-full bg-transparent p-2 text-sm" type="text" />
                            </div>

                            <div className="grid grid-cols-2 gap-4" >
                                <div className="space-y-1 w-full" >
                                    <p className="text-sm" >Tipo</p>
                                    <Select >
                                        <SelectTrigger >
                                            <SelectValue placeholder="Selecione um tipo" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="entry">Entrada</SelectItem>
                                                <SelectItem value="withdraw">Saída</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="space-y-1" >
                                    <p className="text-sm" >Categorias</p>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione a categoria" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="work">Trabalho</SelectItem>
                                                <SelectItem value="gym">Academia</SelectItem>
                                                <SelectItem value="sale">Venda</SelectItem>
                                                <SelectItem value="school">Escola</SelectItem>
                                                <SelectItem value="college">Faculdade</SelectItem>
                                                <SelectItem value="leisure">Lazer</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4" >
                                <div className="space-y-1 w-full" >
                                    <p className="text-sm" >Método de pagamento</p>
                                    <Select >
                                        <SelectTrigger >
                                            <SelectValue placeholder="Selecione um método" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="pix">Pix</SelectItem>
                                                <SelectItem value="credit">Crédito</SelectItem>
                                                <SelectItem value="Debt">Débito</SelectItem>
                                                <SelectItem value="money">Dinheiro</SelectItem>
                                                <SelectItem value="ticket">Boleto</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-1" >
                                    <p className="text-sm" >Bancos</p>
                                    <Select>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Selecione um banco" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectItem value="nubank">Nubank</SelectItem>
                                                <SelectItem value="bancoDoBrasil">Banco do Brasil</SelectItem>
                                                <SelectItem value="caixa">Caixa Econômica</SelectItem>
                                                <SelectItem value="santander">Santander</SelectItem>
                                                <SelectItem value="bradesco">Bradesco</SelectItem>
                                                <SelectItem value="inter">Inter</SelectItem>
                                                <SelectItem value="c6">C6</SelectItem>
                                                <SelectItem value="itau">Itaú</SelectItem>
                                                <SelectItem value="mercadoPago">Mercado Pago</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>





                            <div className="space-y-1" >
                                <p className="text-sm" >Valor</p>
                                <input placeholder="R$2500,00" className="border-border border  rounded w-full bg-transparent p-2 text-sm" type="text" />
                            </div>

                            <div className="space-y-1" >
                                <p className="text-sm"  >Data</p>
                                <Popover  >
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant={"outline"}
                                            className={cn(
                                                "w-full justify-start text-left font-normal",
                                                !date && "text-muted-foreground"
                                            )}
                                        >
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {date ? format(date, "dd/MM/yyyy") : <span>Selecione uma data</span>}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar
                                            required
                                            mode="single"
                                            selected={date}
                                            onSelect={setDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>

                        </div>

                        <div className="flex items-center gap-4" >
                            <DialogClose className="w-full" >
                                <div className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 transition-colors rounded-md px-4 h-9 text-sm font-medium text-zinc-50 "  >Cancelar <X size={16} /> </div>
                            </DialogClose>
                            <Button className="w-full gap-2 h-9" variant={'success'} >Criar <Plus size={16} /> </Button>
                        </div>
                    </form>
                </DialogContent>
            </DialogOverlay>
        </DialogPortal>
    );
}

export default AddTransaction;