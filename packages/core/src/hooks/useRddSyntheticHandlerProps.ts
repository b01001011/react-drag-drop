import { useMemo } from 'react';

import { 
  RddId,
  RddSyntheticHandlerProps
} from '../types';

const useRddSyntheticHandlerProps = (
  id: RddId
) => {
  return useMemo(() => {
    return {} as RddSyntheticHandlerProps
  }, [id]); 
}


export {
  useRddSyntheticHandlerProps
}