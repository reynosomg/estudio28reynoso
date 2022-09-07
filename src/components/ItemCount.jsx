import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState } from 'react';

const report = () => {
    alert("Se añade producto al carro")
}

const [rate, setRate] = useState (0);

const handleClick1 = () => {
    if (rate<5) {
        setRate(rate+1)  
    } 
    
}
const handleClick2 = () => {
   if (rate>2) {
        setRate(rate-1)
   } 
}
const ItemCount = () => {
    return (
        <div>
            <IconButton aria-label='' onClick={handleClick1} >
                <AddIcon />
            </IconButton>
            {rate}
            <IconButton aria-label='' onClick={handleClick2}>
                <RemoveIcon />
            </IconButton>

            <Button variant="contained" onClick={report}>Add to cart</Button>
        </div>
    )
}

export default ItemCount;