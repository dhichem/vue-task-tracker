
import HomeStack from "./homeStack";
import SettingsStack from "./settingsStack";
import AbsenceStack from "./absenceStack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from "react-navigation";

const rootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    CalendarAbsence: {
        screen: AbsenceStack,
    },
    Settings: {
        screen: SettingsStack,
    },
});


export default createAppContainer(rootDrawerNavigator);