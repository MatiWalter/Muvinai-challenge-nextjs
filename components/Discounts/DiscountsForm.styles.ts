import { createStyles } from '@mantine/styles';

export default createStyles(

  () => ({
      box: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
      },
      innerBox: {
        width: '300px',
      },
      buttonBox: {
        display: 'grid',
        placeContent: 'center',
      },
    })
);
