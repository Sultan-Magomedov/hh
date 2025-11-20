import {
  render as testingLibraryRender,
  type RenderOptions,
} from "@testing-library/react";
import { MantineProvider } from "@mantine/core";
// import { theme } from '../src/theme';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { setupStore, type RootState, type AppStore } from "../src/store/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "wrapper"> {
  preloadedState?: Partial<RootState>;
  store?: AppStore;
}

export function renderWithRedux(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <MantineProvider env="test">
        <BrowserRouter>
          <Provider store={store}>{children}</Provider>
        </BrowserRouter>
      </MantineProvider>
    );
  }

  return {
    store,
    ...testingLibraryRender(ui, { wrapper: Wrapper, ...renderOptions }),
  };
}
export { testingLibraryRender };
