/* tslint:disable */
/* eslint-disable */
import { Discussion } from '../models/discussion';
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
export interface WebhookDiscussionCreated {
  action: 'created';
  discussion: Discussion;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization?: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  sender: SimpleUserWebhooks;
}
