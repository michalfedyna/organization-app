import styled from 'styled-components/native';

type ContainerProps = {
  direction?: 'column' | 'row' | 'column-reverse' | 'row-reverse';
  mainAxis?: 'flex-start';
  crossAxis?: 'stretch';
  crossAxisSelf?: 'stretch';
  crossAxisWrap?: 'flex-start';
  wrap?: 'wrap' | 'nowrap';
};

const Container = styled.View<ContainerProps>`
  flex-direction: ${props => props.direction || 'column'};
`;

export default {Container};
