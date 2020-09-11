import bcrypt from 'bcryptjs'
import crypto from 'crypto'

import User from 'models/User'

import {
  Unauthorized,
  encryptPassword,
  generateJWTToken,
  sendEmail,
  NotFound
} from 'helpers'
import { templateForgetPassword } from 'utils'

export const login = async ctx => {
  const { body } = ctx.request

  const user = await User.query()
    .findOne({ email: body.email })
    .withGraphFetched('role')
    .catch(() => {
      throw Unauthorized('Unauthorized, User not found')
    })
  const isValid = await bcrypt.compare(body.password, user.password)

  if (!isValid) {
    throw Unauthorized('Unauthorized, password is invalid')
  }

  const parsedUser = user.toJSON()

  return {
    ...parsedUser,
    token: generateJWTToken({ id: parsedUser.id, role_id: parsedUser.role_id })
  }
}

export const index = () => User.query().withGraphFetched('role')

export const forget = async ctx => {
  const { body } = ctx.request
  const token = crypto.randomBytes(10).toString('hex')

  await User.query()
    .findOne({ email: body.email })
    .patch({ password_reset_token: token })
    .catch(() => {
      throw new NotFound('User not found')
    })

  const template = templateForgetPassword(token)

  await sendEmail(body.email, template)

  return { email: body.email }
}

export const reset = async ctx => {
  const { token, password } = ctx.request.body

  const newPassword = await encryptPassword(password)

  return User.query()
    .findOne({ password_reset_token: token })
    .patch({
      password: newPassword,
      password_reset_token: null
    })
    .catch(() => {
      throw new NotFound('User not found')
    })
}

export const show = ctx =>
  User.query().findOne({ id: ctx.params.id }).withGraphFetched('role')

export const create = async ctx => {
  const { body } = ctx.request
  return User.query().insert({
    name: body.name,
    password: await encryptPassword(body.password),
    email: body.email,
    role_id: body.role_id
  })
}

export const update = async ctx => {
  const { body } = ctx.request

  return User.query().patchAndFetchById(ctx.params.id, {
    name: body.name,
    email: body.email,
    password: await encryptPassword(body.password),
    role_id: body.role_id
  })
}

export const destroy = ctx =>
  User.query().deleteById(ctx.state.user.id).returning('*')

export const me = ctx => User.query().findOne({ id: ctx.state.user.id })

export default {
  index,
  create,
  login,
  forget,
  reset,
  update,
  show,
  destroy,
  me
}
