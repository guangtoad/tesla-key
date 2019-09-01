import React from "react";
import Svg, { G, Path, Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="49px" height="58px" viewBox="0 0 49 58" xmlns="http://www.w3.org/2000/svg" {...props}>
      <Defs>
        <Polygon points="0 0.2163 48.9998 0.2163 48.9998 49.2163 0 49.2163" />
        <Polygon points="-0.0002 0.0004 4.9998 0.0004 4.9998 5 -0.0002 5"  />
      </Defs>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G transform="translate(-1.000000, -1.000000)">
            <G transform="translate(1.000000, 0.000000)">
                <G transform="translate(0.000000, 0.784200)">
                    <Path d="M24.4998,0.2163 C10.9698,0.2163 -0.0002,11.1853 -0.0002,24.7163 C-0.0002,38.2463 10.9698,49.2163 24.4998,49.2163 C38.0308,49.2163 48.9998,38.2463 48.9998,24.7163 C48.9998,11.1853 38.0308,0.2163 24.4998,0.2163" fill="#FF3B2A" />
                </G>
                <G transform="translate(22.000000, 53.784200)">
                    <Path d="M2.4998,0.0004 C1.1188,0.0004 -0.0002,1.1194 -0.0002,2.5004 C-0.0002,3.8804 1.1188,5.0004 2.4998,5.0004 C3.8808,5.0004 4.9998,3.8804 4.9998,2.5004 C4.9998,1.1194 3.8808,0.0004 2.4998,0.0004" fill="#FF3B2A" />
                </G>
                <Path d="M24.5017,37.4282 L27.8537,18.5772 C31.0477,18.5772 32.0557,18.9272 32.2017,20.3582 C32.2017,20.3582 34.3447,19.5582 35.4257,17.9362 C31.2067,15.9812 26.9697,15.8932 26.9697,15.8932 L24.4957,18.9052 L24.5017,18.9052 L22.0277,15.8932 C22.0277,15.8932 17.7897,15.9812 13.5717,17.9362 C14.6527,19.5582 16.7967,20.3582 16.7967,20.3582 C16.9427,18.9272 17.9497,18.5772 21.1227,18.5742 L24.5017,37.4282 Z" fill="#FFFFFF" />
                <Path d="M24.4998,15.0219 C27.9098,14.9969 31.8118,15.5489 35.8078,17.2919 C36.3418,16.3309 36.4788,15.9069 36.4788,15.9069 C32.1118,14.1779 28.0208,13.5859 24.4998,13.5719 C20.9778,13.5859 16.8888,14.1779 12.5208,15.9069 C12.5208,15.9069 12.7168,16.4289 13.1908,17.2919 C17.1868,15.5509 21.0898,14.9969 24.4998,15.0219" fill="#FFFFFF" />
            </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;