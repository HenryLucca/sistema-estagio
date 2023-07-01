interface AuthInputProps {
    label: string;
    value: any;
    required?: boolean;
    notRender?: boolean;
    type?: 'text' | 'email' | 'password';
    onChange: (newValue: any) => void;
}

export default function AuthInput(props: AuthInputProps){
    return props.notRender ? null : (
        <div className={`flex flex-col`}>
            <label className="text-zinc-900 dark:text-zinc-100">{props.label}</label>
            <input
                type={props.type ?? 'text'} 
                value={props.value}
                required={props.required}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    px-4 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none text-zinc-900
                `}
             />
        </div>
    )
}
