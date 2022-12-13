import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Product } from "../../app/models/product";

interface Props {
  product: Product;
}

export default function ProductCard({product}: Props){
  return(
   
    
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{bgcolor: 'secondary.main'}}>
            {product.name.charAt(0).toUpperCase()}

          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{ sx: {fontWeight: "bold", color: "primary.main"} }}
      />
      <CardMedia
        component="img"
        sx={{ height: 140, backgroundSize: "contain", bgcolor: "primary.light"}}
        image={product.pictureUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom color="secondary" variant="h5" component="div">
          ${ ( product.price / 100).toFixed(2) }
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product.brand}
        </Typography>
      </CardContent>
      <CardActions style={{justifyContent: "space-between", alignItems: "center"}}>
        <Button size="small">Add to cart</Button>
        <Button size="small">View More</Button>
      </CardActions>
    </Card>

  )
}
