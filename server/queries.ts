// Dummy template tag for highlighting and strip indent
const gql = (strings: TemplateStringsArray, ...values: any[]) => {
  const query = strings.reduce((res, str, i) => res + values[i - 1] + str)
  return query.replace(/^[ \t]{4}/gm, '').trim() + '\n'
}


const queries = [
  gql`
    # Fetch all server profiles

    query profiles {
      profiles {
        id
        name
      }
    }
  `,
  gql`
    # Create server profile

    mutation createProfile {
      createProfile(ProfileInput: {
        name: "My Server"
        folder: "/path/to/server"
        jar: "/path/to/server/minecraft_server.jar"
        max_memory: 1024
        min_memory: 512
        upnp: true
        backup: true
        backup_minute: "10"
        backup_count: "5"
      }) {
        id
        name
      }
    }
  `,
]

export default queries
