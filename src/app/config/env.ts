import dotenv from 'dotenv'

dotenv.config();

interface EnvConfig {
    PORT: string;
    DB_URL: string;
    NODE_DEV: "development" | "production"
}

const loadEnvVariable = (): EnvConfig => {
     const requiredEnvVariable :string[]=["PORT", "DB_URL","NODE_DEV"];
     requiredEnvVariable.forEach(key=>{
        if(!process.env[key]){
            throw new Error(`Missing require environment variable ${key}`)
        }
     })

    return {
        PORT: process.env.PORT as string,
        DB_URL: process.env.DB_URL as string,
        NODE_DEV: process.env.NODE_DEV as "development"|"production"
    }
}

export const envVars:EnvConfig = loadEnvVariable();