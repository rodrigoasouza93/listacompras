import React from 'react';
import CheckBox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import CustomCard from '../common/CustomCard';
import ListItemFooter from './ListItemFooter';

const ListItem = ({ item, deleteProduct, toggleProduct }) => (
    <CustomCard
      image="http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
      link="#"
      containerClass="list-item"
      footer={<ListItemFooter deleteProduct={deleteProduct} item={item} />}
    >
      <div>
        <div className="list-item-header">
          <Typography variant="subtitle1" component="h2">{item.product}</Typography>
          <CheckBox onClick={() => toggleProduct(item.id)} checked={item.checked}/>
        </div>
        <Typography component="p">{item.quantity} {item.unit}</Typography>
        <Typography component="p">R$ {item.price}</Typography>
      </div>
    </CustomCard>
);

export default ListItem;