import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './text-error'
import ProfilDesc from './profil-desc'
import { Form } from 'react-bootstrap'

function Select(props) {
  const { label, name, options, ...rest } = props
  return (
    <Form.Group className="select-1">
      <ProfilDesc />
      <Form.Label className="label-1">{label}</Form.Label>
      <Field as="select" id={name} name={name} {...rest}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.key}
            </option>
          )
        })}
      </Field>

      <ErrorMessage name={name} component={TextError} />
    </Form.Group>
  )
}

export default Select
