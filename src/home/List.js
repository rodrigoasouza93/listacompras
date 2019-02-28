import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import CustomCard from '../common/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';
import './list.css';

const List = () => (
  <CustomCard
    containerClass="list-container"
    footer={<ListFooter />}
    link="/lista"
  >
    <div>
      <p className="title">Mês</p>
      <div className="list-card-body">
        <ListItem icon={faShoppingBasket} text="1 item(s) Restante" />
        <ListItem icon={faCheck} text="2 item(s) Comprados" />
      </div>
    </div>
  </CustomCard>
);

export default List;