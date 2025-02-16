import Badge from '@mui/material/Badge';
import ShoppingBasketOutlinedIcon from '@mui/icons-material/ShoppingBasketOutlined';
function Basket() {
  return (
    <Badge badgeContent={1} color="success">
      <ShoppingBasketOutlinedIcon fontSize='large' className=' text-greenPrimary' />
    </Badge>
  );
}

export default Basket;
