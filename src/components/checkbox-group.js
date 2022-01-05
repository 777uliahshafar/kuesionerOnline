import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './text-error'
import { Form } from 'react-bootstrap'

function CheckboxGroup(props) {
  const { label, name, options, ...rest } = props
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <div className="checkcontainer">
        <Field name={name}>
          {({ field }) => {
            return options.map((option) => {
              return (
                <React.Fragment key={option.key}>
                  <input
                    className="checkchild"
                    type="checkbox"
                    id={option.value}
                    {...field}
                    {...rest}
                    value={option.value}
                    checked={field.value.includes(option.value)}
                  />
                  <Form.Label className="checkchild">{option.key}</Form.Label>
                </React.Fragment>
              )
            })
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError} />
    </Form.Group>
  )
}

export default CheckboxGroup
