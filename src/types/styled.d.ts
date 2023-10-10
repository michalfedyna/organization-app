import 'styled-components/native';

declare module 'styled-components/native' {
  export interface BaseTheme {
    fonts: {};
    spacings: {};
    sizes: {};
  }
  export interface DefaultTheme extends BaseTheme {
    colors: {};
  }
}
