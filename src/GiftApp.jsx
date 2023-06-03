import { useState } from 'react'
import {AddCategory, GiftGrid} from './components'

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(["Saitama"])

   const onAddCategory = (newCategory) =>{
    if(categories.includes(newCategory)) return;
    setCategories([newCategory,...categories])
    }

    return (
        <>
            <h1>Gift ExpertApp</h1>

            <AddCategory onNewCategory={event => onAddCategory(event)}/>

            {categories.map((category) =>(
            <GiftGrid 
            key={category} 
            category={category}
            />
            ))
            }
        </>
    )
}