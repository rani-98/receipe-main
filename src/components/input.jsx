export default function Input(props) {
    const inputStyle = "mx-auto my-2 border rounded-md p-2 w-full"
    return (
        <div>
            <label htmlFor={props.id}>{props.label}</label>
            <input type={props.type || 'text'} placeholder={props.placeholder} id={props.id} className={props.style || inputStyle} name={props.name} onChange={props.onChange} required/>
        </div>
    )
}