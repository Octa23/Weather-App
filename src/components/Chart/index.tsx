// @ts-nocheck
import { ResponsiveLine } from "@nivo/line";
import { useSelector } from "react-redux";
import styled from "styled-components";
import useWidth from "../../hooks/useWidth";

const WeatherChart = () => {
  const { selectedWeather, preference } = useSelector(
    (state: any) => state?.weather
  );
  const { forecast } = selectedWeather;
  const isDesktop = useWidth();
  let data = forecast?.forecastday[0]?.hour?.map((day: any) => {
    return {
      x: day.time.slice(-5),
      y: preference === 0 ? day.temp_c : day.temp_f,
      condition: day.condition.text,
    };
  });

  const Mobiledata = data?.filter((day: any, index: number) => index % 2 !== 0);
  const minTemp =
    data && Math.floor(Math.min(...data?.map((day: any) => day.y)));
  const maxTemp =
    data && Math.ceil(Math.max(...data?.map((day: any) => day.y)));

  const chartData = [
    {
      id: forecast?.forecastday[0]?.date_epoch,
      data: isDesktop ? data : Mobiledata,
    },
  ];
  return (
    data && (
      <StyledChart>
        <div>
          <ResponsiveLine
            theme={{
              textColor: "#e7e7eb",
              crosshair: {
                line: {
                  stroke: "#4b57ff",
                },
              },
              tooltip: {
                container: {
                  background: "#100e1d",
                  color: "#e7e7eb",
                  fontSize: 14,
                },
              },
            }}
            data={chartData || []}
            margin={{ top: 10, right: 30, bottom: 45, left: 45 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: minTemp - 1,
              max: maxTemp + 1,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            curve="natural"
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 30,
              legend: "Hour",
              legendOffset: 40,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              legend: preference === 0 ? "Celsius" : "Fahrenheit",
              legendPosition: "middle",
              legendOffset: -40,
            }}
            tooltip={({ point }) => {
              return (
                <div
                  style={{
                    background: "#100e1d",
                    border: "1px solid #e7e7eb",
                    padding: "10px",
                    color: "#e7e7eb",
                    fontSize: 14,
                  }}
                >
                  <div>
                    <strong>Hour: {point?.data?.x as string}</strong>
                  </div>
                  <div>
                    <strong>
                      Temp:{" "}
                      {`${point?.data?.y} ${preference === 0 ? "°C" : "°F"}`}
                    </strong>
                  </div>
                  <div>
                    <strong>Cond: {point?.data?.condition}</strong>
                  </div>
                </div>
              );
            }}
            pointSize={10}
            colors={"#3c47e9"}
            crosshairType="y"
            useMesh={true}
          />
        </div>
      </StyledChart>
    )
  );
};

export default WeatherChart;

const StyledChart = styled.div`
  display: grid;
  grid-template-rows: 250px;
  @media (min-width: 968px) {
    grid-template-rows: 350px;
  }
  grid-template-columns: 1fr;
  > div {
    min-width: 0;
  }
`;
