import React, {useState} from 'react'
const medics=[
    {id:"m1",name:"dolo",category:"All",agegroup:"12-60",price:10,mfgdate:"10-july-2023",expdate:"10-aug-2026"},
    {id:"m2",name:"crosin",category:"Kids",agegroup:"0-12",price:20,mfgdate:"03-july-2023",expdate:"13-aug-2026"},
    {id:"m3",name:"vicks",category:"All",agegroup:"12-60",price:30,mfgdate:"10-july-2023",expdate:"14-aug-2026"},
    {id:"m4",name:"dart",category:"All",agegroup:"12-60",price:40,mfgdate:"10-july-2023",expdate:"10-aug-2026"},
    {id:"m5",name:"paracetimol",category:"All",agegroup:"12-60",price:50,mfgdate:"10-july-2023",expdate:"10-aug-2026"}
]

const SearchProduct = () => {
const [search, setSearch]=useState(""); 
 const filterProducts=medics.filter((med)=>med.name.toLowerCase().includes(search.toLowerCase())); //instead of include we can use exact key word
  return (
    <div>
    <h1>SearchProduct</h1>
    <input type = "text" value = {search} onChangeCapture={(e)=> setSearch(e.target.value)}/>
    <ul>
        {filterProducts.map((med)=>(
            <li key={med.id}>
                {med.name}  {med.category}  {med.agegroup}  {med.price}
            </li>
        ))}
    </ul>
    </div>
  )
}

export default SearchProduct
