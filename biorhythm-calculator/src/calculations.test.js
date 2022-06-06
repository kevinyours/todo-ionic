import { calculateBiorhythms } from "./calculations";

it("calculates the biorhythm", () => {
  const result = calculateBiorhythms("1995-01-01", "2020-02-18");
  expect(result).toEqual(0.5196);
});
