import "react-native-gesture-handler";
import Navigation from './pages/Navigation';
import { FontProvider } from "./pages/context/FontContext";

export default function App() {
  return (
      <FontProvider>
        <Navigation />
      </FontProvider>
  );
}
