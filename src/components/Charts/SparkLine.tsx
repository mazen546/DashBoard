import {
  SparklineComponent,
  Inject,
  SparklineTooltip,
} from "@syncfusion/ej2-react-charts";

interface Proptypes {
  id: string;
  height: string;
  width: string;
  color?: string;
  data: {
    x: number;
    yval: number;
  }[];
  type: string;
}
const SparkLine = ({ id, height, width, color, data, type }: Proptypes) => {
  return (
    <SparklineComponent
      id={id}
      //@ts-expect-error:""
      height={height}
      width={width}
      lineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{ color: "blue", width: 2 }}
      tooltipSettings={{
        visible: true,
        format: "${x} : data ${yval}",
        trackLineSettings: {
          visible: true,
        },
      }}
      markerSettings={{ visible: true, size: 2.5, fill: "blue" }}
      dataSource={data}
      xName="x"
      yName="yval"
      type={type}
    >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  );
};

export default SparkLine;
