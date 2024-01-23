import prisma from "./prismaClient";

const sampleTemperatureData = [
  { value: 20 },
  { value: 21 },
  { value: 22 },
  { value: 23 },
  { value: 24 },
  { value: 25 },
];

const sampleHumidityData = [
  { value: 50 },
  { value: 51 },
  { value: 52 },
  { value: 53 },
  { value: 54 },
  { value: 55 },
];

for (const data of sampleTemperatureData) {
  try {
    const res = await prisma.temperature.create({
      data: {
        value: data.value,
      },
    });

    const res2 = await prisma.humidity.create({
      data: {
        value: data.value,
      },
    });

    console.log(res2);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
