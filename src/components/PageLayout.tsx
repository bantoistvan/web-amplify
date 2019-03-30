import React, { Component } from 'react';
import classNames from 'classnames';
import './PageLayout.css';

interface IPageLayout {
  isDark?: boolean
}

class PageLayout extends Component<IPageLayout> {
  render() {
    const isDark = this.props.isDark;
    return (
      <div className={classNames('PageLayout', isDark ? 'dark' : 'light')}>
        {this.props.children}
      </div>
    );
  }
}

export default PageLayout;
