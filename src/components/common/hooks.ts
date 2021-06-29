import {
  useRef, useCallback, useEffect, useState,
} from 'react';

export function useThrottledEffect(effect: () => void | (() => any), timeout: number, deps: any[]) {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, timeout);

    return () => { clearTimeout(handler); };

  }, [callback, timeout]);
}

interface DefaultState<T> {
  default: T,
  current: T
}

type DefaultReturn<T> = [T, (newState: T) => void, () => void];

export function useDefaultState<T>(data: T): DefaultReturn<T> {
  const [state, setState] = useState<DefaultState<T>>({
    default: data,
    current: data,
  });

  const updateCurrent = (newState: T) => setState({ ...state, current: newState });

  const revert = () => setState({ ...state, current: state.default });

  return [state.current, updateCurrent, revert];
}

export function useListenOutsideClick(callback: any) {
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
      callback(event);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref };
}