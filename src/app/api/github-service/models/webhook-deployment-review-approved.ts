/* tslint:disable */
/* eslint-disable */
import { EnterpriseWebhooks } from '../models/enterprise-webhooks';
import { OrganizationSimpleWebhooks } from '../models/organization-simple-webhooks';
import { RepositoryWebhooks } from '../models/repository-webhooks';
import { SimpleInstallation } from '../models/simple-installation';
import { SimpleUserWebhooks } from '../models/simple-user-webhooks';
import { WebhooksApprover } from '../models/webhooks-approver';
import { WebhooksReviewers } from '../models/webhooks-reviewers';
import { WebhooksWorkflowJobRun } from '../models/webhooks-workflow-job-run';
export interface WebhookDeploymentReviewApproved {
  action: 'approved';
  approver?: WebhooksApprover;
  comment?: string;
  enterprise?: EnterpriseWebhooks;
  installation?: SimpleInstallation;
  organization: OrganizationSimpleWebhooks;
  repository: RepositoryWebhooks;
  reviewers?: WebhooksReviewers;
  sender: SimpleUserWebhooks;
  since: string;
  workflow_job_run?: WebhooksWorkflowJobRun;
  workflow_job_runs?: Array<{
'conclusion'?: any | null;
'created_at'?: string;
'environment'?: string;
'html_url'?: string;
'id'?: number;
'name'?: string | null;
'status'?: string;
'updated_at'?: string;
}>;
  workflow_run: {
'actor': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
'artifacts_url'?: string;
'cancel_url'?: string;
'check_suite_id': number;
'check_suite_node_id': string;
'check_suite_url'?: string;
'conclusion': 'success' | 'failure' | 'neutral' | 'cancelled' | 'timed_out' | 'action_required' | 'stale' | 'null';
'created_at': string;
'display_title': string;
'event': string;
'head_branch': string;
'head_commit'?: {
} | null;
'head_repository'?: {
'archive_url'?: string;
'assignees_url'?: string;
'blobs_url'?: string;
'branches_url'?: string;
'collaborators_url'?: string;
'comments_url'?: string;
'commits_url'?: string;
'compare_url'?: string;
'contents_url'?: string;
'contributors_url'?: string;
'deployments_url'?: string;
'description'?: string | null;
'downloads_url'?: string;
'events_url'?: string;
'fork'?: boolean;
'forks_url'?: string;
'full_name'?: string;
'git_commits_url'?: string;
'git_refs_url'?: string;
'git_tags_url'?: string;
'hooks_url'?: string;
'html_url'?: string;
'id'?: number;
'issue_comment_url'?: string;
'issue_events_url'?: string;
'issues_url'?: string;
'keys_url'?: string;
'labels_url'?: string;
'languages_url'?: string;
'merges_url'?: string;
'milestones_url'?: string;
'name'?: string;
'node_id'?: string;
'notifications_url'?: string;
'owner'?: {
'avatar_url'?: string;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id'?: number;
'login'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: string;
'url'?: string;
};
'private'?: boolean;
'pulls_url'?: string;
'releases_url'?: string;
'stargazers_url'?: string;
'statuses_url'?: string;
'subscribers_url'?: string;
'subscription_url'?: string;
'tags_url'?: string;
'teams_url'?: string;
'trees_url'?: string;
'url'?: string;
};
'head_sha': string;
'html_url': string;
'id': number;
'jobs_url'?: string;
'logs_url'?: string;
'name': string;
'node_id': string;
'path': string;
'previous_attempt_url'?: string | null;
'pull_requests': Array<{
'base': {
'ref': string;
'repo': {
'id': number;
'name': string;
'url': string;
};
'sha': string;
};
'head': {
'ref': string;
'repo': {
'id': number;
'name': string;
'url': string;
};
'sha': string;
};
'id': number;
'number': number;
'url': string;
}>;
'referenced_workflows'?: (Array<{
'path': string;
'ref'?: string;
'sha': string;
}>) | null;
'repository'?: {
'archive_url'?: string;
'assignees_url'?: string;
'blobs_url'?: string;
'branches_url'?: string;
'collaborators_url'?: string;
'comments_url'?: string;
'commits_url'?: string;
'compare_url'?: string;
'contents_url'?: string;
'contributors_url'?: string;
'deployments_url'?: string;
'description'?: string | null;
'downloads_url'?: string;
'events_url'?: string;
'fork'?: boolean;
'forks_url'?: string;
'full_name'?: string;
'git_commits_url'?: string;
'git_refs_url'?: string;
'git_tags_url'?: string;
'hooks_url'?: string;
'html_url'?: string;
'id'?: number;
'issue_comment_url'?: string;
'issue_events_url'?: string;
'issues_url'?: string;
'keys_url'?: string;
'labels_url'?: string;
'languages_url'?: string;
'merges_url'?: string;
'milestones_url'?: string;
'name'?: string;
'node_id'?: string;
'notifications_url'?: string;
'owner'?: {
'avatar_url'?: string;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id'?: number;
'login'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: string;
'url'?: string;
};
'private'?: boolean;
'pulls_url'?: string;
'releases_url'?: string;
'stargazers_url'?: string;
'statuses_url'?: string;
'subscribers_url'?: string;
'subscription_url'?: string;
'tags_url'?: string;
'teams_url'?: string;
'trees_url'?: string;
'url'?: string;
};
'rerun_url'?: string;
'run_attempt': number;
'run_number': number;
'run_started_at': string;
'status': 'requested' | 'in_progress' | 'completed' | 'queued' | 'waiting' | 'pending';
'triggering_actor': {
'avatar_url'?: string;
'deleted'?: boolean;
'email'?: string | null;
'events_url'?: string;
'followers_url'?: string;
'following_url'?: string;
'gists_url'?: string;
'gravatar_id'?: string;
'html_url'?: string;
'id': number;
'login': string;
'name'?: string;
'node_id'?: string;
'organizations_url'?: string;
'received_events_url'?: string;
'repos_url'?: string;
'site_admin'?: boolean;
'starred_url'?: string;
'subscriptions_url'?: string;
'type'?: 'Bot' | 'User' | 'Organization';
'url'?: string;
};
'updated_at': string;
'url': string;
'workflow_id': number;
'workflow_url'?: string;
};
}
