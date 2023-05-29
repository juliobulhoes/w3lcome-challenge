import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryDark: string;
      primaryDarker: string;
      primaryEvenDarker: string;
      primaryLight: string;
      primaryLighter: string;
      primaryEvenLighter: string;

      grey: string;

      white: string;
    };
  }
}
