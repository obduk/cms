import React from 'react';

import {
  BooleanField,
  Datagrid,
  List,
  Responsive,
  SimpleList,
  TextField,
} from 'react-admin';

export const PageList = props => (
  <List {...props}>
    <Responsive
      small={<SimpleList primaryText={record => record.name} />}
      medium={
        <Datagrid>
          <TextField source="name" sortable={false} />
          <BooleanField source="private" sortable={false} />
          <BooleanField source="contactForm" sortable={false} />
        </Datagrid>
      }
    />
  </List>
);
