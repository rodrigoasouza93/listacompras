import React from 'react';
import CheckBox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import CustomCard from '../common/CustomCard';
import ListItemFooter from './ListItemFooter';

const ListItem = ({ item, deleteProduct, toggleProduct, list }) => (
    <CustomCard
      image={item.img}
      link="#"
      containerClass="list-item"
      footer={<ListItemFooter list={list} deleteProduct={deleteProduct} item={item} />}
      action={() => toggleProduct(item.id)}
    >
      <div>
        <div className="list-item-header">
          <Typography variant="subtitle1" component="h2">{item.product}</Typography>
          <CheckBox checked={item.checked}/>
        </div>
        <Typography component="p">{item.quantity} {item.unit}</Typography>
        <Typography component="p">R$ {item.price}</Typography>
      </div>
    </CustomCard>
);

export default ListItem;