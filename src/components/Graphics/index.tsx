import { useMemo } from "react";
import { Skeleton, Container, Stack } from "@mui/material";
import useSWR from "swr";

import BarSales from "components/BarSales";
import { publicFetcher } from "utils";
import { SaleByRegionService } from "../../models";
import { SaleByRegion } from "../../models";

export const Graphics = () => {
  const { data, isLoading } = useSWR<SaleByRegionService[]>(
    "/sales.json",
    publicFetcher
  );

  const sales = useMemo((): SaleByRegion[] => {
    if (!data) return [];

    return data.map((item) => ({
      region: item.region,
      data: item.data.map((item) => ({
        month: new Date(item.month),
        quantity: item.quantity,
      })),
    }));
  }, [data]);

  return (
    <Container
      sx={{
        mt: 2,
      }}
    >
      {!isLoading && data && <BarSales data={sales} />}
      {isLoading && (
        <Stack spacing={1} mt={2}>
          <Skeleton variant="rectangular" width={"100%"} height={60} />
          <Skeleton variant="rectangular" width={"100%"} height={300} />
        </Stack>
      )}
    </Container>
  );
};
