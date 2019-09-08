import React from "react";
import Svg, { Path, G } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.014 15.103" {...props}>
      <G>
	    <Path fill="#FFFFFF" d="M0,2.545v11.94c0,0.342,0.277,0.618,0.618,0.618h6.777c0.342,0,0.618-0.277,0.618-0.618V2.545
		c0-0.342-0.277-0.618-0.618-0.618H0.618C0.277,1.926,0,2.203,0,2.545z M6.703,7.051H1.184c-0.139,0-0.252-0.113-0.252-0.252V3.18
		c0-0.139,0.113-0.252,0.252-0.252h5.518c0.139,0,0.252,0.113,0.252,0.252v3.619C6.954,6.938,6.842,7.051,6.703,7.051z"/>
	    <Path fill="#FFFFFF" d="M5.211,1.002H2.591c-0.133,0-0.241-0.108-0.241-0.241v-0.52C2.35,0.108,2.458,0,2.591,0h2.619
		c0.133,0,0.241,0.108,0.241,0.241v0.52C5.452,0.894,5.344,1.002,5.211,1.002z"/>
    </G>
    </Svg>
  </View>
);

export default SvgComponent;