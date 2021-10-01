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
  const [subscription, setSubscription] = useState(false);
  const [timeInterval, setTimeInterval] = useState(initialTimeInterval);

  // interval in milliseconds
  const changeTimeInterval = (newInterval) => {
    if (newInterval < 100) {
      newInterval = 100;
    }
    sensorClass.setUpdateInterval(newInterval);
    setTimeInterval(newInterval);
  };

  const subscribe = () => {
    if (!sensorClass.hasListeners()) {
      setSubscription(true);
      sensorClass.setUpdateInterval(timeInterval);
      sensorClass.addListener((nativeSensorData) => {
        setSensorData(nativeSensorData);
      });
    }
  };

  const unsubscribe = () => {
    setSubscription(false);
    sensorClass.removeAllListeners();
  };

  const subscriptionTools = {
    subscribe: subscribe,
    unsubscribe: unsubscribe,
    subscription: subscription,
  };

  useEffect(() => {
    return () => {
      unsubscribe();
    };
  }, []);

  return {
    sensorData,
    timeInterval,
    subscriptionTools,
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
