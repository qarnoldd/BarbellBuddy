import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

function Plus(props: SvgProps) {
  return (
    <Svg width={50} height={50} fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 5.75v12.5M18.25 12H5.75"
      />
    </Svg>
  );
}

export default Plus;
