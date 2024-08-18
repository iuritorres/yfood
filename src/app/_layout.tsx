import { Slot } from 'expo-router';
import '../../node_modules/.cache/nativewind/src/styles/global.css.native.css';
import '../../node_modules/.cache/nativewind/src/styles/global.css.web.css';

// import '../styles/global.css';

export default function RootLayout() {
  return <Slot />;
}
