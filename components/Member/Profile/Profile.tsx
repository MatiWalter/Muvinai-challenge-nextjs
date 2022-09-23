import React from 'react';
import { Loader, Box, Button, Center, Container, Group, List, Modal, ThemeIcon } from '@mantine/core';
import { MdDelete, MdBlock, MdInfoOutline, MdPlayCircleOutline } from 'react-icons/md';
import { IMember } from 'types';
import { api } from 'api/api';
import { MemberCard } from './Card';
import useStyles from './Profile.styles';
import { MemberForm } from '../MemberForm/MemberForm';

export const Profile = () => {
  const [member, setMember] = React.useState<IMember>();
  const [opened, setOpened] = React.useState<boolean>(false);

  React.useEffect(() => {
    api.member.get()
      .then(({ data }) => setMember(data));
  }, []);

  const { classes: { container } } = useStyles();

  return (
    <Container className={container}>
      {
        member ?
          <>
            <Modal
              centered
              opened={opened}
              onClose={() => setOpened(false)}
              title={
                member.status === 'Activo'
                  ? 'Está seguro que quiere dar de baja este socio?'
                  : member.status === 'Baja'
                    ? 'Está seguro que quiere revertir la baja de este socio?'
                    : 'Está seguro que quiere invalidar el acceso de este socio?'
              }
            >
              <Group position="center">
                <Button
                  color="green"
                  onClick={() => {
                    setOpened(false);
                    setMember({
                      ...member,
                      status: member.status === 'Activo' ? 'Baja' : 'Activo',
                    });
                  }}
                >
                  Si
                </Button>
                <Button
                  color="red"
                  onClick={() => {
                    setOpened(false);
                  }}
                >
                  No
                </Button>
              </Group>
            </Modal>
            <Box>
              <MemberCard
                alt={member.name}
                memberDetail={member}
              />
              <Center>
                <List
                  icon={
                    <ThemeIcon radius="xl" size={28}>
                      <MdInfoOutline size={24} />
                    </ThemeIcon>
                  }
                  spacing="sm"
                >
                  <List.Item>Dni: {member?.dni}</List.Item>
                  <List.Item>Teléfono: {member?.phone}</List.Item>
                  <List.Item>Fecha de nacimiento: {member?.birthday.toLocaleDateString('es-AR')}</List.Item>
                  <List.Item>Plan actual: {member?.activePlan}</List.Item>
                  <List.Item>Se registró: {member?.last_subscription_date?.toLocaleDateString('es-AR')}</List.Item>
                </List>
              </Center>
              <Center mt="xl">
                <Group>
                  {
                    member.status === 'Activo'
                    ? (
                      <Button
                        color="red"
                        leftIcon={<MdDelete size={20} />}
                        onClick={() => setOpened(true)}
                      >
                          Dar baja
                      </Button>
                      )
                      : (
                        <Button
                          color="green"
                          leftIcon={<MdPlayCircleOutline size={20} />}
                          disabled={member.status === 'Inactivo'}
                          onClick={() => setOpened(true)}
                        >
                          Revertir baja
                        </Button>
                      )
                    }
                  <Button
                    disabled={member.status !== 'Baja'}
                    color="red"
                    leftIcon={<MdBlock size={20} />}
                    onClick={() => {
                      if (member.status === 'Baja') {
                        setMember({
                          ...member,
                          status: 'Inactivo',
                        });
                      }
                    }}
                  >
                    Invalidar acceso
                  </Button>
                </Group>
              </Center>
            </Box>
            <MemberForm memberDetail={member} updateMember={setMember} />
          </>
        : <Loader size="lg" mt={300} ml={100} />
    }
    </Container>
  );
};
