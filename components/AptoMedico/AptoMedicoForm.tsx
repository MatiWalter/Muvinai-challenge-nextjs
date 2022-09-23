import * as React from 'react';
import { Anchor, Button, Center, Group, Input } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { FiUpload, FiCheck } from 'react-icons/fi';
import { MdDownload } from 'react-icons/md';

interface AptoMedicoFormProps {
  apto: string;
  setApto: React.Dispatch<React.SetStateAction<string>>;
}

export const AptoMedicoForm = ({
  apto,
  setApto,
}: AptoMedicoFormProps) => {
  const [validDate, setValidDate] = React.useState<Date>(new Date());

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      setApto(window.URL.createObjectURL(event.currentTarget.files[0]));
    }
  };

  return (
    <Group>
      <label htmlFor="apta-medico" style={{ display: 'inline-block', height: 1 }}>
        <Input
          accept=".pdf"
          id="apta-medico"
          sx={{
            display: 'none',
          }}
          type="file"
          onChange={handleChange}
        />
        <Group mb={10}>
          <Button
            radius="md"
            component="span"
            leftIcon={<FiUpload size={20} />}
            size="md"
          >
            Subir Apto
          </Button>
          <Button
            radius="md"
            color="green"
            leftIcon={<FiCheck size={20} />}
            size="md"
          >
            Aprobar apto
          </Button>
        </Group>
        {
          apto &&
            <Center>
              <Anchor download="apto_medico" href={apto} target="_blank">
                <Button
                  color="green"
                  leftIcon={<MdDownload size={20} />}
                  size="md"
                >
                  Descargar apto médico
                </Button>
              </Anchor>
            </Center>
        }
        <DatePicker
          clearable={false}
          label="Validez"
          locale="es"
          mt="xs"
          value={validDate}
          onChange={(date) => {
            if (date) {
              setValidDate(date);
            } else {
              setValidDate(new Date());
            }
          }}
        />
      </label>
    </Group>
  );
};
