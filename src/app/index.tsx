import { Banner } from '@/components/banner';
import { Header } from '@/components/header';
import { Restaurants } from '@/components/restaurants';
import { RestaurantsVerticalList } from '@/components/restaurantsVerticalList';
import { Search } from '@/components/search';
import { Section } from '@/components/section';
import { TrendingFoods } from '@/components/trending';
import Constants from 'expo-constants';
import { ScrollView, View } from 'react-native';

const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className='bg-slate-200'
      showsVerticalScrollIndicator={false}
    >
      <View className='w-full px-4' style={{ marginTop: statusBarHeight + 8 }}>
        <Header />

        <Banner />
        <Search />
      </View>

      <Section
        name='Comidas em alta'
        label='Veja todas'
        size='text-2xl'
        action={() => console.log('clicked on "Veja mais"')}
      />
      <TrendingFoods />

      <Section
        name='Famosos no yFood'
        label='Veja todos'
        size='text-xl'
        action={() => console.log('clicked on "Famosos no yFood"')}
      />
      <Restaurants />

      <Section
        name='Restaurantes'
        label='Veja todos'
        size='text-xl'
        action={() => console.log('clicked on "Restaurantes"')}
      />
      <RestaurantsVerticalList />
    </ScrollView>
  );
}
