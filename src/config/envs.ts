
import 'dotenv/config'
import * as joi from 'joi'

interface EnvVars {
  RABBITMQ_URL: string;
}

const envSchema = joi.object({
  RABBITMQ_URL: joi.string().required()
}).unknown(true)


const {error, value} = envSchema.validate(process.env)

if(error) {
  throw new Error(`Config validation error: ${ error.message }`)
}

const envVars: EnvVars = value;

export const envs = {
  rabbitmqUrl: envVars.RABBITMQ_URL,
}


