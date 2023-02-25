export const responseExample = {
  id: 8,
  name: 'Homelander',
  real_name: 'John',
  species: ['Supe'],
  citizenship: 'American',
  gender: 'Male',
  status: 'Alive',
  affiliation: [
    {
      name: 'The Seven',
      url: 'https://www.theboysapi.com/api/affiliation/2',
      is_former: false
    }
  ],
  families: [
    {
      name: 'Jonah Vogelbaum',
      url: 'https://www.theboysapi.com/api/character/57',
      relationship: 'father figure'
    },
    {
      name: 'Soldier Boy',
      url: 'https://www.theboysapi.com/api/character/20',
      relationship: 'biological father'
    },
    {
      name: 'Ryan Butcher',
      url: 'https://www.theboysapi.com/api/character/47',
      relationship: 'son'
    }
  ],
  portrayed: ['Antony Starr'],
  first_seen: {
    name: 'The Name of the Game',
    url: 'https://www.theboysapi.com/api/episode/1'
  },
  last_seen: {
    name: 'The Instant White-Hot Wild',
    url: 'https://www.theboysapi.com/api/episode/24'
  },
  season: ['1', '2', '3'],
  image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_8.jpg',
  url: 'https://www.theboysapi.com/api/character/8'
};

export const paginationExample = {
  count: 73,
  pages: 4,
  prev: null,
  next: 'https://www.theboysapi.com/api/character/?page=2',
  results: [
    {
      id: 1,
      name: 'Billy Butcher',
      real_name: 'William Butcher',
      species: ['Human', 'Supe(temporarily)'],
      citizenship: 'British',
      gender: 'Male',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Boys',
          url: 'https://www.theboysapi.com/api/affiliation/1',
          is_former: false
        },
        {
          name: 'Federal Bureau of Superhuman Affairs',
          url: 'https://www.theboysapi.com/api/affiliation/5',
          is_former: true
        },
        {
          name: 'CIA',
          url: 'https://www.theboysapi.com/api/affiliation/6',
          is_former: true
        }
      ],
      families: [
        {
          name: 'Rebecca Saunders Butcher',
          url: 'https://www.theboysapi.com/api/character/27',
          relationship: 'Wife'
        },
        {
          name: 'Sam Butcher',
          url: 'https://www.theboysapi.com/api/character/48',
          relationship: 'Father'
        },
        {
          name: 'Connie Butcher',
          url: 'https://www.theboysapi.com/api/character/49',
          relationship: 'Mother'
        },
        {
          name: 'Lenny Butcher',
          url: 'https://www.theboysapi.com/api/character/50',
          relationship: 'Brother'
        },
        {
          name: 'Ryan Butcher',
          url: 'https://www.theboysapi.com/api/character/47',
          relationship: 'Step-son'
        }
      ],
      portrayed: ['Karl Urban', 'Luca Villacis (teenager)', 'Josh Zaharia (child)'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/2'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_1.jpg',
      url: 'https://www.theboysapi.com/api/character/1'
    },
    {
      id: 2,
      name: 'Hughie Campbell',
      real_name: 'Hugh Campbell Jr.',
      species: ['Human', 'Supe(temporarily)'],
      citizenship: 'American',
      gender: 'Male',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Boys',
          url: 'https://www.theboysapi.com/api/affiliation/1',
          is_former: false
        },
        {
          name: 'Federal Bureau of Superhuman Affairs',
          url: 'https://www.theboysapi.com/api/affiliation/5',
          is_former: true
        },
        {
          name: 'Bryman Audio-Visual',
          url: 'https://www.theboysapi.com/api/affiliation/7',
          is_former: true
        }
      ],
      families: [
        {
          name: 'Hugh Campbell Sr.',
          url: 'https://www.theboysapi.com/api/character/35',
          relationship: 'Father'
        }
      ],
      portrayed: ['Jack Quaid'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/2'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_2.jpg',
      url: 'https://www.theboysapi.com/api/character/2'
    },
    {
      id: 3,
      name: "Mother's Milk",
      real_name: 'Marvin T. Milk',
      species: ['Human'],
      citizenship: 'American',
      gender: 'Male',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Boys',
          url: 'https://www.theboysapi.com/api/affiliation/1',
          is_former: false
        },
        {
          name: 'United States Marine Corps',
          url: 'https://www.theboysapi.com/api/affiliation/8',
          is_former: true
        }
      ],
      families: [
        {
          name: 'Monique Milk',
          url: 'https://www.theboysapi.com/api/character/41',
          relationship: 'Ex-wife'
        },
        {
          name: 'Janine Milk',
          url: 'https://www.theboysapi.com/api/character/36',
          relationship: 'Daughter'
        }
      ],
      portrayed: ['Laz Alonso'],
      first_seen: {
        name: 'Get Some',
        url: 'https://www.theboysapi.com/api/episode/3'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_3.jpg',
      url: 'https://www.theboysapi.com/api/character/3'
    },
    {
      id: 4,
      name: 'Frenchie',
      real_name: 'Serge',
      species: ['Human'],
      citizenship: 'French',
      gender: 'Male',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Boys',
          url: 'https://www.theboysapi.com/api/affiliation/1',
          is_former: false
        },
        {
          name: 'Federal Bureau of Superhuman Affairs',
          url: 'https://www.theboysapi.com/api/affiliation/5',
          is_former: true
        },
        {
          name: 'Russian Mafia',
          url: 'https://www.theboysapi.com/api/affiliation/9',
          is_former: true
        }
      ],
      families: [],
      portrayed: ['Tomer Capon'],
      first_seen: {
        name: 'Cherry',
        url: 'https://www.theboysapi.com/api/episode/2'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_4.jpg',
      url: 'https://www.theboysapi.com/api/character/4'
    },
    {
      id: 5,
      name: 'Kimiko Miyashiro',
      real_name: 'Kimiko Miyashiro',
      species: ['Supe'],
      citizenship: 'Japanese',
      gender: 'Female',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Boys',
          url: 'https://www.theboysapi.com/api/affiliation/1',
          is_former: false
        },
        {
          name: 'Federal Bureau of Superhuman Affairs',
          url: 'https://www.theboysapi.com/api/affiliation/5',
          is_former: true
        },
        {
          name: 'Shining Light Liberation Army',
          url: 'https://www.theboysapi.com/api/affiliation/10',
          is_former: true
        }
      ],
      families: [
        {
          name: 'Kenji Miyashiro',
          url: 'https://www.theboysapi.com/api/character/56',
          relationship: 'Brother'
        }
      ],
      portrayed: ['Karen Fukuhara', 'Momona Tamada (teenager)'],
      first_seen: {
        name: 'The Female of the Species',
        url: 'https://www.theboysapi.com/api/episode/4'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_5.jpg',
      url: 'https://www.theboysapi.com/api/character/5'
    },
    {
      id: 6,
      name: 'Starlight',
      real_name: 'Annie January',
      species: ['Supe'],
      citizenship: 'American',
      gender: 'Female',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Boys',
          url: 'https://www.theboysapi.com/api/affiliation/1',
          is_former: false
        },
        {
          name: 'The Seven',
          url: 'https://www.theboysapi.com/api/affiliation/2',
          is_former: true
        },
        {
          name: 'Young Americans',
          url: 'https://www.theboysapi.com/api/affiliation/11',
          is_former: true
        },
        {
          name: 'Capes for Christ',
          url: 'https://www.theboysapi.com/api/affiliation/12',
          is_former: true
        }
      ],
      families: [
        {
          name: 'Donna January',
          url: 'https://www.theboysapi.com/api/character/33',
          relationship: 'Mother'
        }
      ],
      portrayed: ['Erin Moriarty', 'Maya Misaljevic (child)'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/1'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_6.jpg',
      url: 'https://www.theboysapi.com/api/character/6'
    },
    {
      id: 7,
      name: 'Grace Mallory',
      real_name: 'Grace Mallory',
      species: ['Human'],
      citizenship: 'American',
      gender: 'Female',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Boys',
          url: 'https://www.theboysapi.com/api/affiliation/1',
          is_former: true
        },
        {
          name: 'CIA',
          url: 'https://www.theboysapi.com/api/affiliation/6',
          is_former: true
        },
        {
          name: 'US Army',
          url: 'https://www.theboysapi.com/api/affiliation/13',
          is_former: true
        }
      ],
      families: [
        {
          name: 'Ryan Butcher',
          url: 'https://www.theboysapi.com/api/character/47',
          relationship: 'Adopted Nephew'
        }
      ],
      portrayed: ['Laila Robins', 'Sarah Swire (Young)'],
      first_seen: {
        name: 'The Self-Preservation Society',
        url: 'https://www.theboysapi.com/api/episode/7'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_7.jpg',
      url: 'https://www.theboysapi.com/api/character/7'
    },
    {
      id: 8,
      name: 'Homelander',
      real_name: 'John',
      species: ['Supe'],
      citizenship: 'American',
      gender: 'Male',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Seven',
          url: 'https://www.theboysapi.com/api/affiliation/2',
          is_former: false
        }
      ],
      families: [
        {
          name: 'Jonah Vogelbaum',
          url: 'https://www.theboysapi.com/api/character/57',
          relationship: 'father figure'
        },
        {
          name: 'Soldier Boy',
          url: 'https://www.theboysapi.com/api/character/20',
          relationship: 'biological father'
        },
        {
          name: 'Ryan Butcher',
          url: 'https://www.theboysapi.com/api/character/47',
          relationship: 'son'
        }
      ],
      portrayed: ['Antony Starr'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/1'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_8.jpg',
      url: 'https://www.theboysapi.com/api/character/8'
    },
    {
      id: 9,
      name: 'A-Train',
      real_name: 'Reginald Franklin',
      species: ['Supe'],
      citizenship: 'American',
      gender: 'Male',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Seven',
          url: 'https://www.theboysapi.com/api/affiliation/2',
          is_former: false
        },
        {
          name: 'Church of the Collective',
          url: 'https://www.theboysapi.com/api/affiliation/14',
          is_former: true
        },
        {
          name: 'Teenage Kix',
          url: 'https://www.theboysapi.com/api/affiliation/15',
          is_former: true
        }
      ],
      families: [
        {
          name: 'Nathan Franklin',
          url: 'https://www.theboysapi.com/api/character/58',
          relationship: 'Brother'
        }
      ],
      portrayed: ['Jessie T. Usher'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/1'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_9.jpg',
      url: 'https://www.theboysapi.com/api/character/9'
    },
    {
      id: 10,
      name: 'The Deep',
      real_name: 'Kevin Moskowitz',
      species: ['Supe'],
      citizenship: 'American',
      gender: 'Male',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Seven',
          url: 'https://www.theboysapi.com/api/affiliation/2',
          is_former: false
        },
        {
          name: 'Church of the Collective',
          url: 'https://www.theboysapi.com/api/affiliation/14',
          is_former: true
        }
      ],
      families: [
        {
          name: 'Cassandra Schwartz',
          url: 'https://www.theboysapi.com/api/character/30',
          relationship: 'Ex-wife'
        }
      ],
      portrayed: ['Chace Crawford'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/1'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_10.jpg',
      url: 'https://www.theboysapi.com/api/character/10'
    },
    {
      id: 11,
      name: 'Lamplighter',
      real_name: '',
      species: ['Supe'],
      citizenship: 'American',
      gender: 'Male',
      status: 'Deceased',
      affiliation: [
        {
          name: 'The Boys',
          url: 'https://www.theboysapi.com/api/affiliation/1',
          is_former: false
        },
        {
          name: 'The Seven',
          url: 'https://www.theboysapi.com/api/affiliation/2',
          is_former: true
        },
        {
          name: 'Sage Grove Center',
          url: 'https://www.theboysapi.com/api/affiliation/16',
          is_former: true
        }
      ],
      families: [],
      portrayed: ['onstantin Shaburov (Season 1)', 'Shawn Ashmore[1] (Season 2)'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/1'
      },
      last_seen: {
        name: 'Butcher, Baker, Candlestick Maker',
        url: 'https://www.theboysapi.com/api/episode/15'
      },
      season: [1, 2],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_11.jpg',
      url: 'https://www.theboysapi.com/api/character/11'
    },
    {
      id: 12,
      name: 'Translucent',
      real_name: '',
      species: ['Supe'],
      citizenship: 'American',
      gender: 'Male',
      status: 'Deceased',
      affiliation: [
        {
          name: 'The Seven',
          url: 'https://www.theboysapi.com/api/affiliation/2',
          is_former: false
        }
      ],
      families: [],
      portrayed: ['Alex Hassell'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/1'
      },
      last_seen: {
        name: 'The Self-Preservation Society',
        url: 'https://www.theboysapi.com/api/episode/7'
      },
      season: [1, 2],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_12.jpg',
      url: 'https://www.theboysapi.com/api/character/12'
    },
    {
      id: 13,
      name: 'Stormfront',
      real_name: 'Klara Risinger',
      species: ['Supe'],
      citizenship: 'American',
      gender: 'Female',
      status: 'Deceased',
      affiliation: [
        {
          name: 'The Seven',
          url: 'https://www.theboysapi.com/api/affiliation/2',
          is_former: true
        },
        {
          name: 'Sage Grove Center',
          url: 'https://www.theboysapi.com/api/affiliation/16',
          is_former: true
        },
        {
          name: 'Church of the Collective',
          url: 'https://www.theboysapi.com/api/affiliation/14',
          is_former: true
        }
      ],
      families: [
        {
          name: 'Frederick Vought',
          url: 'https://www.theboysapi.com/api/character/34',
          relationship: 'husband'
        },
        {
          name: 'Chloe Vought',
          url: 'https://www.theboysapi.com/api/character/59',
          relationship: 'daughter'
        }
      ],
      portrayed: ['Aya Cash'],
      first_seen: {
        name: 'The Big Ride',
        url: 'https://www.theboysapi.com/api/episode/9'
      },
      last_seen: {
        name: 'The Only Man in the Sky',
        url: 'https://www.theboysapi.com/api/episode/18'
      },
      season: [2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_13.jpg',
      url: 'https://www.theboysapi.com/api/character/13'
    },
    {
      id: 14,
      name: 'Supersonic',
      real_name: 'Alex',
      species: ['Supe'],
      citizenship: 'American',
      gender: 'Male',
      status: 'Deceased',
      affiliation: [
        {
          name: 'The Seven',
          url: 'https://www.theboysapi.com/api/affiliation/2',
          is_former: false
        },
        {
          name: 'Global Wellness Center',
          url: 'https://www.theboysapi.com/api/affiliation/17',
          is_former: true
        },
        {
          name: 'Super-Sweet',
          url: 'https://www.theboysapi.com/api/affiliation/18',
          is_former: true
        },
        {
          name: 'Young Americans',
          url: 'https://www.theboysapi.com/api/affiliation/11',
          is_former: true
        }
      ],
      families: [
        {
          name: 'Kenji Miyashiro',
          url: 'https://www.theboysapi.com/api/character/56',
          relationship: 'Brother'
        }
      ],
      portrayed: ['Miles Gaston Villanueva', 'Luca Oriel (young)'],
      first_seen: {
        name: 'Good for the Soul',
        url: 'https://www.theboysapi.com/api/episode/5'
      },
      last_seen: {
        name: 'Glorious Five Year Plan',
        url: 'https://www.theboysapi.com/api/episode/20'
      },
      season: [3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_14.jpg',
      url: 'https://www.theboysapi.com/api/character/14'
    },
    {
      id: 15,
      name: 'Black Noir',
      real_name: 'Earving',
      species: ['Supe'],
      citizenship: 'American',
      gender: 'Male',
      status: 'Deceased',
      affiliation: [
        {
          name: 'The Boys',
          url: 'https://www.theboysapi.com/api/affiliation/1',
          is_former: false
        },
        {
          name: 'Payback',
          url: 'https://www.theboysapi.com/api/affiliation/4',
          is_former: true
        }
      ],
      families: [],
      portrayed: ['Nathan Mitchell', 'Fritzy-Klevans Destine (Young)'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/1'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_15.jpg',
      url: 'https://www.theboysapi.com/api/character/15'
    },
    {
      id: 16,
      name: 'Queen Maeve',
      real_name: 'Margaret Shaw',
      species: ['Human', 'Supe(formerly)'],
      citizenship: 'American',
      gender: 'Female',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Boys',
          url: 'https://www.theboysapi.com/api/affiliation/1',
          is_former: true
        },
        {
          name: 'The Seven',
          url: 'https://www.theboysapi.com/api/affiliation/2',
          is_former: true
        }
      ],
      families: [],
      portrayed: ['Dominique McElligott'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/1'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_16.jpg',
      url: 'https://www.theboysapi.com/api/character/16'
    },
    {
      id: 17,
      name: 'Madelyn Stillwell',
      real_name: 'Madelyn Stillwell',
      species: ['Human'],
      citizenship: 'American',
      gender: 'Female',
      status: 'Deceased',
      affiliation: [
        {
          name: 'Vought International',
          url: 'https://www.theboysapi.com/api/affiliation/3',
          is_former: false
        }
      ],
      families: [
        {
          name: 'Teddy Stillwell',
          url: 'https://www.theboysapi.com/api/character/60',
          relationship: 'Son'
        }
      ],
      portrayed: ['Elisabeth Shue'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/1'
      },
      last_seen: {
        name: 'You Found Me',
        url: 'https://www.theboysapi.com/api/episode/8'
      },
      season: [1],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_17.jpg',
      url: 'https://www.theboysapi.com/api/character/17'
    },
    {
      id: 18,
      name: 'Ashley Barrett',
      real_name: 'Ashley Barrett',
      species: ['Human'],
      citizenship: 'American',
      gender: 'Female',
      status: 'Alive',
      affiliation: [
        {
          name: 'Vought International',
          url: 'https://www.theboysapi.com/api/affiliation/3',
          is_former: false
        }
      ],
      families: [],
      portrayed: ['Colby Minifie'],
      first_seen: {
        name: 'The Name of the Game',
        url: 'https://www.theboysapi.com/api/episode/1'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_18.jpg',
      url: 'https://www.theboysapi.com/api/character/18'
    },
    {
      id: 19,
      name: 'Stan Edgar',
      real_name: 'Stanford Edgar',
      species: ['Human'],
      citizenship: 'American',
      gender: 'Male',
      status: 'Alive',
      affiliation: [
        {
          name: 'Vought International',
          url: 'https://www.theboysapi.com/api/affiliation/3',
          is_former: false
        }
      ],
      families: [
        {
          name: 'Victoria Neuman',
          url: 'https://www.theboysapi.com/api/character/26',
          relationship: 'Adoptive Daughter'
        },
        {
          name: 'Zoe Neuman',
          url: 'https://www.theboysapi.com/api/character/55',
          relationship: 'Adoptive Daughter'
        }
      ],
      portrayed: ['Giancarlo Esposito', 'Justiin Davis (Young)'],
      first_seen: {
        name: 'You Found Me',
        url: 'https://www.theboysapi.com/api/episode/8'
      },
      last_seen: {
        name: 'Glorious Five Year Plan',
        url: 'https://www.theboysapi.com/api/episode/20'
      },
      season: [1, 2, 3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_19.jpg',
      url: 'https://www.theboysapi.com/api/character/19'
    },
    {
      id: 20,
      name: 'Soldier Boy',
      real_name: 'Benjamin',
      species: ['Supe'],
      citizenship: 'American',
      gender: 'Male',
      status: 'Alive',
      affiliation: [
        {
          name: 'The Boys',
          url: 'https://www.theboysapi.com/api/affiliation/1',
          is_former: true
        },
        {
          name: 'Vought International',
          url: 'https://www.theboysapi.com/api/affiliation/3',
          is_former: true
        },
        {
          name: 'Payback',
          url: 'https://www.theboysapi.com/api/affiliation/4',
          is_former: true
        }
      ],
      families: [
        {
          name: 'Homelander',
          url: 'https://www.theboysapi.com/api/character/8',
          relationship: 'Son'
        },
        {
          name: 'Ryan Butcher',
          url: 'https://www.theboysapi.com/api/character/47',
          relationship: 'Grandson'
        }
      ],
      portrayed: ['Jensen Ackles'],
      first_seen: {
        name: 'Payback',
        url: 'https://www.theboysapi.com/api/episode/17'
      },
      last_seen: {
        name: 'The Instant White-Hot Wild',
        url: 'https://www.theboysapi.com/api/episode/24'
      },
      season: [3],
      image: 'https://theboysapi.s3.us-west-2.amazonaws.com/character_20.jpg',
      url: 'https://www.theboysapi.com/api/character/20'
    }
  ]
};

export const baseUrl = 'https://www.theboysapi.com/api';

export const totalCharacters = 73;

export const getRandomInteger = (): number[] => {
  const arr = [];
  while (arr.length < 8) {
    var r = Math.floor(Math.random() * totalCharacters) + 1;
    if (arr.indexOf(r) === -1 && r !== 57) arr.push(r);
  }
  return arr;
};
