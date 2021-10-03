import { useEffect, useState } from "react";
import { roundTo2 } from "../../utils";

export function useVectorialSensor({
  sensorClass,
  initialTimeInterval = 1000,
}) {
  const [sensorData, setSensorData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [timeInterval, setTimeInterval] = useState(initialTimeInterval);

  // interval in milliseconds
  const changeTimeInterval = (newInterval) => {
    if (newInterval < 100) {
      newInterval = 100;
    }
    sensorClass.setUpdateInterval(newInterval);
    setTimeInterval(newInterval);
  };

  useEffect(() => {
    return () => {
      sensorClass.removeAllListeners();
    };
  }, [sensorClass]);

  return {
    sensorData,
    setSensorData,
    timeInterval,
    changeTimeInterval,
  };
}

// interval in milliseconds
export function usePlotVectorialSensor({ sensorData, timeInterval }) {
  const [plotData, setPlotData] = useState({
    xPrevious: -roundTo2(timeInterval / 1000),
    intervalValues: [],
    sensorComponents: [],
  });

  useEffect(() => {
    setPlotData((oldPlotData) => {
      const rawx = oldPlotData.xPrevious + roundTo2(timeInterval / 1000);
      const x = roundTo2(rawx);

      const components = {
        x: roundTo2(sensorData.x),
        y: roundTo2(sensorData.y),
        z: roundTo2(sensorData.z),
      };

      const oldSensorComponents = oldPlotData.sensorComponents;
      const oldIntervalValues = oldPlotData.intervalValues;

      if (oldSensorComponents.length === 10) {
        oldSensorComponents.shift();
        oldIntervalValues.shift();
      }

      return {
        xPrevious: x,
        intervalValues: [...oldIntervalValues, x],
        sensorComponents: [...oldSensorComponents, components],
      };
    });
  }, [sensorData, timeInterval]);

  return { plotData };
}

export function useSensorRecord({ sensorClass, maxRecord, onFinish }) {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    if (records.length >= maxRecord) {
      sensorClass.removeAllListeners();
      onFinish(records);
      setRecords([]);
    }
  }, [records, sensorClass, maxRecord, onFinish]);

  return { records, setRecords };
}
