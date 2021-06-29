/// <reference types="react" />
export declare function useThrottledEffect(effect: () => void | (() => any), timeout: number, deps: any[]): void;
declare type DefaultReturn<T> = [T, (newState: T) => void, () => void];
export declare function useDefaultState<T>(data: T): DefaultReturn<T>;
export declare function useListenOutsideClick(callback: any): {
    ref: import("react").RefObject<HTMLElement>;
};
export {};
