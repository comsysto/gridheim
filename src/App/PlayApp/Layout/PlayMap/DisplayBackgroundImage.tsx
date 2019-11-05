import React, { FC } from "react";
import { GridMap } from "../../../../model/GridMap";

interface Props {
  gridMap: GridMap;
}

export const DisplayBackgroundImage: FC<Props> = ({ gridMap }: Props) => {
  return (
    <g transform={gridMap.transformation.asTransformString()}>
      <image xlinkHref={gridMap.image.url} />
    </g>
  );
};
