import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useFetchUsers } from '../UserHooks';

export const UserListView = () => {
  useFetchUsers();

  return (
    <div>
      <Button
        component={Link}
        to='/users/create'
      >
        Create a user
      </Button>
    </div>
  );
};
