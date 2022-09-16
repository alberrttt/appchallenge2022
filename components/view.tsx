import { useMemo } from "react";
import {
  StyleSheet,
  TextProps,
  useColorScheme,
  ViewProps,
  View as ReactView,
} from "react-native";
import { styles as base_styles } from "../src/styles";
export function View(props: ViewProps) {
  const style = useMemo<typeof styles[keyof typeof styles]>(() => {
    let scheme = useColorScheme();
    scheme = scheme ? scheme : "dark";
    return styles[`view_${scheme}`];
  }, []);

  return <ReactView {...props} style={style}></ReactView>;
}
const default_style = StyleSheet.create({
  default: {
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});
const styles = StyleSheet.create({
  view_dark: {
    ...default_style.default,
    ...base_styles.dark_container,
  },
  view_light: {
    ...default_style.default,
    ...base_styles.light_container,
  },
});
