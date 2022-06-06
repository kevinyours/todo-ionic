import dayjs from "dayjs";

function calculateBiorhythm(birthDate, targetDate, cycle) {
  const birthDay = dayjs(birthDate).startOf("day");
  const targetDay = dayjs(targetDate).startOf("day");
  const diff = targetDay.diff(birthDay, "days");

  return Math.sin((2 * Math.PI * diff) / cycle);
}

export function calculateBiorhythms(birthDate, targetDate) {
  return {
    physical: calculateBiorhythm(birthDate, targetDate, 23),
    emotional: calculateBiorhythm(birthDate, targetDate, 23),
    intellectual: calculateBiorhythm(birthDate, targetDate, 23),
  };
}
