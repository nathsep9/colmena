const fs = require("fs");
const { subMonths } = require("date-fns");
const { faker } = require("@faker-js/faker");

/**
 * @return {import('../src/models').SaleByRegion[]}
 */
const getSales = () => {
  const COUNT = 14;
  const now = new Date();
  const months = [...Array.from({ length: COUNT })]
    .map((_, i) => subMonths(now, i))
    .reverse();

  const createRandomSaleDate = (month) => ({
    month,
    quantity: faker.datatype.number({
      min: 1000,
      max: 10000,
    }),
  });

  return [
    {
      region: faker.address.state(),
      data: months.map((month) => createRandomSaleDate(month)),
    },
    {
      region: faker.address.state(),
      data: months.map((month) => createRandomSaleDate(month)),
    },
    {
      region: faker.address.state(),
      data: months.map((month) => createRandomSaleDate(month)),
    },
  ];
};

fs.writeFileSync("./public/sales.json", JSON.stringify(getSales(), null, 2));
