import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Title } from './styled';

// Sagas
import * as exampleActions from '../../store/modules/exampleModule/actions';
import * as authActions from '../../store/modules/auth/actions';

export default function Main() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.title = 'Main';
  }, []);

  React.useEffect(() => {
    dispatch(exampleActions.exampleActionRequest('HEYYYYYYYYYYY'));
    dispatch(authActions.logInRequest('Auth test'));
  }, [dispatch]);

  toast.success('Pretty cool message!!!');
  return (
    <Title>
      Main
      <small>Test</small>
    </Title>
  );
}
