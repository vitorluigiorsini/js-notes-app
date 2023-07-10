import React from 'react'
import { Column, Section, Title, Container, Card } from 'rbx'
import '../../../styles/users.scss'
import HeaderLogged from '../../../components/header_logged'
import UsersEditForm from '../../../components/users/users_edit_form'
import UsersEditPasswordForm from '../../../components/users/users_edit_password_form'
import UsersDelete from '../../../components/users/users_delete'

const UserEditScreen = () => (
  <>
    <HeaderLogged />
    <Section size="samll" className="users">
      <Container>
        <Column.Group centered className="users-edit">
          <Column size={4}>
            <Title size={5} className="has-text-grey has-text-left">
              Informações Pessoais
            </Title>
            <Card>
              <Card.Content>
                <UsersEditForm />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>

        <Column.Group centered className="users-edit">
          <Column size={4}>
            <Title size={5} className="has-text-grey has-text-left">
              Password
            </Title>
            <Card>
              <Card.Content>
                <UsersEditPasswordForm />
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
        <Column.Group centered>
          <Column size={4} className="has-text-right">
            <UsersDelete />
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </>
)

export default UserEditScreen
