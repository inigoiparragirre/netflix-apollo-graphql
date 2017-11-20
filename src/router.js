import { StackRouter } from "react-navigation";
import CategoryScreen from "./category";
import Dashboard from "./components/Home";
import Search from "./components/Search";


export default StackRouter({
  CategoryScreen: { screen: CategoryScreen },
  search: { screen: Search }
}
);
