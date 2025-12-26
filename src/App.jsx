import JSInJSXExample from "./components/JSInJSXExample";
import StylingExample from "./components/StylingExample";
import PropsExample from "./components/PropsExample";
import ConditionalRendering1 from "./components/ConditionalRendering1";
import ConditionalRendering2 from "./components/ConditionalRendering2";
import ListRendering from "./components/ListRendering";
import PureComponentExample from "./components/PureComponentExample";
import PurePropsExample from "./components/PurePropsExample";

const App = () => {
  return (
    <div>
      <h1>Introduction & JSX - Chapter Review</h1>
      <JSInJSXExample />
      <StylingExample />
      <PropsExample />
      <ConditionalRendering1 />
      <ConditionalRendering2 />
      <ListRendering />
      <PureComponentExample />
      <PurePropsExample />
    </div>
  );
};

export default App;