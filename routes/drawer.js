
import HomeStack from "./homeStack";
import SettingsStack from "./settingsStack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

const rootDrawerNavigator = createDrawerNavigator({
    CalendarAbsence: {
        screen: HomeStack,
    },
    Settings: {
        screen: SettingsStack,
    },
});


export default createAppContainer(rootDrawerNavigator);