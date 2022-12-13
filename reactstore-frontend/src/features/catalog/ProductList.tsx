import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

export default function ProductList({products}: Props){
  return(
    <List>
      {products.map((product: any, index: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </List>
  )
}
