import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, Ionicons, FontAwesome } from '@expo/vector-icons';
import Feed from "./Feed";
import Podcasts from "./Podcasts";
import Radio from "./Radio";
import Notificaciones from "./Notificaciones";
import Perfil from "./Perfil";
import { SafeAreaView } from "react-native";

const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'transparent' }}>
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    
                      if (route.name === 'Feed') {
                        return ( <MaterialIcons name="home-filled" size={24} color="#999999" /> );
                      } else if (route.name === 'Podcasts') {
                        return ( <MaterialIcons name="podcasts" size={24} color="#999999" /> );
                      } else if (route.name === 'Radio') {
                        return ( <Ionicons name="musical-notes" size={28} color="#999999" /> );
                      } else if (route.name === 'Notificaciones') {
                        return ( <Ionicons name="notifications-sharp" size={24} color="#999999" /> );
                      } else if (route.name === 'Perfil') {
                        return ( <FontAwesome name="user" size={24} color="#999999" /> );
                      }
                    },
                    tabBarActiveTintColor: '#2f2f2f',
                    tabBarInactiveTintColor: '#999999',
                  })}
                  >
                <Tab.Screen name="Feed" component={Feed} />
                <Tab.Screen name="Podcasts" component={Podcasts} />
                <Tab.Screen name="Radio" component={Radio} />
                <Tab.Screen name="Notificaciones" component={Notificaciones} />
                <Tab.Screen name="Perfil" component={Perfil} />
            </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    );
};



export default Navigation;