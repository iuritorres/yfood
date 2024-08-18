import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import data from '../../../db.json';
import { CardVerticalRestaurant, RestaurantProps } from './restaurant';

export function RestaurantsVerticalList() {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      setRestaurants(data.restaurants);
    }

    getRestaurants();
  }, []);

  return (
    <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
      {restaurants.map((restaurant) => (
        <CardVerticalRestaurant
          key={`restaurant-vertical-card-${restaurant.id}`}
          restaurant={restaurant}
        />
      ))}
    </View>
  );
}
