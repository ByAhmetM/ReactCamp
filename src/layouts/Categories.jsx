import React from "react";
import { Menu } from 'semantic-ui-react';

export default function Categories() {
  return (
    <div>
   <Menu pointing vertical>
        <Menu.Item
          name='anasayfa'
        />
        <Menu.Item
          name='messages'
        />
        <Menu.Item
          name='friends'
        />
      </Menu>
    </div>
  );
}
