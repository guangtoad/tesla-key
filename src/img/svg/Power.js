import React from "react";
import Svg, { G, Path, Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="26px" height="28px" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg"  {...props}>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G fill="#FFFFFF" fill-rule="nonzero">
            <G>
                <Path d="M6.5081,7.6751 C6.9811,7.6751 7.3631,7.3461 7.3631,6.9411 L7.3631,1.4091 C7.3631,1.0041 6.9811,0.6751 6.5081,0.6751 C6.0361,0.6751 5.6531,1.0041 5.6531,1.4091 L5.6531,6.9411 C5.6531,7.3461 6.0361,7.6751 6.5081,7.6751" />
                <Path d="M9.7747,2.7376 C9.4317,2.5116 8.9677,2.6066 8.7427,2.9506 C8.5157,3.2946 8.6117,3.7566 8.9557,3.9826 C10.2247,4.8176 10.9817,6.2116 10.9817,7.7106 C10.9817,10.1766 8.9757,12.1836 6.5077,12.1836 C4.0417,12.1836 2.0357,10.1766 2.0357,7.7106 C2.0357,6.2116 2.7927,4.8176 4.0617,3.9826 C4.4057,3.7566 4.5017,3.2946 4.2747,2.9506 C4.0487,2.6066 3.5877,2.5106 3.2427,2.7376 C1.5517,3.8486 0.5437,5.7076 0.5437,7.7106 C0.5437,10.9996 3.2187,13.6756 6.5077,13.6756 C9.7977,13.6756 12.4737,10.9996 12.4737,7.7106 C12.4737,5.7076 11.4647,3.8486 9.7747,2.7376" />
            </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;