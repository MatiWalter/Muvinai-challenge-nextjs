import React from 'react';
import {
  Container,
  Loader,
  Table,
  ScrollArea,
} from '@mantine/core';

import { IHistory } from 'types';
import { api } from 'api/api';
import useStyles from './History.styles';

export const History = () => {
  const [history, setHistory] = React.useState<IHistory[]>([]);

  React.useEffect(() => {
    api.history.get()
      .then(({ data }) => setHistory(data));
  }, []);

  const rows = history.map(instance => (
      <tr key={instance.id}>
        <td>{instance.role}</td>
        <td>{instance.user}</td>
        <td>{instance.changes}</td>
        <td>{instance.from}</td>
        <td>{instance.to}</td>
        <td>{instance.date.toLocaleDateString('es')}</td>
      </tr>
    ));

  const { classes: { container } } = useStyles();

  return (
    <Container className={container}>
      {
        history.length > 0
          ?
            <ScrollArea style={{ height: 550 }}>
              <Table highlightOnHover>
                <thead>
                  <tr>
                    <th>Rol</th>
                    <th>Usuario</th>
                    <th>Cambios realizados</th>
                    <th>Anterior</th>
                    <th>Actual</th>
                    <th>Fecha</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </ScrollArea>
          : <Loader size="lg" mt={250} ml={800} />
      }
    </Container>
  );
};
