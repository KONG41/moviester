# Moviester API Document

## Description

This API endpoint use for all request in Moviester with this api include request, response and also with parameter and description of earch endpoint.

## Request

- Description : This is home API it's dynamic content we can add it more from backend, if feature_id is empty not show `see more` button.
- Parameter
  | Feature | Description |
  |----------|----------|
  | Trending Movie | Get all trending movies |
  | Latest Movie | Get all latest movies |
  | Coming Soon | Get all up comming movies |
- Method: GET
- Endpoint: `/home`
- Headers:
  - Content-Type: application/json
- Body:

  ```json
  {
    "data": [
      {
        "feature_id": "",
        "movies": [
          {
            "cover": "https://img.fmovies.ps/xxrz/250x400/306/91/67/91670229ac9f3b6fb4d242d6b5511644/91670229ac9f3b6fb4d242d6b5511644.jpg",
            "duration": "150m",
            "imdb": "N/A",
            "link": "/movie/watch-guardians-of-the-galaxy-vol-3-online-12459",
            "quality": "HD",
            "title": "Guardians of the Galaxy Volume 3",
            "type": "Movie",
            "year": "2023"
          }
        ],
        "title": "Trending Movie"
      },
      {
        "feature_id": "",
        "movies": [
          {
            "cover": "https://img.fmovies.ps/xxrz/250x400/306/5a/3f/5a3ff2296adc9951741e2039319742c0/5a3ff2296adc9951741e2039319742c0.jpg",
            "duration": "90m",
            "imdb": "N/A",
            "link": "/movie/watch-undercover-wedding-crashers-online-99241",
            "quality": "HD",
            "title": "Undercover Wedding Crashers",
            "type": "Movie",
            "year": "2021"
          }
        ],
        "title": "Latest Movie"
      },

      {
        "feature_id": "",
        "movies": [
          {
            "cover": "https://img.fmovies.ps/xxrz/250x400/306/7c/b5/7cb5d526f8a37250fe77bd728099ad10/7cb5d526f8a37250fe77bd728099ad10.jpg",
            "duration": "N/A",
            "imdb": "N/A",
            "link": "/movie/watch-the-unofficial-science-of-home-alone-online-91690",
            "quality": "HD",
            "title": "The Unofficial Science Of Home Alone",
            "type": "Movie",
            "year": "2022"
          }
        ],
        "title": "Coming Soon"
      }
    ]
  }
  ```

---

- Description : Insert movie into database, to get this json body we can search in Search API and copy content into this API it will insert movie content, Video Streaming, subtitle.
- Method: POST
- Endpoint: `/movies`
- Headers:
  - Content-Type: application/json
- Body:

  ```json
  {
    "data": {
      "currentPage": 1,
      "movies": [
        {
          "cover": "https://img.fmovies.ps/xxrz/250x400/306/1f/39/1f396fec0b9105f08fb9091eba3b6818/1f396fec0b9105f08fb9091eba3b6818.jpg",
          "duration": "N/A",
          "imdb": "N/A",
          "link": "/tv/watch-my-first-first-love-online-60675",
          "quality": "HD",
          "title": "My First First Love",
          "type": "TV",
          "year": "SS 2"
        }
      ],
      "pages": 41,
      "type": "search"
    },
    "success": true
  }
  ```

---

- Endpoint: `/search`
- Method: POST
- Description : Search movies
- Headers:
- Content-Type: application/json
- Parameter
  | Name | Type | Description |
  |----------|----------|----------|
  | query | string | keyword to search (free text) |
  | page | int | To use for pagination compare with total page and increase by 1 |
- Body:
  ```json
  {
    "cover": "https://img.fmovies.ps/xxrz/250x400/306/75/26/75264d7e20089d393831747cb8f81fe1/75264d7e20089d393831747cb8f81fe1.jpg",
    "duration": "96m",
    "imdb": "N/A",
    "link": "/movie/watch-first-love-online-82885",
    "quality": "HD",
    "title": "First Love",
    "type": "Movie",
    "year": "2022"
  }
  ```

---

- Endpoint: `/movies`
- Method: POST
- Description : Get all movies
- Headers:
- Content-Type: application/json
- Parameter
  | Name | Type | Description |
  |----------|----------|----------|
  | page | int | To use for pagination compare with total page and increase by 1 |

- Body:

  ```json
  {
    "data": {
      "currentPage": 1,
      "movies": [
        {
          "cover": "https://img.fmovies.ps/xxrz/250x400/306/e3/73/e373865bed6a6345941d8a6ef827563f/e373865bed6a6345941d8a6ef827563f.jpg",
          "duration": "118m",
          "imdb": "N/A",
          "link": "/movie/watch-the-last-voyage-of-the-demeter-online-99376",
          "quality": "CAM",
          "title": "The Last Voyage of the Demeter",
          "type": "Movie",
          "year": "2023"
        }
      ],
      "pages": 1242,
      "type": "movie"
    },
    "success": true
  }
  ```

---

- Endpoint: `/tv-shows`
- Method: POST
- Description : Get all TV-Shows
- Headers:
- Content-Type: application/json
- Parameter
  | Name | Type | Description |
  |----------|----------|----------|
  | page | int | To use for pagination compare with total page and increase by 1 |

- Body:

  ```json
  {
    "data": {
      "currentPage": 1,
      "movies": [
        {
          "cover": "https://img.fmovies.ps/xxrz/250x400/306/9b/60/9b60b47c3d94f948f34ef87035c3ec23/9b60b47c3d94f948f34ef87035c3ec23.jpg",
          "duration": "N/A",
          "imdb": "N/A",
          "link": "/tv/watch-the-winter-king-online-99481",
          "quality": "HD",
          "title": "The Winter King",
          "type": "TV",
          "year": "SS 1"
        }
      ],
      "pages": 1242,
      "type": "movie"
    },
    "success": true
  }
  ```

---

- Endpoint: `/top-imdb`
- Method: POST
- Description : Get all Top-IMDB
- Headers:
- Content-Type: application/json
- Parameter
  | Name | Type | Description |
  |----------|----------|----------|
  | page | int | To use for pagination compare with total page and increase by 1 |

- Body:

  ```json
  {
    "data": {
      "currentPage": 1,
      "movies": [
        {
          "cover": "https://img.fmovies.ps/xxrz/250x400/306/c6/7d/c67d86ebbe68f9adbac3e564416f5e29/c67d86ebbe68f9adbac3e564416f5e29.jpg",
          "duration": "N/A",
          "imdb": "N/A",
          "link": "/tv/watch-bluey-online-63355",
          "quality": "HD",
          "title": "Bluey",
          "type": "TV",
          "year": "SS 3"
        }
      ],
      "pages": 1242,
      "type": "movie"
    },
    "success": true
  }
  ```

---

- Endpoint: `/movie_detail`
- Method: POST
- Description : View Movie detail
- Headers:
- Content-Type: application/json
- Parameter
  | Name | Type | Description |
  |----------|----------|----------|
  | id | int | This id are get from Link in movie item |
- Example : `movie_detail?id=/movie/watch-i-am-rage-online-98800`
- Body:

  ```json
  {
    "data": {
      "casts": [
        {
          "href": "/cast/hannaj-bang-bendz",
          "name": "Hannaj Bang Bendz",
          "title": "Hannaj Bang Bendz"
        }
      ],
      "countries": [
        {
          "href": "/country/us",
          "name": "United States of America",
          "title": "United States of America"
        }
      ],
      "des": "Erin’s tranquil countryside getaway becomes a living nightmare when a sinister blood cult abducts her.",
      "director": "",
      "genes": [
        {
          "href": "/genre/action",
          "name": "Action",
          "title": "Action"
        }
      ],
      "imdb": "4.5",
      "imdb_id": "",
      "img_cover": "https://img.fmovies.ps/xxrz/1200x600/306/bb/df/bbdff26dbcf4eef83facf24061ee685e/bbdff26dbcf4eef83facf24061ee685e.jpg",
      "more-moive": [
        {
          "feature": "People also watch",
          "feature_id": null,
          "movie-id": "/movie/watch-i-am-rage-online-98800",
          "movies": [
            {
              "cover": "https://img.fmovies.ps/xxrz/250x400/306/aa/3c/aa3c4a08f50048409493813e2a6e88ce/aa3c4a08f50048409493813e2a6e88ce.jpg",
              "duration": "99m",
              "imdb": "",
              "link": "/movie/watch-mother-may-i-online-98548",
              "quality": "HD",
              "title": "Mother, May I?",
              "type": "Movie",
              "year": "2023"
            }
          ]
        }
      ],
      "original_link": "",
      "productions": [],
      "released_date": "2023",
      "seasions": [],
      "servers": [],
      "stream": {
        "source": {
          "file": "https://xis.fifteennet.com/_v10/526214305b78289a93ff238c9684ff9db5fb0d5fc09a5e2838d580bf3491c2acb7b02bba57dd8b68a5b26108816dfc8cb89c111979e1374c6dd73978a06ac856eefd0cbbc182a75bcb4a784a8119fe7c5aebeed4f107744c4e0ed611788a6826ddcafeda349d674aef7f4ac785a4f8e9d7528937398b4ca42698e3bcd39d1b92698db5e528c06609ff601226bb838632/playlist.m3u8",
          "resolution": [
            {
              "resolution": "1080",
              "streamURL": "https://xis.fifteennet.com/_v10/526214305b78289a93ff238c9684ff9db5fb0d5fc09a5e2838d580bf3491c2acb7b02bba57dd8b68a5b26108816dfc8cb89c111979e1374c6dd73978a06ac856eefd0cbbc182a75bcb4a784a8119fe7c5aebeed4f107744c4e0ed611788a6826ddcafeda349d674aef7f4ac785a4f8e9d7528937398b4ca42698e3bcd39d1b92698db5e528c06609ff601226bb838632/1080/index.m3u8"
            },
            {
              "resolution": "720",
              "streamURL": "https://xis.fifteennet.com/_v10/526214305b78289a93ff238c9684ff9db5fb0d5fc09a5e2838d580bf3491c2acb7b02bba57dd8b68a5b26108816dfc8cb89c111979e1374c6dd73978a06ac856eefd0cbbc182a75bcb4a784a8119fe7c5aebeed4f107744c4e0ed611788a6826ddcafeda349d674aef7f4ac785a4f8e9d7528937398b4ca42698e3bcd39d1b92698db5e528c06609ff601226bb838632/720/index.m3u8"
            },
            {
              "resolution": "360",
              "streamURL": "https://xis.fifteennet.com/_v10/526214305b78289a93ff238c9684ff9db5fb0d5fc09a5e2838d580bf3491c2acb7b02bba57dd8b68a5b26108816dfc8cb89c111979e1374c6dd73978a06ac856eefd0cbbc182a75bcb4a784a8119fe7c5aebeed4f107744c4e0ed611788a6826ddcafeda349d674aef7f4ac785a4f8e9d7528937398b4ca42698e3bcd39d1b92698db5e528c06609ff601226bb838632/360/index.m3u8"
            }
          ],
          "type": "hls"
        },
        "subtitle": []
      },
      "title": "I Am Rage",
      "trailler_link": "https://www.youtube.com/embed/Ui6UclS2LMo",
      "video_url": "",
      "you_may_like": []
    },
    "isCanDisplay": true,
    "success": true
  }
  ```

---

- Endpoint: `/movie_detail`
- Method: POST
- Description : View TV detail, for getting TV-show Detail are the same as Movie but it will also include with `Seasions` and `Eposide`, by default it will take seasion 1 and epsoid 1.
- Headers:
- Content-Type: application/json
- Parameter
  | Name | Type | Description |
  |----------|----------|----------|
  | id | int | This id are get from Link in movie item |
  | seasion_id | int | Movie seasion id |
  | episode_id | int | Episode id |
- Example : `/movie_detail?id=/tv/watch-the-winter-king-online-99481&seasion_id=77791&episode_id=1369879`
- Body:

```json
{
  "data": {
    "casts": [
      {
        "href": "/cast/iain-de-caestecker",
        "name": "Iain De Caestecker",
        "title": "Iain De Caestecker"
      }
    ],
    "countries": [
      {
        "href": "/country/gb",
        "name": "United Kingdom",
        "title": "United Kingdom"
      }
    ],
    "des": "In the fifth century, long before Britain was united, in a brutal land of warring factions and tribes where lives were often fleeting, Arthur Pendragon evolves from outcast to legendary warrior and leader.",
    "director": "",
    "genes": [
      {
        "href": "/genre/drama",
        "name": "Drama",
        "title": "Drama"
      }
    ],
    "imdb": "5",
    "imdb_id": "",
    "img_cover": "https://img.fmovies.ps/xxrz/1200x600/306/20/a9/20a9b338c35750620600af86953c4279/20a9b338c35750620600af86953c4279.jpg",
    "more-moive": [
      {
        "feature": "People also watch",
        "feature_id": null,
        "movie-id": "/tv/watch-the-winter-king-online-99481",
        "movies": [
          {
            "cover": "https://img.fmovies.ps/xxrz/250x400/306/c9/df/c9df73f38939d78c7930ea537d5a5a86/c9df73f38939d78c7930ea537d5a5a86.jpg",
            "duration": "",
            "imdb": "",
            "link": "/tv/watch-the-love-experiment-online-99307",
            "quality": "HD",
            "title": "The Love Experiment",
            "type": "TV",
            "year": "SS 1"
          },
          {
            "cover": "https://img.fmovies.ps/xxrz/250x400/306/57/93/57936462b4264c878bcefd263a54bffe/57936462b4264c878bcefd263a54bffe.jpg",
            "duration": "92m",
            "imdb": "",
            "link": "/movie/watch-the-engineer-online-99454",
            "quality": "HD",
            "title": "The Engineer",
            "type": "Movie",
            "year": "2023"
          }
        ]
      }
    ],
    "original_link": "",
    "productions": [
      {
        "href": "/production/bad-wolf",
        "name": "Bad Wolf",
        "title": "Bad Wolf"
      }
    ],
    "released_date": "2023",
    "seasions": [
      {
        "episodes": [
          {
            "episode_id": "1369879",
            "episode_name": "Eps 1: Episode 01"
          }
        ],
        "seasion_id": "77791",
        "seasion_name": "Season 1"
      }
    ],
    "servers": [],
    "stream": {
      "source": {
        "file": "https://neves.jeffycontent.com/_v10/584f1385fefdaa4b38761888009146474b30906b9752b8f124e9e55adb27532dc427e28c8735d73b0515ca6e38f304f1407d8a7a43204dbf9a6ac63d5ed5cb869a46fa41d86f6072879ef4a37c0ab10189b19d8efa23e01bad974471c7109e02e7a93fcd6ff95ec5722ee60d4222d5efa4233ca15c4e9b3f2ccfddf03268b987/playlist.m3u8",
        "resolution": [
          {
            "resolution": "720",
            "streamURL": "https://neves.jeffycontent.com/_v10/584f1385fefdaa4b38761888009146474b30906b9752b8f124e9e55adb27532dc427e28c8735d73b0515ca6e38f304f1407d8a7a43204dbf9a6ac63d5ed5cb869a46fa41d86f6072879ef4a37c0ab10189b19d8efa23e01bad974471c7109e02e7a93fcd6ff95ec5722ee60d4222d5efa4233ca15c4e9b3f2ccfddf03268b987/720/index.m3u8"
          },
          {
            "resolution": "360",
            "streamURL": "https://neves.jeffycontent.com/_v10/584f1385fefdaa4b38761888009146474b30906b9752b8f124e9e55adb27532dc427e28c8735d73b0515ca6e38f304f1407d8a7a43204dbf9a6ac63d5ed5cb869a46fa41d86f6072879ef4a37c0ab10189b19d8efa23e01bad974471c7109e02e7a93fcd6ff95ec5722ee60d4222d5efa4233ca15c4e9b3f2ccfddf03268b987/360/index.m3u8"
          }
        ],
        "type": "hls"
      },
      "subtitle": [
        {
          "href": "https://cc.2cdns.com/9f/50/9f502679f5964d80829f1f4d8100f36e/eng-2.vtt",
          "id": null,
          "idDefault": true,
          "kind": "caption",
          "label": "English - English (SDH)",
          "movieLink": "/tv/watch-the-winter-king-online-99481"
        }
      ]
    },
    "title": "The Winter King",
    "trailler_link": "https://www.youtube.com/embed/oZLAtg-yuPA",
    "video_url": "",
    "you_may_like": []
  },
  "isCanDisplay": true,
  "success": true
}
```

---

- Endpoint: `/slider`
- Method: POST
- Description : Get Movie slider in home page
- Headers:
- Content-Type: application/json

- Body:
  ```json
  {
    "data": {
      "currentPage": 1,
      "movies": [
        {
          "cover": "https://img.fmovies.ps/xxrz/250x400/306/e3/73/e373865bed6a6345941d8a6ef827563f/e373865bed6a6345941d8a6ef827563f.jpg",
          "duration": "118m",
          "imdb": "N/A",
          "link": "/movie/watch-the-last-voyage-of-the-demeter-online-99376",
          "quality": "CAM",
          "title": "The Last Voyage of the Demeter",
          "type": "Movie",
          "year": "2023"
        }
      ],
      "pages": 1242,
      "type": "movie"
    },
    "success": true
  }
  ```

---

- Endpoint: `/slider`
- Method: POST
- Description : Get Filter movie
- Headers:
- Content-Type: application/json

- Body:
  ```json
  {
    "data": {
      "country": [
        {
          "id": "country-11",
          "title": "Argentina",
          "value": "11"
        },
        {
          "id": "country-151",
          "title": "Australia",
          "value": "151"
        },
        {
          "id": "country-4",
          "title": "Austria",
          "value": "4"
        },
        {
          "id": "country-44",
          "title": "Belgium",
          "value": "44"
        },
        {
          "id": "country-190",
          "title": "Brazil",
          "value": "190"
        },
        {
          "id": "country-147",
          "title": "Canada",
          "value": "147"
        },
        {
          "id": "country-101",
          "title": "China",
          "value": "101"
        },
        {
          "id": "country-231",
          "title": "Czech Republic",
          "value": "231"
        },
        {
          "id": "country-222",
          "title": "Denmark",
          "value": "222"
        },
        {
          "id": "country-158",
          "title": "Finland",
          "value": "158"
        },
        {
          "id": "country-3",
          "title": "France",
          "value": "3"
        },
        {
          "id": "country-96",
          "title": "Germany",
          "value": "96"
        },
        {
          "id": "country-93",
          "title": "Hong Kong",
          "value": "93"
        },
        {
          "id": "country-72",
          "title": "Hungary",
          "value": "72"
        },
        {
          "id": "country-105",
          "title": "India",
          "value": "105"
        },
        {
          "id": "country-196",
          "title": "Ireland",
          "value": "196"
        },
        {
          "id": "country-24",
          "title": "Israel",
          "value": "24"
        },
        {
          "id": "country-205",
          "title": "Italy",
          "value": "205"
        },
        {
          "id": "country-173",
          "title": "Japan",
          "value": "173"
        },
        {
          "id": "country-91",
          "title": "Luxembourg",
          "value": "91"
        },
        {
          "id": "country-40",
          "title": "Mexico",
          "value": "40"
        },
        {
          "id": "country-172",
          "title": "Netherlands",
          "value": "172"
        },
        {
          "id": "country-122",
          "title": "New Zealand",
          "value": "122"
        },
        {
          "id": "country-219",
          "title": "Norway",
          "value": "219"
        },
        {
          "id": "country-23",
          "title": "Poland",
          "value": "23"
        },
        {
          "id": "country-170",
          "title": "Romania",
          "value": "170"
        },
        {
          "id": "country-109",
          "title": "Russia",
          "value": "109"
        },
        {
          "id": "country-200",
          "title": "South Africa",
          "value": "200"
        },
        {
          "id": "country-135",
          "title": "South Korea",
          "value": "135"
        },
        {
          "id": "country-62",
          "title": "Spain",
          "value": "62"
        },
        {
          "id": "country-114",
          "title": "Sweden",
          "value": "114"
        },
        {
          "id": "country-41",
          "title": "Switzerland",
          "value": "41"
        },
        {
          "id": "country-119",
          "title": "Taiwan",
          "value": "119"
        },
        {
          "id": "country-57",
          "title": "Thailand",
          "value": "57"
        },
        {
          "id": "country-180",
          "title": "United Kingdom",
          "value": "180"
        },
        {
          "id": "country-129",
          "title": "United States of America",
          "value": "129"
        }
      ],
      "genre": [
        {
          "id": "genre-10",
          "title": "Action",
          "value": "10"
        },
        {
          "id": "genre-24",
          "title": "Action & Adventure",
          "value": "24"
        },
        {
          "id": "genre-18",
          "title": "Adventure",
          "value": "18"
        },
        {
          "id": "genre-3",
          "title": "Animation",
          "value": "3"
        },
        {
          "id": "genre-37",
          "title": "Biography",
          "value": "37"
        },
        {
          "id": "genre-7",
          "title": "Comedy",
          "value": "7"
        },
        {
          "id": "genre-2",
          "title": "Crime",
          "value": "2"
        },
        {
          "id": "genre-11",
          "title": "Documentary",
          "value": "11"
        },
        {
          "id": "genre-4",
          "title": "Drama",
          "value": "4"
        },
        {
          "id": "genre-9",
          "title": "Family",
          "value": "9"
        },
        {
          "id": "genre-13",
          "title": "Fantasy",
          "value": "13"
        },
        {
          "id": "genre-19",
          "title": "History",
          "value": "19"
        },
        {
          "id": "genre-14",
          "title": "Horror",
          "value": "14"
        },
        {
          "id": "genre-27",
          "title": "Kids",
          "value": "27"
        },
        {
          "id": "genre-15",
          "title": "Music",
          "value": "15"
        },
        {
          "id": "genre-1",
          "title": "Mystery",
          "value": "1"
        },
        {
          "id": "genre-34",
          "title": "News",
          "value": "34"
        },
        {
          "id": "genre-22",
          "title": "Reality",
          "value": "22"
        },
        {
          "id": "genre-12",
          "title": "Romance",
          "value": "12"
        },
        {
          "id": "genre-31",
          "title": "Sci-Fi & Fantasy",
          "value": "31"
        },
        {
          "id": "genre-5",
          "title": "Science Fiction",
          "value": "5"
        },
        {
          "id": "genre-35",
          "title": "Soap",
          "value": "35"
        },
        {
          "id": "genre-29",
          "title": "Talk",
          "value": "29"
        },
        {
          "id": "genre-16",
          "title": "Thriller",
          "value": "16"
        },
        {
          "id": "genre-8",
          "title": "TV Movie",
          "value": "8"
        },
        {
          "id": "genre-17",
          "title": "War",
          "value": "17"
        },
        {
          "id": "genre-28",
          "title": "War & Politics",
          "value": "28"
        },
        {
          "id": "genre-6",
          "title": "Western",
          "value": "6"
        }
      ],
      "quality": ["All", "HD", "SD", "CAM"],
      "types": ["All", "Movies", "TV Shows"],
      "year": ["All", "2023", "2022", "2021", "2020", "2019", "Older"]
    },
    "success": true
  }
  ```

---

- Endpoint: `/filter`
- Method: POST
- Description : Get Filter movie, in this api we can filter by type or release year and also by genre.
- Headers:
- Content-Type: application/json
- Parameter
  | Name | Type | Description |
  |----------|----------|----------|
  | type | string | Type of movie |
  | quality | string | Type of quality |
  | release_year | string | Release year |
  | genre | string | Movie genre |
  | country | string | By country |
- Example : `filter?type=movie&quality=HD&release_year=all&genre=all&country=57`
- Body:

  ```json
  {
    "data": {
      "currentPage": 1,
      "movies": [
        {
          "cover": "https://img.fmovies.ps/xxrz/250x400/306/db/9e/db9e2c3966728a051855b3e3f0702d0e/db9e2c3966728a051855b3e3f0702d0e.jpg",
          "duration": "166m",
          "imdb": "N/A",
          "link": "/movie/watch-love-destiny-the-movie-online-91312",
          "quality": "HD",
          "title": "Love Destiny: The Movie",
          "type": "Movie",
          "year": "2022"
        }
      ],
      "pages": 4
    },
    "success": true
  }
  ```