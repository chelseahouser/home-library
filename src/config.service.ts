import { SecretManagerServiceClient } from '@google-cloud/secret-manager';
import * as dotenv from 'dotenv';

export class ConfigService {
  private readonly envConfig: Record<string, string>;

  constructor() {
    const result = dotenv.config();

    // Save Loaded Configurations
    if (result.error) {
      this.envConfig = process.env;
    } else {
      this.envConfig = result.parsed;
    }
  }

  public get(key: string): string {
    return this.envConfig[key];
  }

  public async getSecrets(secret: string): Promise<string> {
    const projectId = this.get('GOOGLE_PROJECT_ID');
    const secretId = this.get(secret);

    const client = new SecretManagerServiceClient();
    const versionName = `projects/${projectId}/secrets/${secretId}/versions/latest`;
    const [version] = await client.accessSecretVersion({ name: versionName });
    return version.payload.data.toString();
  }

  public async getDatabaseConnectionStringConfig() {
    if (this.get('GSM_ACTIVE') == 'true') {
      return await this.getSecrets('MONGO_DB');
    }
    return this.get('MONGO_DB');
  }
}
