import  Badge  from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
    return (
        <Badge badgeContent={14} color="error">
        <ShoppingCartIcon color="primary" />
        </Badge>
    )
}

export default CartWidget;
