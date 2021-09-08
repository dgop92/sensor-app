import { useEffect, useState } from "react";
import { roundTo2 } from "../../utils";

// interval in milliseconds
export function useVectorialSensor({ sensorClass, deltaTime = 1000 }) {
  const [sensorData, setSensorData] = useState({
    xPrevious: -roundTo2(deltaTime / 1000),
    intervalValues: [],
    sensorComponents: [],
  });
  const [subscription, setSubscription] = useState(null);

  const subscribe = () => {
    console.log("suscribe");
    sensorClass.setUpdateInterval(deltaTime);
    setSubscription(
      sensorClass.addListener((nativeSensorData) => {
        setSensorData((oldSensorData) => {
          const rawx = oldSensorData.xPrevious + roundTo2(deltaTime / 1000);
          const x = roundTo2(rawx);

          const components = {
            x: roundTo2(nativeSensorData.x),
            y: roundTo2(nativeSensorData.y),
            z: roundTo2(nativeSensorData.z),
          };
          
          const oldSensorComponents = oldSensorData.sensorComponents;
          const oldIntervalValues = oldSensorData.intervalValues;

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
      })
    );
  };

  const unsubscribe = () => {
    console.log("unsus by ");
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, []);

  return { sensorData, subscribe, unsubscribe };
}
