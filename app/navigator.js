import { createStackNavigator } from 'react-navigation-stack'
import User from './screens/user'
import Admin from './screens/admin'

const AppNavigator = createStackNavigator({
  User: { screen: User },
  Admin: { screen: Admin },
});