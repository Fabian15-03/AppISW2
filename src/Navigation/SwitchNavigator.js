import React , {useState} from 'react';
import AuthRoute from './AuthRoute'
import NoAuthRoutes from './RouteNoAuth'

const SwitchNavigator = () => {
    const isSignedIn = useState(true);
  return (
    <View>
         isSignedIn ? (
    <>
        <AuthRoute/>
    </>
    ) : (
    <>
        <NoAuthRoutes/>
    </>
    );
    </View>
  )
}

export default SwitchNavigator
