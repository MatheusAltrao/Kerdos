'use client';

import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface InputProps {
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegister<any>;
    error?: string;
    rules?: RegisterOptions;
}

const Input = ({ name, placeholder, register, rules, type, error }: InputProps) => {
    return (
        <div className='w-full space-y-1'>
            <input
                placeholder={placeholder}
                type={type}
                {...register(name, rules)}
                id={name}
                className='border-border border  rounded w-full bg-transparent p-2 text-sm'
            />
            {error && <p className='text-error'>{error}</p>}
        </div>
    );
};

export default Input;
