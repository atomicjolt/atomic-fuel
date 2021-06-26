export class HandlerSingleton {
    static communicator: any;
    static instance: any;
    static prepareInstance(dispatch: any, domain?: string): void;
    constructor(dispatch: any);
    dispatch: any;
    handleComm: (e: any) => void;
}
declare function _default(store: any): (next: any) => (action: any) => void;
export default _default;
