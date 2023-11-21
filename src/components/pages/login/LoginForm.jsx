import { useState } from "react"
import { useNavigate } from "react-router-dom";

function LoginForm() {
    const [value, setValue] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value == ""){
            alert("Le champ Prénom est obligatoire")
        }
        else{
            navigate("/order", {state:{name:value}});
            
            setValue("")
        }
    }

    const handleChange = (event) => {
        const valueAfterChange = event.target.value
        setValue(valueAfterChange)
    }

    const navigate = useNavigate();

    return (
        <div>
            <h1>bienvenue chez nous !</h1>
            <h2>Connectez vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Entrez votre prénom...'
                onChange = {handleChange}
                value={value}
                ></input>
                <button>Accéder à votre espace</button>
            </form>
        </div>
    )
}

export default LoginForm
