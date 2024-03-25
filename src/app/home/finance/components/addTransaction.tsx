'use client'
import Input from "@/components/form/Input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { DialogContent, DialogOverlay, DialogPortal } from "@/components/ui/dialog";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { DialogClose } from "@radix-ui/react-dialog";
import { format } from "date-fns";
import { CalendarIcon, Plus, X } from "lucide-react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import z from 'zod'

const schema = z.object({
    name: z.string().min(1, 'Nome obrigatório'),
    type: z.string().min(1, 'Tipo obrigatório'),
    category: z.string().min(1, 'Categoria obrigatório'),
    paymentMethod: z.string().min(1, 'Método de pagamento obrigatório'),
    banks: z.string().min(1, 'Banco obrigatório'),
    amount: z.string().min(1, 'Banco obrigatório').refine((value) => /^\d+$/.test(value), "O campo 'Valor' só permite números"),
})

type IFormData = z.infer<typeof schema>;

const AddTransaction = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    const { control, handleSubmit, register, formState: { errors } } = useForm<IFormData>({
        resolver: zodResolver(schema),
    });


    const handleNewTransaction = (data: IFormData) => {
        console.log(data)
    }



    return (
        <DialogPortal>
            <DialogOverlay className="DialogOverlay" >
                <DialogContent className="z-20 w-full max-w-[700px]" >
                    <form onSubmit={handleSubmit(handleNewTransaction)} className="space-y-8" >
                        <div className="space-y-4" >

                            <div className="space-y-1" >
                                <h2 className="text-lg font-bold" >Adicione uma nova transação</h2>
                                <p className="text-muted-foreground text-sm" >Aqui voce irá cadastrar uma nova transação, informe todos os campos.</p>
                            </div>

                            <div className="space-y-1" >
                                <p className="text-sm" >Nome</p>
                                <Input name="name" register={register} error={errors.name?.message} placeholder="Mercado" type="text" />
                            </div>

                            <div className="grid grid-cols-2 gap-4" >
                                <div className="space-y-1 w-full" >
                                    <p className="text-sm" >Tipo</p>
                                    <div className="space-y-1" >
                                        <Controller
                                            name="type"
                                            rules={{
                                                required: true
                                            }}
                                            control={control}
                                            render={({ field: { onChange, value } }) => (
                                                <Select onValueChange={onChange} value={value}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Selecione um tipo" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectItem value="entry">Entrada</SelectItem>
                                                            <SelectItem value="withdraw">Saída</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            )}
                                        />
                                        {errors.type && <p className="text-error">Tipo obrigatório</p>}
                                    </div>
                                </div>
                                <div className="space-y-1" >
                                    <p className="text-sm" >Categorias</p>
                                    <div className="space-y-1" >
                                        <Controller name="category" rules={{ required: true }} control={control} render={({ field: { onChange, value } }) => (
                                            <Select onValueChange={onChange} value={value} >
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
                                        )} />

                                        {errors.type && <p className="text-error">Categoria obrigatório</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4" >
                                <div className="space-y-1 w-full" >
                                    <p className="text-sm" >Método de pagamento</p>
                                    <div className="space-y-1" >
                                        <Controller name="paymentMethod" rules={{ required: true }} control={control} render={({ field: { onChange, value } }) => (
                                            <Select onValueChange={onChange} value={value} >
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
                                        )} />

                                        {errors.category && <p className="text-error">Método de pagamento obrigatório</p>}
                                    </div>

                                </div>

                                <div className="space-y-1" >
                                    <p className="text-sm" >Bancos</p>
                                    <div className="space-y-1" >
                                        <Controller name="banks" rules={{ required: true }} control={control} render={({ field: { onChange, value } }) => (
                                            <Select onValueChange={onChange} value={value} >
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
                                        )} />

                                        {errors.banks && <p className="text-error">Banco obrigatório</p>}
                                    </div>

                                </div>
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

                            <div className="space-y-1" >
                                <p className="text-sm" >Valor</p>
                                <Input name="amount" register={register} error={errors.amount?.message} placeholder="R$2500,00" type="text" />
                            </div>

                        </div>

                        <div className="flex items-center gap-4" >
                            <DialogClose type="button" className="w-full" >
                                <div className="w-full flex items-center justify-center gap-2 bg-red-700 hover:bg-red-800 transition-colors rounded-md px-4 h-9 text-sm font-medium text-zinc-50 "  >Cancelar <X size={16} /> </div>
                            </DialogClose>
                            <Button type="submit" className="w-full gap-2 h-9" variant={'success'} >Criar <Plus size={16} /> </Button>
                        </div>
                    </form>
                </DialogContent>
            </DialogOverlay>
        </DialogPortal>
    );
}

export default AddTransaction;