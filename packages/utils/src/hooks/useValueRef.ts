import { 
  useLayoutEffect,
  useRef
} from "react"

function useValueRef<T>(value: T): React.MutableRefObject<T> {
  const ref = useRef<T>(value);
  useLayoutEffect(() => {
    ref.current = value;
  });
  return ref;
}

export {
  useValueRef
}
