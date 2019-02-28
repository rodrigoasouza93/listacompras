import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Divider from '@material-ui/core/Divider';

import './customCard.css';

const CustomCard = (props) => (
  <div className={props.containerClass}>
    <Card className="card">
      <CardActionArea className="card-action-area">
        <CardContent className="card-content">
          {props.children}
        </CardContent>
      </CardActionArea>
      {props.footer && (
        <div>
          <Divider />
          <CardActions className="card-footer">
            {props.footer}
          </CardActions>
        </div>
      )}
    </Card>
  </div>
);

export default CustomCard;