
import 'dotenv/config'
import * as joi from 'joi'

interface EnvVars {
  RABBITMQ_URL: string;
  MAIL_USER: string;
  MAIL_PASSWORD: string;
}

const envSchema = joi.object({
  RABBITMQ_URL: joi.string().required(),
  MAIL_USER: joi.string().required(),
  MAIL_PASSWORD: joi.string().required(),
}).unknown(true)


const {error, value} = envSchema.validate(process.env)

if(error) {
  throw new Error(`Config validation error: ${ error.message }`)
}

const envVars: EnvVars = value;

export const envs = {
  rabbitmqUrl: envVars.RABBITMQ_URL,
  mailUser: envVars.MAIL_USER,
  mailPassword: envVars.MAIL_PASSWORD,
}


