import { useMemo } from 'react';

import { 
  RddId,
  RddSyntheticEventListenerProps
} from '../types';

const useRddSyntheticEventListenerProps = (
  id: RddId
) => {
  return useMemo(() => {
    return {} as RddSyntheticEventListenerProps
  }, [id]); 
};

export {
  useRddSyntheticEventListenerProps
}
