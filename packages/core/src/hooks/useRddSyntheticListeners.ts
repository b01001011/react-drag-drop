import {
  useMemo
} from 'react';

import { 
  RddSensorConstructor
} from '../sensors';

import {
  RddSyntheticEventHandler,
  RddSyntheticEventListener
} from '../types';

const useRddSyntheticListeners = (
  Sensors: RddSensorConstructor[],
  makeHandler: (Sensor: RddSensorConstructor) => RddSyntheticEventHandler
): RddSyntheticEventListener[] => {
  return useMemo(
    () => 
      Sensors.reduce<RddSyntheticEventListener[]>((accumulator, Sensor) => {
        const listeners = Sensor.activationEventNames.map((name) => ({
          name,
          handler: makeHandler(Sensor),
        }));

        return [...accumulator, ...listeners];
      }, []),
    [Sensors, makeHandler]
  );
};

export {
  useRddSyntheticListeners
}
