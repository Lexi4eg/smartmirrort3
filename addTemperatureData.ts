import prisma from "./prismaClient";

const run = async () => {
  const sampleTemperatureData = [
    { value: 20 },
    { value: 21 },
    { value: 22 },
    { value: 23 },
    { value: 24 },
    { value: 25 },
  ];

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
};

run().catch(console.error);
