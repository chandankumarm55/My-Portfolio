// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'chandankumarm55', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Evolve-ai',
          description:
            'An intelligent, full-featured MERN stack web application powered by AI, integrating file/folder management, secure authentication, payment gateway, and AI assistant support. Built with Vite for fast frontend development and Express.js for scalable backend logic, Evolve AI provides a solid foundation for smart and interactive applications',
          imageUrl:
            'data:image/png;base64,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',
          link: 'https://evolve-ai-gamma.vercel.app/',
        },
        {
          title: 'Hire-Hub',
          description:
            'A full-stack job-seeking and recruitment platform built with the MERN stack. It enables job seekers to search, filter, apply for jobs, and manage their profiles, while allowing recruiters to post jobs, track applicants, and manage their company dashboard. Includes AI-powered chatbot support, resume upload via Cloudinary, and Docker deployment for scalability.',
          imageUrl:
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PDRAQEBAODxAQEBUNEA8QEBUQEBASFxYXGhYVGBUYHCggGBslHhYYIT0hJykrOjovGx8zODMsNygtLisBCgoKDg0OGhAQGislICIrLS0tLS0tLS0tLS0tLSstLSsrLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLf/AABEIAMgAyAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcBBAUDAv/EAEcQAAEDAgMEBQYJCgYDAAAAAAEAAgMEEQUSIQYxUWEHEyJBshQyQnFzgTM0NlKRoaKz8CNidHWCk7HB0eE1cpKUo/EWJGP/xAAaAQEAAwEBAQAAAAAAAAAAAAAAAQQFAwIG/8QAKxEBAAIBBAEDAwQCAwAAAAAAAAECAwQREiExBRMyM0FxIiM0YUKBFCRS/9oADAMBAAIRAxEAPwC8UBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBBhBlBhDoUApR4ESygICAgICAgICAgICAgICAgICDwqqmOJhfI9sbGi7nOOVoHrKmI38PNrRVAcd6VKeIllJE6pduDz2I78tLu+gK3TSf8ArpTvrO/0donju3ePNjErmeRxPdlYRThocd+hkuTu3rpXBi+07uc58s+ellsmrJsGp5IXE1UlPDJn7ILi4NLzrp3lVq8Yv+rw7ZpyTh/b8o5JjGO0uskRlaOMQeLeuMq7OLTX6rLNjNrMfzbuE9JUDnBlVG6B17Zx22e/vb9BXHLorV+Pa3h9RrPV42TWmqY5WB8b2vY4XDmnM0j1hUrVtE7S0KXraN6y91D2ICAgICAgICAgICAgICDCAoHK2hxyGhgMsp13MYPOe7gF2xYZyTtCvqNRXFHauYaDEMfm6yV5hpGu7OnYFu5jfSdzPP1K9NseCu0eWdWMuovvPhP8B2Uo6Fo6mIF9tZn9qQ/td3usqN81reWli09KQh3TqP8A06X258BXbSbcp3ctX4hNtkP8Lov0SH7tqr5PnKxi+EOuvDpMONjmzFJWtPWxDORpKzsyD39/vuuuPPek9K2XTY8kdwrmso8R2fl62FxnpHO7Q9A8nj0D+cP7K9FseojafKj7eTTTvHhZGzW0EGIU4lhOo0kjPnxu4H+qoZMU0naWlhyxkjd11yjt1ZUggICAgICAgICAgICAg16yqZDG+R5ytY0vceAC9VrynZ4yZIpG6scPpJccxB00uZtNEbZd1m90Y5neT/ZaeSa6fHtHliY631eXlbwtGCFsbAxjQ1rRla0CwAHJZdrTM9tylYrG0PRQnpWfTp8Tpf0g+Aq3pNuUqer8Qm2yP+GUX6JD921V8nzlZxfCHWXh0EHlUQMkY5j2texwLXNcLgg7wQprMx3DzasWjtT2MUs2zuJsqIMzqOY2LL72+lGTxG8H+6vxaM1Np8s61bYb7x4W9QVjJ4WTRuDo5Gh7SO8FULRtOzRrblXeGyoehAQEBAQEBAQEBAQEGEEE6TsRdkipGXzSnO8DeRezR7z/AAWhosfm8/Zj+p5vGKPuk+zeFNo6SOEAXAzPPznnziqmfJzvuv6XDGLHEI1SbV1L8fNARF1F5BcNOfssJGt7dy5bLKcoKz6dPidL7c+Aq5pPlKlq/EJXhFQ6LA4JG2zMoGPF91xECuM13y7f292vNMPKHnsTjc1bFK6bJdjw0ZARpYHvPNdNVgjFts4aDVWzxMykqqf20UFxPaupjxyOhaIupe+NpJac/abc63srlcEezzULai3vcEh2twRtfQywEDMW5o3fNkF8p+nT1Erhivwtus5qcq7IV0LYw4xz0EpOeBxkjB3hpNnt9zvEu+pr/k46a3+Kz1UXBAQEBAQEBAQEBAQEGEFczN8q2jAOrYnD/jbfxLUj9vTfl8/P7uu2n7LGWW39le0Wz1W3aQ1joiKe8v5XMz0mEDs3v9ST3CYnpYSCs+nT4nS+3PgKuaPzKlq/EJNRfJ+P9XN+5C51+t/szb/8ednP6LvgJ/ajwhWfUN4tCl6P8LQmyzmzvGyqMe+VcPtIfAFpUn/rMnJ1qlrrNaynoR5DtkWt0ZUONxx66PN41emeWBRiOGZcSor4gICAgICAgICAgICDBQnwrvZjXHqq/wD9rf6wtTP/ABqvn9J3q5WIstvquxnbHE24hPTUzWyZJHNYxsWd+UchvWlj02P2udmPk1eT3eFWu7abaPupZP8AaOUe1p5+7p72ePsi+2+L4rUQxtr4XRMa8ujJgMV3WOlzv0XTFXHG/B4yXvbbktui+T8f6ub9yFRr9aPyuZv48/hBdn6rEmRvFE1zml3bsxru1YcVr6muGZjm+e0d9TET7bovxLaLujk/cx/0VWKaVoRk1rn4ZhWKTYvT1VVBLcSsL5CwNAa3S9gmTJirimtJe8WPNbLFrrfWW2oVBtxptZh9t5dTX/eu/kruP6MqOT6q4FSXhAQEBAQEBAQEBAQEGEQrmI+TbRkHQSuIB452XH2tFqT+rSwwI/b1qxllt+fCrME+VMv+ebwlad530rHxfy+1prMbCs+nP4nTe3PgKuaPzKnq/EJNRfJ+P9XN+5C51+tH5Mv8efw53Rf8BP7UeEKz6hvyhS9H7rKbrObSE4ztbUQ41T0LWQmKWSNjnODs4DgL2Oa31KRNlAp6oPlm2bANW07xc8OqjJP29Fd+OFR+WVcSpLwgICAgICAgICAgICDCCAdJdE5j4KyPQsIY48CDmYf4/UtHRXiYnHLE9TxTS0ZYTHBsQbVU0czdz2gkcHd49xuFSy4+Ftmpgy+7jiyF4VgVUzaCSpdE4QF8pEl22ILTbS91bvlpODjHlSx4bxqeU+FhKg00D6W8EqqymgZTROlcyYvcGlosMpF+0easafJFJVtTSbO0ynfFgYjeC18dAGPafRc2KxGnMLzSd8sflGaNsEuX0XfAT+1HhCt+oeYUPR/hZN1nNpXeP4DVybQU1SyFzoGSxOdJdtmgDXQm6CZbQYoyjpJqh9rRsLgPnO9FvvNgveOk2ttDnktFa9q76GcNfJLVYjLq6RxiY495cc8h+nKPpVnUztHBW00TM81rKmuiAgICAgICAgICAgIMINTFKBlTBJC8Xa9uX1cD6wdV6peaWi0OObHGSk1lXezOKPwqsfRVRyxOd2XnzWk7ng/NO78FaWfHGbHzr5Y+my202T27eFnA33e5Zcxs3Ynd9IMIlz9ofiVT7CTwldMPzhW1f0bIx0XfAT+1HhCu+ofKGd6P8JThZzafLnAC50G9ETOyn9ssWkxquiw+j1hY+7njzXOHnSE/MaDp/wBLRxUjDTnLNy3nNfhC08FwyOkpoqeIWZE0NHEnvceZNyqF7TeeTQx1iscW+vL2ICAgICAgICAgICAgICCP7WbNR18NjZkzAerktu5HiF30+ecc/wBKeq0sZo/tCsG2oqsJl8kr2PdENGO3uY3uLT6bfxyVzLgpljnTypYc98FvbyeFj4ZikFUwSQSslae9p1HIjeDyKz70tXzDVpkpbxLdXPd0c/aH4lU+wk8JXXD84V9V9KyMdFvwE/tR4QrvqEfqhm+j/GyV4licFMwyTSMjb+cdTyA7yqNMdrztDVyZqUjuVZ4/tPV4tJ5HQRvbE7R7tznt7y4+gz8clfpgrgjldm31Ns88aQmmxmycWGw2FnzvA62Xj+a3g0fjlTzZpvK9gwcISVcVkQEBAQEBAQEBAQEBAQEBBhBoYthFPVx9XPG2Rvdfe08Qd4K948lsc7w5ZMNckdq8xLo1qqd5lw6qc07wxzjG8cg9ujveArkauLdXhSnR2p3SWocf2mo+zJTOqAO8wdb9qEqJrht4TW+avlMsOxOorMEkmni6qZ8UzTEGuba2YDsu17guFaxXJEQ65rTOGZQ/BYsXjjdHSxSsbIcxcWBvd3OfotTLbT22m8+GHp6amsTFHTo+j6oqJOsr6hx4ta4veeWc6D3AqrbV1rG2OGhj0N5nfLKdYVhNPSR9XBG2NvfbznHiTvJVG+S153s08eKuOP0w314dRAQEBAQEBAQEBAQEBAQEGEBBlEMIkUI6ecrMzSDuKmJ2RasWjYi0AHDRRy3TFIrD0UpEQIkRDKJEBAQEBAQEBAQEBAQEQh8O0D4qyvjdFWzhszRH1MRlZGOqYbXHm6km3NWPbjhWVb3Zi9oZw6vmds86cyPM3kszxIT2w4Z7G/EWCi9IjJxTS8+3yfe0VbIzBWSiSRjy2mzSsJElnPjDiDvvYlTjpE5OKMl5jHya2zNaX15jp6irqaZsJM5qQfyct25A1zmg3IvopyV2r35RivvMbPDGJ5HYnURl+KFjIoXMZRHRpcHZs1+Nh9aREcInp5tM85hM6NlomC8hswC8pvIdPS/OVefK5Xw4W0+IvpqmgLRM9rpZBJFC0vfIOqNuyPOsdV0w0ia2cs15i1XngWLvqMTqQW1EcbaeEthnaYyHFz7uDeemvJer0iKRLzTJvaYbOBVb3SYiHvLuqqnNYHHzGdWwgDgNSVE16q9RbuXOhr5v/HDOZJOu8ke/rc3bza2N+K9cKzm4vHO0Yt2ps7XTNr4GF+INilifmbX2IkkAaR1RG47zv3L1krXjOznitbl2nqqrogICAgICAgICAgICDCg2adLh0cUk723zVDxJJc6XDQ3ThoAvc2l4ikPGDBYWURoxn6kxuiPa7WV9768dSpm8zbkiMcRXi+qrCIpaZtO7N1bOrtY9r8mWluv7ISLzFuROOJrxZbhUQqjVNzNkdGIn5TZkgG4ub3kcVE3mY4pjHETu06/ZuOWofOJquF72tY/qJurDg2+W9hzK9RkmK8Xi2KJtydWmh6uNrMz35WhuZ7sz3cye8rnae3asbQ8arD2SywSuzZoHOdHY2F3NLTfjoVNbTEPNqxMkeHRtqX1AzdZJG2J2vZysJI0/aKmbTtsiKxE7ufiWy9PPK+QuqInSgNmEMzo2zACwDwN+ml16rlmI2ebYazO7dqMKikpHUuXLCY+pys0sy1rDgvMXnlu9TSOOzSw/ZqGKZkpkqp3xAiLr5jII7ixLRuBtovU5ZmNniuGInd3VzdhAQEBAQEBAQEBAQEBB41JflGS17ga8Dpf3b/cphEtYSTDucezr2Ro/lbu581O0PPYHTZXX33ba1t2bXcOHrUTEHb4e6p0sBYv36Zsl9N+4+7vC9dHb7D5bWOa4dq5rb6W0381HR2B1Rfc3hy3DX3E/ZKdJjd8NkntuJIvmaQBfQ2sbaH6VM7Ijd7tMgaScxOZulhoOzfcOZXnaN07zs8jJPfRul8vPzt9uGX+KmOO6P1bPkSTWOjrgC1wLOPpE6C3L+aTsbTu2aZ0hzZxYh1gRucLDX6bqJiIlMbzDZUPQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/2Q==',
          link: 'https://hire-hub-chandan.vercel.app/',
        },
      ],
    },
  },
  seo: { title: 'Portfolio of Chandan Kumar', description: '', imageURL: '' },
  social: {
    linkedin: 'chandan-kumar-2b855224b',
    x: 'ChndanKuma16973',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: 'chndan_kumarm_8418995b8',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: 'https://www.arifszn.com',
    phone: '',
    email: 'chandanchand769@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Express.js',
    'JavaScript',
    'React.js',
    'Node.js',
    'Next.js',
    'MySQL',
    'MongoDB',
    'Git',
    'Docker',
    'Tailwind',
    'CSS',
    'Bootstrap',
    'Postman',
  ],
  experiences: [
    {
      company: 'The Entrepreneurship Network',
      position: 'MERN Developer Intern',
      from: 'October 2024',
      to: 'Junaury 2025',
      companyLink: 'https://www.entrepreneurshipnetwork.net',
    },
    {
      company: 'unifiedmentor',
      position: 'Web Developer Intern',
      from: 'April 2024',
      to: 'May 2021',
      companyLink: 'https://www.unifiedmentor.com/',
    },
  ],
  certifications: [
    {
      name: 'Applied Data Science Lab(World Quan University)',
      body: 'Lorem ipsum dolor sit amet',
      year: 'Feb 2025',
      link: 'https://www.credly.com/badges/c2c47c91-cc9f-45fe-8502-ef69cc4c2aa1',
    },
  ],

  educations: [
  {
    institution: 'Alliance University',
    degree: 'Master of Computer Applications',
    from: '2024',
    to: '2026',
    location: 'Bengaluru, KA',
    gpa: 'Current CGPA: 9.5/10'
  },
  {
    institution: 'Banglore University',
    degree: 'Bachelor of Computer Applications',
    from: '2021',
    to: '2024',
    location: 'Bengaluru, KA',
    gpa: 'Cumulative GPA: 9.21/10'
  },

]
,
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'chndan_kumarm_8418995b8', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },


  enablePWA: true,
};

export default CONFIG;
