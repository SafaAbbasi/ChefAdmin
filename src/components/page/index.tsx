import React from 'react';
import { Helmet } from 'react-helmet';
import styles from './Page.module.scss';

type Props = {
  children: React.ReactNode;
  title: string;
  className: string;
  appendCommonTitle: boolean;
};

export function PurePage(props: Props) {
  const { children, title, className, appendCommonTitle, ...otherProps } =
    props;

  const commonTitle = 'ChefAdmin';
  let pageTitle = title ? `${title} - ${commonTitle}` : commonTitle;

  if (!appendCommonTitle) {
    pageTitle = title;
  }

  return (
    <div {...otherProps} className={`${styles.container} ${className}`}>
      <Helmet>
        <title>{pageTitle}</title>
      </Helmet>
      {children}
    </div>
  );
}

PurePage.defaultProps = {
  title: '',
  className: '',
  appendCommonTitle: true,
};

export default PurePage;
