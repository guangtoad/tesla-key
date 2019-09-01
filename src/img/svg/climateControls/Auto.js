import React from "react";
import Svg, { Path, G , Defs, Polygon } from "react-native-svg";
import { View } from 'react-native';

const SvgComponent = props => (
  <View>
    <Svg width="29px" height="7px" viewBox="0 0 29 7" xmlns="http://www.w3.org/2000/svg" {...props}>
      <G stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <G transform="translate(0.000000, -1.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <G transform="translate(0.000000, 1.000000)">
                <Path d="M5.2874,4.2269 L4.1004,1.4729 L2.9204,4.2269 L5.2874,4.2269 Z M5.6744,5.1449 L2.5244,5.1449 L1.9034,6.6029 L0.6974,6.6029 L3.5324,0.3029 L4.6844,0.3029 L7.5284,6.6029 L6.3044,6.6029 L5.6744,5.1449 Z" />
                <Path d="M9.4105,5.9593 C8.9245,5.4703 8.6815,4.7703 8.6815,3.8573 L8.6815,0.3033 L9.8505,0.3033 L9.8505,3.8133 C9.8505,5.0493 10.3855,5.6673 11.4535,5.6673 C12.5145,5.6673 13.0465,5.0493 13.0465,3.8133 L13.0465,0.3033 L14.1975,0.3033 L14.1975,3.8573 C14.1975,4.7703 13.9565,5.4703 13.4735,5.9593 C12.9905,6.4483 12.3135,6.6923 11.4435,6.6923 C10.5735,6.6923 9.8955,6.4483 9.4105,5.9593" />
                <Polygon points="17.5364 1.2933 15.4484 1.2933 15.4484 0.3033 20.7944 0.3033 20.7944 1.2933 18.7064 1.2933 18.7064 6.6033 17.5364 6.6033" />
                <Path d="M26.2034,5.3831 C26.5394,5.1951 26.8034,4.9301 26.9954,4.5911 C27.1874,4.2521 27.2834,3.8731 27.2834,3.4521 C27.2834,3.0321 27.1874,2.6541 26.9954,2.3151 C26.8034,1.9761 26.5394,1.7111 26.2034,1.5231 C25.8674,1.3331 25.4894,1.2381 25.0694,1.2381 C24.6494,1.2381 24.2714,1.3331 23.9354,1.5231 C23.5994,1.7111 23.3354,1.9761 23.1434,2.3151 C22.9514,2.6541 22.8554,3.0321 22.8554,3.4521 C22.8554,3.8731 22.9514,4.2521 23.1434,4.5911 C23.3354,4.9301 23.5994,5.1951 23.9354,5.3831 C24.2714,5.5721 24.6494,5.6671 25.0694,5.6671 C25.4894,5.6671 25.8674,5.5721 26.2034,5.3831 M23.3324,6.2751 C22.8164,5.9951 22.4114,5.6091 22.1174,5.1131 C21.8234,4.6181 21.6774,4.0651 21.6774,3.4521 C21.6774,2.8411 21.8234,2.2871 22.1174,1.7921 C22.4114,1.2971 22.8164,0.9101 23.3324,0.6311 C23.8494,0.3521 24.4274,0.2131 25.0694,0.2131 C25.7114,0.2131 26.2904,0.3521 26.8074,0.6311 C27.3224,0.9101 27.7274,1.2961 28.0214,1.7871 C28.3154,2.2791 28.4624,2.8351 28.4624,3.4521 C28.4624,4.0711 28.3154,4.6261 28.0214,5.1171 C27.7274,5.6101 27.3224,5.9951 26.8074,6.2751 C26.2904,6.5531 25.7114,6.6931 25.0694,6.6931 C24.4274,6.6931 23.8494,6.5531 23.3324,6.2751" />
            </G>
        </G>
      </G>
    </Svg>
  </View>
);

export default SvgComponent;