export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '6210640530c0b53340f5c9f5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-yqxmxtgv',
                  apiId: '7d5c7dd6-a06e-4d8f-a434-c513b113d49d'
                },
                {
                  buildHookId: '62106405874d45421d62d715',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-oju6h86f',
                  apiId: 'ddd38a63-fdb6-4b2a-817a-37c3af0cca9c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MarcosFerrerF/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-oju6h86f.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
