import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './text-error'
import { Form } from 'react-bootstrap'

function Input(props) {
  const { label, name, text, ...rest } = props
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Field id={name} name={name} {...rest} />
      <Form.Text className="text-muted">{text}</Form.Text>
      <ErrorMessage name={name} component={TextError} />
    </Form.Group>
  )
}

export default Input
