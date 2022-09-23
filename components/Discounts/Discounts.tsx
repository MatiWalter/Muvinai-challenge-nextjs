import React from 'react';
import { Button, Container, Loader, Table, Center, Modal, ScrollArea } from '@mantine/core';

import { IDiscount } from 'types';
import { api } from 'api/api';

import { DiscountsForm } from './DiscountsForm';
import useStyles from './Discounts.styles';

export const Discounts = () => {
  const [opened, setOpened] = React.useState<boolean>(false);
  const [discounts, setDiscounts] = React.useState<IDiscount[]>([]);

  React.useEffect(() => {
    api.discounts.get()
      .then(({ data }) => setDiscounts(data));
  }, []);

  const rows = discounts.map(discount => (
      <tr key={discount.id}>
        <td>{discount.code}</td>
        <td>{discount.amount}</td>
        <td>{discount.applied.toLocaleDateString('es')}</td>
        <td>{discount.expiration.toLocaleDateString('es')}</td>
      </tr>
    ));

  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      {
        discounts.length > 0
          ?
            <>
              <ScrollArea style={{ height: 350 }}>
                <Table highlightOnHover striped>
                  <thead>
                    <tr>
                      <th>Codigo</th>
                      <th>Descuento</th>
                      <th>Fecha de Aplicación</th>
                      <th>Fecha de Expiración</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </Table>
              </ScrollArea>
              <Modal
                opened={opened}
                title="Añadir descuento"
                onClose={() => setOpened(false)}
              >
                <DiscountsForm setOpened={setOpened} />
              </Modal>
              <Center mt={50}>
                <Button onClick={() => setOpened(true)}>Aplicar descuento</Button>
              </Center>
            </>
          : <Loader size="lg" mt={200} ml={350} />
      }
    </Container>
  );
};
