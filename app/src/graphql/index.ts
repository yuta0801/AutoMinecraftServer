import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Mutation = {
   __typename?: 'Mutation',
  updateSetings: Settings,
  createProfile: Profile,
  updateProfile: Profile,
  removeProfile: Scalars['Boolean'],
  startServer: Server,
  stopServer: Scalars['Boolean'],
  restartServer: Scalars['Boolean'],
  killServer: Scalars['Boolean'],
  execCommand: Scalars['Boolean'],
};


export type MutationUpdateSetingsArgs = {
  settings: SettingsInput
};


export type MutationCreateProfileArgs = {
  ProfileInput: ProfileInput
};


export type MutationUpdateProfileArgs = {
  profile: ProfileInput,
  id: Scalars['String']
};


export type MutationRemoveProfileArgs = {
  id: Scalars['String']
};


export type MutationStartServerArgs = {
  id: Scalars['String']
};


export type MutationStopServerArgs = {
  id: Scalars['String']
};


export type MutationRestartServerArgs = {
  id: Scalars['String']
};


export type MutationKillServerArgs = {
  id: Scalars['String']
};


export type MutationExecCommandArgs = {
  command: Scalars['String'],
  id: Scalars['String']
};

export type Profile = {
   __typename?: 'Profile',
  id: Scalars['ID'],
  name: Scalars['String'],
  folder: Scalars['String'],
  jar: Scalars['String'],
  max_memory: Scalars['Float'],
  min_memory: Scalars['Float'],
  upnp: Scalars['Boolean'],
  backup: Scalars['Boolean'],
  backup_minute: Scalars['String'],
  backup_count: Scalars['String'],
};

export type ProfileInput = {
  name: Scalars['String'],
  folder: Scalars['String'],
  jar: Scalars['String'],
  max_memory: Scalars['Float'],
  min_memory: Scalars['Float'],
  upnp: Scalars['Boolean'],
  backup: Scalars['Boolean'],
  backup_minute: Scalars['String'],
  backup_count: Scalars['String'],
};

export type Query = {
   __typename?: 'Query',
  settings: Settings,
  profile: Profile,
  profiles: Array<Profile>,
  server: Server,
};


export type QueryProfileArgs = {
  id: Scalars['String']
};


export type QueryServerArgs = {
  id: Scalars['String']
};

export type Server = {
   __typename?: 'Server',
  id: Scalars['ID'],
  logs: Array<Scalars['String']>,
  status: Status,
};

export type Settings = {
   __typename?: 'Settings',
  log_att: Scalars['Boolean'],
  backup_notify: Scalars['Boolean'],
  backup_dir_bool: Scalars['Boolean'],
  backup_dir: Scalars['String'],
};

export type SettingsInput = {
  log_att: Scalars['Boolean'],
  backup_notify: Scalars['Boolean'],
  backup_dir_bool: Scalars['Boolean'],
  backup_dir: Scalars['String'],
};

export enum Status {
  Starting = 'Starting',
  Running = 'Running',
  Stopping = 'Stopping',
  Stopped = 'Stopped'
}
export type CreateProfileMutationVariables = {
  input: ProfileInput
};


export type CreateProfileMutation = (
  { __typename?: 'Mutation' }
  & { createProfile: (
    { __typename?: 'Profile' }
    & Pick<Profile, 'id'>
  ) }
);

export type ProfilesQueryVariables = {};


export type ProfilesQuery = (
  { __typename?: 'Query' }
  & { profiles: Array<(
    { __typename?: 'Profile' }
    & Pick<Profile, 'id' | 'name'>
  )> }
);

export const CreateProfileDocument = gql`
    mutation createProfile($input: ProfileInput!) {
  createProfile(ProfileInput: $input) {
    id
  }
}
    `;
export type CreateProfileMutationFn = ApolloReactCommon.MutationFunction<CreateProfileMutation, CreateProfileMutationVariables>;

    export function useCreateProfileMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProfileMutation, CreateProfileMutationVariables>) {
      return ApolloReactHooks.useMutation<CreateProfileMutation, CreateProfileMutationVariables>(CreateProfileDocument, baseOptions);
    }
export type CreateProfileMutationHookResult = ReturnType<typeof useCreateProfileMutation>;
export type CreateProfileMutationResult = ApolloReactCommon.MutationResult<CreateProfileMutation>;
export type CreateProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateProfileMutation, CreateProfileMutationVariables>;
export const ProfilesDocument = gql`
    query profiles {
  profiles {
    id
    name
  }
}
    `;

    export function useProfilesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProfilesQuery, ProfilesQueryVariables>) {
      return ApolloReactHooks.useQuery<ProfilesQuery, ProfilesQueryVariables>(ProfilesDocument, baseOptions);
    }
      export function useProfilesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProfilesQuery, ProfilesQueryVariables>) {
        return ApolloReactHooks.useLazyQuery<ProfilesQuery, ProfilesQueryVariables>(ProfilesDocument, baseOptions);
      }
      
export type ProfilesQueryHookResult = ReturnType<typeof useProfilesQuery>;
export type ProfilesQueryResult = ApolloReactCommon.QueryResult<ProfilesQuery, ProfilesQueryVariables>;