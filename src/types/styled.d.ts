import 'styled-components/native';

declare module 'styled-components/native' {
  export interface BaseTheme {}
  export interface DefaultTheme extends BaseTheme {
    colors: {};
  }
}
