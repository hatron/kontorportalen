export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6011e78b3d17ad0095425895',
                  title: 'Sanity Studio',
                  name: 'kontorportalen-studio',
                  apiId: '46bc0daf-ae1d-49d9-b2ca-42cdeee243e4'
                },
                {
                  buildHookId: '6011e78bd3a42d011834e11e',
                  title: 'Landing pages Website',
                  name: 'kontorportalen',
                  apiId: '9f891c19-7639-4adb-8da9-0be25b6faea9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hatron/kontorportalen',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kontorportalen.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
