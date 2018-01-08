import React from 'react';
import { Form } from 'antd';
import lodash from 'lodash';
import isArray from 'lodash/isArray';

const FIELD_DATA_PROP = 'data-__field';

const FormItem = Form.Item;

export default class MultiFormItem extends React.Component {
  getField() {
    const { children } = this.props;
    let fieldDataProp = undefined;

    let hasError = false;

    if (isArray(children)) {
      checkChild(children);
    }

    function checkChild(childs) {
      childs.forEach((item) => {
        if (!item.props) {
          return;
        }
        const itemData = item.props[FIELD_DATA_PROP];

        if (itemData) {
          if (!hasError && itemData.errors && itemData.errors.length) {
            hasError = true;
            setFieldProp(itemData);
          }
        }
        if (lodash.isArray(item.props.children)) {
          checkChild(item.props.children);
        }
      });
    }

    function setFieldProp(itemData) {
      if (!fieldDataProp) {
        fieldDataProp = {};
      }
      Object.keys(itemData).forEach((key) => {
        fieldDataProp[key] = itemData[key];
      });
    }

    return fieldDataProp;
  }

  render() {
    let validateStatus = 'success';
    let help = [];
    const field = this.getField();

    if (field && field.errors && field.errors.length) {
      validateStatus = 'error';
      field.errors.forEach((error) => {
        help.push(error.message);
      });
    }

    help = help.join('，');

    return (
      <FormItem validateStatus={validateStatus} help={help} {...this.props}>
        <div className="fl">{this.props.children}</div>
      </FormItem>
    );
  }
}
MultiFormItem.defaultProps = {};

MultiFormItem.propTypes = {};
