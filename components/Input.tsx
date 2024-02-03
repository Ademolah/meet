interface InputProps {
    placeholder?: string,
    value?: string,
    type?: string,
    disabled?: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>)=>void
}

const Input = ({
    placeholder, value, type, disabled, onChange
}: InputProps) => {
    return ( 
        <div>

        </div>
     );
}
 
export default Input;