import * as React from "react";
import type { SvgProps } from "react-native-svg";
import Svg, { Path } from "react-native-svg";

export const ProfileImagePlaceholder = (props: SvgProps): JSX.Element => (
  <Svg width={50} height={50} {...props} viewBox="0 0 340 340" fill="none">
    <Path
      fill="#DDD"
      d="M169 .5a169 169 0 1 0 2 0zm0 86a76 76 0 1 1-2 0zM57 287q27-35 67-35h92q40 0 67 35a164 164 0 0 1-226 0"
    />
  </Svg>
);
