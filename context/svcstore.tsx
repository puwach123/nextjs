import React, {
  createContext,
  ReactNode,
  ReactElement,
  useContext,
} from "react";

export interface Svc {
  [key: string]: (...args: any) => Promise<any>;
}

export interface SvcStore {
  [key: string]: Svc;
}

const SvcStoreContext = createContext<SvcStore>({});

interface SvcStoreProviderProps<S extends SvcStore = {}> {
  children: ReactNode;
  svcstore: S;
}

export function SvcStoreProvider<S extends SvcStore = {}>(
  props: SvcStoreProviderProps<S>
): ReactElement<SvcStoreProviderProps<S>> {
  return (
    <SvcStoreContext.Provider value={props.svcstore}>
      {props.children}
    </SvcStoreContext.Provider>
  );
}

export function useSvcStore<S extends SvcStore = {}>(): S {
  const context = useContext(SvcStoreContext);
  if (context === undefined) {
    throw new Error("useSvcStore must be used within a SvcStoreProvider");
  }
  return context as S;
}
