import React, { useState } from 'react'
import { Button, Field, Label, Control, Input, Column, Help } from 'rbx'
import { Navigate } from 'react-router-dom'
import UsersService from '../../../services/users'

function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToLogin, setRedirectToLogin] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    try {
      await UsersService.register({
        name: name,
        email: email,
        password: password
      })
      setRedirectToLogin(true)
    } catch (error) {
      setError(true)
    }
  }

  if (redirectToLogin) return <Navigate to="/login" />

  return (
    <>
      <Column.Group centered>
        <form onSubmit={handleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Name:</Label>
              <Control>
                <Input
                  type="name"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Password:</Label>
              <Control>
                <Input
                  type="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <div
                      className="button is-white has-text-custom-purple"
                      onClick={() => setRedirectToLogin(true)}
                    >
                      Login or
                    </div>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>
                      Register
                    </Button>
                  </Column>
                </Column.Group>
              </Control>
            </Field>
            {error && <Help color="danger">Email or Password invalid</Help>}
          </Column>
        </form>
      </Column.Group>
    </>
  )
}

export default RegisterForm
