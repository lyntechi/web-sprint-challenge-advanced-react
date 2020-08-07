// write your custom hook here to control your checkout form

import { useState } from 'react'
import CheckoutForm from '../components/CheckoutForm'

export const useForm = ()=>{
    const[values, setValues]=useState()

    const handleChanges = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
      };
      return[handleChanges]
}