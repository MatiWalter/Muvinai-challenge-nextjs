import * as React from 'react';
import {
  Alert,
  Center,
  Container,
  Loader,
  Text,
  ScrollArea,
} from '@mantine/core';
import { Document, Page, pdfjs } from 'react-pdf';

import useStyles from './AptoMedico.styles';
import { AptoMedicoForm } from './AptoMedicoForm';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export const AptoMedico = () => {
  const [apto, setApto] = React.useState<string>('');
  const { classes: { center, container } } = useStyles();

  return (
    <Container className={container}>
      <Center className={center}>
        <ScrollArea style={{ height: 650 }}>
            <Document
              error={
                <Center mt={250}>
                  <Alert
                    color="red"
                    title="Ocurrió un error"
                  >
                    Error al cargar el archivo, intente nuevamente
                  </Alert>
                </Center>
              }
              file={apto}
              loading={
                <Center mt={250}>
                  <Loader />
                </Center>
              }
              noData={
                <Center mt={300}>
                  <Text>No se encontró un archivo</Text>
                </Center>
              }
            >
              <Page pageNumber={1} />
            </Document>
        </ScrollArea>
      </Center>
      <AptoMedicoForm apto={apto} setApto={setApto} />
    </Container>
  );
};
