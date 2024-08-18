import { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { CardHorizontalFood, FoodProps } from './food';

import data from '../../../db.json';

export function TrendingFoods() {
  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    async function getFoods() {
      setFoods(data.foods);
    }

    getFoods();
  }, []);

  return (
    <FlatList
      data={foods}
      renderItem={({ item }) => <CardHorizontalFood food={item} />}
      contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
