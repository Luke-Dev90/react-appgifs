import React,{useState} from "react";
import {AddCategory} from './components/AddCategory.js'
import {GifGrid} from './components/GifGrid'
const GitExpertApp = () => {

    const [categories, setCategories] = useState( ['Samurai x'])
 
    return(
        <>
            <h2>GitExpertApp</h2>
            <hr/>

            <AddCategory setCategories={setCategories}/>

            <ol>
               { 
                categories.map( category => (
                    <GifGrid 
                    key={category}
                    category={category}/>
                ))
               }
            </ol>
        </>
    )

}


export default GitExpertApp;