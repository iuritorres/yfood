import { Image, Pressable, Text } from 'react-native';

export interface RestaurantProps {
  id: string;
  name: string;
  image: string;
}

export function CardHorizontalRestaurant({
  restaurant,
}: {
  restaurant: RestaurantProps;
}) {
  return (
    <Pressable
      className='flex flex-col items-center justify-center'
      onPress={() => console.log(`clicked on ${restaurant.name}`)}
    >
      <Image
        source={{ uri: restaurant.image }}
        className='w-20 h-20 rounded-full'
      />

      <Text
        className='text-sm mt-2 w-20 text-center leading-4 text-black'
        numberOfLines={2}
      >
        {restaurant.name}
      </Text>
    </Pressable>
  );
}
