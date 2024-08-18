import { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

import data from '../../../db.json';
import { CardHorizontalRestaurant, RestaurantProps } from './restaurant';

export function Restaurants() {
  const [restaurants, setRestaurants] = useState<RestaurantProps[]>([]);

  useEffect(() => {
    async function getRestaurants() {
      setRestaurants(data.restaurants);
    }

    getRestaurants();
  }, []);

  return (
    <FlatList
      data={restaurants}
      renderItem={({ item }) => <CardHorizontalRestaurant restaurant={item} />}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
