import prisma from "./prismaClient";

const sampleTemperatureData = [{ value: 23 }, { value: 23 }];

const sampleHumidityData = [{ value: 70 }, { value: 70 }, { value: 70 }];

for (const data of sampleTemperatureData) {
  try {
    const res = await prisma.temperature.create({
      data: {
        value: data.value,
      },
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

for (const data of sampleHumidityData) {
  try {
    const res = await prisma.humidity.create({
      data: {
        value: data.value,
      },
    });

    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
