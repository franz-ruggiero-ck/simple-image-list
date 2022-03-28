import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import { pages } from "../../constants/pages";
import React from 'react';
import ImageList from "../image-list/ImageList";
import ImageDetail from "../image-detail/ImageDetail";

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={pages.IMAGE_LIST}
          component={ImageList}
          options={{title: 'Images'}}
        />
        <Stack.Screen
          name={pages.IMAGE_DETAIL}
          component={ImageDetail}
          options={{title: 'Image Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
