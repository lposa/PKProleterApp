import { parse } from "react-native-redash";

export const getPathXCenter = (currentPath: string) => {
  const curves = parse(currentPath).curves;
  const startPoint = curves[0].to;
  const endPoint = curves[curves.length - 1].to;
  return (startPoint.x + endPoint.x) / 2;
};

export const getPatXByIndex = (tabPaths: any[], index: number) => {
  const curves = tabPaths[index].curves;
  const startPoint = curves[0].to;
  const endPoint = curves[curves.length - 1].to;
  return (startPoint.x + endPoint.x) / 2;
};
