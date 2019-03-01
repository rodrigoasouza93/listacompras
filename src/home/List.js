import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

import CustomCard from '../common/CustomCard';
import ListFooter from './ListFooter';
import ListItem from './ListItem';
import './list.css';

const List = (props) => (
  <CustomCard
    containerClass="list-container"
    footer={<ListFooter date={props.date} total={props.total}/>}
    link="/lista/edicao"
    cardClass={props.openedItems < 1 ? 'closed-list' : 'opened-list'}
  >
    <div>
      <p className="title">{props.list}</p>
      <div className="list-card-body">
        <ListItem icon={faShoppingBasket} text={`${props.openedItems} item(s) Restantes`} />
        <ListItem icon={faCheck} text={`${props.closedItems} item(s) Comprados`} />
      </div>
    </div>
  </CustomCard>
);

export default List;