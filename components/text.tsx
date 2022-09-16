import { useMemo } from "react";
import {
  StyleSheet,
  TextProps,
  useColorScheme,
  Text as ReactText,
} from "react-native";
export function Text(props: TextProps) {
  const style = useMemo<typeof styles[keyof typeof styles]>(() => {
    let scheme = useColorScheme();
    scheme = scheme ? scheme : "dark";
    return styles[`text_${scheme}`];
  }, []);

  return <ReactText {...props} style={style}></ReactText>;
}
const default_style = StyleSheet.create({
  default: {},
});
const styles = StyleSheet.create({
  text_dark: {
    ...default_style.default,
  },
  text_light: {
    ...default_style.default,
  },
});
