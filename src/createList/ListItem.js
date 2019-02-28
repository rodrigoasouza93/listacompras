import React from 'react';
import CheckBox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';

import CustomCard from '../common/CustomCard';
import ListItemFooter from './ListItemFooter';

const ListItem = () => (
    <CustomCard
      image="http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg"
      link="#"
      containerClass="list-item"
      footer={<ListItemFooter />}
    >
      <div>
        <div className="list-item-header">
          <Typography variant="subtitle1" component="h2">Café</Typography>
          <CheckBox />
        </div>
        <Typography component="p">1 Unidade</Typography>
        <Typography component="p">R$ 10.00</Typography>
      </div>
    </CustomCard>
);

export default ListItem;