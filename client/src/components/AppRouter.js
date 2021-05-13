import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Context } from '../index';
import { authOnlyRoutes, publicAndAuthRoutes, publicOnlyRoutes } from '../utils/routes';
import { observer } from 'mobx-react-lite';

const AppRouter = observer(() => {
  const { userStore } = useContext(Context);

  return (
    <Switch>
      {publicAndAuthRoutes.map(({ path, component }) =>
        <Route exact path={path} component={component}/>
      )}
      {userStore.isAuth === false && publicOnlyRoutes.map(({ path, component }) =>
        <Route exact path={path} component={component}/>
      )}
      {userStore.isAuth === true && authOnlyRoutes.map(({ path, component }) =>
        <Route exact path={path} component={component}/>
      )}
      <Redirect to="/questions"/>
    </Switch>
  );
});

export default AppRouter;