import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewCategory}) => {
    const [InputValue, setInputValue] = useState('')

    const onInputChange= ({target}) => {
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
      event.preventDefault()
      const value = InputValue.trim() 
      if(value.length < 1) return
      onNewCategory(value)
      setInputValue('')
    }

    return (
      <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifts"
        value={InputValue}
        onChange={onInputChange}
        />
     </form>
  )
}
