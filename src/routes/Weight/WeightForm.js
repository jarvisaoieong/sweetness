import React, { PureComponent } from 'react'
import { Card, DatePicker, Input, Form, Row, Col } from 'antd'
import { connect } from 'dva'
import _ from 'lodash'
import moment from 'moment'
import PageHeaderLayout from '../../layouts/PageHeaderLayout'

const FormItem = Form.Item

@Form.create()
@connect()
export default class WeightForm extends PureComponent {
  render() {
    const { form: { getFieldDecorator } } = this.props
    return (
      <PageHeaderLayout title="輸入月半">
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} layout="inline">
            <Row gutter={{ md: 8, lg: 24, xl: 48 }}>
              <Col md={8} sm={24}>
                <FormItem label="日期">
                  {getFieldDecorator('date', {
                    initialValue: moment(),
                  })(<DatePicker placeholder="請輸入" />)}
                </FormItem>
              </Col>
              <Col md={8} sm={24}>
                <FormItem label="月半">
                  {getFieldDecorator('weight')(<Input placeholder="請輸入" />)}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Card>
      </PageHeaderLayout>
    )
  }
}
