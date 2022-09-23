import React from 'react';
import { Container, Loader } from '@mantine/core';
import { useMantineColorScheme, useMantineTheme } from '@mantine/styles';
import { IAccesos } from 'types';
import { VictoryPie } from 'victory';

import { api } from 'api/api';
import useStyles from './Accesos.styles';

export const Accesos = () => {
  const [accesos, setAccesos] = React.useState<IAccesos[]>([]);
  const { colors } = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  React.useEffect(() => {
    api.accesos.get()
      .then(({ data }) => setAccesos(data));
  }, []);

  const data = accesos.map(acceso => ({ x: acceso.sede, y: acceso.quantity }));

  const { classes: { container } } = useStyles();

  return (
    <Container className={container}>
      {
        accesos.length > 0 ?
          <VictoryPie
            colorScale={[colors.red[6], colors.green[6], colors.blue[6]]}
            data={data}
            labels={({ datum }) => `${datum.x}: ${datum.y}`}
            style={{ labels: { fill: dark ? 'white' : 'black' } }}
          />
        : <Loader size="lg" mt={200} ml={325} />
      }
    </Container>
  );
};
