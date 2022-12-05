import React from 'react';
import { Layout, LayoutProps } from 'antd';

type Props = LayoutProps;
const { Content } = Layout;

function Container(props: Props) {
  const { children, ...otherProps } = props;
  return <Content {...otherProps}>{children}</Content>;
}

export default Container;
