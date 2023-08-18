import Button from '@mui/material/Button';
import Switch from '@mui/material/Switch';
import {TextField} from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useState } from 'react';
import FormControl from '@mui/material';

function FormSignUp( props ) {
    const {handleSubmit} = props
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] =useState('')
    const [prom, setProm] = useState(true)
    const [nov, setNov] = useState(false)

    const [erros, setErros] = useState({
        name: { 
                error: false,
                message: 'Deben ser al menos 3 caracteres'}
    })

    function validarNombre(nombre) {
        if(nombre.length >= 3 ){
            return { name: { error: false, message: ''}}
        } else {
            return { name: { error: true, message: 'Deben ser al menos 3 caracteres'}}
        }
    }
 
    return ( 
    <form onSubmit={(e) =>{ e.preventDefault()
                            handleSubmit({name,lastName,email,prom,nov})
    }}>
        <TextField 
            id='name' 
            label="Nombre" 
            variant='outlined'
            fullWidth
            margin='normal'
            onChange={(e) => { 
                setName(e.target.value)
            } }
            value={name}
            error={ erros.name.error}
            helperText={ erros.name.error ? erros.name.message : ''}
            onBlur={(e) => {
                setErros(validarNombre(e.target.value))
            }}
            />
        <TextField 
            id='lastName' 
            label="Apellido" 
            variant='outlined'
            fullWidth
            margin='normal'
            value={lastName}
            onChange={(e) => { 
                setLastName(e.target.value)
            } }

            />
        <TextField 
            id='email' 
            label="Email" 
            variant='outlined'
            fullWidth
            margin='normal'
            value={email}
            onChange={(e) => { 
                setEmail(e.target.value)
            } }
            />
        
        <FormGroup>
            <FormControlLabel 
                control={
                <Switch 
                    checked={prom}
                    onChange={(e) => {
                        setProm(e.target.checked)
                    }}
            />} 
            label="Promociones"/>
            <FormControlLabel 
                control={
                <Switch 
                    checked={nov}
                    onChange={(e) => {
                        setNov(e.target.checked)
                    }}
            />} label="Novedades"/>
        </FormGroup>
        <Button 
            variant='contained'
            type='submit'>
            Registrarse
            </Button>
    </form>
    )
}

export default FormSignUp