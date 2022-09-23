import React from 'react';
import { Container, Loader, Table, Title, ScrollArea } from '@mantine/core';

import { IAssociation } from 'types';

import { api } from 'api/api';
import useStyles from './Associations.styles';

export const Associations = () => {
  const [associations, setAssociations] = React.useState<IAssociation[]>([]);

  React.useEffect(() => {
    api.associations.get()
      .then(({ data }) => setAssociations(data));
  }, []);

  const rows = associations.map(association => (
      <tr key={association.id}>
        <td>{association.initialDate.toLocaleDateString('es')}</td>
        <td>{association.finalDate.toLocaleDateString('es')}</td>
      </tr>
    ));

  const { classes: { container } } = useStyles();

  return (
    <Container className={container}>
      <Title align="center" order={2}>Asociaciones pasadas</Title>
      {
        associations.length > 0
          ?
            <ScrollArea style={{ height: 500 }}>
              <Table highlightOnHover style={{ marginTop: 30 }}>
                <thead>
                  <tr>
                    <th>Inicio</th>
                    <th>Fin</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            </ScrollArea>
          : <Loader size="lg" mt={150} ml={300} />
      }
    </Container>
  );
};
