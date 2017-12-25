import React from 'react';
import PropTypes from 'prop-types';

import { defaultClassNamePrefix } from './util';

export const TagClassNameDefault = `${defaultClassNamePrefix}-tag`;

export class TagDefault extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    handleEdit: PropTypes.func.isRequired,
    handleRemove: PropTypes.func.isRequired,
    TagClassName: PropTypes.string,
    TagRemoveBtnClassName: PropTypes.string
  }

  static defaultProps = {
    TagRemoveBtnClassName: TagClassNameDefault,
  }

  render() {
    const { value, handleEdit, handleRemove, TagClassName } = this.props;
    return (
      <span
        className={TagClassName}
      >
        <span // eslint-disable-line jsx-a11y/no-static-element-interactions
          onClick={handleEdit}
        >
          {value}
        </span>
        <span
          onClick={handleRemove}
          className={TagRemoveBtnClassName}
        >
        </span>
      </span>
    );
  }
}
