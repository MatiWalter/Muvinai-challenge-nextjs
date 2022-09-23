import React from 'react';
import {
  Box,
  Container,
  Loader,
  ThemeIcon,
  Title,
  Text,
  Timeline,
  ScrollArea,
} from '@mantine/core';
import { MdPayment } from 'react-icons/md';
import { useMantineTheme } from '@mantine/styles';

import { IPayment } from 'types';

import { api } from 'api/api';
import useStyles from './Payments.styles';

export const Payments = () => {
  const { classes: { container } } = useStyles();
  const { colors } = useMantineTheme();

  const [payments, setPayments] = React.useState<IPayment[]>([]);

  React.useEffect(() => {
    api.payment.get()
      .then(({ data }) => setPayments(data));
  }, []);

  const items = payments.map((payment) => (
      <Timeline.Item
        key={payment.id}
        bullet={
          <ThemeIcon
            color={payment.status === 'approved' ? 'green' : 'red'}
            radius="xl"
            size={30}
          >
            <MdPayment size={20} />
          </ThemeIcon>
        }
      >
        <Box ml="sm">
          <Title order={4} sx={{ color: payment.status === 'approved' ? colors.green[8] : colors.red[8] }}>
            {payment.status === 'approved' ? 'Aprobado' : 'Rechazado'}
          </Title>
          <Box sx={{ flexDirection: 'column' }}>
            <Text>Id de pago: {payment.id}</Text>
            <Text>N° tarjeta: ...{payment.card} - {payment.brand}</Text>
            <Text>Monto total: $ {payment.amount}</Text>
          </Box>
          <Text>Realizada el {payment.date.toLocaleDateString('es')}</Text>
        </Box>
      </Timeline.Item>
    ));

  return (
    <Container className={container}>
      {
        payments.length > 0
          ?
            <>
              <ScrollArea style={{ height: 600 }}>
                <Timeline active={payments.length} bulletSize={30} color="gray">
                  {items}
                </Timeline>
              </ScrollArea>
            </>
          : <Loader size="lg" mt={250} ml={250} />
      }
    </Container>
  );
};
