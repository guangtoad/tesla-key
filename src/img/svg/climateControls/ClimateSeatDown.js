import React from "react";
import Svg, { G, Path, Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="15px" height="17px" viewBox="0 0 15 17" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G fill="#FFFFFF" fill-rule="nonzero">
            <G>
                <Path d="M3.7523,8.5413 C3.6113,8.5413 3.4713,8.4873 3.3633,8.3793 L0.6913,5.7073 C0.4763,5.4923 0.4763,5.1453 0.6913,4.9303 C0.9063,4.7133 1.2543,4.7133 1.4693,4.9303 L3.7523,7.2123 L6.0353,4.9303 C6.2503,4.7133 6.5983,4.7133 6.8133,4.9303 C7.0283,5.1453 7.0283,5.4923 6.8133,5.7073 L4.1413,8.3793 C4.0333,8.4873 3.8933,8.5413 3.7523,8.5413" />
                <Path d="M3.43,16.3538 C3.239,16.3538 3.045,16.2988 2.874,16.1848 C2.415,15.8768 2.292,15.2558 2.6,14.7968 L4.782,11.5408 C5.35,10.6928 6.298,10.1868 7.318,10.1868 L9.297,10.1868 C9.858,10.1868 10.387,9.9428 10.75,9.5168 L11.268,8.9128 C11.513,8.6248 11.666,8.2768 11.712,7.9038 L11.939,6.0648 C12.006,5.5168 12.521,5.1198 13.053,5.1948 C13.602,5.2618 13.992,5.7608 13.923,6.3088 L13.697,8.1468 C13.604,8.9118 13.288,9.6258 12.787,10.2118 L12.271,10.8158 C11.528,11.6868 10.444,12.1868 9.297,12.1868 L7.318,12.1868 C6.966,12.1868 6.639,12.3618 6.444,12.6538 L4.262,15.9108 C4.069,16.1988 3.752,16.3538 3.43,16.3538" />
                <Path d="M13.2454,4.4866 C13.2054,4.4866 13.1644,4.4846 13.1224,4.4786 C12.5744,4.4116 12.1844,3.9136 12.2524,3.3646 L12.4774,1.5266 C12.5444,0.9786 13.0254,0.5796 13.5924,0.6566 C14.1404,0.7236 14.5294,1.2216 14.4624,1.7706 L14.2364,3.6086 C14.1754,4.1156 13.7434,4.4866 13.2454,4.4866" />
            </G>
        </G>
    </G>
    </Svg>
  </View>
);

export default SvgComponent;