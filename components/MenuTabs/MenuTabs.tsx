import React from 'react';
import { Tabs } from '@mantine/core';
import { Profile } from '@components/Member';
import { Accesos } from '@components/Accesos';
import { Associations } from '@components/Associations';
import { Discounts } from '@components/Discounts';
import { History } from '@components/History';
import { AptoMedico } from '@components/AptoMedico';
import { Payments } from '@components/Payments';

export const MenuTabs = () => (
    <Tabs keepMounted={false} defaultValue="1">
      <Tabs.List position="center" mt={25}>
        <Tabs.Tab value="1">Detalles</Tabs.Tab>
        <Tabs.Tab value="2">Apto médico</Tabs.Tab>
        <Tabs.Tab value="3">Historial de Pagos</Tabs.Tab>
        <Tabs.Tab value="4">Historial de Edición</Tabs.Tab>
        <Tabs.Tab value="5">Asociaciones Pasadas</Tabs.Tab>
        <Tabs.Tab value="6">Uso de cupones</Tabs.Tab>
        <Tabs.Tab value="7">Accesos a sedes</Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="1">
        <Profile />
      </Tabs.Panel>

      <Tabs.Panel value="2">
        <AptoMedico />
      </Tabs.Panel>

      <Tabs.Panel value="3">
        <Payments />
      </Tabs.Panel>

      <Tabs.Panel value="4">
        <History />
      </Tabs.Panel>

      <Tabs.Panel value="5">
        <Associations />
      </Tabs.Panel>

      <Tabs.Panel value="6">
        <Discounts />
      </Tabs.Panel>

      <Tabs.Panel value="7">
        <Accesos />
      </Tabs.Panel>
    </Tabs>
  );
