import React, { useState } from 'react'
import { Button, Field, Control, Label, Input, Column, Help } from 'rbx'
import { Navigate } from 'react-router-dom'
import UsersService from '../../../services/users'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [redirectToRegister, setRedirectToRegister] = useState(false)
  const [redirectToNotes, setRedirectToNotes] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (evt) => {
    evt.preventDefault()

    try {
      await UsersService.login({ email: email, password: password })
      setRedirectToNotes(true)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  if (redirectToRegister) return <Navigate to="/register" />
  else if (redirectToNotes) return <Navigate to="/notes" />

  return (
    <>
      <Column.Group centered>
        <form onSubmit={handleSubmit}>
          <Column size={12}>
            <Field>
              <Label size="small">Email:</Label>
              <Control>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  name="email"
                />
              </Control>
            </Field>
            <Field>
              <Label size="small">Password:</Label>
              <Control>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  name="password"
                />
              </Control>
            </Field>
            <Field>
              <Control>
                <Column.Group breakpoint="mobile">
                  <Column>
                    <div
                      className="button is-white has-text-custom-purple"
                      onClick={() => setRedirectToRegister(true)}
                    >
                      Register or
                    </div>
                  </Column>
                  <Column>
                    <Button color="custom-purple" outlined>
                      Login
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

export default LoginForm
