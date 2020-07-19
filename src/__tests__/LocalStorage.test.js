import LocalStorage from "../components/LocalStorage";
import "@testing-library/jest-dom/extend-expect";
import { partialState } from "../helpers/initialBoard";

describe("LocalStorage", () => {
  it("renders correctly", () => {
    const state = partialState();
    const p1 = "p1";
    const p2 = "p2";
    LocalStorage.set(state, p1, p2);
    const lastState = LocalStorage.getLastState(p1, p2);
    expect(lastState.checkmate).toEqual(state.checkmate);
    expect(lastState.moves).toEqual(state.moves);
    expect(lastState.players).toEqual(state.players);
    expect(lastState.kingAttacked).toEqual(state.kingAttacked);
    expect(lastState.invalidMove).toEqual(state.invalidMove);
    expect(lastState.stalemate).toEqual(state.stalemate);

    const lastPlayerState = LocalStorage.getLastState("", "");
    expect(lastPlayerState.players).toEqual(state.players);

    LocalStorage.clear(p1, p2);
    const clearState = LocalStorage.getLastState(p1, p2);
    expect(clearState).toEqual(undefined);
  });
});
