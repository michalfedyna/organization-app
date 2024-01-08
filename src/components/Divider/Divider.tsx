import React, {FunctionComponent} from 'react';

import {Container, Row, Text} from '@components';
import {useStyles} from '@styles';
import {TranslationProps} from '@types';

type DividerProps = TranslationProps & {};

const Divider: FunctionComponent<DividerProps> = ({translation}) => {
  const styles = useStyles(theme => ({
    dividerHalfStyle: {
      borderBottomWidth: 2,
      borderColor: theme.colors.border,
      flex: 1,
    },
    divider: {
      alignItems: 'center',
    },
    text: {
      marginHorizontal: theme.spacing.medium,
    },
  }));

  return (
    <Row style={styles.divider}>
      <Container style={styles.dividerHalfStyle} />
      {translation && <Text style={styles.text} translation={translation} />}
      <Container style={styles.dividerHalfStyle} />
    </Row>
  );
};

export default Divider;
